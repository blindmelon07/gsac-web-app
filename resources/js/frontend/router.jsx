import { createBrowserRouter } from 'react-router-dom';
import Default from './components/Layout/Default';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Board from './components/Pages/Board';
import Branches from './components/Pages/Branches';
import DataPrivacy from './components/Pages/DataPrivacy';
import Subscription from './components/Pages/Subscription';
import AnnualReport from './components/Pages/AnnualReport';
import Loans from './components/Pages/Loans';
import Savings from './components/Pages/Savings';
import Careers from './components/Pages/Careers';
import Insurance from './components/Pages/Insurance';
import OnlineLoan from './components/Pages/OnlineLoan';
import OnlineMembership from './components/Pages/OnlineMembership';
import Transfer from './components/Pages/Transfer';
import AflatounForm from './components/Pages/AflatounForm';
import Membership from './components/Pages/Membership';
import Calculator from './components/Pages/Calculator';
import Products from './components/Pages/Products';
import PaymentOptions from './components/Pages/PaymentOptions';
import Labcoop from './components/Pages/Labcoop';
import CustomerService from './components/Pages/CustomerService';
import YellowPages from './components/Pages/YellowPages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Home />, // Directly render Home component when landing on '/'
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/BOD',
        element: <Board />
      },
      {
        path: '/branches',
        element: <Branches />
      },
      {
        path: '/dataprivacy',
        element: <DataPrivacy />
      },
      {
        path: '/subscription',
        element: <Subscription />
      },
      {
        path: '/annualreport',
        element: <AnnualReport />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/loans',
        element: <Loans />
      },
      {
        path: '/savings',
        element: <Savings />
      },
      {
        path: '/careers',
        element: <Careers />
      },
      {
        path: '/insurance',
        element: <Insurance />
      },
      {
        path: '/onlineloan',
        element: <OnlineLoan />
      },
      {
        path: '/onlinemembership',
        element: <OnlineMembership />
      },
      {
        path: '/tmf',
        element: <Transfer />
      },
      {
        path: '/aflatounopeningform',
        element: <AflatounForm />
      },
      {
        path: '/membership',
        element: <Membership />
      },
      {
        path: '/paymentoptions',
        element: <PaymentOptions />
      },
      {
        path: '/loan-calculator',
        element: <Calculator />
      },
      {
        path: '/labcoop',
        element: <Labcoop />
      },      
      {
        path: '/customer-service-test1964',
        element: <CustomerService />
      },      {
        path: '/yellow-pages',
        element: <YellowPages />
      },
      
    ]
  },
]);

export default router;
