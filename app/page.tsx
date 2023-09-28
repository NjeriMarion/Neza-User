'use client'
import Image from 'next/image'
import SideBar from './components/Sidebar'
import Dashboard from './dashboard/page'
import SignIn from './Login/page'
import Signup from './signup/page'

export default function Home() {
  return (
    <main>

    <div>
      <Signup/>
        {/* <Dashboard/> */}
    </div>
    </main>
  )
}
