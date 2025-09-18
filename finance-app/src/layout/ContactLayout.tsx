
import Signup from "../pages/Signup"
import { Outlet } from 'react-router-dom'

const ContactLayout = () => {
  return (
    <div>
        <Signup/>
        
        <Outlet/>
    </div>
  )
}

export default ContactLayout