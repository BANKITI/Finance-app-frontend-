
import { useNavigate } from 'react-router-dom';


const Notfound = () => {
const navigate = useNavigate()
  return (
    <div>
     <h2>404 | Page not found</h2><br />
     <button onClick={()=>navigate('/')}>Go to HomePage</button>   
    </div>
  )
}

export default Notfound