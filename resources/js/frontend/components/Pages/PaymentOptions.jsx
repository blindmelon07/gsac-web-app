import { Link } from 'react-router-dom';
import gcashlogo from '../../assets/gcash-logo.png'
import logo from '../../assets/logo.svg'


const PaymentOptions = () => {
  return (
    <div>
      <div className='p-10 lg:p-28 slide2 h-100'>
        <h1 className='font-headline text-white text-4xl lg:text-6xl'>Payment Options</h1>
        <h2 className='text-sm text-white my-6'>Discover a range of payment methods that are convenient for you.</h2>
      </div>
      <div className='w-full flex flex-col lg:flex-row px-10 lg:px-32 py-10 gap-10 mb-40'>
          <div className='lg:w-1/3 bg-white shadow-light rounded-xl p-10'>
            <img src={gcashlogo} className='w-20'/>
            <h1 className='text-dark-blue font-semib text-xl my-4'>GCash</h1>
            <h2 className='text-sm mb-4 text-dark-text leading-normal'>Use GCash to conveniently and securely manage your loan payments with GSAC. Enjoy the flexibility of digital transactions, allowing you to easily make payments directly from your mobile device.</h2>
            <Link to='https://www.youtube.com/watch?v=LEyezke__Gw' target="_blank"><button className='my-4 bg-blue text-white text-sm px-4 rounded-md py-2'>Learn how to pay with GCash</button></Link>
          </div>

          <div className='lg:w-1/3 bg-white shadow-light rounded-xl p-10'>
          <img src={logo} className='w-20'/>
          <h1 className='text-dark-blue font-semib text-xl my-4'>Over-the-counter</h1>
          <h2 className='text-sm mb-4 text-dark-text leading-normal'>Make your loan repayments effortlessly at your nearest GSAC branch through our over-the-counter payment service. Enjoy the convenience of settling your loans with straightforward transactions every time.</h2>
          <Link to='/branches'><button className='my-4 bg-blue text-white text-sm px-4 rounded-md py-2'>See all GSAC branches</button></Link>
          </div>


      </div>
    </div>
  )
}
export default PaymentOptions