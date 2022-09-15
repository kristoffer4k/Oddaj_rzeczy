import { HashLink as Link} from 'react-router-hash-link';

export default function Button({ contents }) {
  return (
    <>
        <Link to={'/login'} className='button'>{contents}</Link>
    </>
  )
}