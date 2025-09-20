
import Home from './pages/Home';
import { Link, Route, createBrowserRouter, createRoutesFromElements, RouterProvider,  } from "react-router-dom";
import RootLayout from './layout/RootLayout';
import Notfound from './components/Notfound';
import Borrow from './pages/Borrow';
import Lend from './pages/Lend';
import Rate from './pages/Rate';
import Login from './components/Login';

import ContactLayout from './layout/ContactLayout';





const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        
        <Route path='/login' element={<Login/>}/>
        
        <Route path='/borrow' element={<Borrow/>}/>
        <Route path='/lend' element={<Lend/>}/>
        <Route path='/rate' element={<Rate/>}/>
        
        <Route path='/signup' element={<ContactLayout/>}>

           
      </Route>
      <Route path='*' element={<Notfound/>}/>
     

      
      </Route>
    )
  )
  return (
    
   <RouterProvider router={router}/>
   
   
    


      


  )
}

export default App;