// workflow-executor.ts — Core execution engine for AI-VIBE-AUTOMATION-V2
// Kazi Musharraf | mkazi.live | v2.0

import type { Prisma } from '@prisma/client'

export type ExecutionStatus = 'pending' | 'running' | 'success' | 'failed' | 'cancelled'

export interface NodeExecutionResult {
  nodeId: string
  status: ExecutionStatus
  output: unknown
  error?: string
  startedAt: Date
  finishedAt: Date
  durationMs: number
}

export interface ExecutionContext {
  workflowId: string
  executionId: string
  variables: Record<string, unknown>
  nodeResults: Record<string, NodeExecutionResult>
}

// Topological sort for DAG execution order
export function topologicalSort(
  nodes: Array<{ id: string }>,
  edges: Array<{ source: string; target: string }>
): string[] {
  const inDegree = new Map<string, number>()
  const adjacency = new Map<string, string[]>()

  nodes.forEach(n => { inDegree.set(n.id, 0); adjacency.set(n.id, []) })
  edges.forEach(e => {
    inDegree.set(e.target, (inDegree.get(e.target) ?? 0) + 1)
    adjacency.get(e.source)?.push(e.target)
  })

  const queue = nodes.filter(n => (inDegree.get(n.id) ?? 0) === 0).map(n => n.id)
  const result: string[] = []

  while (queue.length > 0) {
    const current = queue.shift()!
    result.push(current)
    for (const neighbor of adjacency.get(current) ?? []) {
      const deg = (inDegree.get(neighbor) ?? 1) - 1
      inDegree.set(neighbor, deg)
      if (deg === 0) queue.push(neighbor)
    }
  }

  return result
}

// Template variable interpolation: {{variable.path}}
export function interpolate(template: string, context: ExecutionContext): string {
  return template.replace(/\{\{([^}]+)\}\}/g, (_, path) => {
    const parts = path.trim().split('.')
    let value: unknown = context.variables
    for (const part of parts) {
      value = (value as Record<string, unknown>)?.[part]
    }
    return value !== undefined ? String(value) : `{{${path}}}`
  })
}

// Execute a single workflow node
export async function executeNode(
  nodeType: string,
  config: Record<string, unknown>,
  context: ExecutionContext
): Promise<unknown> {
  const startedAt = new Date()

  switch (nodeType) {
    case 'action.ai': {
      const { createAIProvider } = await import('./ai-providers')
      const provider = createAIProvider(config.provider as string)
      const prompt = interpolate(config.prompt as string, context)
      const system = config.system ? interpolate(config.system as string, context) : undefined
      return await provider.complete({ prompt, system, model: config.model as string })
    }

    case 'action.http': {
      const url = interpolate(config.url as string, context)
      const headers = config.headers ? JSON.parse(interpolate(config.headers as string, context)) : {}
      const body = config.body ? interpolate(config.body as string, context) : undefined
      const res = await fetch(url, { method: (config.method as string) ?? 'GET', headers, body })
      return { status: res.status, data: await res.json().catch(() => null) }
    }

    case 'logic.delay': {
      const ms = (config.duration as number) * 1000
      await new Promise(resolve => setTimeout(resolve, Math.min(ms, 30000))) // max 30s
      return { delayed: config.duration }
    }

    default:
      throw new Error(`Unknown node type: ${nodeType}`)
  }
}
