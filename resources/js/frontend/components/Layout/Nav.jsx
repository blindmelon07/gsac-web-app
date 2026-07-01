import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const logo = '/logo.svg';


const Nav = () => {

  // Load JustCall script
  useEffect(() => {
    if (document.getElementById('justcall-ajs')) return; // Prevent duplicate loading

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.id = 'justcall-ajs';
    script.src = 'https://cdn.justcall.io/app/assets/js/justcall.js?uhash=dGxxNWprQXovdlFIVHM2WkZXS1JFZz09';
    script.onload = script.onreadystatechange = function() {
      const rs = this.readyState;
      if (rs && rs !== 'complete' && rs !== 'loaded') return;
      try {
        window.justcall.init();
      } catch (e) {
        console.log("JustCall initialization failed", e);
      }
    };
    
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  }, []);

  const rippleEffect = (event) => {
    const btn = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`;
    circle.classList.add("ripple");

    const ripple = btn.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    btn.appendChild(circle);
  };

  const handleCallClick = (event) => {
    rippleEffect(event);
    // Trigger JustCall widget
    if (window.justcall && typeof window.justcall.openWidget === 'function') {
      window.justcall.openWidget();
    } else if (window.justcall && typeof window.justcall.open === 'function') {
      window.justcall.open();
    } else {
      console.log('JustCall widget not available yet');
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isOnlineFormsMenuOpen, setIsOnlineFormsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Close all submenus when main menu is toggled
    setIsAboutMenuOpen(false);
    setIsProductsMenuOpen(false);
    setIsOnlineFormsMenuOpen(false);
  };

  const toggleAboutMenu = () => {
    setIsAboutMenuOpen(!isAboutMenuOpen);
    // Close other submenus when About menu is toggled
    setIsProductsMenuOpen(false);
    setIsOnlineFormsMenuOpen(false);
  };

  const toggleProductsMenu = () => {
    setIsProductsMenuOpen(!isProductsMenuOpen);
    // Close other submenus when Products & Services menu is toggled
    setIsAboutMenuOpen(false);
    setIsOnlineFormsMenuOpen(false);
  };

  const toggleOnlineFormsMenu = () => {
    setIsOnlineFormsMenuOpen(!isOnlineFormsMenuOpen);
    // Close other submenus when Online Forms menu is toggled
    setIsAboutMenuOpen(false);
    setIsProductsMenuOpen(false);
  };
  
  
  return (
    <header className="xl:mx-32 mx-6 py-6 flex items-center justify-between text-dark-blue">
      <Link to='/'>
        <img src={logo} className='w-32'></img>
      </Link>
      <nav className="hidden lg:flex">
        <ul className="text-sm lg:text-base flex items-center justify-center">

          <li className="relative group px-10 py-2">
          <Link to='/about'><button className="hover:opacity-80 cursor-pointer font-semib text-sm">About Us</button></Link>
          <div
            className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
            <div className="relative top-6 p-6 bg-white rounded-xl shadow-3xl w-full">
              <div
                className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12.65rem] duration-500 ease-in-out rounded-sm">
              </div>

              <div className="relative z-10">
                <Link to='/about'
                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-sky-50 transition ease-in-out duration-300 text-dark-blue font-semib hover:text-blue">
                  About GSAC
                  <p className="text-steel text-[15px] font-normal">GSAC&apos;s mission, vision, and story.</p>
                </Link>
                <div className="mt-6 grid grid-cols-2 gap-6">
                  <div>
                    <p className="uppercase tracking-wider text-steel font-medium text-[13px]">GSAC</p>
                    <ul className="mt-3 text-[15px]">
                      <li>
                        <Link to="/BOD" className="text-dark-blue hover:text-blue ease-in py-1 block font-normal">
                          Board of Directors
                        </Link>
                      </li>
                      <li>
                        <Link to="/branches" className="text-dark-blue hover:text-blue ease-in py-1 block font-normal">
                          Branches
                        </Link>
                      </li>
                      <li>
                        <Link to="/annualreport" className="text-dark-blue hover:text-blue ease-in py-1 block font-normal">
                          Annual Report
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="uppercase tracking-wider text-steel font-medium text-[13px]">For you</p>
                    <ul className="mt-3 text-[15px]">
                      <li>
                        <Link to="/subscription" className="text-dark-blue hover:text-blue transition ease-in-out duration-500 py-1 block font-normal">
                          Subscription Agreement
                        </Link>
                      </li>
                      <li>
                        <Link to="/dataprivacy" className="text-dark-blue hover:text-blue transition ease-in-out duration-500 py-1 block font-normal">
                          Data Privacy & Policy
                        </Link>
                      </li>
                      <li>
                        <Link to="/careers" className="text-dark-blue hover:text-blue transition ease-in-out duration-500 py-1 block font-normal">
                          Careers
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

          <li className="relative group px-6 py-2">
          <Link to='/products'><button className="hover:opacity-80 cursor-pointer font-semib text-sm">Products & Services</button></Link>
            <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-3xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="uppercase tracking-wider text-steel text-[13px]">Products & Services</p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <Link to="/loans" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-sky-50 hover:via-blue-50 transition ease-in-out duration-500 text-dark hover:text-blue font-semib">
                            Loans
                            <p className="text-steel font-normal">To keep up with finances.</p>
                          </Link>
                          <Link to="/loan-calculator" className="block w-fit mt-1 mb-2 px-3 py-1 text-xs font-normal text-white bg-blue rounded-full hover:bg-dark-blue transition ease-in-out duration-300">
                          Loan Calculator →
                          </Link>
                          </li>
                          <li>
                          <Link to="/savings" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-sky-50 hover:via-blue-50 transition ease-in-out duration-300 text-dark hover:text-blue font-semib">
                            Savings
                            <p className="text-steel font-normal">Grow your money with GSAC.</p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/insurance" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-sky-50 hover:via-blue-50 transition ease-in-out duration-300 text-dark hover:text-blue font-semib">
                            Insurance
                            <p className="text-steel font-normal">For the &apos;ifs&apos; in life.</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="uppercase tracking-wider text-steel font-medium text-[13px]">Allied Services</p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <Link to="https://hotel-gsac.com" target="_blank" rel="noreferrer" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-sky-50 hover:via-blue-50 transition ease-in-out duration-300 text-dark hover:text-blue font-semib">
                            Hotel GSAC
                            <p className="text-steel font-normal">Gubat, Sorsogon</p>
                          </Link>
                        </li>
                        <li>
                          <Link to="https://t2aic.com" target="_blank" rel="noreferrer" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-sky-50 hover:via-blue-50 transition ease-in-out duration-300 text-dark hover:text-blue font-semib">
                            Triple 2 Agri-Industrial Corp.
                            <p className="text-steel font-normal">Gubat, Sorsogon</p>
                          </Link>
                        </li>
                        <li>
                          <Link to="https://gghi.com" target="_blank" rel="noreferrer" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-sky-50 hover:via-blue-50 transition ease-in-out duration-300 text-dark hover:text-blue font-semib">
                            GSAC General Hospital Inc.
                            <p className="text-steel font-normal">Sorsogon City</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>


          <li className="relative group px-10 py-2">
            <button className="hover:opacity-80 cursor-default font-semib text-sm">Membership & Online Forms</button>
            <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-3xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                <div className="relative z-10">
                  <ul className="text-[15px]">
                    <Link to='/membership'
                      className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-sky-50 transition ease-in-out duration-300 text-dark-blue font-semib hover:text-blue">
                      GSAC Membership
                      <p className="text-steel text-[15px] font-normal text-xs mb-2">Learn more about GSAC Membership.</p>
                    </Link>
                    <Link to='/labcoop'
                      className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-sky-50 transition ease-in-out duration-300 text-dark-blue font-semib hover:text-blue">
                      GSAC Lab Coop
                      <p className="text-steel text-[15px] font-normal text-xs mb-2">Learn more about GSAC Lab Coop.</p>
                    </Link>
                    <li className='mt-2'>
                      <Link to="/onlinemembership" className="text-dark-blue hover:text-blue py-1 block font-normal">Membership Form</Link>
                    </li>
                    <li>
                      <Link to="/onlineloan" className="text-dark-blue hover:text-blue py-1 block font-normal">Loan Application Form</Link>
                    </li>
                    <li>
                      <Link to="/tmf" className="text-dark-blue hover:text-blue py-1 block font-normal">TMF</Link>
                    </li>
                    <li>
                      <Link to="aflatounopeningform" className="text-dark-blue hover:text-blue py-1 block font-normal">Aflatoun / YSTS</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group px-10 py-2">
            <Link to='/paymentoptions' className="hover:opacity-80 cursor-pointer font-semib text-sm">Payment Options</Link>
        </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <div className='hidden flex-col lg:flex xl:flex-row items-center gap-2'>
              <Link to='/yellow-pages'>
                <button
                  type="button"
                  id="bt"
                 className='text-sm rounded-md px-4 py-2 min-w-max overflow-hidden relative bg-[#FFF4CC] text-[#B7791F] border-2 border-white hover:border-[#F6D365] transition-all duration-300 ease-in flex items-center justify-center'
                  onClick={rippleEffect}>
                  Yellow Pages
                </button>
              </Link>
              
              <button
                type="button"
                className='text-sm rounded-full px-6 py-2 min-w-max overflow-hidden relative bg-blue text-white border-4 border-white hover:border-blue-600 transition-all duration-300 ease-in flex items-center gap-2'
                onClick={handleCallClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Us
              </button>
            </div>
          </li>
        </ul>


{/* -------------------------MOBILE MENU------------------------- */}


  <div className="lg:hidden font-normal">

      <button
        className={`fixed top-5 right-5 z-50 m-2 text-${isOpen ? 'white' : 'dark-blue'} flex items-center justify-center`}
        onClick={toggleMenu}
      >

        <div className="w-5 h-4 m-2 flex flex-col justify-between">
          
          <span
            className={`block h-0.5 bg-${isOpen ? 'white' : 'dark-blue'} rounded-full transition-transform duration-300 ${
              isOpen ? 'transform rotate-45 translate-y-1' : 'translate-y-0'
            }`}
          ></span>

          <span
            className={`block h-0.5 bg-dark-blue rounded-full transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>

          <span
            className={`block h-0.5 bg-${isOpen ? 'white' : 'dark-blue'} rounded-full transition-transform duration-300 ${
              isOpen ? 'transform -rotate-45 -translate-y-2.5' : 'translate-y-0'
            }`}
          ></span>
        </div>
      </button>
 
      <div
        className={`fixed top-0 right-0 w-full h-full bg-dark-blue z-40 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
    
      <Link to='/' onClick={toggleMenu}><p className={`text-4xl m-7 ${isOpen ? 'text-white' : 'hidden'}`}>GSAC</p></Link>
       

      <div className="flex flex-col w-full h-full">
          
          
        <span className='text-white text-xl px-7 pt-4 block border-[#3a5394] cursor-pointer transition-all duration-500 ease-in-out ' onClick={toggleAboutMenu} >About</span>
        <span className='text-sm text-[#5068A5] px-7 pb-6'>All about GSAC—its mission, vision, and story.</span>
          {isAboutMenuOpen && (
              
              <ul className='text-lg ml-2'>


                  <Link to='/about' className="text-white px-6 pb-4 block  border-[#3a5394]" onClick={toggleMenu} >About</Link>

                  <Link to='/BOD' className="text-white px-6 py-4 block border-t border-[#3a5394]" onClick={toggleMenu}>Board of Directors</Link>

                  <Link to='/annualreport' className="text-white px-6 py-4 block border-t border-[#3a5394]" onClick={toggleMenu}>Annual Report</Link>

                  <Link to='/careers' className="text-white px-6 py-4 block border-t border-[#3a5394]" onClick={toggleMenu}>Careers</Link>

              </ul>
          )}
          
          
            <span className="text-white text-xl px-7 pt-4 block border-t border-[#3a5394] cursor-pointer" onClick={toggleProductsMenu}>Products & Services</span>
            <span className='text-sm text-[#5068A5] px-7 pb-6'>Know about loans, savings, insurance, etc..</span>
            {isProductsMenuOpen && (
              <ul className='text-lg ml-2'>
                
                  <Link to='/loans' className="text-white px-6 pb-4 block" onClick={toggleMenu}>Loans</Link>
                
                
                  <Link to='/savings' className="text-white px-6 py-4 block border-t border-[#3a5394]" onClick={toggleMenu}>Savings</Link>

                  <Link to='/insurance' className="text-white px-6 py-4 block border-t border-[#3a5394]" onClick={toggleMenu}>Insurance</Link>
                
              </ul>
            )}
          
          
            <span className="text-white text-xl px-7 pt-4 block border-t border-[#3a5394] cursor-pointer" onClick={toggleOnlineFormsMenu}>Membership & Online Forms</span>
            <span className='text-sm text-[#5068A5] px-7 pb-6'>Apply for loans,membership, or transfer, online.</span>
            {isOnlineFormsMenuOpen && (
              <ul className='text-lg ml-2'>
                
                  <Link to='/onlineloan' className="text-white px-6 pb-4 block" onClick={toggleMenu}>Online Loan Application</Link>
              
                  <Link to='/onlinemembership' className="text-white px-6 py-4 block border-t border-[#3a5394]" onClick={toggleMenu}>Online Membership Application</Link>

                  <Link to='/aflatounopeningform' className="text-white px-6 py-4 block border-t border-[#3a5394]" onClick={toggleMenu}>Aflatoun/YSTS</Link>

                  <Link to='/tmf' className="text-white px-6 py-4 block border-t border-[#3a5394]" onClick={toggleMenu}>TMF</Link>
                  
                
              </ul>

            )}

            <Link to='/paymentoptions' className="text-white text-xl px-7 py-6 block border-t border-[#3a5394]" onClick={toggleMenu}>Payment Options</Link>

            <Link to='/loan-calculator'>
              <span className='text-white text-xl px-7 pt-4 block border-t border-[#3a5394] cursor-pointer transition-all duration-500 ease-in-out' onClick={toggleMenu}>Loan Calculator</span>
              <span className='text-sm text-[#5068A5] px-7 pb-6'>Tool for loan estimation purposes.</span>
            </Link>


        </div>
      </div>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </div>

        
      </nav>
    </header>
  );
};

export default Nav;