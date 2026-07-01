import Nav from './Nav';
import Footer from './Footer'
import { Outlet } from "react-router";

function Default() {
  
  return ( 
    <div>

      <div>
        <Nav />
      </div>

      <main>
            <Outlet/>
      </main>

      <div>
        <Footer />
      </div>
      
    </div>
  );
}

export default Default;