# apps/web

Next.js (App Router) と Prisma を使った最小構成の Web アプリです。

## 前提

- Node.js 20 以上
- PostgreSQL（Supabase の Postgres を想定）

## セットアップ

```bash
cp .env.example .env
npm install
npm run prisma:generate
npm run dev
```

## 環境変数

`.env` に以下を設定してください。

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/DB_NAME?schema=public
```

- `DATABASE_URL`: Prisma が接続する Postgres 接続文字列

## 主なエンドポイント

- `GET /` -> `OK`
- `GET /api/health` -> `{ "status": "ok" }`

## Prisma

開発時にマイグレーションを作る場合:

```bash
npm run prisma:migrate:dev -- --name init
```

## Vercel デプロイ時の設定

Vercel のプロジェクト設定で、`apps/web` をルートディレクトリとして指定し、環境変数に `DATABASE_URL` を登録してください。

- Framework Preset: `Next.js`
- Root Directory: `inspection-prototype/apps/web`
- Environment Variables: `DATABASE_URL`
