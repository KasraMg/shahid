 import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div>
      <Link className='mx-auto block mt-52 w-max text-4xl' to={'/adminPanel/users'}>پنل ادمین </Link>
    </div>
  )
}

export default index
