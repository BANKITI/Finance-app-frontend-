

import { useState } from 'react';



const Login = () => {
   
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

      <div className="flex items-center justify-center gap-10 flex-row-reverse ">
      <div className="border rounded-2xl h-120 w-130">
        
        
      

        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl  mb-6 text-center"> <div><b>Account Login</b></div>

             <div>If you are already a member you can login with your email address and password.</div><hr />
         
          </h2>
            

          <div className="mb-4">
            <label className="block mb-1 font-medium ml-10">Email Address</label>
            <input 
              type="text" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-100 px-4 py-2 ml-10 focus:ring-blue-400 focus:outline-none text-black focus: ring-2"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium ml-10">Password</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password}
              onChange={handleChange}
              className="w-100 px-4 py-2 focus:ring-blue-400 focus:outline-none text-black focus: ring-2 ml-10"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium ml-10">Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword" 
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-100 px-4 py-2 ml-10 focus:ring-blue-400 focus:outline-none text-black focus: ring-2"
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
          <br />

          <button 
            type="submit" 
            className="w-100 bg-[#CAFE33] ml-10 text-black font-semibold py-2 px-4 rounded-xl "
          >
            Login account
            
          </button>

          

          
          
         

        </form>


       
      </div>

      <div className='border rounded-2xl w-130 h-120'>

      </div></div>


       

       
    </div>
   

  );
};

export default Login;