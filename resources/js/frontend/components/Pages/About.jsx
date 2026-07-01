import { useState } from 'react';
import t2 from '../../assets/t2.svg';
import cover from '../../assets/cover.png';
import gghi from '../../assets/gghi.svg';
import v from '../../assets/v.svg';
import m from '../../assets/m.svg';
import icon from '../../assets/icon.svg';
import event from '../Comp/History.js';
import { GrPlayFill } from "react-icons/gr";
import FAQ from '../Comp/FAQ';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className='mx-10 my-10 xl:mx-40 xl:my-10 xl:mb-40'>
      <div className='flex justify-center gap-4 text-sm md:text-md'>
        <button
          className={`px-4 py-2 rounded-sm ${activeTab === 'about' ? 'bg-blue text-white' : 'bg-powder text-dark-text'}`}
          onClick={() => setActiveTab('about')}
        >
          About Us
        </button>
        <button
          className={`px-4 py-2 rounded-sm ${activeTab === 'values' ? 'bg-blue text-white' : 'bg-powder text-dark-text'}`}
          onClick={() => setActiveTab('values')}
        >
          Core Values
        </button>
        <button
          className={`px-4 py-2 rounded-sm ${activeTab === 'identity' ? 'bg-blue text-white' : 'bg-powder text-dark-text'}`}
          onClick={() => setActiveTab('identity')}
        >
          Identity
        </button>
        <button
          className={`px-4 py-2 rounded-sm ${activeTab === 'history' ? 'bg-blue text-white' : 'bg-powder text-dark-text'}`}
          onClick={() => setActiveTab('history')}
        >
          History
        </button>
        <button
          className={`px-4 py-2 rounded-sm ${activeTab === 'faqs' ? 'bg-blue text-white' : 'bg-powder text-dark-text'}`}
          onClick={() => setActiveTab('faqs')}
        >
          FAQs
        </button>
      </div>

      {activeTab === 'about' && (
        <div className='flex flex-col mt-10'>
          <div className='justify-center'>
            <h1 className='font-headline text-5xl text-dark-blue text-center'>About Us</h1>
            <p className='text-blue text-center text-sm my-4'>GSAC&apos;s story and history</p>
            <div className='flex flex-col md:flex-row w-full my-10'>
              <h3 className='w-full md:w-1/2 mx-4 md:mx-20 text-dark-text leading-loose text-sm order-2 md:order-1 my-6 lg:my-0'>
                GSAC, a multi-purpose cooperative founded on April 8, 1964, is the largest cooperative in the Bicol Region, boasting over 60,000 members and assets of more than Php 5.1 Billion. We aim to empower and uplift the lives of our members. With 11 branches, 3 satellite offices, and 2 digital hubs within the Provinces of Sorsogon, Albay, Camarines Sur, and Northern Samar, we provide banking services alongside Mart, Pharmacy, Hotel, Diagnostic Center, and Insurance.
                <br /> <br />
                In line with our commitment to expansion and enhanced services, GSAC General Hospital was established in 2022, providing exceptional medical care and patient-centered services. Triple 2 Agri-Industrial Corp. was inaugurated in the same year, specializing in Agri Services for cacao, carabao, cermiculture, and organic vegetables, and Farm Level Grain Center (FLGC), further enriching our agricultural assistance available to our members in farming and members with small businesses.
              </h3>
              <div className='relative w-full md:w-1/2 order-1 md:order-2'>
                <img src={cover} alt='Cover Image' className='object-cover object-center w-full h-full rounded-xl' />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <GrPlayFill className='text-white text-2xl' />
                </div>
              </div>
            </div>
          </div>
          <div className='flex w-full lg:px-40 py-4 text-steel justify-center'>
            <div className='lg:px-20'>
              <p className='text-sm text-center tracking-widest my-6'>OUR SUBSIDIARY CORPORATIONS</p>
              <div className='flex flex-col md:flex-row justify-center'>
                <img src={t2} className='w-80 p-4 mx-10' />
                <img src={gghi} className='w-80 p-4 mx-10' />
              </div>
            </div>
          </div>
          <div className='lg:mx-28 mt-10'>
            <div className='flex flex-col lg:flex-row'>
              <div className='lg:w-1/2 border border-powder rounded-xl p-10 m-4'>
                <img src={m} className='w-20' />
                <p className='text-dark-blue text-xl mt-4'>Mission</p>
                <p className='text-dark-text text-base mt-4 mr-32'>GSAC is committed to enhance the socio-economic and spiritual condition of its members and the community by providing quality financial products and allied services.</p>
              </div>
              <div className='lg:w-1/2 border border-powder rounded-xl p-10 m-4'>
                <img src={v} className='w-20' />
                <p className='text-dark-blue text-xl mt-4'>Vision</p>
                <p className='text-dark-text text-base mt-6 mr-32'>GSAC is committed to enhance the socio-economic and spiritual condition of its members.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'values' && (
        <div className='lg:mx-28 mt-10'>
          <h1 className='font-headline text-4xl lg:text-5xl text-dark-blue text-center'>Core Values</h1>
          <div className='flex flex-col lg:flex-row mt-4'>
            <div className='bg-[#F4F7F9] mt-6 m-2 p-8 rounded-lg transition-transform duration-300 transform hover:-translate-y-1 cursor-pointer'>
              <p className='text-dark-blue font-semib'>Good Governance</p>
              <p className='text-sm text-dark-text pt-2'>Ethical decision-making, transparency, and a deep sense of accountability.</p>
            </div>
            <div className='bg-[#F4F7F9] mt-6 m-2 p-8 rounded-lg transition-transform duration-300 transform hover:-translate-y-1 cursor-pointer'>
              <p className='text-dark-blue font-semib'>Service</p>
              <p className='text-sm text-dark-text pt-2'>To serve the interest of our members which shall have priority over all other circumstances.</p>
            </div>
            <div className='bg-[#F4F7F9] mt-6 m-2 p-8 rounded-lg transition-transform duration-300 transform hover:-translate-y-1 cursor-pointer'>
              <p className='text-dark-blue font-semib'>Adaptability</p>
              <p className='text-sm text-dark-text pt-2'>We institutionalize service quality improvement to respond to the changing circumstances.</p>
            </div>
            <div className='border border-powder mt-6 m-2 p-8 rounded-lg transition-transform duration-300 transform hover:-translate-y-1 cursor-pointer'>
              <p className='text-dark-blue font-semib'>Commitment to Excellence</p>
              <p className='text-sm text-dark-text pt-2'>Improvement of our skills and competence to deliver the highest quality of service.</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'identity' && (
        <div className='mt-10'>
          <h1 className='font-headline text-4xl lg:text-5xl text-dark-blue text-center'>Identity</h1>
          <div className='flex flex-col mt-10 items-center text-center'>
            <img src={icon} className='w-60' />
            <div>
              <p className='text-dark-text leading-loose p-4'>
                Each circle symbolizes a fundamental pillar of GSACâ€”Credit, Allied, and Medical. These pillars embody our unwavering dedication to providing financial services, fostering collaboration across disciplines, and delivering exceptional medical care. Together, they form the bedrock of our organization, shaping our identity and driving our mission forward.
                <br /><br />
                The outer strokes resemble huddling figures, conveys the essence of cooperation. It serves as a visual metaphor for the collective strength that emerges when like-minded individuals come together, working in unison to achieve GSACs goals. This stroke represents the very fabric of GSACâ€”an interconnected network of individuals united by a shared vision.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'history' && (
        <div className='mt-10'>
          <h1 className='font-headline text-5xl text-dark-blue text-center'>GSAC History</h1>
          <ol className="mt-10 relative border-s border-light-steel">
            {event.map((item, index) => (
              <li key={index} className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-steel rounded-full mt-4 -start-1.5 border border-white"></div>
                <div className='flex flex-col lg:flex-row px-6'>
                  <img src={item.img} alt={item.title} className='lg:w-[40%] mr-8 rounded-lg my-4' />
                  <div className='py-4'>
                    <time className="mb-1 text-sm font-normal leading-none text-blue">{item.date}</time>
                    <h3 className="my-2 text-lg font-semib text-dark-blue">{item.title}</h3>
                    <p className='my-2 font-normal text-dark-text text-sm leading-[1.5rem]'>{item.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <div className='flex justify-center'>
            <p className='text-center text-lg text-dark-blue w-2/3 my-8 leading-loose'>
              Today, GSAC has established 11 branches, 3 satellite offices, and 2 digital hubs.
              <br />
              Hopefully, the members in these branches will augment the needed stewards in order to achieve a more bountiful harvest in financial as well as human developments.
            </p>
          </div>
        </div>
      )}
      {activeTab === 'faqs' && (
        <div className='mt-10'>
          <FAQ/>
        </div>
      )}
    </div>
  );
};

export default About;
