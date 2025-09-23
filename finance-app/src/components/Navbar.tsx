
import { NavLink, useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate()
  return (
    
    <div className='navbar'>
      <div>

        BANKITI

      </div>
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            
            <NavLink to='/borrow'><li>Borrow</li></NavLink>
            <NavLink to='/lend'><li>Lend/Invest</li></NavLink>
            <NavLink to='/rate'><li>Rates</li></NavLink>
            
        </ul>
        <button onClick={() => navigate('/signup', {replace: true})}>Sign up</button>
  
         
        
        
    </div>
  ) 
}

export default Navbar;