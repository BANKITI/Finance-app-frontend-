
import Home from './pages/Home';
import Products from "./pages/Products";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider,  } from "react-router-dom";
import About from "./pages/About"
import RootLayout from './layout/RootLayout';
import ContactLayout from './layout/ContactLayout';
import Contactinfo from './components/Contactinfo';
import ContactForm from './components/Contact';
import Notfound from './components/Notfound';



const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactLayout/>}>
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