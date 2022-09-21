import React, {useState} from 'react'
import Link from 'next/link'
import Button from './Button'
import Logo from './Logo'
import Modal from './Modal'
import { signOut, useSession } from 'next-auth/react'

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false)
  const { data: session, status } = useSession()
  console.log(session, status)

  return (
    <nav className='header flex flex-row items-center justify-between p-6 md:px-10 md:py-5 shadow-[0_-1px_4px_#E2E2EA]'>
      <Logo />
      <ul className="main-nav flex flex-row items-center space-x-8">
        {!session && status === 'unauthenticated' && (
          <li className='font-bold text-[20px_26px] cursor-pointer hover:opacity-50'>
              <a onClick={(e) => {
                e.preventDefault()
                setOpenModal(true)
              }}>Login</a>
          </li>
        )}
        
        {session && status === 'authenticated' && (
          <li>
            <Link href='/api/auth/signout'>
              <a onClick={(e) => {
                e.preventDefault()
                signOut()
              }}>Sign Out</a>
            </Link>
          </li>
        )}
        <li>
          <Link href=''>
            <Button>Signup</Button>
          </Link>
        </li>
      </ul>
      {openModal && 
        <Modal onClose={() => setOpenModal(false)} open={openModal} />
      }
    </nav>
  )
}

export default Navbar