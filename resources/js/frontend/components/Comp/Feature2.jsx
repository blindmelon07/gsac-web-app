import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import icon4 from '../../assets/icon4.svg'
import hf2 from '../../assets/hf2.jpg'

const Feature2 = () => {
  return (
    <div>

      <div className='mx-12 lg:mx-2 lg:block text-center'>
        <p className='text-blue text-xs tracking-widest'>FEATURE</p>
        <h1 className='font-headline text-5xl lg:text-6xl text-dark-blue my-6'>Are you still an<span className='text-blue'> associate</span> member?</h1>
        <h3 className='text-dark-blue mb-8 text-center text-sm'>Be a regular member now and receive these perks!</h3>
      </div>

      <div className='md:flex justify-center'>
  <div className='mx-10 md:mx-40 lg:mx-80 my-6'>
    <div className='flex flex-wrap lg:flex-nowrap'>
      <div className='w-full lg:w-1/2 flex flex-col'>
        <div className='flex-1 border border-1-gray-text rounded-xl block m-2 lg:m-2 p-4 lg:p-6 xl:p-12'>
          <img src={icon1} className='w-6'/>
          <p className='text-dark-text font-semib pt-4 pb-2'>Dividends</p>
          <p className='text-gray-text text-sm'>Receive dividends, patronage refund, premium rates on deposits, and low interest on loans.</p>
        </div>
        <div className='flex-1 border border-1-gray-text rounded-xl block m-2 lg:m-2 p-4 lg:p-6 xl:p-12'>
          <img src={icon3} className='w-6'/>
          <p className='text-dark-text font-semib pt-4 pb-2'>Assistance</p>
          <p className='text-gray-text text-sm pb-6'>Production and marketing assistance</p>
        </div>
      </div>
      <div className='w-full lg:w-1/2'>
        <img src={hf2} className='rounded-3xl p-2'/>
      </div>
      <div className='w-full lg:w-1/2 flex flex-col'>
        <div className='flex-1 border border-1-gray-text rounded-xl block m-2 lg:m-2 p-4 lg:p-6 xl:p-12'>
          <img src={icon2} className='w-6'/>
          <p className='text-dark-text font-semib pt-4 pb-2'>Benefits</p>
          <p className='text-gray-text text-sm'>Loyalty awards and pension programs, Damayan II death aid benefit.</p>
        </div>
        <div className='flex-1 border border-1-gray-text rounded-xl block m-2 lg:m-2 p-4 lg:p-6 xl:p-12'>
          <img src={icon4} className='w-6'/>
          <p className='text-dark-text font-semib pt-4 pb-2'>Points</p>
          <p className='text-gray-text text-sm pb-6'>Discounts and points on allied services and products.</p>
        </div>
      </div>
    </div>
  </div>
</div>



    </div>
    
  )
}
export default Feature2