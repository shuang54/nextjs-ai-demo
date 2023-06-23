import React from 'react'

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-2 sm:px-4 md:mx-auto md:max-w-2xl md:px-0 xl:max-w-3xl">
      {children}
    </div>
  )
}
