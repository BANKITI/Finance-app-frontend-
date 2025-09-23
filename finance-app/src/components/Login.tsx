
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';



const Login = () => {
    const navigate = useNavigate()
   
  const [formData, setFormData] = useState({
    email: '',    
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setSuccess('Registration successful!');
    console.log('Form Submitted:', formData);
  };

  return (
    <div >

      <div className="m-5 p-7 flex gap-15 justify-center items-center ">
      <div className=" ">
        
        
      

        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl  mb-6 text-center"> <div><b>Account Login</b></div>

             <div>If you are already a member you can login with your email address and password.</div><hr />
         
          </h2>
            

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email Address</label>
            <input 
              type="text" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border p-4  focus:ring-blue-400
               focus:outline-none text-black focus:ring-2"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium ">Password</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border p-4  focus:ring-blue-400
               focus:outline-none text-black focus:ring-2"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium ">Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword" 
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border p-4  focus:ring-blue-400
               focus:outline-none text-black focus:ring-2"
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
          <br />

          <button 
            type="submit" 
            className="w-full bg-[#CAFE33]  text-black font-semibold py-2 px-4 rounded-xl  "
          >
            Login account
            
          </button>

          

          
          
         

        </form>
        
        Don`t have an account? <div className='Log-button'><button onClick={() => navigate('/signup',{replace: true})}> <b>Login</b> </button></div>

       
      </div>

     </div>


       

       
    </div>
   

  );
};

export default Login;