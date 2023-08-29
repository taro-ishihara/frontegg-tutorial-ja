'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import { useState, useEffect, useTransition } from 'react'

export function PosterCard(props: {
  index: string
  title: string
  owner: string
  used: boolean
}) {
  const [used, setUsed] = useState(false)
  const [isPending, startTransition] = useTransition()

  const router = useRouter()
  useEffect(() => {
    setUsed(props.used)
  }, [props])

  const clickHandler = async (index: string, owner: string) => {
    setUsed(true)
    await fetch(`/api/posters/${index}`, {
      method: 'POST',
      body: JSON.stringify({ owner: owner }),
    })
    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh()
    })
  }

  return (
    <Card className="w-full ring-1 ring-primary/20 bg-primary/10">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.owner}</CardDescription>
      </CardHeader>
      <Image src="/image.png" alt="Poster image" width={2557} height={1564} />
      <CardContent></CardContent>
      <CardFooter className="flex justify-between">
        <Button
          disabled={used}
          onClick={() => clickHandler(props.index, 'taro@example.com')}
          className="w-full"
        >
          Stick now
        </Button>
      </CardFooter>
    </Card>
  )
}
