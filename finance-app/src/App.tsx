
import Home from './pages/Home';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider,  } from "react-router-dom";
import RootLayout from './layout/RootLayout';
import ContactLayout from './layout/ContactLayout';
import Contactinfo from './components/Contactinfo';
import ContactForm from './components/Contact';
import Notfound from './components/Notfound';
import How from './pages/How';
import Borrow from './pages/Borrow';
import Lend from './pages/Lend';
import Rate from './pages/Rate';



const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/how' element={<How/>}/>
        <Route path='/borrow' element={<Borrow/>}/>
        <Route path='/lend' element={<Lend/>}/>
        <Route path='/rate' element={<Rate/>}/>
        
        <Route path='/login' element={<ContactLayout/>}>
           <Route path='info' element={<Contactinfo/>}/>
           <Route path='form' element={<ContactForm/>}/>
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