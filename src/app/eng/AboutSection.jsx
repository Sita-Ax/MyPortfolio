'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <div>
        <h1 className='mb-4 text-xl font-semibold'>My skills as a junior</h1>
        <ul className='list-disc'>
          <li className='mb-2'>
            <h2 className='mb-2'> Programming Languages:</h2>
            <ul className='pl-4 list-none list-disc'>
              <h2>
                Java <span className='text-xs text-yellow-400 '>60%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-32 h-full bg-primary-400 sm:bg-secondary-500'></div>
              </div>
              <h2>
                C# <span className='text-xs text-yellow-400 '>60%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-32 h-full bg-primary-400 sm:bg-secondary-500'></div>
              </div>
              <h2>
                JavaScript <span className='text-xs text-yellow-400 '>80%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-48 h-full bg-primary-400 sm:bg-secondary-500'></div>
              </div>
              <h2>
                TypeScript(basic){' '}
                <span className='text-xs text-yellow-400 '>30%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-12 h-full bg-primary-400 sm:bg-secondary-500'></div>
              </div>
            </ul>
          </li>
          <li className='mb-2'>
            <h2 className='mb-2'>Databases:</h2>
            <ul className='pl-4 list-disc'>
              <h2>
                SQL <span className='text-xs text-yellow-400 '>80%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-48 h-full bg-gray-600 sm:bg-indigo-500'></div>
              </div>
              <h2>
                MySQL <span className='text-xs text-yellow-400 '>80%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-48 h-full bg-gray-600 sm:bg-indigo-500'></div>
              </div>
              <h2>
                PostgreSQL <span className='text-xs text-yellow-400 '>60%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-32 h-full bg-gray-600 sm:bg-indigo-500'></div>
              </div>
            </ul>
          </li>
          <li className='mb-2'>
            <h2 className='mb-2'>Frameworks:</h2>
            <ul className='pl-4 list-disc'>
              <h2>
                ASP .NET MVC{' '}
                <span className='text-xs text-yellow-400 '>80%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-48 h-full bg-yellow-400 sm:bg-green-500'></div>
              </div>
              <h2>
                Spring Framework{' '}
                <span className='text-xs text-yellow-400 '>80%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-48 h-full bg-yellow-400 sm:bg-green-500'></div>
              </div>
              <h2>
                React <span className='text-xs text-yellow-400 '>80%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-48 h-full bg-yellow-400 sm:bg-green-500'></div>
              </div>
              <h2>
                API(Application Programming Interface){' '}
                <span className='text-xs text-yellow-400 '>80%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-48 h-full bg-yellow-400 sm:bg-green-500'></div>
              </div>
            </ul>
          </li>
          <li className='mb-2'>
            <h2 className='mb-2'>Tools:</h2>
            <ul className='pl-4 list-disc'>
              <h2>
                Git <span className='text-xs text-yellow-400 '>80%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-48 h-full bg-primary-400 sm:bg-secondary-500'></div>
              </div>
              <h2>
                GitHub <span className='text-xs text-yellow-400 '>80%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-48 h-full bg-primary-400 sm:bg-secondary-500'></div>
              </div>
              <h2>
                Docker <span className='text-xs text-yellow-400 '>80%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-48 h-full bg-primary-400 sm:bg-secondary-500'></div>
              </div>
              <h2>
                Slack <span className='text-xs text-yellow-400 '>80%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-48 h-full bg-primary-400 sm:bg-secondary-500'></div>
              </div>
              <h2>
                AWS(Amazon Web Services){' '}
                <span className='text-xs text-yellow-400 '>80%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-48 h-full bg-primary-400 sm:bg-secondary-500'></div>
              </div>
              <h2>
                GCP(Google Cloud Platform){' '}
                <span className='text-xs text-yellow-400 '>80%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-48 h-full bg-primary-400 sm:bg-secondary-500'></div>
              </div>
              <h2>
                IBM Cloud <span className='text-xs text-yellow-400 '>80%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-48 h-full bg-primary-400 sm:bg-secondary-500'></div>
              </div>
            </ul>
          </li>
          <li className='mb-2'>
            <h2 className='mb-2'>Testing Techiques:</h2>
            <ul className='pl-4 list-disc'>
              <h2>
                Unit Testing{' '}
                <span className='text-xs text-yellow-400 '>80%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-48 h-full bg-gray-600 sm:bg-indigo-500'></div>
              </div>
              <h2>
                Integration Testing{' '}
                <span className='text-xs text-yellow-400 '>80%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-48 h-full bg-gray-600 sm:bg-indigo-500'></div>
              </div>
              <h2>
                System Testing{' '}
                <span className='text-xs text-yellow-400 '>80%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-48 h-full bg-gray-600 sm:bg-indigo-500'></div>
              </div>
              <h2>
                Functional Testing{' '}
                <span className='text-xs text-yellow-400 '>80%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-48 h-full bg-gray-600 sm:bg-indigo-500'></div>
              </div>
            </ul>
          </li>
          <li className='mb-2'>
            <h2 className='mb-2'>Cloud Services:</h2>
            <ul className='pl-4 list-disc'>
              <h2>
                SaaS (Software as a Service){' '}
                <span className='text-xs text-yellow-400 '>60%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-48 h-full bg-yellow-400 sm:bg-green-500'></div>
              </div>
              <h2>
                IaaS (Infrastructure as a Service){' '}
                <span className='text-xs text-yellow-400 '>40%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-48 h-full bg-yellow-400 sm:bg-green-500'></div>
              </div>
              <h2>
                PaaS (Platform as a Service){' '}
                <span className='text-xs text-yellow-400 '>40%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-48 h-full bg-yellow-400 sm:bg-green-500'></div>
              </div>
              <h2>
                Heroku <span className='text-xs text-yellow-400 '>60%</span>
              </h2>
              <div className='relative h-4 mt-2 ml-10 overflow-hidden rounded-full w-60'>
                <div className='absolute w-full h-full bg-gray-200 '></div>
                <div className='absolute w-48 h-full bg-yellow-400 sm:bg-green-500'></div>
              </div>
            </ul>
          </li>
          <li className='mb-2'>
            <h2 className='mb-2'>Other Skills: </h2>
            <ul className='pl-4 list-disc'>
              <h2>Good understanding how to use ISO 27001 and why.</h2>
              <br />
              <h2>
                Efficient document workflows and API integrations with Power
                Shell.
              </h2>
              <br />
              <h2>
                Leading the team to deliver a Jira clone with pixel-perfect CSS,
                requiring structure, precision, and testing.
              </h2>
              <br />
              <h2>
                Developing responsive frontend applications in Svelte with
                Tailwind and HTML.
              </h2>
              <br />
              <h2>
                Agile methods for efficient project management with tools like
                Jira and Miro for a smooth and effective development process.
              </h2>
              <br />
              <h2>Working agile both in team and independently.</h2>
              <br />
              <h2>
                Developing document pages for an internal HR application in
                Svelte/Vite.
              </h2>
              <br />
              <h2>
                Exploring and using Ruby and Rails through tutorial.pdf and
                YouTube.
              </h2>
              <br />
              <h2>
                Optimizing data transfers between systems, resulting in uniform
                data management.
              </h2>
              <br />
              <h2>
                Synchronizing information transfers between different systems
                for smoother processes (e.g., Fortnox, Klarna, etc.)
              </h2>
              <br />
              <h2>
                Daily meetings, online collaboration via Teams and Discord in an
                agile team.
              </h2>
              <br />
              <h2>Developing efficient and scalable web applications.</h2>
              <br />
              <h2>
                Leading the development of an internal application with
                Java/Spring Boot and h2 database, as well as TypeScript/Tailwind
                CSS.
              </h2>
              <br />
              <h2>
                Developing and integrating both frontend and backend components.
              </h2>
              <br />
              <h2>
                Communicating and listening in company meetings via Slack.
              </h2>
              <br />
            </ul>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: 'Educations',
    id: 'educations',
    content: (
      <div>
        <h2 className='mb-4 text-xl font-semibold'>Education</h2>
        <ul className='pl-6 list-disc'>
          <li className='mb-2'>
            <strong>Hermods/Komvux</strong>
            <br />
            Basic programming c# <br /> Distance Learning, Sweden
          </li>
          <li className='mb-2'>
            <strong>EC-utbildningar</strong>
            <br />
            Java-developer
            <br /> Distance Learning (Växjö), Sweden
          </li>
          <li className='mb-2'>
            <strong>Lexicon</strong>
            <br />
            C# .NET
            <br /> Distance Learning (Växjö), Sweden
          </li>
        </ul>
      </div>
    )
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <div>
        <h2 className='mb-4 text-xl font-semibold'>Certification</h2>
        <ul className='pl-6 list-disc'>
          <li className='mb-2'>
            <strong>Bas c#</strong>
            <br />
            Graduated
          </li>
          <li className='mb-2'>
            <strong>C# .NET</strong>
            <br />
            Diploma
          </li>
          <li className='mb-2'>
            <strong>Java Developer</strong>
            <br />
            Certification
          </li>
        </ul>
      </div>
    )
  },
  {
    title: 'Blogs',
    id: 'blogs',
    content: (
      <ul className='pl-2 list-disc'>
        <li>My family blogg</li>
        <li>My prescription blogg</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()

  const handleTabChange = id => {
    startTransition(() => {
      setTab(id)
    })
  }
  return (
    <section className='text-white' id='about'>
      <div className='items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16'>
        <Image
          src='/images/About.png'
          alt='About me'
          width={500}
          height={500}
        />
        <div className='flex flex-col h-full mt-4 text-left md:mt-0'>
          <h2 className='mb-4 text-4xl font-bold text-white'>About Me</h2>
          <p className='text-base lg:text-lg'>
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('educations')}
              active={tab === 'educations'}
            >
              {' '}
              Educations{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              {' '}
              Certifications{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('blogs')}
              active={tab === 'blogs'}
            >
              {' '}
              Blogs{' '}
            </TabButton>
          </div>
          <div className='mt-8'>{TAB_DATA.find(t => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection
