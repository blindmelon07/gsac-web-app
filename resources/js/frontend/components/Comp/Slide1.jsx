import '../../index.css'; 
import { Link } from "react-router-dom"

const Slide1 = () => {
  return (
    <div className='slide1 h-[600px] text-left p-16 lg:p-20 xl:p-32'>
      <h1 className='font-headline text-5xl lg:text-7xl leading-[3.5rem] lg:leading-[6rem] text-white'>The keeper of your trust <br/> for 60 years now.</h1>
      <h3 className='text-white my-4 text-sm lg:text-md'>Continuing to serve with unwavering trust and excellence since 1964</h3>
      <Link to='/onlinemembership' target="_blank"><button className='my-6 lg:my-10 text-sm lg:text-md text-white bg-blue py-2 px-3 rounded-sm'>
        Join GSAC now
      </button></Link>
    </div>
  )
}
export default Slide1