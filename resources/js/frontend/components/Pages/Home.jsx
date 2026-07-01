import { useEffect, useState } from 'react';
import Feature1 from '../Comp/Feature1';
import Feature2 from '../Comp/Feature2';
import Feature3 from '../Comp/Feature3';
import FAQ from '../Comp/FAQ';
import { Link } from 'react-router-dom';
import Testimonials from '../Comp/Testimonials';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  const [slides, setSlides] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch('/api/cms/slides').then(r => r.json()).then(setSlides).catch(() => {});
    fetch('/api/cms/stats').then(r => r.json()).then(setStats).catch(() => {});
  }, []);

  // Fallback static slides if DB is empty
  const fallbackSlides = [
    { id: 'f1', title: 'The keeper of your trust for 60 years now.', subtitle: 'Continuing to serve with unwavering trust and excellence since 1964', button_text: 'Join GSAC now', button_url: '/onlinemembership', bg_class: 'slide1' },
    { id: 'f2', title: 'GCash accepted at GSAC.', subtitle: 'Conveniently pay your loans and deposits via GCash.', button_text: null, button_url: null, bg_class: 'slide2' },
    { id: 'f3', title: 'Grow with GSAC.', subtitle: 'Savings, loans, insurance and more.', button_text: 'Our Products', button_url: '/products', bg_class: 'slide3' },
  ];

  const displaySlides = slides.length > 0 ? slides : fallbackSlides;

  // Fallback static stats if DB is empty
  const fallbackStats = [
    { id: 'fs1', value: '71k', label: 'Members', link: '/savings' },
    { id: 'fs2', value: '6.8b', label: 'Asset', link: '/loans' },
    { id: 'fs3', value: '18', label: 'Branches', link: '/branches' },
  ];

  const displayStats = stats.length > 0 ? stats : fallbackStats;

  return (
    <div>
      <div className="carousel-wrapper">
        <Carousel showStatus={false} showThumbs={false} showArrows={true} infiniteLoop={true} autoPlay={true} interval={8000} className="h-full w-full custom-carousel">
          {displaySlides.map(slide => (
            <div key={slide.id} className={`${slide.bg_class} h-[600px] text-left p-16 lg:p-20 xl:p-32`}>
              <h1 className='font-headline text-5xl lg:text-7xl leading-[3.5rem] lg:leading-[6rem] text-white'>{slide.title}</h1>
              {slide.subtitle && <h3 className='text-white my-4 text-sm lg:text-md'>{slide.subtitle}</h3>}
              {slide.button_text && slide.button_url && (
                <Link to={slide.button_url} target={slide.button_url.startsWith('http') ? '_blank' : undefined}>
                  <button className='my-6 lg:my-10 text-sm lg:text-md text-white bg-blue py-2 px-3 rounded-sm'>{slide.button_text}</button>
                </Link>
              )}
            </div>
          ))}
        </Carousel>
      </div>

      <div className='bg-dark-blue flex flex-col lg:flex-row w-full mb-6 items-center'>
        {displayStats.map((stat, i) => (
          <div key={stat.id} className={`p-4 lg:p-8 ${i < displayStats.length - 1 ? 'border-b lg:border-r' : ''} border-steel w-full`}>
            {stat.link
              ? <Link to={stat.link}><h2 className='text-center text-white text-xl lg:text-4xl'>{stat.value}</h2></Link>
              : <h2 className='text-center text-white text-xl lg:text-4xl'>{stat.value}</h2>
            }
            <h3 className='text-center text-sm text-white px-2 xl:px-20 py-2'>{stat.label}</h3>
          </div>
        ))}
      </div>

      <Feature1 />
      <Feature2 />
      <Testimonials />
      <Feature3 />
      <FAQ />
    </div>
  );
};

export default Home;
