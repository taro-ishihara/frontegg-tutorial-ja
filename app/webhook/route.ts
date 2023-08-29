import { NextResponse } from 'next/server'
import { KVNamespace } from '@cloudflare/workers-types'

export const runtime = 'edge'

export async function GET(request: Request) {
  // the type `KVNamespace` comes from the @cloudflare/workers-types package
  const { POSTERS } = process.env as unknown as {
    POSTERS: KVNamespace
  }
  const platform = await POSTERS.get('platform', 'text')
  return NextResponse.json({ platform: platform })
}
