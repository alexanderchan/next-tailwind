import { twMerge } from 'tailwind-merge'

export function ButtonStripeLink({
  children,
  className,
  ...props
}: {
  className?: string
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<'a'>) {
  return (
    <a
      className={twMerge(
        'group inline-flex items-center rounded-full bg-slate-900 px-4 pt-1.5 pb-2 font-semibold text-white transition hover:bg-slate-700',
        className
      )}
      {...props}
    >
      {children}
      <svg
        className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
        fill="none"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        aria-hidden="true"
      >
        <path
          className="opacity-0 transition group-hover:opacity-100"
          d="M0 5h7"
        ></path>
        <path
          className="transition group-hover:translate-x-[3px]"
          d="M1 1l4 4-4 4"
        ></path>
      </svg>
    </a>
  )
}
