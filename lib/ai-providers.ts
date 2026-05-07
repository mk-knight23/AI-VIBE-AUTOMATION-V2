// ai-providers.ts — Unified AI provider abstraction for workflow nodes
// AI-VIBE-AUTOMATION-V2 | Kazi Musharraf

import Anthropic from '@ai-sdk/anthropic'
import OpenAI from '@ai-sdk/openai'

export interface AIProvider {
  complete(params: { prompt: string; system?: string; model: string }): Promise<string>
}

export function createAIProvider(provider: string): AIProvider {
  switch (provider) {
    case 'anthropic':
      return {
        async complete({ prompt, system, model }) {
          const client = new Anthropic()
          const msg = await client.messages.create({
            model: model ?? 'claude-sonnet-4-6',
            max_tokens: 4096,
            system: system ?? 'You are a helpful automation assistant.',
            messages: [{ role: 'user', content: prompt }]
          })
          return (msg.content[0] as { text: string }).text
        }
      }

    case 'openai':
      return {
        async complete({ prompt, system, model }) {
          const client = new OpenAI()
          const res = await client.chat.completions.create({
            model: model ?? 'gpt-4o',
            messages: [
              ...(system ? [{ role: 'system' as const, content: system }] : []),
              { role: 'user', content: prompt }
            ]
          })
          return res.choices[0]?.message?.content ?? ''
        }
      }

    default:
      throw new Error(`Unknown AI provider: ${provider}`)
  }
}
