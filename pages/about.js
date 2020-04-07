import Link from 'next/link'
export default () => (
  <div>
    <div>About us</div>
    <div>
      Back to{' '}
      <Link href="/">
        <a>Home Page</a>
      </Link>
    </div>
  </div>
)
