'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScaleOnHoverProps {
  children: ReactNode
  scale?: number
  className?: string
}

export function ScaleOnHover({ 
  children, 
  scale = 1.03,
  className = '' 
}: ScaleOnHoverProps) {
  return (
    <motion.div
      whileHover={{ 
        scale,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

