'use client'

import { useChat } from 'ai/react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
      {messages.map(m => (
        <div key={m.id}>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

      <div className="mt-auto fixed bottom-0 mb-8">
        <form onSubmit={handleSubmit} className='flex justify-center items-center gap-3 ]'>
          <label className=' relative select-none'>
            <input
              placeholder='Say something...'
              className=" w-full max-w-md border border-gray-300 rounded  shadow-xl p-2"
              value={input}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit" className=' select-none'>Send</button>
        </form>
      </div>
    </div>
  )
}