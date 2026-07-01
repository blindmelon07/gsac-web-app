import { useState, useEffect } from 'react';

const FALLBACK_FAQS = [
  { id: 'f1', question: "Who can be members of a cooperative?", answer: "Member should be at least 18 years old with visible means of income." },
  { id: 'f2', question: "When can I avail loan products?", answer: "Once membership application is approved and upon depositing the required capital contribution/savings and payment of other fees, the person enters the roster of regular members. Thereafter, the member needs to attend the Ownership Seminar-1: GSAC Loan Policies as prerequisite to loan availment." },
  { id: 'f3', question: "Why should I join the cooperative?", answer: "Cooperative exists and operates for the benefit of its patron members. At the same time, since the members are also the owners, they have a financial interest in the success of the cooperative. Joining the Coop would also expand one's social assets or linkages." },
  { id: 'f4', question: "What are the benefits that I can get from a cooperative?", answer: "• Premium rates on deposits (Savings, Time Deposit, Special Savings)\n• Low interest on loans\n• Production and marketing assistance\n• Dividend (Interest on Capital and Patronage Refund)\n• Pension Program\n• Medical/Damayan Program\n• Capacity Building" },
  { id: 'f5', question: "How does a co-op benefit the community?", answer: "A co-op boosts the local economy by keeping profits in the community, creating more jobs, and supporting local farmers. It also fosters a sense of community by encouraging participation in local affairs." },
  { id: 'f6', question: "What is the first thing to do when starting to be a member?", answer: "Submit application form to Information Section & attend Pre-Membership Education Seminar on the respective Branch/Satellite Office schedule." },
  { id: 'f7', question: "Is a cooperative a nonprofit?", answer: "A co-op operates on a not-for-profit basis. They operate to make a profit like any other business, except that the excess profits are returned to the members in the form of dividend." },
  { id: 'f8', question: "What is dividend?", answer: "Dividend is the distribution of not less than thirty percent (30%) of the net surplus after deducting the statutory reserves. It is made available in the form of Interest on Capital (IOC) and Patronage Refund." },
];

const FAQ = () => {
  const [faqs, setFaqs] = useState(FALLBACK_FAQS);
  const [activeQuestion, setActiveQuestion] = useState(null);

  useEffect(() => {
    fetch('/api/cms/faqs')
      .then(r => r.json())
      .then(data => { if (data.length > 0) setFaqs(data); })
      .catch(() => {});
    setActiveQuestion(null);
  }, []);

  const toggleAccordion = (id) => setActiveQuestion(activeQuestion === id ? null : id);

  return (
    <div className='mx-10 mb-28 lg:mx-40'>
      <span className='text-[10px] tracking-wide lg:text-xs text-dark-blue border border-dark-blue rounded-2xl py-[2px] px-2'>FAQS</span>
      <h1 className='text-4xl md:text-5xl lg:text-6xl font-headline text-dark-blue my-4'>Common Questions</h1>
      <h3 className='text-sm text-steel my-6'>Question not here? You may contact us or leave a message at our facebook page.</h3>

      {faqs.map((faq) => (
        <div key={faq.id} className='mb-4'>
          <div className='rounded-md cursor-pointer'>
            <div className="flex justify-between items-center py-6 border-b border-light-steel" onClick={() => toggleAccordion(faq.id)}>
              <h2 className="text-sm md:text-base text-dark-blue">{faq.question}</h2>
              <svg xmlns='http://www.w3.org/2000/svg' className={`h-6 w-6 transform transition-transform flex-shrink-0 ${activeQuestion === faq.id ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {activeQuestion === faq.id && (
              <div className="text-dark-text mt-2 p-4 bg-white rounded-md">
                {faq.answer.split('\n').map((line, i) => (
                  <p key={i}>{line.trim()}<br /></p>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
