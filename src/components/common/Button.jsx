import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Button({ to, href, children, variant = 'primary', type, disabled = false, showIcon = true }) {
  const classes =
    variant === 'primary'
      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25'
      : variant === 'ghost'
        ? 'border border-transparent bg-transparent text-blue-700 hover:bg-blue-50'
        : 'border border-slate-200 bg-white text-slate-800 shadow-sm hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 hover:shadow-md'

  const className = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${classes}`

  if (type) {
    return (
      <button type={type} className={`${className} disabled:cursor-not-allowed disabled:opacity-70`} disabled={disabled}>
        {children}
        {showIcon && <ArrowRight className="h-4 w-4" />}
      </button>
    )
  }

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
        {showIcon && <ArrowRight className="h-4 w-4" />}
      </Link>
    )
  }

  return (
    <a href={href} className={className} target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noreferrer' : undefined}>
      {children}
      {showIcon && <ArrowRight className="h-4 w-4" />}
    </a>
  )
}
