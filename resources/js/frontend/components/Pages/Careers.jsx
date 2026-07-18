import { useState, useEffect } from 'react';

const Careers = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('/api/cms/jobs')
      .then(r => r.json())
      .then(data => setJobs(data))
      .catch(() => {});
  }, []);

  return (
    <div>
      <div className='mx-10 lg:mx-40 my-10 lg:my-20 justify-center'>
        <h1 className='font-headline text-5xl text-dark-blue text-center'>Careers</h1>
        <p className='text-blue text-center text-sm my-4'>Start your career with GSAC.</p>

        {jobs.length === 0 ? (
          <p className='text-gray-text text-center text-sm my-40'>No new job posting at the moment.</p>
        ) : (
          <div className='flex flex-col gap-6 mt-10'>
            {jobs.map(job => (
              <div key={job.id} className='bg-white shadow-2xl-custom rounded-xl p-6 lg:p-10'>
                <h2 className='text-dark-blue text-xl font-semib'>{job.title}</h2>
                {job.department && <p className='text-blue text-sm my-1'>{job.department}</p>}
                <p className='text-sm text-dark-text my-2 whitespace-pre-line'>{job.description}</p>
                {job.requirements && (
                  <>
                    <h3 className='text-dark-blue text-sm font-semib mt-4'>Requirements</h3>
                    <p className='text-sm text-dark-text my-2 whitespace-pre-line'>{job.requirements}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
export default Careers