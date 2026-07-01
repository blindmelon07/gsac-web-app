import { useState, useEffect } from 'react';
import { FiSearch, FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const directoryData = {
  agriculture: [
    {
      name: 'Triple 2 Agri-Industrial Corp.',
      address: 'Brgy. San Juan, Sorsogon City, Sorsogon',
      phone: '(056) 421-1234',
      email: 'info@triple2agri.ph',
      desc: 'Cacao, carabao, vermiculture, and organic vegetables.',
    },
    {
      name: 'Farm Level Grain Center (FLGC)',
      address: 'Brgy. Macabog, Sorsogon City, Sorsogon',
      phone: '(056) 421-5678',
      email: 'flgc@gsac.coop',
      desc: 'Post-harvest facility for rice and corn drying and milling.',
    },
    {
      name: 'Bicol Organic Farmers Co-op',
      address: 'Pili, Camarines Sur',
      phone: '(054) 477-2233',
      email: 'contact@bicolorganic.ph',
      desc: 'Organic certification and produce distribution.',
    },
    {
      name: 'GreenLeaf Agri Supplies',
      address: 'Legazpi City, Albay',
      phone: '(052) 480-9911',
      email: 'sales@greenleaf.ph',
      desc: 'Fertilizers, seeds, and farming equipment.',
    },
  ],
  healthcare: [
    {
      name: 'GSAC General Hospital',
      address: 'Sorsogon City, Sorsogon',
      phone: '(056) 421-0001',
      email: 'info@gsachospital.ph',
      desc: 'Patient-centered medical and diagnostic services.',
    },
    {
      name: 'GSAC Diagnostic Center',
      address: 'Sorsogon City, Sorsogon',
      phone: '(056) 421-0002',
      email: 'diagnostics@gsac.coop',
      desc: 'Laboratory, imaging, and wellness checkups.',
    },
    {
      name: 'GSAC Pharmacy',
      address: 'Multiple branches, Bicol Region',
      phone: '(056) 421-0003',
      email: 'pharmacy@gsac.coop',
      desc: 'Affordable medicines for members and the public.',
    },
  ],
  retail: [
    {
      name: 'GSAC Mart - Main',
      address: 'Sorsogon City, Sorsogon',
      phone: '(056) 421-3001',
      email: 'mart@gsac.coop',
      desc: 'Groceries, household goods, and member discounts.',
    },
    {
      name: 'GSAC Mart - Legazpi',
      address: 'Legazpi City, Albay',
      phone: '(052) 480-3002',
      email: 'mart.legazpi@gsac.coop',
      desc: 'Full-service supermarket branch.',
    },
  ],
  hospitality: [
    {
      name: 'GSAC Hotel',
      address: 'Sorsogon City, Sorsogon',
      phone: '(056) 421-4001',
      email: 'reservations@gsachotel.ph',
      desc: 'Comfortable lodging with event and conference spaces.',
    },
  ],
  financial: [
    {
      name: 'GSAC Insurance Services',
      address: 'Sorsogon City, Sorsogon',
      phone: '(056) 421-5001',
      email: 'insurance@gsac.coop',
      desc: 'Life, non-life, and member protection plans.',
    },
    {
      name: 'GSAC Credit Services',
      address: 'All branches',
      phone: '(056) 421-5002',
      email: 'credit@gsac.coop',
      desc: 'Loans, savings, and time deposits.',
    },
  ],
  education: [
    {
      name: 'GSAC Cooperative Training Institute',
      address: 'Sorsogon City, Sorsogon',
      phone: '(056) 421-6001',
      email: 'training@gsac.coop',
      desc: 'Member education and leadership development seminars.',
    },
  ],
};

const categories = [
  { id: 'agriculture', label: 'Agriculture' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'retail', label: 'Retail & Mart' },
  { id: 'hospitality', label: 'Hospitality' },
  { id: 'financial', label: 'Financial Services' },
  { id: 'education', label: 'Education' },
];

const YellowPages = () => {
  const [activeCategory, setActiveCategory] = useState('agriculture');
  const [searchQuery, setSearchQuery] = useState('');
  const [apiListings, setApiListings] = useState(null);

  useEffect(() => {
    fetch('/api/cms/yellow-pages')
      .then(r => r.json())
      .then(data => {
        if (data.length > 0) setApiListings(data);
      })
      .catch(() => {});
  }, []);

  // Group API listings by category if available, else fall back to hardcoded
  const getListings = (cat) => {
    if (apiListings) return apiListings.filter(l => l.category === cat);
    return directoryData[cat] || [];
  };

  const listings = getListings(activeCategory);
  const filteredListings = listings.filter((item) => {
    const q = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.address.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q)
    );
  });

  return (
    <div>
      <div className="p-10 lg:p-28 h-100 bg-[linear-gradient(rgba(250,204,21,0.8),rgba(250,204,21,0.8)),url('assets/ft3.jpg')] bg-cover bg-center bg-no-repeat">
        <h1 className="font-headline text-white text-4xl lg:text-6xl">Yellow Pages</h1>
        <h2 className="text-sm text-white my-6">
          Discover and support member-owned businesses within the GSAC community — from trusted local services to growing homegrown brands.
        </h2>
      </div>

      <div className="mx-10 my-10 xl:mx-40 xl:my-10 xl:mb-40">
        {/* Search bar */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-xl">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-steel" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, address, or service..."
              className="w-full pl-12 pr-4 py-3 border border-powder rounded-sm text-sm text-dark-text focus:outline-none focus:border-blue"
            />
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 text-sm md:text-md">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`px-4 py-2 rounded-sm ${
                activeCategory === cat.id
                  ? 'bg-blue text-white'
                  : 'bg-powder text-dark-text'
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Listings */}
        <div className="mt-10">
          <h2 className="font-headline text-3xl lg:text-4xl text-dark-blue text-center mb-2">
            {categories.find((c) => c.id === activeCategory)?.label}
          </h2>
          <p className="text-blue text-center text-sm mb-10">
            {filteredListings.length}{' '}
            {filteredListings.length === 1 ? 'listing' : 'listings'} found
          </p>

          {filteredListings.length === 0 ? (
            <p className="text-center text-dark-text text-sm py-10">
              No listings match your search.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-powder rounded-xl p-6 transition-transform duration-300 transform hover:-translate-y-1 cursor-pointer"
                >
                  <p className="text-dark-blue font-semib text-lg">{item.name}</p>
                  <p className="text-dark-text text-sm mt-2 mb-4">{item.desc}</p>
                  <div className="flex items-start gap-2 text-sm text-dark-text mt-2">
                    <FiMapPin className="text-blue mt-1 flex-shrink-0" />
                    <span>{item.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-dark-text mt-2">
                    <FiPhone className="text-blue flex-shrink-0" />
                    <span>{item.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-dark-text mt-2">
                    <FiMail className="text-blue flex-shrink-0" />
                    <span>{item.email}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YellowPages;