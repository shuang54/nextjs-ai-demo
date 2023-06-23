import React, { LegacyRef, forwardRef } from 'react'
import { Container } from './Container';
import LogoOpenAI from './icons/LogoOpenAI';

export const MessageBot = forwardRef(
  (
    { message, hidden }: { message: string; hidden?: boolean },
    ref?: LegacyRef<HTMLParagraphElement>
  ) => {
    return (
      <div
        className={`${hidden ? "hidden" : "block"
          } group w-full border-b border-black/10 bg-gray-50 text-gray-800 dark:border-gray-900/50 dark:bg-[#444654] dark:text-gray-100`}
      >
        <Container>
          <div className="flex space-x-4 py-4 text-base md:space-x-6 md:py-6">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-sm bg-[#10a37f] p-1 text-white">
              <LogoOpenAI className="h-6 w-6" />
            </div>
            <div className="min-h-[20px] whitespace-pre-wrap">
              <div className="break-words">
                <p
                  ref={ref}
                  className={
                    ref && !hidden
                      ? "after:-mb-1 after:inline-block after:h-5 after:w-2 after:animate-blink after:bg-gray-600 after:content-[''] after:dark:bg-gray-400"
                      : ""
                  }
                >
                  {message}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
)
MessageBot.displayName = "MessageBot"