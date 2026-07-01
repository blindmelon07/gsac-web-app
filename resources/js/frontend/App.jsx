import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './router';
import { ContextProvider } from './contexts/ContextProvider';
import FreshdeskWidget from './components/FreshdeskWidget';

const App = () => {
  return (
    <ContextProvider>
      <RouterProvider router={router}/>
      <FreshdeskWidget />
    </ContextProvider>
  )
};

export default App;