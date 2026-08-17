export default function Card({ children, className = '', ...props }) {
  return (
    <article
      {...props}
      className={`rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)] ${className}`}
    >
      {children}
    </article>
  )
}
