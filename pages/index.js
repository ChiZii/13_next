import Head from 'next/head'
import Image from 'next/image'

import TopNav from '../component/TopNav'

export default function Home() {
  return (
    <>
      <TopNav />
      <main className="main-container">
        {/* <Image src="/image/home.jpg" alt="main top image" width={1920} height={1080} layout="responsive" /> */}

        <p>over on text</p>
      </main>
    </>
  )
}
  