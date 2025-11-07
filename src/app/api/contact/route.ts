import { NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
  _honeypot: z.string().optional(),
  _elapsed: z.number().optional()
})

export async function POST(req: Request){
  const data = await req.json()
  const parsed = schema.safeParse(data)
  if(!parsed.success) return NextResponse.json({ ok:false, errors: parsed.error.flatten() }, { status: 400 })
  if(parsed.data._honeypot || (parsed.data._elapsed && parsed.data._elapsed < 1000)) {
    return NextResponse.json({ ok: true })
  }
  return NextResponse.json({ ok: true })
}
