'use client'

import { useChat } from 'ai/react'
import { MessageHuman } from '../components/MessageHuman'
import { MessageBot } from '../components/MessageBot'
import { useEffect, useState } from "react"
import Image from 'next/image'
import { CreateImageRequest } from 'openai-edge'
export default function Page() {
  // 图片url
  const [imageUrl, setImageUrl] = useState("")
  // 请求获取图片地址方法
  const fetchData = async ({ prompt,
    n = 1,
    size = '512x512' }: CreateImageRequest) => {
    try {
      const response = await fetch("/api/images", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt,
          n,
          size
        })
      });
      const data = await response.json();
      console.log("data:", data)
      setImageUrl(data.url);
    } catch (error) {
      console.error(error);
    }
  };
  // 
  // useEffect(() => {
  //   fetchData({
  //     prompt:"cat ",
  //     n : 1,
  //     size : '512x512'
  //   });
  // }, []);

  // input
  const [input, setInput] = useState("")
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      prompt: input,
      n: 1,
      size: '512x512'
    })
    fetchData({
      prompt: input,
      n: 1,
      size: '512x512'
    });
  }
  return (
    <div className='flex justify-center '>
      {imageUrl && <Image className='' width="512" height={512}   src={imageUrl} alt="Cute baby sea otter" />}
      <div className=" fixed bottom-0 w-full  mt-auto   inset-x-0 border-t bg-gray-50 py-2  dark:border-white/20 dark:bg-gray-800 sm:py-4">
        <form onSubmit={(e) => handleSubmit(e)} className='flex justify-center items-center gap-3 mb-8 px-2 sm:px-4 md:mx-auto md:max-w-2xl md:px-0 xl:max-w-3xl'>
          <input
            placeholder='Say something...'
            className=" w-full  max-w-md border border-gray-300 rounded  shadow-xl p-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
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