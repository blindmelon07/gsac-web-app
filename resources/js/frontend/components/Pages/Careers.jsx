import { useEffect, useState } from 'react';

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/cms/jobs')
      .then(r => r.json())
      .then(data => { setJobs(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className='mx-10 lg:mx-40 my-10 lg:my-20 justify-center'>
        <h1 className='font-headline text-5xl text-dark-blue text-center'>Careers</h1>
        <p className='text-blue text-center text-sm my-4'>Start your career with GSAC.</p>

        {loading && <p className='text-gray-text text-center text-sm my-20'>Loading...</p>}

        {!loading && jobs.length === 0 && (
          <p className='text-gray-text text-center text-sm my-40'>No new job postings at the moment.</p>
        )}

        {!loading && jobs.length > 0 && (
          <div className='mt-10 flex flex-col gap-6 max-w-3xl mx-auto'>
            {jobs.map(job => (
              <div key={job.id} className='border border-baby rounded-xl p-6'>
                <div className='flex items-start justify-between'>
                  <div>
                    <h2 className='font-semib text-dark-blue text-xl'>{job.title}</h2>
                    {job.department && <p className='text-sm text-steel mt-1'>{job.department}</p>}
                  </div>
                  <span className='text-xs bg-blue text-white px-3 py-1 rounded-full'>Open</span>
                </div>
                <p className='text-sm text-dark-text mt-4 leading-relaxed'>{job.description}</p>
                {job.requirements && (
                  <div className='mt-4'>
                    <p className='text-sm font-semib text-dark-blue mb-2'>Requirements:</p>
                    <p className='text-sm text-dark-text leading-relaxed whitespace-pre-line'>{job.requirements}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Careers;
