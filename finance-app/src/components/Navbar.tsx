
import logo from "../assets/react.svg"
import { NavLink, useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate()
  return (
    
    <div className='navbar'>
      <div className="flex">

        <img src={logo} alt="" width="" />BANKITI</div>
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            < NavLink to='/how'><li>How It Works</li></NavLink>
            <NavLink to='/borrow'><li>Borrow</li></NavLink>
            <NavLink to='/lend'><li>Lend/Invest</li></NavLink>
            <NavLink to='/rate'><li>Rates & Fees</li></NavLink>
            {/* <NavLink to='/login'><li>Log in</li></NavLink> */}
        </ul>
        <button onClick={() => navigate('/login',{replace: true})}>Log in</button>
    </div>
  )
}

export default Navbar;