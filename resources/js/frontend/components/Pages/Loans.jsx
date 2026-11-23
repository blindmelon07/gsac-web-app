import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import advisory from '../../assets/advisory.svg';
import '../../index.css'; // Make sure to import the CSS file

const Loans = () => {
  const [loan, setLoan] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  useEffect(() => {
    fetch('/api/cms/loans')
      .then(r => { if (!r.ok) throw new Error(r.statusText); return r.json(); })
      .then(data => {
        setLoan(data.map(l => ({ name: l.name, desc: l.description, interest: l.interest, term: l.term, payment: l.payment })));
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, []);

  const videoId = 'ny8UPS-Big8';
  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className='mx-6 lg:mx-32 my-10 bg-[#F3FAFF] rounded-xl p-10 lg:p-20'>
      <div className='flex flex-col lg:flex-row lg:items-center'>
        <div className='lg:w-2/6'>
          <button className='text-xs text-steel border border-light-steel rounded-full px-2 my-2'>Products & Services</button>
          <h1 className='font-headline text-4xl lg:text-7xl text-dark-blue'>Loans</h1>
        </div>
        <div>
          <p className='text-sm lg:text-base text-dark-text lg:leading-loose my-4 lg:mt-8'>Whether you&apos;re looking to fund your personal aspirations, or start or expand your business, our diverse range of loan options empowers you to pursue your goals with confidence, providing flexible terms and competitive rates.</p>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row mt-10 gap-6'>
        <div className='lg:w-1/2'>
          <div className='video-responsive'>
            <YouTube videoId={videoId} opts={opts} />
          </div>
        </div>
        <div className='bg-white lg:w-1/2 rounded-xl p-12'>
          <h1 className='text-dark-blue text-xl'>GSAC Advisory</h1>
          <p className='text-sm text-dark-text my-4'>Good news member-owners! The maximum loanable amount for the GSAC Agri-Production Loan (Palay) has now been increased from P25,000.00 per hectare to P40,000.00 PER HECTARE effective July 20, 2023.</p>
          <img src={advisory} alt='advisory' className='w-full' />
        </div>
      </div>

      {status === 'loading' && (
        <p className='text-center text-sm text-steel mt-10'>Loading loan products…</p>
      )}
      {status === 'error' && (
        <p className='text-center text-sm text-steel mt-10'>We couldn&apos;t load our loan products right now. Please try again later.</p>
      )}
      {status === 'ready' && loan.length === 0 && (
        <p className='text-center text-sm text-steel mt-10'>No loan products are available at the moment.</p>
      )}

      <div className='flex flex-col mt-10 gap-6'>
        {loan.reduce((rows, loan, index) => {
          if (index % 4 === 0) rows.push([]);
          rows[rows.length - 1].push(
            <div key={index} className='bg-white w-full sm:w-1/2 rounded-xl p-6 sm:p-8'>
              <h1 className='text-dark-blue text-xl'>{loan.name}</h1>
              {loan.desc && <p className='text-sm text-dark-text my-2 whitespace-pre-line'>{loan.desc}</p>}
              {loan.interest && <p className='text-sm text-dark-text my-2'>Interest: {loan.interest}</p>}
              {loan.term && <p className='text-sm text-dark-text my-2'>Term: {loan.term}</p>}
              {loan.payment && <p className='text-sm text-dark-text my-2'>Mode of Payment: {loan.payment}</p>}
            </div>
          );
          return rows;
        }, []).map((row, index) => (
          <div key={index} className='flex flex-col sm:flex-row gap-6'>
            {row}
          </div>
        ))}
      </div>

      <p className='text-center text-xs text-steel mt-10'>For more inquiries, please reach us through our Facebook page for speedy replies.</p>
    </div>
  );
};

export default Loans;
