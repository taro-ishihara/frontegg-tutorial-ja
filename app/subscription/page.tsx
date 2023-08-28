import { CheckIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/ui/button'

const includedFeatures = [
  '最大メンバー数無制限',
  'リソース解放',
  'データ容量最大200GB',
  'スロット数拡張',
]

export default function SubscriptionPage() {
  return (
    <main className="m-8">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Simple no-tricks pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
              quasi iusto modi velit ut non voluptas in. Explicabo id ut
              laborum.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                Monthly membership
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
                amet indis perferendis blanditiis repellendus etur quidem
                assumenda.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-primary">
                  What’s included
                </h4>
                <div className="h-px flex-auto bg-primary/10" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 dark:text-gray-300 sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-primary"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 dark:bg-gray-700 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600 dark:text-gray-300">
                    One month free, if you pay now
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                      ¥1,500
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-gray-300">
                      /month
                    </span>
                  </p>
                  <Button size="lg" className="mt-10">
                    Subscribe
                  </Button>
                  <p className="mt-6 text-xs leading-5 text-gray-600 dark:text-gray-300">
                    支払いと請求はStripeを通して行われます。Stripeについてはこちら。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
