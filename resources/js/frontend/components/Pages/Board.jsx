import { board, audit, election, mediation, ethics, keypersons } from '../Comp/BOD.js';

const Board = () => {
  return (
    <div className='mx-2 lg:mx-40'>

      {/* Board of Directors */}
      <div className='my-20'>
        <h1 className='font-headline text-dark-blue text-5xl text-center my-11'>Board of Directors</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center'> 
          {board.map(member => (
            <div key={member.name} className='text-center'>
              <img src={member.img} alt={member.name} className='w-80 shadow-2xl-custom'/>
              <h2 className='text-dark-blue font-semib text-xl mt-6'>{member.name}</h2>
              <p className='text-dark-blue'>{member.position}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Audit Committee */}
      <div className='my-20'>
        <h1 className='font-headline text-dark-blue text-5xl text-center my-11'>Audit Committee</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center'> 
          {audit.map(member => (
            <div key={member.name} className='text-center'>
              <img src={member.img} alt={member.name} className='w-80 shadow-2xl-custom'/>
              <h2 className='text-dark-blue font-semib text-xl mt-6'>{member.name}</h2>
              <p className='text-dark-blue'>{member.position}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Election Committee */}
      <div className='my-20'>
        <h1 className='font-headline text-dark-blue text-5xl text-center my-11'>Election Committee</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center'> 
          {election.map(member => (
            <div key={member.name} className='text-center'>
              <img src={member.img} alt={member.name} className='w-80 shadow-2xl-custom'/>
              <h2 className='text-dark-blue font-semib text-xl mt-6'>{member.name}</h2>
              <p className='text-dark-blue'>{member.position}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mediation-Conciliation Committee */}
      <div className='my-20'>
        <h1 className='font-headline text-dark-blue text-5xl text-center my-11'>Mediation-Conciliation Committee</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center'> 
          {mediation.map(member => (
            <div key={member.name} className='text-center'>
              <img src={member.img} alt={member.name} className='w-80 shadow-2xl-custom'/>
              <h2 className='text-dark-blue font-semib text-xl mt-6'>{member.name}</h2>
              <p className='text-dark-blue'>{member.position}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ethics Committee */}
      <div className='my-20'>
        <h1 className='font-headline text-dark-blue text-5xl text-center my-11'>Ethics Committee</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center'> 
          {ethics.map(member => (
            <div key={member.name} className='text-center'>
              <img src={member.img} alt={member.name} className='w-80 shadow-2xl-custom'/>
              <h2 className='text-dark-blue font-semib text-xl mt-6'>{member.name}</h2>
              <p className='text-dark-blue'>{member.position}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Persons */}
      <div className='my-20 mb-60'>
        <h1 className='font-headline text-dark-blue text-5xl text-center my-11'>Key Persons</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center'> 
          {keypersons.map(member => (
            <div key={member.name} className='text-center'>
              <img src={member.img} alt={member.name} className='w-80 shadow-2xl-custom'/>
              <h2 className='text-dark-blue font-semib text-xl mt-6'>{member.name}</h2>
              <p className='text-dark-blue'>{member.position}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Board;
