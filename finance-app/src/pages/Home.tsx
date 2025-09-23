import { useNavigate } from 'react-router-dom'
import { FaEnvelope,FaPhone,FaMapMarkerAlt} from 'react-icons/fa'
const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='m-5 p-7  '>
      <div className='flex flex-col'>
       <p> <b> Welcome to BANKITI <br />
        Empowering Your <br />  <div className='text-[rgba(139,188,0,1)]'>Financial Journey</div> <br /> </b>
          
       <br />
        At Bankiti,our mission is to provide comprehensive <br />banking solutions  that empower individuals and business <br /> to achieve their financial goals.  We are commited to <br />delivering personalized  and innovative services that <br /> prioritize our customers` needs. 
        <p><br /><div className="account"><button onClick={() => navigate('/signup',{replace: true})}>Open Account</button></div> </p><br />
       </p>
       
       <div>
           <img src="./Rectangle.png" alt="" width={180} />
       </div>

      </div><br />

      <div className='flex flex-col'>
        <p> <b>Quick and Easy <br /> Loans for Your <br /> <div className='text-[rgba(139,188,0,1)]'>Financial Needs </div> </b> <br /> 
        Our loan services offer a hassle-free and streamlined borrowing <br /> experience,providing you with  the funds you need in a timely <br />  manner to meet your financial requirements.

        <div className="count "><button onClick={() => navigate('/signup',{replace: true})}>Get started</button></div> 
        
        
      
        
        </p>
         <div>
         <br />
          <img src="./money.jpg" alt="" width={500}/>
          </div> <br />


       

       </div><br />
        <p className=' text-[rgba(139,188,0,1)]'>OUR SERVICES</p> <br />

       <div className='flex flex-col'>
          <div className="border rounded-2xl w-70 h-70
          "> <br />
            <div className='flex items-center justify-center'>
           <img src="/Vector.png" alt="" />
           
        </div> <br />

        <div className='flex items-center justify-center'>
           <p><b>Personal loan</b></p>
         </div>

         <div className='flex items-center justify-center'>
          <p>Personal loans provide </p>
         </div>

         <div className='flex items-center justify-center'>
          <p> borrowers with flexibility in how  </p>
         </div>

         <div className='flex items-center justify-center' >
          <p>they use the funds.</p>
         </div>
          
          <div className="box">
         <div className='
         select'><button onClick={() => navigate('/signup',{replace: true})}>Apply now</button></div> 
         </div>



         
        </div><br />
        
         <div className='border rounded-2xl h-70 w-70'><br />
            <div className='flex items-center justify-center'>
              <img src="/group.png" alt="" />
            </div><br />

            <div className='flex items-center justify-center'>
              <p><b>Business loan</b></p>
            </div>
             <div className='flex items-center justify-center'>
              <p>Business loan services provide</p>
             </div>

            <div className='flex items-center justify-center'>
              <p>financial assistance to businesses</p>

            </div>

            <div className='flex items-center justify-center'>
              <p>for various purposes.</p>

            </div>

            <div className="box">
         <div className='
         select'><button onClick={() => navigate('/signup',{replace: true})}>Apply now</button></div> 
         </div>

         </div> <br />

         <div className='border rounded-2xl w-70 h-70'><br />
           <div className='flex items-center justify-center'>
          <img src="song.png" alt="" />
           </div> <br />

           <div className='flex items-center justify-center'>
            <p><b>Auto loan</b></p>
           </div>

           <div className='flex items-center justify-center'>
            <p>Auto loan services provide</p></div>

            <div className='flex items-center justify-center'>
              <p>financing options for individual</p>
            </div>

            <div className='flex items-center justify-center' >
              <p>businesses to purchase a vehicle.</p>

            </div>

             <div className="box">
         <div className='
         select'><button onClick={() => navigate('/signup',{replace: true})}>Apply now</button></div> 
         </div>
         </div>
       </div><br /><br />

       <div className='  text-[rgba(139,188,0,1)]'>
          <p><b>How we work?</b></p>
       </div> <br />

       <div>
          <p className=' text-[rgba(139,188,0,1)] '>Application</p>
       </div>

      

       

       <div className='flex flex-col-reverse'>
       <div>
         <div>
            <img src="/card.png" alt="" />
         </div>
       </div>
        
        
        <div >
          <p  >The borrower submits a loan application to Bankiti, <br />either in person,online or through other channels. <br /> The application includes personal and financial <br /> information,such as income,employment history,<br /> credit score,and the purpose of the loan.</p>
          
       </div>
       </div>
       
       
       
    <div className=''>
       <div>
       <div className=' text-[rgba(139,188,0,1)] '>
        <p> <b>Documentation and Verification</b></p>
       </div>

       <div>
        <p>The Bankiti request supporting documents from <br /> the borrower,such as identification proof,statement <br /> document, and collateral details(if applicable).Bankiti <br /> verifies the information  provided to access the <br />borrowers` creditworthiness and elegibility for the loan.</p>

        <div>
        <img src="/photo.png" alt="" />

       </div>
        <div>
        <p  className=' text-[rgba(139,188,0,1)] '><b>Credit Asessment</b></p>
       </div>

       
       <div className=''>
         <p>Bankiti conducts a credit assessment to evaluate the borrower`s <br /> creditworthiness and ability to repay the loan.  This process <br />
          involves analyzing the borrower`s credit history,income <br /> stability,debt-to-income ratio, and other factors</p>
         
       </div>

       </div><br />
    </div>

   

       



       </div>

       
      
        <div className=''>
              <p className='text-[rgba(139,188,0,1)]'>Loan Approval</p>
           </div>

        
        <div className=''>
           

           <div>
           <p>If the borrower meets Bankiti`s lending criteria and passes the  credit <br /> assessmnent the loan is approved.  Bankiti determines the loan amount,<br />the interest rate,the repayment term, and any associated fees.</p></div>
         </div> <br />
         
         
         <div className=' text-[rgba(139,188,0,1)]'>
           <p>Frequently Asked Questions</p>
           
         </div>

         <div className=' '>
          Do you have any questions contact our team via support@gmail.com
         </div><br />

        <div className='flex flex-col'>
         <div className='border h-70 w-130'> <br />
         <div className='flex items-center justify-center'>How do I open an account with Bankiti?</div> <br />
        <hr /><br />
        
         <div className='ml-5'><p>Opening an account with Bankiti is easy.Simply visit our website and click on the "Open Account" button.Follow the prompts and provide the required information to complete the application process.If you have any questions or need assistance,our customer support team is available to help.</p></div>
         </div><br />
         

         <div className='border h-70 w-130'><br />
          <div className='flex items-center justify-center'>
          <p>What documents do I need to provide to apply for a loan?  </p></div><br />
          <hr /><br />
          <div className='ml-5'>
          <p>The documents required for a loan application may vary depending on the type of loan you are applying for.Generally,you will need to provide identification documents (such as Ghana Card,passport or driver`s license),proof of income (such as pay stubs or tax returns) and  information about the collateral(if applicable).Our loan offices will guide you through the specific requirements during the application process. </p></div> 
          </div>
          </div><br />
        


      <div className='flex flex-col'>
        <div className='border h-70 w-130'><br />
          <div className='flex items-center justify-center'>
          <p>How can I access my account online? </p></div><br />
           <hr /><br />

           <div className='ml-5'>
            <p>Accessing your account online is simple and secure.Visit our website and click on the "login" button.Enter your username and password to access your account.If you have not registered for online banking click on "signup" button to follow the registration process.If you need assistance, our customer support team is available to guide you.</p>
           </div>
        </div><br />

        <div className='border h-70 w-130'><br />
          <div className='flex items-center justify-center'>
          <p>Are my transactions and personal information secure?</p></div><br />
          <hr /><br />

          <div className='ml-5'>
            <p>At Bankiti,we prioritize the security of your transaction and personal informtion.We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected.Additionally,we regularly update our security measures to stay ahead of emerging threats.You can think in confidence knowing that we have robust security systems in place.</p>
          </div>
        </div>
      </div><br />


      <div className='flex items-center justify-center mt-30'>
        <p>BANKITI</p>
      </div>
     <hr /><br />

     <div className='flex items-center justify-center gap-5'>
      <p className='flex'><FaEnvelope/>bankiti@gmail.com</p>
      <p className='flex'><FaPhone/>+233 xxxxxxxxx</p>
      <p className='flex'><FaMapMarkerAlt/>Kumasi,Ghana</p>

     </div>
     <div className='mt-10'><hr /></div>



      </div>


      
       





         
    

    
       
    
  )
}

export default Home