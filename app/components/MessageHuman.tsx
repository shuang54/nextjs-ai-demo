import React from 'react'
import { Container } from './Container'
import LogoUser from './icons/LogoUser'

export const MessageHuman = ({ message }: { message: string }) => {
  return (
    <div className="group w-full border-b border-black/10 text-gray-800 dark:border-gray-900/50 dark:bg-gray-800 dark:text-gray-100">
      <Container>
        <div className="flex space-x-4 py-4 text-base md:space-x-6 md:py-6">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-sm bg-gray-300 p-1 text-gray-600">
            <LogoUser className="h-6 w-6" />
          </div>
          <div className="min-h-[20px] whitespace-pre-wrap">{message}</div>
        </div>
      </Container>
    </div>
  )
}
