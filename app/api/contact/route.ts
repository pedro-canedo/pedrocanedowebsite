import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = contactSchema.parse(body)

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // For now, just log the message
    console.log('Contact form submission:', validatedData)

    // Simulated email sending
    // In production, use a service like Resend:
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'contato@pedrocanedo.dev',
    //   to: 'devpedrocanedo@gmail.com',
    //   subject: `[Site] ${validatedData.subject}`,
    //   html: `
    //     <h2>Nova mensagem de contato</h2>
    //     <p><strong>Nome:</strong> ${validatedData.name}</p>
    //     <p><strong>Email:</strong> ${validatedData.email}</p>
    //     <p><strong>Assunto:</strong> ${validatedData.subject}</p>
    //     <p><strong>Mensagem:</strong></p>
    //     <p>${validatedData.message}</p>
    //   `,
    // })

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Erro ao processar mensagem' },
      { status: 500 }
    )
  }
}

