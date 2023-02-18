import Head from 'next/head'
import { Inter } from '@next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillInstagram, AiFillLinkedin, AiFillGithub, AiFillBehanceSquare} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../../public/dev-ed-wave.png';
import design from '../../public/design.png';
import code from '../../public/code.png';
import consulting from '../../public/consulting.png';
import web1 from '../../public/web1.png';
import web2 from '../../public/web2.png';
import web3 from '../../public/web3.png';
import web4 from '../../public/web4.png';
import web5 from '../../public/web5.png';
import web6 from '../../public/web6.png';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Ghulam Ammar Yanuar Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-3 font-Poppins md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='p-10 mb-12 flex justify-between'>
            <h1 className='text-2xl md:text-3xl dark:text-white'>Hi Folks!</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl text-gray-700 dark:text-white'/></li>
              <li><a className='bg-gradient-to-r from-blue-500 to-blue-600 text-white
               px-4 py-2 rounded-md ml-6' href="#">Resume</a></li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h2 className='text-3xl text-blue-500 font-extrabold md:text-4xl lg:text-5xl'>Ghulam Ammar Yanuar</h2>
            <h3 className='text-xl py-4 text-gray-600 md:text-3xl dark:text-white'>Frontend Developer</h3>
            <p className='font-medium py-5 leading-8 text-gray-500 max-w-lg mx-auto md:text-xl dark:text-white'>Hello There, i'm Ghulam, 22 years old from indonesian, i'm college in Informatics Engineering and i'm interested about Web Developer specialist as a Frontend Developer.</p>
          </div>

          <div className='text-5xl flex justify-center gap-10 text-gray-600 -mt-5 dark:text-white'>
            <AiFillGithub />
            <AiFillInstagram />
            <AiFillLinkedin />
            <AiFillBehanceSquare />
          </div>

          <div className="relative mx-auto mb-12 bg-gradient-to-b from-blue-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96">
            <Image src={deved} layout="fill" objectFit='cover' />
          </div>
  
        </section>

        <section>
          <div className='px-10'>
            <h3 className="text-3xl py-1 dark:text-white">Service I Offer</h3>
            <p className="font-medium py-2 leading-8 text-gray-800 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos adipisci nobis <span className='text-blue-500'>illum quod saepe</span> laboriosam inventore pariatur ab praesentium, quae ipsum totam, dicta <span className='text-blue-500'>repellendus</span> ea rem optio tempora facere nihil?
            </p>
            <div className="lg:flex gap-10">
              <div className='mt-5 p-10 text-center shadow-xl dark:bg-gray-900 dark:shadow-2xl rounded-xl my-10'>
                <Image className='mx-auto' src={design} width={100} height={100} />
                <h3 className='text-xl font-medium pt-8 dark:text-white'>Beautiful Design</h3>
                <p className='py-2 dark:text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus harum vero ipsum rerum earum sunt?</p>
                <h4 className='py-4 text-blue-500'>Design tools i use</h4>
                <p className='text-gray-800 py-1 dark:text-white'>Photoshop</p>
                <p className='text-gray-800 py-1 dark:text-white'>Illustrator</p>
                <p className='text-gray-800 py-1 dark:text-white'>Figma</p>
              </div>
              <div className='mt-5 p-10 text-center shadow-xl dark:bg-gray-900 dark:shadow-2xl rounded-xl my-10'>
                <Image className='mx-auto' src={code} width={100} height={100} />
                <h3 className='text-xl font-medium pt-8 dark:text-white'>Beautiful Design</h3>
                <p className='py-2 dark:text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus harum vero ipsum rerum earum sunt?</p>
                <h4 className='py-4 text-blue-500'>Design tools i use</h4>
                <p className='text-gray-800 py-1 dark:text-white'>Photoshop</p>
                <p className='text-gray-800 py-1 dark:text-white'>Illustrator</p>
                <p className='text-gray-800 py-1 dark:text-white'>Figma</p>
              </div>
              <div className='mt-5 p-10 text-center shadow-xl dark:bg-gray-900 dark:shadow-2xl rounded-xl my-10'>
                <Image className='mx-auto' src={consulting} width={100} height={100} />
                <h3 className='text-xl font-medium pt-8 dark:text-white'>Beautiful Design</h3>
                <p className='py-2 dark:text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus harum vero ipsum rerum earum sunt?</p>
                <h4 className='py-4 text-blue-500'>Design tools i use</h4>
                <p className='text-gray-800 py-1 dark:text-white'>Photoshop</p>
                <p className='text-gray-800 py-1 dark:text-white'>Illustrator</p>
                <p className='text-gray-800 py-1 dark:text-white'>Figma</p>
              </div>
            </div>
          </div>
        </section>
      
        <section>
          <div className='px-10 py-5'>
            <h3 className="text-3xl dark:text-white">My Portofolio</h3>
            <p className="font-medium py-2 leading-8 text-gray-800 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos adipisci nobis <span className='text-blue-500'>illum quod saepe</span> laboriosam inventore pariatur ab praesentium, quae ipsum totam, dicta <span className='text-blue-500'>repellendus</span> ea rem optio tempora facere nihil?
            </p>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/3 flex-1'>
                <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
