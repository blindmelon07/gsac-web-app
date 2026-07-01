import { Link } from 'react-router-dom';
import fb from '../../assets/fb.svg';
import youtube from '../../assets/youtube.svg';

 

const Footer = () => {
  return (
    <div className='mx-10 xl:mx-32 mt-10 mb-10'>

      <div className='flex flex-col md:flex-row md:justify-between md:gap-x-8'>
        <div className='text-left mb-6 md:mb-0'>
          <p className='text-steel font-semib mb-4'>GSAC</p>
          <Link to='/about' className='text-sm text-steel block mb-2'>About</Link>
          <Link to='/BOD' className='text-sm text-steel block mb-2'>Board of Directors</Link>
          <Link to='/branches' className='text-sm text-steel block mb-2'>Branches</Link>
          <Link to='/dataprivacy' className='text-sm text-steel block'>Data Privacy & Protection Policy</Link>
        </div>

        <div className='text-left mb-6 md:mb-0'>
          <p className='text-steel font-semib mb-4'>Our Services</p>
          <Link to='/savings' className='text-sm text-steel block mb-2'>Savings</Link>
          <Link to='/loans' className='text-sm text-steel block mb-2'>Loans</Link>
          <Link to='/insurance' className='text-sm text-steel block mb-2'>Insurance</Link>
          <Link to='/' className='text-sm text-steel block'>Allied Services</Link>
        </div>

        <div className='text-left mb-6 md:mb-0'>
          <p className='text-steel font-semib mb-4'>Membership</p>
          <Link to='/onlinemembership' className='text-sm text-steel block mb-2'>Regular Membership</Link>
          <Link to='/onlineloan' className='text-sm text-steel block mb-2'>Online Membership</Link>
          <Link to='/' className='text-sm text-steel block mb-2'>Loan Application</Link>
          <Link to='/paymentoptions' className='text-sm text-steel block mb-2'>Payment Options</Link>
        </div>

        <div className='text-left mb-6 md:mb-0'>
          <p className='text-steel font-semib mb-4'>Reach Us</p>
          <Link to='/' className='text-sm text-steel block mb-2'>Cor. Luna & Quezon Streets Gubat, Sorsogon</Link>
          <Link to='/' className='text-sm text-steel block'>info@gsac.coop</Link>
        </div>
      </div>

      <div className='justify-center lg:justify-start flex flex-col lg:flex-row border-t border-baby my-6 py-6 items-center gap-2 lg:gap-32 2xl:gap-52 text-sm'>
        <h1 className='text-5xl text-light-steel'>GSAC</h1>
        <Link to='' className='text-light-steel'>Hotel</Link>
        <Link to='' className='text-light-steel'>T2AIC</Link>
        <Link to='' className='text-light-steel'>GGHI</Link>
        <Link to='' className='text-light-steel'>Mart & Pharmacy</Link>
        <Link to='' className='text-light-steel'>Diagnostic Center</Link>
      </div>

      <div className='text-sm text-light-steel flex flex-col gap-6'>
        <div className='flex flex-col lg:flex-row gap-10 items-center'>
          <p>GSAC is the largest multipurpose cooperative in Bicol Region operating on a total of 14 branches, and a membership base of 50,000.</p>
          <div className='flex gap-6 lg:gap-10'>
            <Link to="https://www.facebook.com/OfficialPageGSAC1964" target="_blank"><img src={fb} className='w-6'/></Link>
            <Link to="https://www.youtube.com/@officialgubatst.anthonycoo4214" target="_blank"><img src={youtube} className='w-6'/></Link>
          </div>
          

        </div>
        
        <p>Copyright Â© 2024 Gubat Saint Anthony Cooperative â€¢ All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
