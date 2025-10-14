
import { NavLink, useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate()
  return (
    
    <div className=' '>
      
      
    <div className='navbar text-[14px]'>

      
             
        <ul>
          <div className='flex flex-start justify-start items-start self-start'>
            BANKITI
          </div>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/how'><li>How It Works</li></NavLink>
            <NavLink to='/borrow'><li>Borrow</li></NavLink>
            <NavLink to='/lend'><li>Lend</li></NavLink>
            <NavLink to='/rate'><li>Rates & Fees</li></NavLink>
             <NavLink to='/support'><li>Support</li></NavLink>
             <div className='flex gap-7 ml-20 '>
              <NavLink to='/login'><li>Login</li></NavLink>
           

             <button onClick={() => navigate('/apply', {replace: true})}>Apply Now </button>
                </div>
        </ul>
        
  
         
        
     </div>   
    </div>
  ) 
}

export default Navbar;