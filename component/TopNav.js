import Link from 'next/link'

export default function TopNav(){
  return(
    <nav className="nav-box">
      <div className="nav-inline">
        <Link href="/">
          <a>LOGO more</a>
        </Link>
      </div>
      <div className="nav-inline">
        <Link href="/comma">
          <a>com,ma</a>
        </Link>
      </div>
      <div className="nav-inline nav-float-right">
        <Link href="/login">
          <a>Log in</a>
        </Link>
      </div>
    </nav>
  )
}
