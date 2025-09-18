import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    FullName: '',  
    EmailAddress:'',
    city: '',
    NationalIDCard: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  

  const ghanaCities: string[] = [
    "Accra",
    "Kumasi",
    "Takoradi",
    "Tamale",
    "Cape Coast",
    "Sunyani",
    "Ho",
    "Bolgatanga",
    "Wa",
    "Koforidua",
    "Tema",
  ];

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
    const { FullName, password, confirmPassword } = formData;

    if (!FullName || !password || !confirmPassword) {
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
    <div className='m-5 p-7 flex gap-15 justify-center items-center'>
      <div>
       <form onSubmit={handleSubmit}>
          <h2 >Become a member and enjoy exclusive premium advantages</h2><br />
          <hr className="border border-black" /><br />


          <div >
            <label className="block mb-1 font-medium">Full Name</label>
            <input 
              type="FullName" 
              name="FullName" 
              value={formData.FullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border p-4  focus:ring-blue-400
               focus:outline-none text-black focus:ring-2 "
               
            />
          </div><br />

           <div >
            <label className="block mb-1 font-medium">Email Address</label>
            <input 
              type="EmailAddress" 
              name="EmailAddress" 
              value={formData.EmailAddress}
              onChange={handleChange}
              className="w-full px-4 py-2 border p-4  focus:ring-blue-400
               focus:outline-none text-black focus:ring-2 "
               
            />
          </div><br />

           <div >



      <div className="mb-4">
        <label className="block mb-2 font-medium">City</label>
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full px-4 py-2 border p-4  focus:ring-blue-400
          focus:outline-none text-black focus:ring-2"
        >
          <option value="">-- Select City --</option>
          {ghanaCities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
           
            
          </div><br />

          <div >
            <label className="block mb-1 font-medium">National ID Card</label>
            <input 
              type="NationalIDCard" 
              name="NationalIDCard" 
              value={formData.NationalIDCard}
              onChange={handleChange}
              className="w-full px-4 py-2 border p-4  focus:ring-blue-400
               focus:outline-none text-black focus:ring-2 "
               
            />
          </div><br />
          <div className="mb-4 relative">
  <label className="block mb-1 font-medium">Password</label>
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    value={formData.password}
    onChange={handleChange}
    className="w-full px-4 py-2 pr-10 border p-4 focus:ring-blue-400
               focus:outline-none text-black focus:ring-2"
  />

  {/* Toggle button (eye icon) */}
  <button
    type="button"
    onClick={() => setShowPassword((prev) => !prev)}
    className="absolute right-3 top-10 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
  >
    {showPassword ? (
      // Eye-off icon
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-7-9-7a18.84 18.84 0 014.242-4.242M9.88 9.88A3 3 0 0012 15a3 3 0 003-3 2.99 2.99 0 00-.879-2.121" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3l18 18" />
      </svg>
    ) : (
      // Eye icon
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        <circle cx="12" cy="12" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )}
  </button>
</div>


          <div className="">
            <label className="block mb-1 font-medium">Confirm Password</label>
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
            className="w-full hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded-xl create" 
          >
            Create account
            
          </button>

         
          
         

        </form>
        Already have an account?<div className='Log-button'><button onClick={()=>navigate('login')}> <b>Login</b> </button></div>
      </div><br />
      <div></div> 
       
      <div className="bg-[#CAFE33] border rounded-4xl p-6 w-110
      h-150 text-center flex items-center justify-center">
        
     <p ><b>Sign Up <br />
      Account</b></p>
      
</div>
</div>
    
  );
  // return (
  //   <div>
  //       <h1></h1>
  //       <div>
          


  

  //       </div>
  //       <div className='contact-buttons'>
  //         <button onClick={()=>navigate('info')}>Contact Info</button>
  //         <button onClick={()=>navigate('form')}>Contact Form</button>
  //   </div>
  //   </div>
  // )
}

export default Signup