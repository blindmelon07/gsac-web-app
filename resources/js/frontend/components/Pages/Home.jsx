import Feature1 from '../Comp/Feature1'; 
import Feature2 from '../Comp/Feature2'; 
import Feature3 from '../Comp/Feature3';
import FAQ from '../Comp/FAQ';
import { Link } from 'react-router-dom';
import Testimonials from '../Comp/Testimonials';
import '../../index.css'; 
import Slide1 from '../Comp/Slide1';
import Slide2 from '../Comp/Slide2';
import Slide3 from '../Comp/Slide3';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // required for styling


const Home = () => {
  return (
    <div>
      {/* Slider commented out for announcement */}
      <div className="carousel-wrapper">
        <Carousel
          showStatus={false}
          showThumbs={false}
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={8000} 
          className="h-full w-full custom-carousel" 
        >
          <div>
            <Slide1/>
          </div>
          <div>
            <Slide2/>
          </div>
          <div>
            <Slide3/>
          </div>
        </Carousel>
      </div>

      {/* Announcement Section */}
      

      <div className='bg-dark-blue flex flex-col lg:flex-row w-full mb-6 items-center'>
        <div className='p-4 lg:p-8 border-b lg:border-r border-steel w-full'>
          <Link to='/savings'><h2 className='text-center text-white text-xl lg:text-4xl'>71k</h2></Link>
          <h3 className='text-center text-sm text-white px-2 xl:px-20 py-2'>Members</h3>
        </div>

        <div className='p-4 lg:p-8 border-b lg:border-r border-steel w-full flex flex-col justify-center items-center'>
          <Link to='/loans'><h2 className='text-center text-white text-xl lg:text-4xl'>6.8b</h2></Link>
          <h3 className='text-center text-sm text-white px-2 xl:px-20 py-2'>Asset</h3>
        </div>

        <div className='p-4 lg:p-8 border-r border-steel w-full'>
          <Link to='/insurance'><h2 className='text-center text-white text-xl lg:text-4xl'>18</h2></Link>
          <h3 className='text-center text-sm text-white px-2 xl:px-20 py-2'>Branches</h3>
        </div>
      </div>

      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Testimonials/>
      <FAQ />
    </div>
  )
}
export default Home;
