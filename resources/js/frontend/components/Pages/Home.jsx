import { useState, useEffect } from 'react';
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

const STATIC_STATS = [
  { id: 'members', value: '71k', label: 'Members', link: '/savings' },
  { id: 'asset', value: '6.8b', label: 'Asset', link: '/loans' },
  { id: 'branches', value: '18', label: 'Branches', link: '/insurance' },
];

const SlideButton = ({ to, children }) => {
  const isExternal = /^https?:\/\//.test(to || '');
  return isExternal ? (
    <a href={to} target="_blank" rel="noreferrer">
      <button className='my-6 lg:my-10 text-sm lg:text-md text-white bg-blue py-2 px-3 rounded-sm'>{children}</button>
    </a>
  ) : (
    <Link to={to || '#'} target="_blank">
      <button className='my-6 lg:my-10 text-sm lg:text-md text-white bg-blue py-2 px-3 rounded-sm'>{children}</button>
    </Link>
  );
};

const Home = () => {
  const [apiSlides, setApiSlides] = useState(null);
  const [apiStats, setApiStats] = useState(null);

  useEffect(() => {
    fetch('/api/cms/slides')
      .then(r => r.json())
      .then(data => { if (data.length > 0) setApiSlides(data); })
      .catch(() => {});

    fetch('/api/cms/stats')
      .then(r => r.json())
      .then(data => { if (data.length > 0) setApiStats(data); })
      .catch(() => {});
  }, []);

  const stats = apiStats || STATIC_STATS;

  return (
    <div>
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
          {apiSlides ? apiSlides.map(slide => (
            <div key={slide.id} className={`${slide.bg_class} h-[600px] text-left p-16 lg:p-20 xl:p-32`}>
              <h1 className='font-headline text-5xl lg:text-7xl leading-[3.5rem] lg:leading-[6rem] text-white'>{slide.title}</h1>
              {slide.subtitle && <h3 className='text-white my-4 text-sm lg:text-md'>{slide.subtitle}</h3>}
              {slide.button_text && <SlideButton to={slide.button_url}>{slide.button_text}</SlideButton>}
            </div>
          )) : (
            <>
              <div>
                <Slide1/>
              </div>
              <div>
                <Slide2/>
              </div>
              <div>
                <Slide3/>
              </div>
            </>
          )}
        </Carousel>
      </div>

      <div className='bg-dark-blue flex flex-col lg:flex-row w-full mb-6 items-center'>
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className={`p-4 lg:p-8 border-steel w-full flex flex-col justify-center items-center ${index < stats.length - 1 ? 'border-b lg:border-r' : ''}`}
          >
            <Link to={stat.link || '#'}><h2 className='text-center text-white text-xl lg:text-4xl'>{stat.value}</h2></Link>
            <h3 className='text-center text-sm text-white px-2 xl:px-20 py-2'>{stat.label}</h3>
          </div>
        ))}
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
