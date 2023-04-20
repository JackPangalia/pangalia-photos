import { NextResponse, NextRequest } from "next/server"

export async function POST(request: Request, response: NextResponse) {
  console.log('POST REQUEST')
  // password varible
  const password = 'pangalia1234'

  // get data from frontend
  const data:string = await request.json()
  console.log('data:', data)

}