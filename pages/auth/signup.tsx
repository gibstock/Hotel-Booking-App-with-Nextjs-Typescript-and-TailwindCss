import React, {useState} from 'react'
import Link from 'next/link'
import { BiXCircle} from 'react-icons/bi'
import { AiOutlineGithub, AiOutlineGoogle} from 'react-icons/ai'
import FormInput from '../../components/form-input'
import {signIn, getProviders} from 'next-auth/react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../firebase/clientApp'
import {useRouter} from 'next/router'

type AppProps = {
  providers: {}
}

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const Signup = ({providers}: AppProps) => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {displayName, email, password, confirmPassword } = formFields
  const router = useRouter()
  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    if(password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      const {user}:{} | any = await createAuthUserWithEmailAndPassword(
        email,
        password
        )
      console.log("user",user)
      await createUserDocumentFromAuth(user, displayName)

      resetFormFields()

      console.log('after auth', {user})
      router.push('http://localhost:3000')
    } catch (err:any) {
      switch(err.code) {
        case 'auth/email-already-in-use':
          alert('Cannot create user, email already in use')
          break;
        case 'auth/weak-password':
          alert('Password must be at least 6 characters')
          break;
        default:
          console.log(err)
      }
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    console.log("handle change", name, value)

    setFormFields({...formFields, [name]: value})
  }

  return (
    <div className=' flex justify-center items-center w-screen h-full p-8 top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.2)]'>
        <div className="flex flex-col content-between p10 w-[90%] max-w-[500px] bg-white box-border py-7 px-10 rounded-3xl gap-4">
          <div className="flex justify-center relative">
            <div className='absolute flex justify-center items-center -top-9 -right-2 text-2xl font-medium cursor-pointer hover:text-[hsl(0,70%,70%)] bg-white rounded-full w-7 h-7' onClick={() => router.push('/')}>
              <BiXCircle />
            </div>
          </div>
            <div className="flex flex-col items-center gap-3 p-0">
              <div className="flex flex-col items-center gap-6 w-full">
                <h2 className='font-bold text-3xl text-center'>Let's Go!</h2>
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
      {/* <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span> */}
      <form>
        <FormInput 
          label='Display Name'
          type="text"
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
          placeholder='Display Name'
        />
        
        <FormInput 
          label='Email'
          type="email"
          required
          onChange={handleChange}
          name='email'
          value={email}
          placeholder='Enter your email address'
        />
        <FormInput 
          label='Password'
          type="password"
          required
          onChange={handleChange}
          name='password'
          value={password}
          placeholder='Password'
        />
        <FormInput 
          label='Confirm Password'
          type="password"
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
          placeholder='Confirm your password'
        />
        <button className='bg-primaryBtn text-white rounded-xl py-3 px-4 w-full hover:bg-blue-800' type='submit' onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
    </div>
  )
}

export default Signup

export async function getServerSideProps(context: any) {
  const {req, res} = context
  const providers = await getProviders()
  console.log('providers from signup', providers)

  return {
    props: {
      providers
    }
  }
}