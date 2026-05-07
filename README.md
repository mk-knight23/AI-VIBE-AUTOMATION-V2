<div align="center">

# 🔮 AI-VIBE-AUTOMATION-V2

### **Type-Safe Scalable Workflow Automation Engine**
*Next.js 15 · tRPC · Better Auth · Polar.sh · Prisma · React Flow*

[![Next.js](https://img.shields.io/badge/Next.js-15.0+-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![tRPC](https://img.shields.io/badge/tRPC-11.0+-2596BE?style=for-the-badge)](https://trpc.io)
[![Better Auth](https://img.shields.io/badge/Better_Auth-Latest-6C47FF?style=for-the-badge)](https://better-auth.com)
[![Polar](https://img.shields.io/badge/Polar.sh-Billing-0EA5E9?style=for-the-badge)](https://polar.sh)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

**[🚀 Live Demo](https://ai-vibe-automation-v2.vercel.app)** · **[📖 Docs](#documentation)** · **[⭐ Star](https://github.com/mk-knight23/AI-VIBE-AUTOMATION-V2)**

</div>

---

## 🎯 Enterprise-Grade Workflow Automation

AI-VIBE-AUTOMATION-V2 is the **production-hardened** evolution of V1 — a fully type-safe workflow automation engine inspired by n8n, built with **tRPC for end-to-end type safety**, **Better Auth for flexible authentication**, and **Polar.sh for subscription billing**. Scale from side project to SaaS.

> **Pillar 4, Iteration 2** — V1 is for prototyping. V2 is for production.

---

## 🆚 V2 vs V1 — What's New

| Feature | V1 | V2 |
|---------|----|----|
| **Type Safety** | Partial | End-to-end (tRPC) |
| **Auth** | Clerk | Better Auth (self-hosted) |
| **Billing** | ❌ | Polar.sh subscriptions |
| **Error Handling** | Basic | Circuit breakers + dead letter queue |
| **Execution Engine** | Inngest | Custom + Inngest hybrid |
| **Node Types** | 10 | 25+ |
| **Team Support** | ❌ | ✅ Organizations, roles |
| **Scheduling** | Cron only | Cron + interval + manual |
| **Observability** | Basic logs | Full execution graph |
| **AI Models** | 3 providers | Claude, GPT, Gemini, Groq, local |

---

## ✨ Architecture — Type Safety First

```
├── app/                          # Next.js App Router
│   ├── api/trpc/[trpc]/route.ts  # tRPC HTTP handler
│   ├── api/auth/[...auth]/route.ts # Better Auth endpoints
│   ├── api/inngest/route.ts      # Background job handler
│   └── (dashboard)/             # Protected dashboard routes
├── components/
│   ├── react-flow/
│   │   ├── base-node.tsx         # Reusable node base class
│   │   ├── base-handle.tsx       # Typed input/output handles
│   │   ├── node-status-indicator.tsx # Live execution status
│   │   └── placeholder-node.tsx  # Drag-from-palette preview
│   └── ui/
│       ├── sidebar.tsx           # Collapsible workspace sidebar
│       ├── animated-theme-toggler.tsx # Smooth dark/light toggle
│       └── light-rays.tsx        # Decorative background effect
├── server/
│   ├── trpc/
│   │   ├── router.ts             # Root tRPC router
│   │   ├── routers/
│   │   │   ├── workflow.ts       # Workflow CRUD procedures
│   │   │   ├── execution.ts      # Execution management
│   │   │   └── integration.ts    # Third-party connectors
│   │   └── middleware/
│   │       ├── auth.ts           # Auth middleware
│   │       └── rateLimit.ts      # Per-user rate limiting
│   └── auth/
│       └── config.ts             # Better Auth config
└── prisma/
    └── schema.prisma             # Full workflow schema
```

---

## 🔒 Authentication with Better Auth

Better Auth gives full control over the auth stack — email, OAuth, magic links, TOTP:

```typescript
// server/auth/config.ts
import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { polarPlugin } from '@polar-sh/better-auth'

export const auth = betterAuth({
  database: prismaAdapter(db, { provider: 'postgresql' }),
  emailAndPassword: { enabled: true },
  socialProviders: {
    github: { clientId: env.GITHUB_CLIENT_ID, clientSecret: env.GITHUB_CLIENT_SECRET },
    google: { clientId: env.GOOGLE_CLIENT_ID, clientSecret: env.GOOGLE_CLIENT_SECRET },
  },
  plugins: [
    polarPlugin({
      client: polarClient,
      createCustomerOnSignUp: true,
      webhookSecret: env.POLAR_WEBHOOK_SECRET,
    })
  ]
})
```

---

## 💰 Polar.sh Billing Integration

Built-in subscription tiers out of the box:

```typescript
// lib/polar.ts
export const PLANS = {
  free: { workflows: 3, executions_per_month: 100, nodes: 10 },
  pro: { workflows: 50, executions_per_month: 10000, nodes: 50, price: 29 },
  team: { workflows: -1, executions_per_month: -1, nodes: -1, price: 99 },
}
```

---

## 🔄 tRPC Workflow Operations

```typescript
// server/trpc/routers/workflow.ts — Fully typed end-to-end
export const workflowRouter = router({
  list: protectedProcedure
    .query(({ ctx }) => db.workflow.findMany({ where: { userId: ctx.user.id } })),

  create: protectedProcedure
    .input(z.object({ name: z.string(), description: z.string().optional() }))
    .mutation(({ input, ctx }) => db.workflow.create({ data: { ...input, userId: ctx.user.id } })),

  execute: protectedProcedure
    .input(z.object({ workflowId: z.string(), triggerData: z.record(z.unknown()) }))
    .mutation(async ({ input }) => {
      const execution = await db.workflowExecution.create({ data: { workflowId: input.workflowId, status: 'running' } })
      await inngest.send({ name: 'workflow.execute', data: { executionId: execution.id, ...input } })
      return execution
    }),
})
```

---

## 🗄️ Database Schema

```prisma
model Workflow {
  id          String              @id @default(cuid())
  name        String
  userId      String
  isActive    Boolean             @default(false)
  nodes       WorkflowNode[]
  edges       WorkflowEdge[]
  executions  WorkflowExecution[]
  triggers    WorkflowTrigger[]
  createdAt   DateTime            @default(now())
  updatedAt   DateTime            @updatedAt
  user        User                @relation(fields: [userId], references: [id])
}

model WorkflowExecution {
  id         String   @id @default(cuid())
  workflowId String
  status     ExecutionStatus
  startedAt  DateTime @default(now())
  finishedAt DateTime?
  logs       ExecutionLog[]
  workflow   Workflow @relation(fields: [workflowId], references: [id])
}

enum ExecutionStatus { pending running success failed cancelled }
```

---

## 🚀 Quick Start

```bash
git clone https://github.com/mk-knight23/AI-VIBE-AUTOMATION-V2.git
cd AI-VIBE-AUTOMATION-V2
npm install
cp .env.example .env.local
npx prisma migrate dev
npm run dev  # → http://localhost:3000
```

---

<div align="center">

**Built with 🔮 by [Kazi Musharraf](https://mkazi.live)**

*Part of the [AI-VIBE Ecosystem](https://github.com/mk-knight23/AI-VIBE-ECOSYSTEM) · Built in India 🇮🇳*

</div>
