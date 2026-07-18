import { useState, useEffect } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "Who can be members of a cooperative?",
      answer: "Member should be at least 18 years old with visible means of income"
    },
    {
      question: "When can I avail loan products?",
      answer: "Once membership application is approved and upon depositing the required capital contribution/savings and payment of other fees—the person enters the rooster of regular members. Thereafter, the member needs to attend the Ownership Seminar-1: GSAC Loan Policies as prerequisite to loan availment."
    },
    {
      question: "Can I avail loans as an associate member?",
      answer: "Associate members are members who can save with GSAC. To avail loans, we"
    },
    {
      question: "Why should I join the cooperative?",
      answer: "Cooperative, exists and operates for the benefit of its patron members. At the same time, since the members are also the owners, they have a financial interest in the success of the cooperative--which sways them toward giving the coop their full support and patronage. Joining the Coop would also expand one’s Social asset or linkages."
    },
    {
      question: "What are the benefits that I can get from a cooperative?",
      answer: `
        •	Premium rates on deposits (Savings, Time Deposit, Special Savings: Education, Retirement)
        •	Low interest on loans
        •	Production and marketing assistance
        •	Dividend (Interest on Capital and Patronage Refund)
        •	Pension Program
        •	Medical/Damayan Program
        •	Capacity Building
      `
    },
    {
      question: "How does a co-op benefit the community?",
      answer: `
      
        a. A co-op boosts the local economy by…
          • Keeping profits in the community (more local spending, local resilience)
          • Creating more jobs.
          • Supporting local farmers.

        b. A co-op promotes a healthier community by…
          • Fostering a sense of community by participation (increased participation in local affairs as the members learn and practice democratic skills, established good ties among stakeholders)
          • Creating a business governed by and for its members (more equity, more accountability, sensible development, social integration)
          • Offering healthier, more natural food for everyone.

      `
    },
    {
      question: "What is the first thing to do when starting to be a member of a cooperative?",
      answer: "Submit application form to Information Section & attend Pre-Membership Education Seminar on the respective Branch/Satellite Office schedule."
    },
    {
      question: "When can we avail loan products?",
      answer: "Once membership application is approved and upon depositing the required capital contribution/savings and payment of other fees --- the person enters the rooster of regular members. Thereafter, the member needs to attend the Ownership Seminar-1: GSAC Loan Policies as prerequisite to loan availment. "
    },
    {
      question: "How frequent do we have to deposit in the cooperative?",
      answer: `It will depend on the member on how frequent they want to deposit in their account as long as they maintain their savings balance not below 500 and their share capital not below 4,000 within 2 years of their membership.

      Cooperatives have savings and capital build-up programs to allow the continuing growth of the members’ investment as their own economic conditions continue to improve. 

      Continuous or regular deposit is encouraged as part of the coop’s financial literacy program to grow your money, the cooperative way!`
    },
    {
      question: "How frequent do we have to pay for our Damayan Fund?",
      answer: "Damayan is an institutionalized “abuluyan” system in the organization to serve the members from “womb to tomb” Annual payment is required."
    },
    {
      question: "Is a cooperative a nonprofit?",
      answer: "A co-op operates on a not-for-profit basis. They operate to make a profit just like any other for-profit business except that the excess profits in a cooperative are returned to the members in the form of dividend."
    },
    {
      question: "What is dividend?",
      answer: `Net Surplus shall not be construed as profit, but as an excess of payments made by the members for the loans borrowed, or the goods and services availed by them from the cooperative and which shall be deemed to have been returned to them if the same is distributed as prescribed by the Coop Code.

      Dividend is the distribution of not less than thirty percent (30%) of the net surplus after deducting the statutory reserves based on the principle of equity. 

      It shall be made available to the members in the form of:

      a.	Interest on Capital (IOC) – payment to shareholders in an amount proportional to their respective ownership or amount of share capital owned; it should not exceed the normal rate of return on investments;
      b.	Patronage refund – essentially a refund issued to those who availed of the products and services of the cooperative, and is calculated based upon the amount that each patron spends at the cooperative in a given year; in no case shall the rate of patronage refund be more than twice the rate of interest on share capital.

      `
    },
    {
      question: "What are the advantages of a cooperative vs. other business forms?",
      answer: `
      Cooperatives are unique to other corporations because they have three distinguishing principles: user-owner, user-controlled and user-benefited. 

        • User-owned principle signifies that the users are the ones who are financing the cooperative by transacting business. 
        • User-controlled means that the Board of Directors is elected by the members of the cooperative and serves as the link between the membership and the manager. 
        • User-benefited indicates that the members are the ones profiting from the cooperative because patronage refunds are returned to the members based on the amount of business they conducted with the cooperative. 

      The uniqueness of cooperatives is that the customers, owners, patrons and members could be the same person.

      `
    },
    {
      question: "What is my role as a co-op member? ",
      answer: `
      Members play the roles of member, owner, investor, saver, borrower, and consumer/market as everybody endeavors to be an agent of change from within the family and transcends towards the community.

        -	Member	: I am governed by the by-laws principles and policies of the cooperative.
        -	Borrower	: I borrow to enhance boost the economic growth and sustain the well-being of my family, according to my needs and my capacity to pay.
        -	Owner		: I promote and patronize GSAC’s products and services, I value the election of efficient officers of the Cooperative.
        -	Investor	: I know where my share capital goes, I help sustain the growth and increase of Return on Investment.
        -	Saver		: I save to for any purpose and to achieve my goal.
        -	Patron of Change: My share capital helps other members and contributes to the development of a the community.

      `
    },
  ];

  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAccordion = (question) => {
    setActiveQuestion(activeQuestion === question ? null : question);
  };

  useEffect(() => {

    setActiveQuestion(null);
  }, []);

  return (
    <div className='mx-10 mb-28 lg:mx-40'>
      <span className='text-[10px] tracking-wide lg:text-xs text-dark-blue border border-dark-blue rounded-2xl py-[2px] px-2'>FAQS</span>
      <h1 className='text-4xl md:text-5xl lg:text-6xl font-headline text-dark-blue my-4'>Common Questions</h1>
      <h3 className='text-sm text-steel my-6'>Question not here? You may contact us or leave a message at our facebook page.</h3>
      {faqs.map((faq, index) => (
        <div key={index} className='mb-4'>
          <div className='rounded-md cursor-pointer'>
            <div
              className="flex justify-between items-center py-6 border-b border-light-steel"
              onClick={() => toggleAccordion(faq.question)}
            >
              <h2 className="text-sm md:text-base text-dark-blue">{faq.question}</h2>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className={`h-6 w-6 transform transition-transform ${activeQuestion === faq.question ? 'rotate-180' : 'rotate-0'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {activeQuestion === faq.question && (
              <div className="text-dark-text mt-2 p-4 bg-white rounded-md">
                {faq.answer.split('\n').map((line, i) => (
                  <p key={i}>
                    {line.trim()}
                    <br />
                  </p>
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
