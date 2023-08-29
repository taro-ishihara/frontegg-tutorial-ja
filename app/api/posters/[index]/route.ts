import { KVNamespace } from '@cloudflare/workers-types'
import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export const runtime = 'edge'

export async function POST(
  request: Request,
  { params }: { params: { index: string; owner: string } },
) {
  const index = params.index
  const { owner } = await request.json()
  const { POSTERS } = process.env as unknown as {
    POSTERS: KVNamespace
  }
  Promise.all([POSTERS.put(owner, index), POSTERS.put(index, owner)])
  revalidatePath('/')
  return NextResponse.json({ message: 'Created' })
}
