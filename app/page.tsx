'use client'

import { useChat } from 'ai/react'
import { MessageBot } from './components/MessageBot'
import { MessageHuman } from './components/MessageHuman'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat(
    {
      initialInput: "你叫什么",
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
    <div className="mx-auto w-full h-screen scrollbar-none  flex justify-between flex-col stretch">
      <div className='flex-1 overflow-y-auto scrollbar-none'>
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

      </div>
      {/* 提出问题框 */}
      <div className=" w-full  mt-auto   inset-x-0 border-t bg-gray-50 py-2  dark:border-white/20 dark:bg-gray-800 sm:py-4">
        <form onSubmit={handleSubmit} className='flex justify-center items-center gap-3 mb-8'>
          <label className=' relative select-none'>
            <input
              placeholder='Say something...'
              className=" w-full  max-w-md border border-gray-300 rounded  shadow-xl p-2"
              value={input}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit" className="btn rounded-full btn-press btn-sm btn-gradient shadow-lg gap-1 
          group relative transition duration-200 ease-in-out transform-gpu hover:scale-105 active:scale-90" data-theme="light">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path></svg>
            Send</button>
          {/* <button type="submit" className=' select-none ml-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200'>Send</button> */}
        </form>
      </div>
    </div>
  )
}