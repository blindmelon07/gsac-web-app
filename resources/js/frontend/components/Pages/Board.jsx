import { useState, useEffect } from 'react';
import { board, audit, election, mediation, ethics, keypersons } from '../Comp/BOD.js';

const STATIC_GROUPS = { board, audit, election, mediation, ethics, keypersons };

const SECTIONS = [
  { key: 'board', title: 'Board of Directors' },
  { key: 'audit', title: 'Audit Committee' },
  { key: 'election', title: 'Election Committee' },
  { key: 'mediation', title: 'Mediation-Conciliation Committee' },
  { key: 'ethics', title: 'Ethics Committee' },
  { key: 'keypersons', title: 'Key Persons' },
];

const Board = () => {
  const [apiMembers, setApiMembers] = useState(null);

  useEffect(() => {
    fetch('/api/cms/board-members')
      .then(r => r.json())
      .then(data => { if (data.length > 0) setApiMembers(data); })
      .catch(() => {});
  }, []);

  const getGroup = (category) => {
    if (apiMembers) {
      return apiMembers
        .filter(m => m.category === category)
        .map(m => ({ name: m.name, position: m.position, img: m.photo_path }));
    }
    return STATIC_GROUPS[category];
  };

  return (
    <div className='mx-2 lg:mx-40'>
      {SECTIONS.map(({ key, title }, index) => (
        <div key={key} className={index === SECTIONS.length - 1 ? 'my-20 mb-60' : 'my-20'}>
          <h1 className='font-headline text-dark-blue text-5xl text-center my-11'>{title}</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center'>
            {getGroup(key).map(member => (
              <div key={member.name} className='text-center'>
                <img src={member.img} alt={member.name} className='w-80 shadow-2xl-custom'/>
                <h2 className='text-dark-blue font-semib text-xl mt-6'>{member.name}</h2>
                <p className='text-dark-blue'>{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;
