import React from 'react'
import Link from 'next/link'
import {signIn} from 'next-auth/react'
import { BiXCircle} from 'react-icons/bi'
import { AiOutlineGithub, AiOutlineGoogle} from 'react-icons/ai'

type AppProps = {
  open: boolean;
  onClose: () => void;
}

const Modal = ({open, onClose}: AppProps) => {

  if(open) {
    return (
      <div className='fixed flex justify-center items-center w-screen h-full top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.2)]'>
        <div className="flex flex-col content-between p10 w-[90%] max-w-[500px] bg-white box-border py-7 px-0 rounded-3xl gap-4">
          <div className="flex justify-center relative">
            <div className='absolute flex justify-center items-center -top-9 -right-2 text-2xl font-medium cursor-pointer hover:text-[hsl(0,70%,70%)] bg-white rounded-full w-7 h-7' onClick={onClose}>
              <BiXCircle />
            </div>
          </div>
            <div className="flex flex-col items-center gap-3 p-10">
              <div className="flex flex-col items-center gap-6">
                <h2 className='font-bold text-3xl text-center'>Welcome back!</h2>
                <div className="flex flex-col justify-between items-center gap-3">
                <Link  href='/api/auth/signin'>
                  <a className='flex flex-row  justify-center items-center  gap-2 bg-primaryBtn text-white rounded-xl py-3 px-4 hover:bg-blue-800' onClick={(e) => {
                    e.preventDefault()
                    signIn('github')
                }}>
                  <AiOutlineGithub size='28' /><span>Sign in with Github</span></a>
                </Link>
                <Link  href='/api/auth/signin'>
                  <a className='flex flex-row  justify-center items-center  gap-2 bg-primaryBtn text-white rounded-xl py-3 px-4 hover:bg-blue-800' onClick={(e) => {
                    e.preventDefault()
                    signIn('google')
                }}>
                  <AiOutlineGoogle size='28' /><span>Sign in with Google</span></a>
                </Link>
                </div>
              </div>
              <div className="flex flex-row items-center gap-3 w-full">
                <span className='w-full h-[1px] bg-gray-200'></span>
                <span className='w-full text-[#84878B]'>or continue with</span>
                <span className='w-full h-[1px] bg-gray-200'></span>
              </div>
            </div>

          <h1>Email auth coming soon...</h1>
        </div>
      
      </div>
    )
  }
  return null
}

export default Modal