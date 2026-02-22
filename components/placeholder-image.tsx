"use client"

import { cn } from "@/lib/utils"

interface PlaceholderImageProps {
  className?: string
  text?: string
  icon?: React.ReactNode
}

export function PlaceholderImage({ className, text, icon }: PlaceholderImageProps) {
  return (
    <div 
      className={cn(
        "bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-400",
        className
      )}
    >
      {icon && <div className="mb-2">{icon}</div>}
      {text && <span className="text-sm font-medium">{text}</span>}
    </div>
  )
}
