import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend('re_XpukDrpa_6D1XTBYUe2Y4nnPHs1m1UKzE')
// const fromEmail = process.env.FROM_EMAIL
// console.log('fromEmail', fromEmail)

export async function POST (req, res) {
  // const body = await req.json
  try {
    const { email, subject, message } = await req.json()
    console.log('email, message, subject', email, message, subject)

    //If field(s) are empty
    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required field(s)' },
        { statusText: 422 }
      )
    }

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: subject,
      // html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
      //Text into the email
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contact me!</p>
          <p>New message submitted: </p>
          <p>{message}</p>
        </>
      )
    })
    //NextResponse to send JSON-answer and set the status
    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error }, { statusText: 500 })
  }
}
