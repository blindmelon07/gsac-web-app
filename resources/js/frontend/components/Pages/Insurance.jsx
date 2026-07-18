import { IoIosCheckbox } from "react-icons/io";
import climbs from '../../assets/climbs-logo.jpg';
import i1 from '../../assets/i1.svg';
import i2 from '../../assets/i2.svg';
import i3 from '../../assets/i3.svg';
import i4 from '../../assets/i4.svg';




const Insurance = () => {
  return (
    <div className='mx-6 lg:mx-32 my-4 lg:my-10 bg-dark-blue rounded-2xl lg:pt-20 pb-8 p-10 lg:p-20'> 
      <div className='flex flex-col lg:flex-row lg:items-center'>
        <div className='lg:w-2/6'>
          <button className='text-xs text-light-steel border border-light-steel rounded-full px-2 my-2'>Products & Services</button>
          <h1 className='font-headline text-5xl lg:text-7xl text-white'>Insurance</h1>
          <img src={climbs} className='w-10 mt-4' alt="Climbs Logo" />
        </div>
        <div>
          <p className='text-white lg:leading-loose my-6 lg:mt-18 text-xs lg:text-base'>Be insured through our partner CLIMBS Life & General Insurance Cooperative.</p>  
        </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-6 lg:mt-8'>
        <div className='lg:w-1/2 lg:h-[20rem]'>
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FOfficialPageGSAC1964%2Fvideos%2F487376669945327%2F&show_text=false&width=560&t=0"
            style={{ width: '100%', height: '100%', borderRadius: '10px' }}
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media picture-in-picture; web-share"
            allowFullScreen="true"
          ></iframe>
        </div>
        <div className='lg:w-1/2 rounded-xl bg-white p-8 lg:p-12 flex flex-col'>
          <p className='text-dark-blue text-xl font-semib'>Personal Insurance</p>
          <p className='text-sm my-4'>Protect your loved ones and secure your future with our comprehensive personal insurance solutions tailored for both families and individuals.</p>
          <div className="flex items-center">
            <p className='text-semibold text-blue text-lg mr-2'>Individual Insurance</p>
            <IoIosCheckbox className='text-blue' />
          </div>
          <div className="flex items-center">
            <p className='text-semibold text-blue text-lg mr-2'>Family Insurance</p>
            <IoIosCheckbox className='text-blue' />
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-10 mt-8'>
        <div className='lg:w-1/4 bg-[#325DB2] rounded-xl p-8'>
          <p className='text-white text-xl my-2'>Vehicle Insurance</p>
          <p className='mt-4 text-sm leading-loose text-white'>Drive with confidence and safeguard your wheels with our trusted vehicle insurance options.</p>
          <img src={i1} className='mt-4'/>
        </div>
        <div className='lg:w-1/4 bg-[#325DB2] rounded-xl p-8'>
          <p className='text-white text-xl my-2'>Fire Insurance</p>
          <p className='mt-4 text-sm leading-loose text-white'>Shield your valuable assets from the unexpected with our reliable fire insurance coverage, offering protection for</p>
          <img src={i2} className='mt-4'/>
        </div>
        <div className='lg:w-1/4 bg-[#325DB2] rounded-xl p-8'>
          <p className='text-white text-xl my-2'>Surety Bonds</p>
          <p className='mt-4 text-sm leading-loose text-white'>Solutions providing the necessary financial protection and assurance, allowing you to build trust and confidence among stakeholders for a successful future.</p>
          <img src={i3} className='mt-4'/>
        </div>
        <div className='lg:w-1/4 bg-[#325DB2] rounded-xl p-8'>
          <p className='text-white text-xl my-2'>Vehicle Insurance</p>
          <p className='mt-4 text-sm leading-loose text-white'>Drive with confidence and safeguard your wheels with our trusted vehicle insurance options.</p>
          <img src={i4} className='mt-4'/>
        </div>
      </div>

      <p className='mt-10 lg:mt-20 text-light-steel text-sm text-center'>For more inquiries, please contact Harold H. Garcia, GSAC-CAC Insurance Assistant: (+639) 17 106 9501 / (+639) 45 657 6066</p>

    </div>
  );
};

export default Insurance;
