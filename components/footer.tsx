import Link from 'next/link'
import { Button } from './ui/button'

export async function Footer() {
  return (
    <footer className="bg-secondary rounded-md shadow m-4">
      <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {'© 2023 Taro Ishihara All Rights Reserved.'}
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Button asChild variant="link" size="sm" className="mx-2 -my-2">
              <Link href="#">About</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="link" size="sm" className="mx-2 -my-2">
              <Link href="#">Privacy Policy</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="link" size="sm" className="mx-2 -my-2">
              <Link href="#">Licensing</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="link" size="sm" className="mx-2 -my-2">
              <Link href="#">Contact</Link>
            </Button>
          </li>
        </ul>
      </div>
    </footer>
  )
}
