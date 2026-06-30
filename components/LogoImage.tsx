'use client'

import { useState } from 'react'

interface OccupierLogoProps {
  name: string
  domain?: string
}

export function OccupierLogo({ name, domain }: OccupierLogoProps) {
  const [imgFailed, setImgFailed] = useState(false)

  const initials = name
    .split(' ')
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('')

  const showInitials = !domain || imgFailed

  return (
    <div className="bg-white rounded-lg border border-gray-100 hover:border-gold-400 hover:shadow-sm transition-all p-4 flex flex-col items-center justify-center gap-2 min-h-[100px]">
      {showInitials ? (
        <div className="w-10 h-10 rounded-full bg-navy-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
          {initials}
        </div>
      ) : (
        <img
          src={`https://logo.clearbit.com/${domain}`}
          alt={name}
          title={name}
          className="h-10 w-auto max-w-[120px] object-contain"
          onError={() => setImgFailed(true)}
        />
      )}
      <span className="text-xs text-gray-500 text-center leading-tight">{name}</span>
    </div>
  )
}
