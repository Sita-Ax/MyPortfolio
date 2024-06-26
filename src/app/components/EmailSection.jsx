'use client'
import React, { useState } from 'react'
import GithubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  //tracking if email is sending or not
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  //sending post with data
  const handleSubmit = async e => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    }
    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/send'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json'
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata
    }
    try {
      const response = await fetch(endpoint, options)

      //Checking if requset was successful
      if (!response.ok) {
        throw new Error(`Failed to send email: ${response.statusText}`)
      }

      //read and parse the response body as JSON
      const resData = await response.json()

      //if it´s sending return true
      if (response.status === 200) {
        setEmailSubmitted(true)
      }
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }

  return (
    <section
      id='contact'
      className='relative grid gap-4 py-24 my-12 md:grid-cols-2 md:my-12'
    >
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
      <div className='z-10'>
        <h5 className='my-2 text-xl font-bold text-white'>
          Let&apos;s Connect
        </h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          {' '}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className='flex flex-row gap-2 socials'>
          <Link href='github.com'>
            <Image src={GithubIcon} alt='Github Icon' />
          </Link>
          <Link href='linkedin.com'>
            <Image src={LinkedinIcon} alt='Linkedin Icon' />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className='mt-2 text-sm text-green-500'>
            Email sent successfully!
          </p>
        ) : (
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <div className='mb-6'>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-white'
              >
                Your email
              </label>
              <input
                name='email'
                type='email'
                id='email'
                required
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder='youremail@google.com'
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='subject'
                className='block mb-2 text-sm font-medium text-white'
              >
                Subject
              </label>
              <input
                name='subject'
                type='text'
                id='subject'
                required
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder='Just saying hi'
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='message'
                className='block mb-2 text-sm font-medium text-white'
              >
                Message
              </label>
              <textarea
                name='message'
                id='message'
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type='submit'
              className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default EmailSection
