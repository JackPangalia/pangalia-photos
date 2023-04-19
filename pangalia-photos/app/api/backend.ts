import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiRequest){
  if (req.method === 'POST') {
    console.log('hello')
    const reqPayload = await req.body
    const frontEndPercel = JSON.parse(reqPayload)
    console.log('frontEndPercel', frontEndPercel)
  }
}