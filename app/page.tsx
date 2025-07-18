'use client'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-200 to-white">
        <h1 className="text-5xl font-bold text-indigo-700">Hello, I’m Toberu Neko!</h1>
        <p className="text-lg mt-4 text-gray-700">Welcome to my portfolio site. 🐾</p>
      </div>
    </main>
  )
}
