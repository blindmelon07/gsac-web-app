import { GrPlayFill } from "react-icons/gr";


const Feature3 = () => {
  return (
    <div>

      <div className='hidden lg:flex flex-col items-center my-20 mx-16 lg:mx-40'>
        <p className='text-blue text-xs tracking-widest'>MEMBERSHIP</p>
        <h1 className='font-headline text-6xl leading-tight text-dark-blue my-6 text-center'>How <span className='text-blue'>GSAC</span> <br/> membership works</h1>
        <h3 className='text-dark-blue mb-8 text-center text-sm'>By becoming a GSAC member, you not only gain the benefits, rights and privileges of cooperative membership but also access <br/> to a valuable financial service—savings, loans, insurance, etc. tailored to meet your specific needs and goals.</h3>
        <div className='flex my-10 feature3 justify-center items-center w-full h-[35rem] rounded-3xl mt-4 lg:mt-10'>
        <div className='flex text-white transform hover:scale-110 transition-transform duration-300 cursor-pointer animate__animated animate__fadeIn animate__slow'>
          <GrPlayFill size={30} className='icon-shadow opacity-60' />
        </div>
      </div>
      </div>

    </div>
  )
}
export default Feature3