import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-200 to-white">
      <h1 className="text-red-500 text-4xl">Hello Tailwind</h1>
      <h1 className="text-5xl font-bold text-indigo-700">Hello, I’m Toberu Neko!</h1>
      <p className="text-lg mt-4 text-gray-700">Welcome to my portfolio site. 🐾</p>
    </main>
  )
}
