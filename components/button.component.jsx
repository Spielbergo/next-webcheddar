import { useRouter } from 'next/router';

 
export default function Button() {
  const router = useRouter()
 
  return (
    <button onClick={() => router.push('/services')} className='button'>
      Learn More
    </button>
  )
}