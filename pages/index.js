import Link from 'next/link';
import SEO from '../components/SEO';

import { AiOutlineMail, AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
import { RiTwitterLine } from 'react-icons/ri';

export default function Home() {
  return (
    <>
      <SEO title="Welcome" />
      <div className="text-4xl flex items-center justify-start w-screen h-screen px-16 sm:px-32 font-light">
        <div>
          <div className="font-bold text-5xl md:text-6xl mb-8">
            <div>
              Hi, I'm{' '}
              <Link href="/about/">
                <a id="title" className="a_no-underline">
                  Billy
                </a>
              </Link>
              .
            </div>
            <div className="font-light">I'm a software engineer.</div>
          </div>

          <div className="text-2xl md:text-3xl mb-6">
            <Link href="/journal/">
              <a className="block a_no-underline mb-1">
                <span className="text-red-400">–</span> Journal
              </a>
            </Link>
            <Link href="/about/">
              <a className="block a_no-underline">
                <span className="text-red-400">–</span> About
              </a>
            </Link>
          </div>
          <div className="flex">
            <a
              className="a_no-underline mr-2 hover:text-orange-500"
              href="mailto:billyhkim.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineMail />
            </a>
            <a
              className="a_no-underline mr-2 hover:text-indigo-500"
              href="https://www.linkedin.com/in/billyhkim/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineLinkedin />
            </a>
            <a
              className="a_no-underline mr-2 hover:text-teal-500"
              href="https://github.com/billyhkim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              className="a_no-underline hover:text-blue-500"
              href="https://twitter.com/billyhyunkim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiTwitterLine />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
