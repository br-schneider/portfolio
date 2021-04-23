import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Experience', href: '#' },
  { name: 'Photography', href: '#' },
  { name: 'Contact', href: '#' },
]


export default function Home() {
  return (
    <div className="">
      <Popover className="relative overflow-hidden bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl">
              <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <svg
                  className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="50,0 100,0 50,100 0,100" />
                </svg>

                <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                  <nav
                    className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                    aria-label="Global"
                  >
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                      <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="#">
                          <span className="sr-only">Workflow</span>
                          {/* <img
                            className="w-auto h-8 sm:h-10"
                            src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                          /> */}
                          <h1 className="block text-3xl font-bold text-blue-600 xl:inline">Brett Schneider</h1>
                        </a>
                        <div className="flex items-center -mr-2 md:hidden">
                          <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                            <span className="sr-only">Open main menu</span>
                            <MenuIcon className="w-6 h-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                      {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
                  >
                    <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                      <div className="flex items-center justify-between px-5 pt-4">
                        <div>
                          {/* <img
                            className="w-auto h-8"
                            src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                            alt=""
                          /> */}
                          <h1 className="block text-lg font-bold text-blue-600 xl:inline">Brett Schneider</h1>
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                            <span className="sr-only">Close main menu</span>
                            <XIcon className="w-6 h-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <a
                        href="#"
                        className="block w-full px-5 py-3 font-medium text-center text-blue-600 bg-gray-50 hover:bg-gray-100"
                      >
                        Log in
                      </a>
                    </div>
                  </Popover.Panel>
                </Transition>

                <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block xl:inline ">Hello!</span>{' '}
                      {/* <span className="block text-blue-600 xl:inline">I am Brett</span> */}
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      This is my portfolio website that I use to display my skills and abilities. Please let me know if you're interested in any of my services by hitting the contact button below. 
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <a
                          href="#"
                          className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:to-blue-700 md:py-4 md:text-lg md:px-10"
                        >
                          Contact Me
                        </a>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <a
                          href="#"
                          className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-blue-700 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                        >
                          Check Out My Work
                        </a>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              {/* <Image
                className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="/images/home.png"
                layout="fill"
                alt=""
                
              /> */}
              <img
                className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="/images/home.png"
                alt=""
              />
              
            </div>
          </>
        )}
      </Popover>

      <div className=" bg-gray-50">
        <h1 className="py-5 mx-2 text-2xl font-bold text-center align-center">Computer Science Major at University of Colorado Boulder</h1>
        
        <div className="grid grid-cols-1 px-2 md:px-20 md:grid-cols-3">

          <div className="mx-5 mb-5">
          
            <div>
              <h4 className="text-lg font-bold text-blue-600">About Me</h4>
              <p className="mt-1 ">
              My name is Brett, I am currently a full time student and plan on graduating in May of 2021. 
              I am a progressive, energetic problem solver with project management, salesforce, and marketing 
              experience on top of my already growing knowledge of the computer science field!
              </p>
            </div>
          </div>

          <div className="mx-5 mb-5">

            <div>
              <h4 className="text-lg font-bold text-blue-600">Skills</h4>
              <p className="mt-1 ">
                Programming Languages: Java, C++, Python, HTML, CSS, Javascript, Vuejs, React, and SQL.<br/>
                Applications: Excel, Photoshope, Illustrator
                
              </p>
            </div>
          </div>

          <div className="mx-5 ">

            <div>
              <h4 className="text-lg font-bold text-blue-600">This Website</h4>
              <p className="mt-1 ">
                I built this website from scratch using React and TailwindCSS
              </p>
            </div>
          </div>

        </div>

        
      </div>
    
    </div>

    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h3>Documentation &rarr;</h3>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h3>Learn &rarr;</h3>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/master/examples"
    //         className={styles.card}
    //       >
    //         <h3>Examples &rarr;</h3>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h3>Deploy &rarr;</h3>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
    //     </a>
    //   </footer>
    // </div>
   
  )
}
