import { Configuration, CreateImageRequest, OpenAIApi, ResponseTypes } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY || undefined,
  basePath: process.env.BASE_PATH || undefined
})
const openai = new OpenAIApi(config)

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  // const { messages } = await req.json()
  const {
    prompt,
    n = 1,
    size = '512x512'
  }: CreateImageRequest = await req.json()
  // Ask OpenAI for a streaming chat completion given the prompt
try {
  const image = await openai.createImage({ prompt, n, size })
  const data = (await image.json()) as ResponseTypes['createImage']
  const url = data.data?.[0]?.url

  return new Response(JSON.stringify({ url }), {
    status: 200,
    headers: {
      'content-type': 'application/json'
    }
  })
} catch (error: any) {
  console.error("error:",error)

  return new Response(JSON.stringify(error), {
    status: 400,
    headers: {
      'content-type': 'application/json'
    }
  })
}
}
