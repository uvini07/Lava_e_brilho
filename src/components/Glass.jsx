// Superfície "liquid glass": blur + saturação, borda especular e reflexo que segue o cursor.
import { useRef } from 'react'

export default function Glass({ as: Tag = 'div', className = '', children, interactive = false, ...rest }) {
  const ref = useRef(null)
  const onMove = (e) => {
    if (!interactive || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
    ref.current.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
  }
  return (
    <Tag ref={ref} className={`glass ${interactive ? 'glass--interactive' : ''} ${className}`} onPointerMove={onMove} {...rest}>
      {children}
    </Tag>
  )
}
