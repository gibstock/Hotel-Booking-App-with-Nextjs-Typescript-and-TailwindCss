import React, {useState} from 'react'
import Link from 'next/link'
import {signIn, getProviders} from 'next-auth/react'
import { BiXCircle} from 'react-icons/bi'
import { AiOutlineGithub, AiOutlineGoogle} from 'react-icons/ai'
import { useRouter } from 'next/router'
import {signInAuthUserWithEmailAndPassword} from '../../firebase/clientApp'
import FormInput from '../../components/form-input'


type AppProps = {
  open: boolean;
  onClose: () => void;
  providers: {}
}

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const Login = ({providers}: AppProps) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const router = useRouter()
  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    try {
      const {user}: {} | any = await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields()
      console.log('user all good', user)
      router.push('http://localhost:3000')
    }catch (err: any) {
      switch(err.code) {
        case 'auth/wrong-password':
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(err)
      }
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value})
  }

  

  if(true) {
    return (
      <div className='fixed flex justify-center items-center w-screen h-full top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.2)]'>
        <div className="flex flex-col content-between p10 w-[90%] max-w-[500px] bg-white box-border py-7 px-10 rounded-3xl gap-4">
          <div className="flex justify-center relative">
            <div className='absolute flex justify-center items-center -top-9 -right-2 text-2xl font-medium cursor-pointer hover:text-[hsl(0,70%,70%)] bg-white rounded-full w-7 h-7' onClick={() => router.push('/')}>
              <BiXCircle />
            </div>
          </div>
            <div className="flex flex-col items-center gap-3 p-0">
              <div className="flex flex-col items-center gap-6 w-full">
                <h2 className='font-bold text-3xl text-center'>Welcome back!</h2>
                <div className="flex flex-col justify-between items-center gap-3 w-full">
                  {Object.values(providers).map((provider: any) => (

                    <Link  href='/api/auth/signin' key={provider.name}>
                      <a className='flex flex-row  justify-center items-center  gap-2 bg-primaryBtn text-white rounded-xl py-3 px-4 w-full hover:bg-blue-800' onClick={(e) => {
                        e.preventDefault()
                        signIn(provider.id, {
                          callbackUrl: `http://localhost:3000
                          `
                        })
                    }}>
                      {provider.id === 'github' && (
                        <>
                          <AiOutlineGithub size='28' />
                          <span>Sign in with {provider.name}</span>
                        </>
                      )}
                      {provider.id === 'google' && (
                        <>
                          <AiOutlineGoogle size='28' />
                          <span>Sign in with {provider.name}</span>
                        </>
                      )}
                      </a>
                    </Link>
                  ))}

                {/* <Link  href='/api/auth/signin'>
                  <a className='flex flex-row  justify-center items-center  gap-2 bg-primaryBtn text-white rounded-xl py-3 px-4 hover:bg-blue-800' onClick={(e) => {
                    e.preventDefault()
                    signIn('google')
                }}>
                  <AiOutlineGoogle size='28' /><span>Sign in with Google</span></a>
                </Link> */}
                </div>
              </div>
              <div className="flex flex-row items-center gap-3 w-full">
                <span className='w-full h-[1px] bg-gray-200'></span>
                <span className='w-full text-[#84878B]'>or continue with</span>
                <span className='w-full h-[1px] bg-gray-200'></span>
              </div>
            </div>

            <form className='flex flex-col'>
              <FormInput 
                label="Email address"
                type="email" 
                required 
                onChange={handleChange} 
                name='email' 
                value={email}
                placeholder='Enter your email'
              />
              <FormInput
                label="Password" 
                type="password" 
                required 
                onChange={handleChange} 
                name='password' 
                value={password}
                placeholder='Enter your password'
              />
              <Link href='/'>
                <a className="font-medium text-base self-end text-primaryBtn mb-5">Forgot your password?</a>
              </Link>
                <button className='bg-primaryBtn text-white rounded-xl py-3 px-4 w-full hover:bg-blue-800' type="submit" onClick={handleSubmit}>Sign In</button>
                <div className="flex row items-center justify-center gap-2">
                  <span>Don't have an account?</span>
                  <Link href='/'>
                    <a className="font-medium text-base text-primaryBtn">Sign Up</a>
                  </Link>
                </div>
            </form>
        </div>
      
      </div>
    )
  }
  // return null
}

export default Login

export async function getServerSideProps(context: any) {
  const {req, res} = context
  const providers = await getProviders()
  console.log('providers from login', providers)

  return {
    props: {
      providers
    }
  }
}

// const Login = ({ providers }:AppProps) => {
//   return (
//     <>
//     <h1>New Sign In Page</h1>
//       {Object.values(providers).map((provider: any) => (
//         <div key={provider.name}>
//           <button onClick={() => signIn(provider.id)}>
//             Sign in with {provider.name}
//           </button>
//         </div>
//       ))}
//     </>
//   )
// }

// export default Login

// export async function getServerSideProps(context: any) {
//   const {req, res} = context
//   const providers = await getProviders()

//   return {
//     props: { 
//       providers 
//     }
//   }
// }