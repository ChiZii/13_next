import Head from 'next/head'
import Image from 'next/image'

import TopNav from '../component/TopNav'

export default function Home() {
  return (
    <>
      <TopNav />
      <main className="main-container">
        main page design need
        <Image src="/image/home.jpg" alt="main top image" width={1920} height={1080} layout="responsive" />
        <p className="main-position">over on text</p>
      </main>
      <footer>
        <hr />
        <p>This is footer</p>
      </footer>
    </>
  )
}
  