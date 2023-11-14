import { useState } from 'react'
import { Navbar } from '../components/Navbar'

export const Auth = (): JSX.Element => {
  const [variant, setVariant] = useState<'login' | 'register'>('login')

  const handleVariant = (): void => {
    setVariant(variant === 'login' ? 'register' : 'login')
  }

  return (
    <>
        <Navbar/>
        <section className='h-[calc(100vh-200px)] flex flex-col items-center justify-center '>
          <section className='flex flex-col items-center justify-center w-[80%] h-[500px] max-w-sm gap-10 m-auto border border-ligth rounded-lg '>
              <h2 className='font-bold text-3xl'>{variant === 'login' ? 'Login' : 'Register'}</h2>
              <form className='flex flex-col items-center justify-center gap-5 w-full'>
                <label htmlFor="email" className='flex flex-col w-[69%] min-w-[182px] '>
                  Email
                  <input className="bg-light h-[30px] rounded-lg" type="text" name="email" id="email" />
                </label>
                <label htmlFor="password" className='flex flex-col w-[69%] min-w-[182px] '>
                  Password
                  <input className='bg-light h-[30px] rounded-lg' type="text" name="password" id="password" />
                </label>
                {
                  variant === 'register'
                    ? (
                  <label htmlFor="confirmPassword" className='flex flex-col w-[69%] min-w-[182px] '>
                    Confirm Password
                    <input className='bg-light h-[30px] rounded-lg' type="text" name="confirmPassword" id="confirmPassowrd" />
                  </label>

                      )
                    : null
                }
                <button className='bg-primary p-3 w-[69%]  text-white rounded-lg' >{variant === 'login' ? 'Login' : 'Register'}</button>
                <p className='text-center'>{variant === 'login' ? "Don't have an account?" : 'Already an account?'} <a href="#" className='text-primary border-b border-primary pb-1' onClick={handleVariant}>{variant === 'login' ? 'Sing up now' : 'Login' }</a></p>
              </form>
          </section>
        </section>
    </>
  )
}
