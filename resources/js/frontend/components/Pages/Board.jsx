import { useEffect, useState } from 'react';

const SECTIONS = [
  { key: 'board',      label: 'Board of Directors'       },
  { key: 'audit',      label: 'Audit Committee'          },
  { key: 'election',   label: 'Election Committee'       },
  { key: 'mediation',  label: 'Mediation Committee'      },
  { key: 'ethics',     label: 'Ethics Committee'         },
  { key: 'keypersons', label: 'Key Persons'              },
];

const MemberGrid = ({ members }) => (
  <div className='grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center'>
    {members.map(member => (
      <div key={member.id} className='text-center'>
        {member.photo_path
          ? <img src={member.photo_path} alt={member.name} className='w-80 shadow-2xl-custom object-cover' />
          : <div className='w-80 h-80 bg-powder flex items-center justify-center shadow-2xl-custom'><span className='text-steel text-4xl font-semib'>{member.name[0]}</span></div>
        }
        <h2 className='text-dark-blue font-semib text-xl mt-6'>{member.name}</h2>
        <p className='text-dark-blue'>{member.position}</p>
      </div>
    ))}
  </div>
);

const Board = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/cms/board-members')
      .then(r => r.json())
      .then(data => { setMembers(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const grouped = (cat) => members.filter(m => m.category === cat);

  if (loading) return <div className='flex justify-center items-center h-64'><p className='text-steel'>Loading...</p></div>;

  return (
    <div className='mx-2 lg:mx-40'>
      {SECTIONS.map(({ key, label }) => {
        const group = grouped(key);
        if (group.length === 0) return null;
        return (
          <div key={key} className='my-20'>
            <h1 className='font-headline text-dark-blue text-5xl text-center my-11'>{label}</h1>
            <MemberGrid members={group} />
          </div>
        );
      })}
    </div>
  );
};

export default Board;
