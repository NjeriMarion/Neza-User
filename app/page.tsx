'use client'
import Image from 'next/image'
import SideBar from './components/Sidebar'
import Dashboard from './dashboard/page'
import SignIn from './Login/login'

export default function Home() {
  return (
    <main>

    <div>
      <SignIn/>
        {/* <Dashboard/> */}
    </div>
    </main>
  )
}
