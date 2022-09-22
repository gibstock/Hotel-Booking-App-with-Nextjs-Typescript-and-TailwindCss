import React from 'react'
import Link from 'next/link'
import Button from './Button'
import Logo from './Logo'
// import Modal from './Modal'
// import Login from '../pages/auth/login'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { AiFillCaretDown } from 'react-icons/ai'

const Navbar = () => {
  // const [openModal, setOpenModal] = useState(false)

  const { data: session, status } = useSession()
  console.log(session)
  const router = useRouter()

  return (
    <nav className='header flex flex-row items-center justify-between p-6 md:px-10 md:py-5 shadow-[0_-1px_4px_#E2E2EA]'>
      <Logo />
      <ul className="main-nav flex flex-row items-center space-x-8">
        {!session && status === 'unauthenticated' && (
          <>
            <li className='font-bold text-[20px_26px] cursor-pointer hover:opacity-50'>
                <a onClick={(e) => {
                  e.preventDefault()
                  router.push('/auth/login')
                }}>Login</a>
            </li>
            <li>
              <Link href=''>
                <Button>Signup</Button>
              </Link>
            </li>
          </>
        )}
        
        {session && status === 'authenticated' && (
          <>
            <li>
              <Link href='/api/auth/signout'>
                <a onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}>Sign Out</a>
              </Link>
            </li>
            <li className='flex flex-row justify-between items-center gap-4'>
                <div className="flex flex-row justify-between items-center gap-3">
                  <img className='w-6 h-6 rounded-full'  src="/profile.svg" alt="" />
                  <div className="flex flex-row justify-between items-end gap-2">
                    {session.user && (
                      <>
                        <span>{session.user.name}</span>
                        <AiFillCaretDown />
                      </>
                    )}
                  </div>
                </div>
            </li>
          </>
        )}
      </ul>
      {/* {openModal && 
        <Login onClose={() => setOpenModal(false)} open={openModal} providers/>
      } */}
    </nav>
  )
}

export default Navbar