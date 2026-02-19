# 🔄 AI-VIBE-AUTOMATION-V2 | N8N Clone

<p align="center">
  <img src="https://img.shields.io/badge/AI--VIBE-AUTOMATION--V2-black?style=for-the-badge&logo=next.js&logoColor=white" alt="AI Vibe Project">
  <br>
  <b>A modern, full-stack workflow automation platform built with Next.js, inspired by n8n.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.0+-black.svg?logo=next.js&logoColor=white" alt="Next.js 15">
  <img src="https://img.shields.io/badge/React-19.0+-61DAFB.svg?logo=react&logoColor=white" alt="React 19">
  <img src="https://img.shields.io/badge/TypeScript-5.0+-blue?logo=typescript&logoColor=white" alt="TypeScript 5">
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License: MIT">
</p>

---

## 🗺️ Quick Navigation

- [🚀 Technology Stack Overview](#-technology-stack-overview)
- [🏗️ Architecture Overview](#%EF%B8%8F-architecture-overview)
- [🔧 Key Features Implementation](#-key-features-implementation)
- [🚀 Getting Started](#-getting-started)
- [📚 Learn More](#-learn-more)
- [🎯 Project Goals](#-project-goals)

---

## 🛠️ Engineered With

<p align="left">
  <a href="https://nextjs.org"><img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js"></a>
  <a href="https://react.dev"><img src="https://skillicons.dev/icons?i=react" alt="React"></a>
  <a href="https://trpc.io"><img src="https://img.shields.io/badge/API-tRPC-2596be" alt="tRPC"></a>
  <a href="https://prisma.io"><img src="https://skillicons.dev/icons?i=prisma" alt="Prisma"></a>
  <a href="https://postgresql.org"><img src="https://skillicons.dev/icons?i=postgres" alt="PostgreSQL"></a>
  <a href="https://tailwindcss.com"><img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS"></a>
</p>

---

A modern, full-stack workflow automation platform built with Next.js, inspired by n8n. This application allows users to create, manage, and execute automated workflows by connecting various services and APIs together.

## 🚀 Technology Stack Overview

### Core Framework & Runtime
- **Next.js 15** - React framework using the App Router for server-side rendering, static generation, and API routes
- **React 19** - UI library for building interactive user interfaces
- **TypeScript** - Provides type safety and enhanced developer experience throughout the application

### API Layer & Data Fetching
- **tRPC** - Type-safe API layer that enables seamless communication between frontend and backend with full type safety
  - Used for creating strongly-typed API endpoints without code generation
  - Integrates with React Query for efficient data fetching and caching
  - Provides authentication middleware for protected routes
- **TanStack React Query** - Handles server state management, caching, and synchronization
  - Optimizes data fetching and reduces unnecessary API calls
  - Provides loading states and error handling

### Database & ORM
- **Prisma** - Modern database ORM for type-safe database access
  - Generates type-safe database client
  - Handles database migrations and schema management
- **PostgreSQL** - Robust relational database for storing user data, workflows, and execution logs

### Authentication & Security
- **Better Auth** - Modern authentication system handling multiple providers
  - Manages user sessions, account linking, and verification flows
  - Provides secure session management and token handling

### UI/UX & Styling
- **TailwindCSS** - Utility-first CSS framework for rapid UI development
- **Radix UI** - Accessible, unstyled UI components
- **Lucide React** - Beautiful icon library for consistent iconography
- **Next Themes** - Theme management for dark/light mode support

### Forms & Validation
- **React Hook Form** - Performant form handling with minimal re-renders
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Integration between React Hook Form and Zod

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS post-processing for TailwindCSS
- **Turbo** - Next.js bundler for faster development builds

---

## 🏗️ Architecture Overview

<details>
<summary>Show Full Architecture (Frontend, API, DB, Auth)</summary>

### Frontend Architecture
The application uses Next.js App Router with a component-based architecture:
- **Server Components** - Handle initial page loads and SEO
- **Client Components** - Manage interactive UI elements
- **Layout System** - Consistent navigation and theming across routes

### API Architecture
tRPC provides a unified API layer:

```typescript
// Example tRPC router structure
const appRouter = createTRPCRouter({
  workflows: createTRPCRouter({
    list: protectedProcedure.query(async ({ ctx }) => {
      return await prisma.workflow.findMany({
        where: { userId: ctx.auth.user.id }
      });
    }),
    create: protectedProcedure
      .input(workflowSchema)
      .mutation(async ({ ctx, input }) => {
        return await prisma.workflow.create({
          data: { ...input, userId: ctx.auth.user.id }
        });
      })
  })
});
```

### Database Architecture
Prisma manages the database schema and provides type-safe queries:

```prisma
model Workflow {
  id          String   @id @default(cuid())
  name        String
  description String?
  nodes       Json     // Store workflow nodes as JSON
  connections Json     // Store node connections
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

### Authentication Flow
Better Auth handles the complete authentication lifecycle:
1. **User Registration/Login** - Multiple provider support
2. **Session Management** - Secure token-based sessions
3. **Route Protection** - Middleware for protected pages
4. **Account Linking** - Social login integration
</details>

---

## 🔧 Key Features Implementation

<details>
<summary>Feature Breakdown & Optimizations</summary>

### Workflow Engine
- **Node-based Interface** - Visual workflow builder
- **Service Integration** - REST API, webhook, and database connectors
- **Execution Engine** - Asynchronous workflow processing
- **Real-time Updates** - Live execution status and logging

### Type Safety Throughout
- **End-to-end Types** - tRPC ensures API and frontend share types
- **Database Safety** - Prisma generates types from schema
- **Form Validation** - Zod schemas validate all user inputs

### Performance Optimizations
- **Server Components** - Reduce client-side JavaScript bundle
- **React Query Caching** - Minimize redundant API calls
- **Database Optimization** - Efficient queries with Prisma
- **Image Optimization** - Next.js automatic image optimization
</details>

---

## 🚀 Getting Started

<details>
<summary>Installation Guide</summary>

1. **Environment Setup**
   ```bash
   cp .env.example .env.local
   # Configure your database URL and auth secrets
   ```

2. **Database Setup**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```
</details>

---

## 🚀 Call to Action

- **Star this repo** if you find it useful!
- **Follow for updates** on the AI-VIBE Ecosystem.
- **Contribute** by opening issues or PRs.

---

## 📚 Learn More

<details>
<summary>Documentation Links</summary>

- [Next.js Documentation](https://nextjs.org/docs)
- [tRPC Documentation](https://trpc.io/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
</details>

---

## 🎯 Project Goals

This n8n clone aims to provide:
- **Visual Workflow Builder** - Drag-and-drop interface for creating automations
- **Extensive Integrations** - Support for popular services and APIs
- **Scalable Architecture** - Handle complex workflows and high loads
- **Developer-Friendly** - Full TypeScript support and excellent DX
- **Self-Hostable** - Easy deployment and maintenance

---

## 🤝 Contributing & License

Contributions are welcome! This project serves as both a functional workflow automation platform and a learning resource for modern web development practices.

MIT License - see [LICENSE](LICENSE) for details.

---

<p align="center">
  <i>Built with ❤️ using Next.js, Prisma, and React Flow</i>
</p>

