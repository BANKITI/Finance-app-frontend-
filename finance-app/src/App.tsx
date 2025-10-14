
import Home from './pages/Home';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider,  } from "react-router-dom";
import RootLayout from './layout/RootLayout';
import Notfound from './components/Notfound';
import Borrow from './pages/Borrow';
import Lend from './pages/Lend';
import Rate from './pages/Rate';
import Login from './pages/Login';

import ContactLayout from './layout/ContactLayout';



import How from './pages/How';
import Support from './pages/Support';





const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/how' element={<How/>}/>
       
       
        <Route path='/borrow' element={<Borrow/>}/>
        <Route path='/lend' element={<Lend/>}/>
        <Route path='/rate' element={<Rate/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/apply' element={<ContactLayout/>}>

           
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