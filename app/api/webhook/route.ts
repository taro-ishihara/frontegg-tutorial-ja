import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET() {
  await fetch('https://zenn.dev/microcms/articles/1b4331eca6e512')
  return NextResponse.json({ res: true })
}
