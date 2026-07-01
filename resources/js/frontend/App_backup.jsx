import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './router';
import { ContextProvider } from './contexts/ContextProvider';
import CustomerServiceWidget from './components/CustomerServiceWidget';

const App = () => {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.type = "text/javascript";
  //   script.id = "zohodeskasap";
  //   script.defer = true;

  //   script.innerHTML = `
  //     var d=document;
  //     s=d.createElement("script"),
  //     s.type="text/javascript",
  //     s.id="zohodeskasapscript",
  //     s.defer=!0,
  //     s.nonce="{place_your_nonce_value_here}",
  //     s.src="https://desk.zoho.com/portal/api/web/asapApp/1190965000000589001?orgId=902191897",
  //     t=d.getElementsByTagName("script")[0],
  //     t.parentNode.insertBefore(s,t),

  //     window.ZohoDeskAsapReady=function(cb){
  //       var q=window.ZohoDeskAsap__asyncalls=window.ZohoDeskAsap__asyncalls||[];
  //       if(window.ZohoDeskAsapReadyStatus){
  //         cb && q.push(cb);
  //         q.forEach(f=>f&&f());
  //         window.ZohoDeskAsap__asyncalls=null;
  //       } else {
  //         cb && q.push(cb)
  //       }
  //     };
  //   `;

  //   document.body.appendChild(script);

  //   // Add sparkles animation after widget loads
  //   const addSparkles = () => {
  //     const style = document.createElement('style');
  //     style.innerHTML = `
  //       @keyframes sparkle {
  //         0%, 100% { opacity: 0; transform: scale(0); }
  //         50% { opacity: 1; transform: scale(1); }
  //       }
        
  //       .zoho-widget-sparkles {
  //         position: fixed;
  //         right: 60px;
  //         bottom: 20px;
  //         pointer-events: none;
  //         z-index: 999999;
  //         width: 80px;
  //         height: 120px;
  //       }
        
  //       .zoho-widget-sparkles span {
  //         position: absolute;
  //         font-size: 48px;
  //         font-weight: bold;
  //         color: #ffd700;
  //         animation: sparkle 1.5s infinite;
  //         filter: drop-shadow(0 0 6px rgba(255, 215, 0, 0.9));
  //         font-family: Arial, sans-serif;
  //       }
        
  //       .zoho-widget-sparkles span:nth-child(1) {
  //         top: 10px;
  //         left: 15px;
  //         animation-delay: 0s;
  //       }
        
  //       .zoho-widget-sparkles span:nth-child(2) {
  //         top: 45px;
  //         left: 5px;
  //         animation-delay: 0.3s;
  //         font-size: 42px;
  //       }
        
  //       .zoho-widget-sparkles span:nth-child(3) {
  //         top: 80px;
  //         left: 20px;
  //         animation-delay: 0.6s;
  //         font-size: 45px;
  //       }
  //     `;
  //     document.head.appendChild(style);

  //     // Add sparkles directly to body with fixed positioning
  //     const sparkleContainer = document.createElement('div');
  //     sparkleContainer.className = 'zoho-widget-sparkles';
  //     sparkleContainer.innerHTML = '<span>?</span><span>?</span><span>?</span>';
  //     document.body.appendChild(sparkleContainer);
      
  //     console.log('Question marks added!'); // Debug log
  //   };

  //   // Add sparkles after a short delay to ensure widget is loaded
  //   setTimeout(addSparkles, 2000);

  //   return () => {
  //     const existingScript = document.getElementById("zohodeskasap");
  //     if (existingScript) {
  //       document.body.removeChild(existingScript);
  //     }
  return (
    <ContextProvider>
      <RouterProvider router={router}/>
      <CustomerServiceWidget />
    </ContextProvider>
  )
};

export default App;
