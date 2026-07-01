import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <div className='p-10 lg:p-20 slide3 h-100'>
        <h1 className='font-headline text-white text-4xl lg:text-6xl'>Products & Services</h1>
      </div>
      <div className='px-10 lg:px-32 py-10 text-2xl text-blue flex flex-col gap-6'>

          <Link to='/loans'>
            <div className='shadow-light p-6'>
              <h1>Loans</h1>
            </div>
          </Link>

          <Link to='/savings'>
            <div className='shadow-light p-6'>
              <h1>Savings</h1>
            </div>
          </Link>

          <Link to='/insurance'>
            <div className='shadow-light p-6'>
              <h1>Insurance</h1>
            </div>
          </Link>
      </div>
    </div>
  )
}
export default Products