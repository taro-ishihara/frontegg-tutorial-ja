import * as React from 'react'
import Image from 'next/image'
import { ModeToggle } from './mode-toggle'
import { UserNav } from './user-nav'
import { Button } from './ui/button'
import Link from 'next/link'

export async function Header() {
  return (
    <header className="sticky z-50 top-0 flex items-center bg-secondary justify-between w-full h-16 px-8 border-b">
      <Image src="/next.svg" alt="Next.js Logo" width="130" height="0" />
      <div className="flex items-center gap-4">
        <Button asChild variant="outline" size="lg">
          <Link href="subscription">Upgrade</Link>
        </Button>
        <ModeToggle />
        <UserNav />
      </div>
    </header>
  )
}
