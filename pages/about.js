import Link from 'next/link'

export default () => (
  <div>
    <div>About Jo</div>
    <div>
      Back to{' '}
      <Link href='/'>
        <a>Home Page</a>
      </Link>
    </div>
  </div>
)
