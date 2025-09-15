
import Contact from "../pages/Login"
import { Outlet } from 'react-router-dom'

const ContactLayout = () => {
  return (
    <div>
        <Contact/>
        <Outlet/>
    </div>
  )
}

export default ContactLayout