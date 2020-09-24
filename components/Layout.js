import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HamburgerMenu from 'react-hamburger-menu';
import Clock from './Clock';

import { AiOutlineMail, AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
import { RiTwitterLine } from 'react-icons/ri';

export default function Layout({ children }) {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const subMenuAnimate = {
    open: {
      transition: { staggerChildren: 0.05 },
      opacity: 1,
      display: 'block',
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
      opacity: 0,
      transitionEnd: {
        display: 'none',
      },
    },
  };
  const hamburgerItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <div className="max-w-3xl m-auto px-10 lg:px-0">
      <ul
        className="list-none flex justify-between items-center pt-6 sm:pt-10 tracking-wider font-light"
        style={{
          marginBlockStart: 0,
          marginBlockEnd: 0,
          paddingInlineStart: 0,
        }}
      >
        <li className="flex-grow-7">
          <Link href="/">
            <a className="inline-block text-3xl overflow-hidden my-4 a_no-underline layout-title">
              BK
            </a>
          </Link>
        </li>
        <li className="text-right hidden sm:inline-block">
          <Link href="/journal/">
            <a className="text-xl a_no-underline">JOURNAL</a>
          </Link>
        </li>
        <li className="text-right pl-4 hidden sm:inline-block">
          <Link href="/about/">
            <a className="text-xl a_no-underline">ABOUT</a>
          </Link>
        </li>
        <div className="text-right inline-block sm:hidden pb-2">
          <HamburgerMenu
            isOpen={burgerOpen}
            menuClicked={() => setBurgerOpen(!burgerOpen)}
            width={25}
            height={20}
            strokeWidth={1}
            color="black"
            borderRadius={0}
            animationDuration={0.5}
            className="cursor-pointer"
          />
        </div>
      </ul>

      <div className="sm:hidden relative">
        <motion.div
          className="text-right p-12 rounded shadow-xl w-full sm:w-1/2 right-0 absolute text-xl tracking-widest"
          style={{ backgroundColor: '#f5bfab' }}
          initial="closed"
          animate={burgerOpen ? 'open' : 'closed'}
          variants={subMenuAnimate}
        >
          <motion.div
            className="mb-3"
            variants={hamburgerItemVariants}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/">
              <a onClick={() => setBurgerOpen(false)}>HOME</a>
            </Link>
          </motion.div>
          <motion.div
            className="mb-3"
            variants={hamburgerItemVariants}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/journal/">
              <a onClick={() => setBurgerOpen(false)}>JOURNAL</a>
            </Link>
          </motion.div>
          <motion.div
            className="mb-3"
            variants={hamburgerItemVariants}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/about/">
              <a onClick={() => setBurgerOpen(false)}>ABOUT</a>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <main className="mt-12">{children}</main>
      <footer className="pt-20 pb-16 text-sm font-thin tracking-wider">
        <div>
          <Clock />
        </div>
        <div className="inline-block text-2xl my-2">
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
        <div>BILLY H. KIM {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
}
