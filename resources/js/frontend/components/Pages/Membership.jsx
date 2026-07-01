import { FcApproval } from "react-icons/fc";
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4, TbCircleNumber5 } from "react-icons/tb";
import 'animate.css';
import YouTube from 'react-youtube';
import { Link } from "react-router-dom";

const Membership = () => {
  const videoId = 'iiyhR6NCf_c';
  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };

  
  return (
    <div className='mx-8 xl:mx-20 lg:my-10 my-8 items-center flex flex-col'>
      <h1 className='text-center font-headline text-dark-blue text-5xl lg:text-7xl leading-[3.7rem] lg:leading-normal animate__animated animate__fadeInDown'>
        Start living the GSAC life.
      </h1>
      <p className='text-center text-sm lg:text-md text-dark-text my-4 lg:my-6 lg:w-2/6 leading-loose'>
        Empowering and supporting people, and letting small and medium sized businesses launch their way to success.
      </p>

      <div className='flex gap-2'>
        <Link to='/onlinemembership'>
          <button
            type="button"
            id="bt"
            className='text-sm lg:text-lg rounded-lg lg:rounded-xl px-4 py-2 min-w-max overflow-hidden relative bg-blue e text-white border-4 border-white hover:border-[#CDE4FF] transition ease-in-out duration-300 animate__animated animate__slideInLeft'>
            Join now
          </button>
        </Link>
        <a href="https://www.facebook.com/OfficialPageGSAC1964/" target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            id="bt"
            className='text-sm lg:text-lg rounded-lg lg:rounded-xl px-4 py-2 min-w-max overflow-hidden relative bg-[#F0F7FF] e text-dark-blue border-4 border-white hover:border-powder animate__animated animate__slideInRight transition ease-in-out duration-300'>
            Inquire
          </button>
        </a>
      </div>

      <div className='flex flex-col lg:flex-row text-blue gap-4 my-6'>
        <div className='flex items-center gap-2'>
          <FcApproval />
          <p className='text-dark-text'>Dividends</p>
        </div>
        <div className='flex items-center gap-2'>
          <FcApproval />
          <p className='text-dark-text'>Premium rates on savings</p>
        </div>
        <div className='flex items-center gap-2'>
          <FcApproval />
          <p className='text-dark-text'>Low loan interest</p>
        </div>
        <div className='flex items-center gap-2'>
          <FcApproval />
          <p className='text-dark-text'>Patronage refunds</p>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row my-16 gap-6'>
        <div className='lg:w-1/2'>
          <div className='video-responsive'>
            <YouTube videoId={videoId} opts={opts} className="w-full h-full" />
          </div>
        </div>

        <div className='lg:w-1/2 mx-4 flex flex-col lg:flex-row bg-[#042D5E] rounded-xl p-10 lg:p-14 text-white animate__animated animate__fadeIn animate__slow'>
          <div>
            <span className='text-xs lg:text-sm bg-white bg-opacity-30 px-2 py-[5px] rounded-md'>Featured</span>
            <h1 className='mt-4 text-2xl lg:text-3xl my-4'>Regular Membership</h1>
            <p className='text-sm'>
              By becoming a GSAC member, you not only gain the benefits, rights and privileges of cooperative membership but also access to a valuable financial serviceâ€”savings, loans, insurance, etc. tailored to meet your specific needs and goals.
            </p>
            <div className='flex text-sm mt-6 gap-2'>
              <FcApproval className='w-6 h-6 flex-shrink-0' />
              <p>Receive dividends, patronage refund, premium rates on deposits, and low interest on loans</p>
            </div>
            <div className='w-full flex text-sm mt-6 gap-2'>
              <FcApproval className='w-6 h-6 flex-shrink-0' />
              <p>Production and marketing assistance</p>
            </div>
            <div className='w-full flex text-sm mt-6 gap-2'>
              <FcApproval className='w-6 h-6 flex-shrink-0' />
              <p>Loyalty awards and pension programs, Damayan II death aid benefit</p>
            </div>
            <div className='w-full flex text-sm mt-6 gap-2'>
              <FcApproval className='w-6 h-6 flex-shrink-0' />
              <p>Discounts and points on allied services and products</p>
            </div>
            <h1 className='text-5xl lg:text-5xl font-headline mt-12 mb-2 lg:mb-4 '>5,200</h1>
            <p className='text-xs tracking-loose my-2 text-steel'>Share Capital, Savings, Membership Fee, Damayan II</p>
          </div>
        </div>
      </div>

      <p className='mt-10 border border-steel text-steel px-2 py-[1px] rounded-full text-xs'>GSAC Membership | Guide</p>
      <h1 className='text-dark-blue text-5xl lg:text-6xl my-4 text-center font-headline'>How it works</h1>
      <div className='mx-8 lg:mx-20 flex flex-col lg:flex-row text-dark-text gap-8 lg:gap-14 justify-center items-start my-8 mb-40'>
        <div className='lg:w-1/5 flex flex-col items-center'>
          <TbCircleNumber1 className='text-blue w-6 h-6 flex-shrink-0 my-2 whitespace-nowrap' />
          <h2 className='text-dark-blue font-semib my-4'>Application Form</h2>
          <p>
            Get the application form for the regular membership in the Information Section of any GSAC Branches and fill up the necessary information: Letter of, Data Privacy, Personal Info, Recruiter, and Sketch. For online applications, <Link to='/onlinemembership' className='text-blue'>apply here</Link>.
          </p>
        </div>
        <div className='lg:w-1/5 flex flex-col items-center'>
          <TbCircleNumber2 className='text-blue w-6 h-6 flex-shrink-0 my-2' />
          <h2 className='text-dark-blue font-semib my-4'>PMES</h2>
          <p>
            <b>A.</b> Face to Face Seminar: Visit/Contact your preferred branch to get the schedule. <br />
            <b>B.</b> Online Seminar: via Google Meet every Wednesday & Saturday. To get the link, email us at mdo@gsac.coop. <br />
            <b>C.</b> Module: A booklet worth Php50.00 for those who cannot attend the face to face or online seminar.
          </p>
        </div>
        <div className='lg:w-1/5 flex flex-col items-center'>
          <TbCircleNumber3 className='text-blue w-6 h-6 flex-shrink-0 my-2' />
          <h2 className='text-dark-blue font-semib my-4'>Submission</h2>
          <p>
            â€¢ 1Ã—1 ID Picture (2) <br />
            â€¢ Photocopy of any valid id such as: Voters ID, UMID, Pagibig, TIN, Brgy. ID <br />
            â€¢ Certificate for PMES or your attendance, or of module
          </p>
        </div>
        <div className='lg:w-1/5 flex flex-col items-center'>
          <TbCircleNumber4 className='text-blue w-6 h-6 flex-shrink-0 my-2' />
          <h2 className='text-dark-blue font-semib my-4'>Board Approval</h2>
          <p>
            Every application must be recommended by the branch manager/loan supervisor and will be approved by the Board of Directors.<br /><br />
            An SMS will be sent to applicants once their application has been approved. The validity of the application will be 6 months upon the approval
          </p>
        </div>
        <div className='lg:w-1/5 flex flex-col items-center'>
          <TbCircleNumber5 className='text-blue w-6 h-6 flex-shrink-0 my-2' />
          <h2 className='text-dark-blue font-semib my-4'>Submission</h2>
          <p>
            â€¢ Partial Payment: Php 2,200 <br />
            â€¢ Full Payment: Php 5,200<br /><br />
            It is required to full pay the Php 4,000 capital within 2 years. Passbook for savings and loan account will be given to new registered Regular members.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Membership;
