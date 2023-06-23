'use client'

import { useChat } from 'ai/react'
import { MessageBot } from './components/MessageBot'
import { MessageHuman } from './components/MessageHuman'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit,isLoading } = useChat(
    {
    initialInput:"你叫什么",
    initialMessages:
      [
        {
          id: '1',
          role: 'system',
          content: "你现在必须根据上下文回答问题，上下文：你叫smartgpt",
        }
    ]
  }
  )

  return (
    <div className="mx-auto w-full   flex flex-col stretch">
      {/* {messages.map(m => (
        <div key={m.id}>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
        ))} */}
        {/* 对话列表 */}
      {messages.length > 0 ? (
        messages.map((x, i) =>
          x.role === "user" ? (
            <MessageHuman key={i} message={x.content} />
          ) : (
            <MessageBot key={i} message={x.content} />
          )
        )
      ) : (
        <div className="px-3 py-12 text-center dark:text-white">
          <h1 className="text-lg font-bold">CloneGPT</h1>
          <p className="mt-4">Start typing below 👇</p>
        </div>
      )}
      {/* 加载 */}
      {
        isLoading && (
          <div className='w-full text-center'>Loading...</div>
        )
      }
      <div className=" w-full  mt-auto fixed bottom-0  inset-x-0 border-t bg-gray-50 py-2  dark:border-white/20 dark:bg-gray-800 sm:py-4">
        <form onSubmit={handleSubmit} className='flex justify-center items-center gap-3 mb-8'>
          <label className=' relative select-none'>
            <input
              placeholder='Say something...'
              className=" w-full  max-w-md border border-gray-300 rounded  shadow-xl p-2"
              value={input}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit" className=' select-none ml-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 disabled:hover:bg-transparent dark:bg-gray-900 dark:hover:bg-black dark:hover:text-gray-400 dark:disabled:hover:bg-transparent lg:absolute lg:bottom-2.5 lg:right-2 lg:ml-0 lg:h-auto lg:w-auto lg:rounded-none lg:bg-transparent lg:p-1 lg:hover:bg-transparent'>Send</button>
        </form>
      </div>
    </div>
  )
}