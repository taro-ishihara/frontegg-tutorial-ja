import * as React from 'react'

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

export function PosterCard(prop: {
  index: string
  title: string
  owner: string
  used: boolean
}) {
  return (
    <Card className="w-full ring-1 ring-primary/20 bg-primary/10">
      <CardHeader>
        <CardTitle>{prop.title}</CardTitle>
        <CardDescription>{prop.owner}</CardDescription>
      </CardHeader>
      <Image src="/image.png" alt="Poster image" width={2557} height={1564} />
      <CardContent></CardContent>
      <CardFooter className="flex justify-between">
        <Button disabled={prop.used} className="w-full">
          Stick now
        </Button>
      </CardFooter>
    </Card>
  )
}
