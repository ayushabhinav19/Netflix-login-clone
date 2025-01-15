import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Head } from './header/head'
import { Signin } from './sign-in box/signin'
import { Footer } from './footer/footer'
import './App.css'


function App() {
  

  return (
    <>
    <div className='wholebody'>
    <Head></Head>
    <Signin></Signin>
    </div>
    <Footer></Footer>
    </>

  )
}

export default App
