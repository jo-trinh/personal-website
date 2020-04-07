import Link from 'next/link'
console.log(process.env)

export default () => (

  <div>
    <div>About me</div>
    <div>
      Back to{' '}
      <Link href="/">
        <a>Jo's Page</a>
      </Link>
    </div>
  </div>
)
