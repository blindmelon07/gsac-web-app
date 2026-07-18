import lchero from '../../assets/lc-hero.png'
import { Link } from 'react-router-dom'
import af1 from '../../assets/af1.png'
import af2 from '../../assets/af2.png'
import af3 from '../../assets/af3.png'
import Carousel from '../Comp/Carousel'

const Labcoop = () => {
  const images = [
    'https://i.imgur.com/U9p8Hyu.jpeg',
    'https://i.imgur.com/Bn6AkVZ.jpeg',
    'https://i.imgur.com/DtBTUUC.jpeg',
    'https://i.imgur.com/9bOHKo6.jpeg',
    'https://i.imgur.com/xn2VxKN.jpeg',
    'https://i.imgur.com/DW7DlVL.jpeg'
    // Add more image URLs as needed
  ];
  return (
    <div>
      <div className='px-10 text-center'>
        <h1 className='font-caveat text-2xl text-dark-blue mt-4'>The</h1>
        <span className='text-5xl lg:text-6xl text-dark-blue'>GSAC </span>
        <span className='text-5xl lg:text-6xl font-jua text-blue'>Lab Coop</span>
        <p className='my-4 text-dark-blue text-xs lg:text-sm'>Join us in empowering the next generation through smart savings and financial education.</p>
        <Link to='/aflatounopeningform'>
          <button className='text-dark-blue font-semib bg-yellow-200 border-2 border-yellow-300 rounded-full px-4 mb-10 lg:mb-0
            hover:bg-yellow-100 transition-all duration-200'>
            Join now
          </button>
        </Link>
      </div>
      <img src={lchero} className='w-full'/>

      <div className='flex bg-dark-blue w-full justify-center text-center text-white'>

        <div className='w-full p-8 flex flex-col justify-center items-center border-r border-steel'>
          <img src={af1} className='w-20 m-4'/>
          <h1 className='text-lg'>Social and Financial Education</h1>
          <h2 className='text-xs px-10'>Programs designed to impart essential knowledge and skills that empower young savers to make informed financial decisions.</h2>
        </div>

        <div className='w-full p-8 flex flex-col justify-center items-center border-r border-steel'>
          <img src={af2} className='w-20 m-4'/>
          <h1 className='text-lg'>4% interest P.A on savings</h1>
          <h2 className='text-xs px-10'>Enjoy a 4% annual interest rate on savings, encouraging financial growth and responsible saving habits from an early age.</h2>
        </div>

        <div className='w-full p-8 flex flex-col justify-center items-center'>
          <img src={af3} className='w-20 m-4'/>
          <h1 className='text-lg'>Free workshops, trainings, and activities</h1>
          <h2 className='text-xs px-10'>Participate in enriching workshops, trainings, and activities as perks covering  a range of topics for a well-rounded educational experience alongside savings management.</h2>
        </div> 
      </div>

      
      <div className='w-full flex lg:flex-row p-10'>
      <div className='w-2/3'><Carousel images={images} /></div>
      <div className='w-full'>
        <h1 className='font-jua text-blue text-4xl leading-[4rem] lg:text-7xl p-6'>Hear it first from our Lab Coop Board Members!</h1>
        <h2 className='px-6 text-dark-text'>A social and financial education for children ages 3-17 years old. It started in GSAC last November 2011 through the NATCCO (National Confederation of Cooperatives) and in partnership with the Department of Education (DepEd)</h2>
      </div>
    </div>

    </div>
  )
}
export default Labcoop