import { useState, useEffect } from 'react';
import {branch as staticBranch,} from '../Comp/Branches.js';
import {gghi,} from '../Comp/Branches.js';
import { GrLocation } from "react-icons/gr";
import { GrUser } from "react-icons/gr";
import { GrMailOption } from "react-icons/gr";
import { GrContact } from "react-icons/gr";

const Branches = () => {
  const [apiBranches, setApiBranches] = useState(null);

  useEffect(() => {
    fetch('/api/cms/branches')
      .then(r => r.json())
      .then(data => { if (data.length > 0) setApiBranches(data); })
      .catch(() => {});
  }, []);

  const branch = apiBranches
    ? apiBranches.map(b => ({ img: b.photo_path, name: b.name, address: b.address, bm: b.manager, email: b.email, contact: b.contact }))
    : staticBranch;

  return (
    <div>
      <div className='mx-4 my-10 md:mx-36 lg:my-20 text-center'>
        <h1 className='font-headline text-dark-blue text-5xl'>Branches</h1>
        <h2 className='text-blue my-4 lg:mb-8'>GSAC Branches</h2>
        <div className='flex flex-wrap justify-center'>
          {branch.map(item => (
            <div key={item.name} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
              <div className='mb-6'>
                <img src={item.img} alt={item.name} className='w-full h-60'/>
                <div className='flex flex-col gap-2 mt-2'>
                  <h2 className='text-blue text-xl pt-4'>{item.name}</h2>
                  <div className='flex justify-center text-steel gap-2 text-sm'><GrLocation /><p>{item.address}</p></div>
                  <div className='flex justify-center text-steel gap-2 text-sm'><GrUser /><p>{item.bm}</p></div>
                  <div className='flex justify-center text-steel gap-2 text-sm'><GrMailOption /><p>{item.email}</p></div>
                  <div className='flex justify-center text-steel gap-2 text-sm'><GrContact /><p className='mb-0'>{item.contact}</p></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

           * 
      <div className='mx-4 md:mx-36 my-20 text-center'> 
        <h1 className='font-headline text-dark-blue text-5xl'>GGHI and Mart & Pharmacies</h1>
        <h2 className='text-blue my-4 mb-8'>GGHI and Mart & Pharmacies Locator</h2>
        <div className='flex flex-wrap justify-center'> 
          {gghi.map(item => (
            <div key={item.name} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
              <div className='mb-6'>
                <img src={item.img} alt={item.name} className='w-full h-60'/>
                <div className='flex flex-col gap-2 mt-2'>
                  <h2 className='text-blue text-xl pt-4'>{item.name}</h2>
                  <div className='flex justify-center text-steel gap-2 text-sm'><GrLocation /><p>{item.address}</p></div>
                  <div className='flex justify-center text-steel gap-2 text-sm'><GrContact /><p className='mb-0'>{item.contact}</p></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  )
}
export default Branches;
