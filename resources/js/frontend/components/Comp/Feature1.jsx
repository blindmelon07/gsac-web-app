import f1 from '../../assets/f1.jpg'

const Feature1 = () => {
  return (
    <div className='mx-10 md:flex flex-col items-center my-8 mb-48 lg:mb-24 lg:my-20'>
      <p className='text-blue text-xs tracking-widest'>FEATURE</p>
      <h1 className='font-headline text-5xl lg:text-6xl text-dark-blue my-6 leading-[3.7rem]'>Loan <span className='text-blue'>financing</span> for small businesses.</h1>
      <h3 className='text-dark-blue mb-8 lg:text-center text-sm lg:w-1/4'>Empowering and supporting members, and letting small and medium sized businesses launch their way to success.</h3>
      <div className='flex flex-row items-center justify-center'>
          
        {/* 1 */}
        <div className='bg-white border border-[#C9D3DA] p-4 rounded-xl w-[17rem] z-10 mr-[-3rem] ml-2'>
          <div className='flex flex-col lg:flex-row  justify-between'>
            <span className='text-dark font-semib'>SME Loan</span>
            <span className='text-xs lg:text-sm text-dark-blue'>30% interest PA</span>
          </div>
          <p className='text-gray-text text-xs lg:text-sm my-2'>Designed to provide financial support for a member’s business venture.</p>
        </div>
        
        <img src={f1} className='rounded-xl justify-center lg:w-4/6' />

        {/* 2 */}
        <div className='bg-white border border-[#C9D3DA] p-4 rounded-xl w-lg:w-[17rem] z-10 justify-end ml-[-6rem] lg:ml-[-3rem] mb-[-15rem]'>
          <div className='flex flex-col lg:flex-row justify-between'>
            <span className='text-dark font-semib'>ASA Loan</span>
            <span className='text-xs lg:text-sm text-dark-blue'>30% interest PA</span>
          </div>
          <p className='text-gray-text text-xs lg:text-sm my-2'>Designed to provide financial support for a member’s business venture.</p>
        </div>

      </div>
    </div>
  )
}
export default Feature1