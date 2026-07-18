// import tdr from '../../assets/tdr.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { GrClose } from "react-icons/gr";

const Savings = () => {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling on the body
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = ''; // Re-enable scrolling on the body

  };

  return (
    <div className='mx-6 lg:mx-32 my-4 lg:my-10 bg-[#F3FAFF] rounded-2xl lg:pt-20 pb-8 p-10 lg:p-20'> 

      <div className='flex flex-col lg:flex-row lg:items-center'>
        <div className='lg:w-2/6'>
        <button className='text-xs text-steel border border-light-steel rounded-full px-2 my-2'>Products & Services</button>
        <h1 className='font-headline text-5xl lg:text-7xl text-dark-blue'>Savings</h1>
      </div>
      <div>
        <p className='text-dark-text lg:leading-loose my-6 lg:mt-10 text-xs lg:text-base'>Secure your future with GSAC. Build a secure financial future with our wide range of savings products designed to help you achieve your goals and maximize your potential.</p>
      </div>
      </div>

      <div className='flex flex-col lg:flex-row bg-white p-8 lg:p-14 rounded-xl lg:mt-10'>
        <div className='lg:w-1/2 flex flex-col'>
          <div>
            <p className='text-dark-blue text-2xl'>GSAC Advisory</p>
            <p className='text-sm text-dark-text my-4 leading-loose lg:mr-20'>NEW INTEREST RATE for the GSAC Special Savings Programs  (Education Savings & Retirement Savings) effective AUGUST 1, 2023. Interest earned shall now be credited to the regular savings account of the depositor. Open your Special Savings Account and start earning more today!</p>
          </div>
          <div className=''>
            <p className='text-xs lg:text-sm text-steel'>
            * Special Savings for Education is withdrawable after (2) years purposely for education expenses. <br/>
            * Retirement Savings is withdrawable upon retirement age.
            </p>
          </div>
        </div>
        <div className='lg:w-1/2'>
          
        <table className='table-auto text-sm w-full text-left text-dark-text'>
          <thead>
            <tr>
              <th> </th>
              <th className='font-semib text-sm '>Per Annum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Initial Deposit (Special Savings for Education)</td>
              <td>P1,000.00</td>
            </tr>
            <tr>
              <td>Initial Deposit (Special Savings for Retirement)</td>
              <td>P500.00</td>
            </tr>
            <tr>
              <td>10,000 & below</td>
              <td>4.00%</td>
            </tr>
            <tr>
              <td>10,001-100,000</td>
              <td>4.50%</td>
            </tr>
            <tr>
              <td>100,001-250,000</td>
              <td>5.00%</td>
            </tr>
            <tr>
              <td>250,001-500,000</td>
              <td>5.50%</td>
            </tr>
            <tr>
              <td>500,001 & above</td>
              <td>6.00%</td>
            </tr>
            <tr>
              <td>Monthly Deposit (Special Savings for Education) </td>
              <td>Minimum P500.00</td>
            </tr>
            <tr>
              <td>Monthly Deposit (Special Savings for Retirement) </td>
              <td>Minimum 100.00</td>
            </tr>
          </tbody>
        </table>
        

        </div>
      </div>

      <div className='flex flex-col lg:flex-row mt-10 lg:m-10 lg:mt-20'>
        <div className='lg:w-1/2 lg:h-[20rem]'>
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FGSACAFLATOUN%2Fvideos%2F947979009980203%2F&show_text=false&width=560"
            style={{ width: '100%', height: '100%', borderRadius: '10px' }}
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen="true"
          ></iframe>
        </div>

        <div className='lg:w-1/2 p-4 lg:p-10'>
          <span className='text-white bg-[#FFE34E] text-xs my-2 px-2 rounded-full'>NEW</span>
          <p className='text-dark-blue text-2xl'>Introducing the Lab Coop</p>
          <p className='text-dark-text text-sm my-4'>GSAC Laboratory Cooperative is a cooperative for those who are a GSAC Aflatoun member. Lab Coop conducts social and financial literacy trainings, workshops, seminars, and activities.</p>
          <Link to='https://www.facebook.com/GSACAFLATOUN' target='_blank' rel='noopener noreferrer' className=' text-blue text-sm font-semib'>Learn more about Lab Coop 🡥</Link>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-6 mt-4 lg:mt-16'>
        <div className='bg-white rounded-xl p-10 lg:w-2/6'>
          <p className='text-2xl text-dark-blue'>Time Deposit</p>
          <p className='text-sm text-steel my-4'>Time Deposits are another important source of funds for operations. People with excess funds that will not be used over a considerable period of time want to minimize the erosion of the value of their savings brought about by inflation.</p>
          <button onClick={openModal} className='text-blue text-sm my-2'>See rates 🡥</button>
        </div>
        {showModal ? (
        <div className='fixed inset-0 z-50 flex items-center justify-center overflow-hidden'>
          <div className='fixed inset-0 bg-black opacity-70'></div>
          <div className='relative w-full max-w-7xl mx-auto my-6'>
            <div className='relative bg-white rounded-lg shadow-lg'>

              <div className='p-10'>
              <table className='table-auto text-sm lg:text-xl w-full text-left text-dark-text'>
                <thead>
                  <tr className='font-semib leading-loose'>
                    <th></th>
                    <th></th>
                    <th>Days</th>
                    <th></th>
                    <th></th>
                    <th>Years</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='font-semib leading-loose'>
                    <td>FROM</td>
                    <td>TO</td>
                    <td>30</td>
                    <td>90</td>
                    <td>180</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3 years up</td>
                  </tr>
                  <tr>
                    <td>10,000</td>
                    <td>100,000</td>
                    <td>2.50%</td>
                    <td>2.75%</td>
                    <td>3.00%</td>
                    <td>3.25%</td>
                    <td>3.50%</td>
                    <td>4.00%</td>
                  </tr>
                  <tr>
                    <td>100,001</td>
                    <td>250,000</td>
                    <td>3.00%</td>
                    <td>3.25%</td>
                    <td>3.50%</td>
                    <td>3.75%</td>
                    <td>4.00%</td>
                    <td>4.50%</td>
                  </tr>
                  <tr>
                    <td>250,001</td>
                    <td>500,000</td>
                    <td>3.50%</td>
                    <td>3.75%</td>
                    <td>4.00%</td>
                    <td>4.25%</td>
                    <td>4.50%</td>
                    <td>5.00%</td>
                  </tr>
                  <tr>
                    <td>500,001</td>
                    <td>1,000,000</td>
                    <td>4.00%</td>
                    <td>4.25%</td>
                    <td>4.50%</td>
                    <td>4.75%</td>
                    <td>5.00%</td>
                    <td>5.50%</td>
                  </tr>
                  <tr>
                    <td>1,000,001</td>
                    <td>3,000,000</td>
                    <td>4.50%</td>
                    <td>4.75%</td>
                    <td>5.00%</td>
                    <td>5.25%</td>
                    <td>5.50%</td>
                    <td>6.00%</td>
                  </tr>
                  <tr>
                    <td>3,000,001</td>
                    <td>5,000,000</td>
                    <td>5.00%</td>
                    <td>5.25%</td>
                    <td>5.50%</td>
                    <td>5.75%</td>
                    <td>6.00%</td>
                    <td>6.50%</td>
                  </tr>
                  <tr>
                    <td>5,000,001</td>
                    <td>Above</td>
                    <td>5.50%</td>
                    <td>5.75%</td>
                    <td>6.00%</td>
                    <td>6.25%</td>
                    <td>6.50%</td>
                    <td>7.00%</td>
                  </tr>
                  
                </tbody>
              </table>
              </div>
              
              <button onClick={closeModal} className='absolute top-0 right-0 m-6 text-gray-600 hover:text-gray-800'>
                <GrClose />
              </button>
            </div>
          </div>
        </div>
      ) : null}
        <div className='flex flex-col gap-6'>
          <div className='bg-white rounded-xl p-10'>
            <p className='text-2xl text-dark-blue'>Damayan II</p>
            <p className='text-sm text-steel my-4'>Damayan is an institutionalized “abuluyan” system in the organization to serve the members from “womb to tomb”</p>
          </div>
          <div className='bg-white rounded-xl p-10'>
            <p className='text-2xl text-dark-blue'>Education</p>
            <p className='text-sm text-steel my-4'>Savings account purposely for education.</p>
          </div>
        </div>
        <div className='bg-white rounded-xl p-10'>
          <p className='text-2xl text-dark-blue'>Aflatoun</p>
          <p className='text-sm text-steel my-4 mb-8'>A social and financial education for children ages 3-17 years old. It started in GSAC last November 2011 through the NATCCO (National Confederation of Cooperatives) and in partnership with the Department of Education (DepEd) <br/><br/>

          P20 initial deposit<br/><br/>

          4% p.a. interest rate is effective when savings reach a minimum of P200</p>
          <Link to='https://gsac.coop/gsac-aflatoun/' className='text-blue text-sm border border-blue px-4 py-[0.3rem] rounded-full' target='_blank' rel='noopener noreferrer'>Apply here</Link>
        </div>
      </div>

      <p className='text-center text-xs lg:text-sm text-steel mt-20'>For more inquiries, please reach us through our Facebook page for speedy replies.</p>

    </div>
  )
}
export default Savings