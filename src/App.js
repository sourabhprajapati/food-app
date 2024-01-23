import './App.css';
import Aboutus from './component/Aboutus/Aboutus';
import Body from './component/body/Body';
import Contact from './component/contactus/Contact';
import Error from './component/error/Error';
import Header1 from './component/header/Header1';

import { createBrowserRouter ,Outlet} from "react-router-dom"
function App() {
  return (
    <div className="App">
       <Header1/>
       <Outlet/>
       
    </div>
  );
}

export const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<Aboutus/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ],
    errorElement:<Error/>
  },
 
])

export default App;
