import { useEffect, useState } from 'react';
import { GrLocation } from "react-icons/gr";
import { GrUser } from "react-icons/gr";
import { GrMailOption } from "react-icons/gr";
import { GrContact } from "react-icons/gr";
import gghipic from '../../assets/gghipic.jpg';
import mp1 from '../../assets/mp1.png';
import mp2 from '../../assets/mp2.jpg';
import mp3 from '../../assets/mp3.png';
import mp4 from '../../assets/mp4.png';

const gghi = [
  { img: gghipic, name: 'GSAC General Hospital, Inc', address: 'Purok 5 Brgy. Road Balogo Sorsogon', contact: '0970 311 7306' },
  { img: mp1, name: 'GSAC Mart Gubat', address: 'Cor. Luna & Quezon St. Gubat, Sorsogon', contact: '0970 311 7306' },
  { img: mp1, name: 'GSAC Pharmacy Gubat', address: 'Cor. Luna & Quezon St. Gubat, Sorsogon', contact: '0970 311 7306' },
  { img: mp2, name: 'GSAC Mart & Pharmacy Sorsogon', address: 'Magsaysay and Rizal Streets, Brgy. Sulucan, Sorsogon City', contact: '0970 311 7306' },
  { img: mp3, name: 'GSAC Mart & Pharmacy (Formerly Bayanihan)', address: 'Magsaysay St. Sorsogon City', contact: '0970 311 7306' },
  { img: mp4, name: 'GSAC Mart & Pharmacy Irosin', address: 'CM Recto St, Irosin, Sorsogon', contact: '0929 504 2754' },
];

const Branches = () => {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/cms/branches')
      .then(r => r.json())
      .then(data => { setBranches(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className='mx-4 my-10 md:mx-36 lg:my-20 text-center'>
        <h1 className='font-headline text-dark-blue text-5xl'>Branches</h1>
        <h2 className='text-blue my-4 lg:mb-8'>GSAC Branches</h2>

        {loading && <p className='text-steel py-20'>Loading...</p>}

        {!loading && (
          <div className='flex flex-wrap justify-center'>
            {branches.map(item => (
              <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                <div className='mb-6'>
                  {item.photo_path
                    ? <img src={item.photo_path} alt={item.name} className='w-full h-60 object-cover' />
                    : <div className='w-full h-60 bg-powder' />
                  }
                  <div className='flex flex-col gap-2 mt-2'>
                    <h2 className='text-blue text-xl pt-4'>{item.name}</h2>
                    <div className='flex justify-center text-steel gap-2 text-sm'><GrLocation /><p>{item.address}</p></div>
                    {item.manager && <div className='flex justify-center text-steel gap-2 text-sm'><GrUser /><p>{item.manager}</p></div>}
                    {item.email && <div className='flex justify-center text-steel gap-2 text-sm'><GrMailOption /><p>{item.email}</p></div>}
                    {item.contact && <div className='flex justify-center text-steel gap-2 text-sm'><GrContact /><p>{item.contact}</p></div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className='mx-4 md:mx-36 my-20 text-center'>
        <h1 className='font-headline text-dark-blue text-5xl'>GGHI and Mart & Pharmacies</h1>
        <h2 className='text-blue my-4 mb-8'>GGHI and Mart & Pharmacies Locator</h2>
        <div className='flex flex-wrap justify-center'>
          {gghi.map(item => (
            <div key={item.name} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
              <div className='mb-6'>
                <img src={item.img} alt={item.name} className='w-full h-60 object-cover' />
                <div className='flex flex-col gap-2 mt-2'>
                  <h2 className='text-blue text-xl pt-4'>{item.name}</h2>
                  <div className='flex justify-center text-steel gap-2 text-sm'><GrLocation /><p>{item.address}</p></div>
                  <div className='flex justify-center text-steel gap-2 text-sm'><GrContact /><p>{item.contact}</p></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Branches;
