import { useNavigate } from 'react-router-dom'
import { FaEnvelope,FaPhone,FaMapMarkerAlt} from 'react-icons/fa'
const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='m-2 text-[14px] lg:m-5 lg:p-7 lg:text-[20px] '>
      <div className='flex flex-col lg:flex lg:flex-row lg:gap-14'>
        
       <p className='lg:flex lg:flex-col  lg:ml-70'> <b> Welcome to BANKITI <br />
        Empowering Your <br />  <div className='text-[rgba(139,188,0,1)]'>Financial Journey</div> <br /> </b>
          
       <br />
        At Bankiti,our mission is to provide comprehensive <br />banking solutions  that empower individuals and <br />businesses  to achieve their financial goals.We <br /> are commited to delivering personalized  and <br /> innovative services that  prioritize our customers`<br /> needs. 
        <p><br /><div className="account lg:w-100 "><button onClick={() => navigate('/signup',{replace: true})}>Open Account</button></div> </p><br />
       </p>
       
       <div>
           <img src="./Rectangle.png" alt="" width={180} />
       </div>

      </div><br />

      <div className='flex flex-col lg:flex lg:flex-row lg:gap-14'>
        <p className='lg:flex lg:flex-col lg:ml-70
        '> <b>Quick and Easy <br /> Loans for Your <br /> <div className='text-[rgba(139,188,0,1)]'>Financial Needs </div> </b> <br /> 
        Our loan services offer a hassle-free and <br /> streamlined borrowing experience,providing <br />you with  the funds you need in a timely <br />  manner to meet your financial requirements.

        <div className="count "><button onClick={() => navigate('/signup',{replace: true})}>Get started</button></div> 
        
        
      
        
        </p>
         <div>
         <br />
          <img src="./money.jpg" alt="" width={300}/>
          </div> <br />


       

       </div><br />
        <p className=' text-[rgba(139,188,0,1)] lg:flex lg:items-center lg:justify-center'>OUR SERVICES</p> <br />

       <div className='flex flex-col lg:flex lg:flex-row lg:gap-20'>
          <div className="border rounded-2xl w-70 h-70 lg:h-90
          "> <br />
            <div className='flex items-center justify-center'>
           <img src="/Vector.png" alt="" />
           
        </div> <br />

        <div className='flex items-center justify-center '>
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
        
         <div className='border rounded-2xl h-70 w-70 lg:h-92 '><br />
            <div className='flex items-center justify-center'>
              <img src="/group.png" alt="" />
            </div><br />

            <div className='flex items-center justify-center '>
              <p><b>Business loan</b></p>
            </div>
             <div className='flex items-center justify-center'>
              <p>Business loan services provide</p>
             </div>

            <div className='flex items-center justify-center'>
              <p>financial assistance to  businesses for various purposes</p>
            </div>
            <div className="box">
         <div className='
         select'><button onClick={() => navigate('/signup',{replace: true})}>Apply now</button></div> 
         </div>

         </div> <br />

         <div className='border rounded-2xl w-70 h-70  lg:h-94'><br />
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
          <p className='lg:flex lg:items-center lg:justify-center
          '><b>How we work?</b></p>
       </div> <br />

       <div>
          <p className=' text-[rgba(139,188,0,1)] lg:ml-45
          '>Application</p>
       </div>

      

       

       <div className='flex flex-col-reverse lg:flex lg:flex-row-reverse'>
       <div>
         <div>
            <img src="/card.png" alt="" />
         </div>
       </div>
        
        
        <div >
          <p  >The borrower submits a loan application <br /> to Bankiti, either in person,online or <br /> through other channels.  The application <br />includes personal and financial <br /> information,such as income,employment <br /> history, credit score,and the purpose of the <br /> loan.</p>
          
       </div>
       </div>
       
       
       
    <div className=''>
       
       <div className=' text-[rgba(139,188,0,1)] lg:ml-45'>
        <p> <b>Documentation and Verification</b></p>
       </div>
      <div >
        <div className='lg:flex lg:flex-row lg:ml-45'>
       <div>
        <p> Bankiti request supporting documents <br /> from  the borrower,such as identification <br /> proof,statement document, and collateral <br />details(if applicable).Bankiti  verifies the <br />information  provided to access the borrowers`<br /> creditworthiness and elegibility for the loan.</p>

        <div>
        <img src="/photo.png" alt="" />
        </div>

       </div>
       
        <div>

     
         <div className='lg:flex lg:flex-col lg:ml-30 '> 
        <p  className=' text-[rgba(139,188,0,1)] '><b>Credit Asessment <br /></b></p>
       </div>

       
       <div className='lg:flex lg:flex-row lg:ml-28'>
         <p>Bankiti conducts a credit assessment to <br />evaluate the borrower`s creditworthiness <br />
       and ability to repay the loan.  This process <br />
          involves analyzing the borrower`s credit <br />history,income  stability,debt-to-income ratio,<br /> and other factors</p>
         
         </div>
       </div>

       </div><br />
    </div>

   

       



       </div>

       
        <div className='lg:flex lg:flex-col items-end '>
        <div className=''>
              <p className='text-[rgba(139,188,0,1)] lg: mr-78'>Loan Approval</p>
           </div>

        
        <div className=''>
           

           <div>
           <p>If the borrower meets Bankiti`s lending criteria <br /> and passes the  credit  assessmnent the loan <br />
            is approved.  Bankiti determines the loan amount,<br />the interest rate,the repayment term, and any <br /> associated fees.</p></div>
         </div> <br />
        
        
        
        </div> 
         <div className=' text-[rgba(139,188,0,1)] lg:flex lg:items-center lg:justify-center'>
           <p>Frequently Asked Questions</p>
           
         </div>
         <div className=' lg:flex lg:items-center lg:justify-center
         '>
          Do you have any questions contact our team <br /> via support@gmail.com
         </div><br />
      
        <div className='flex flex-col'>
      <div className='lg:flex lg:gap-4 lg:items-center lg:justify-center'>
         <div className='border h-60 w-85 lg:w-95 lg:h-130'> <br />
         <div className='flex items-center justify-center'>How do I open an account with Bankiti?</div> <br />
        <hr /><br />
        
         <div className='ml-5'><p>Opening an account with Bankiti is easy.Simply visit our website and click on the "Open Account" button.Follow the prompts and provide the required information to complete the application process.If you have any questions or need assistance,our customer support team is available to help.</p></div>
         </div><br />
         

         <div className='border h-80 w-85 lg:w-95 lg:h-130'><br />
          <div className='flex items-center justify-center'>
          <p>What documents do I need to provide to apply for a loan?  </p></div><br />
          <hr /><br />
          <div className='ml-5'>
          <p>The documents required for a loan application may vary depending on the type of loan you are applying for.Generally,you will need to provide identification documents (such as Ghana Card,passport or driver`s license),proof of income (such as pay stubs or tax returns) and  information about the collateral(if applicable).Our loan offices will guide you through the specific requirements during the application process.  </p></div> 
          </div>
          </div>
          </div>
          <br />
        


      <div className='flex flex-col'>
        <div className='lg:flex lg:gap-4 lg:items-center lg:justify-center'>
        <div className='border h-65 w-85 lg:w-95 lg:h-120'><br />
          <div className='flex items-center justify-center'>
          <p>How can I access my account online? </p></div><br />
           <hr /><br />

           <div className='ml-5'>
            <p>Accessing your account online is simple and secure.Visit our website and click on the "login" button.Enter your username and password to access your account.If you have not registered for online banking click on "signup" button to follow the registration process.If you need assistance, our customer support team is available to guide you.</p>
           </div>
        </div><br />

        <div className='border h-70 w-85 lg:w-95 lg:h-120'><br />
          <div className='flex items-center justify-center'>
          <p>Are my transactions and personal information secure?</p></div><br />
          <hr /><br />

          <div className='ml-5'>
            <p>At Bankiti,we prioritize the security of your transaction and personal informtion.We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected.Additionally,we regularly update our security measures to stay ahead of emerging threats.You can think in confidence knowing that we have robust security systems in place.</p>
          </div>
        </div>
        </div>
      </div><br />


      <div className='flex items-center ml-30 mt-30 lg:flex lg:items-center lg:justify-center'>
        <div className=''>
        <p><img src="./Logo.png" alt="" width={100}/></p></div>
      </div>
     <hr /><br />

     <div className='flex items-center  gap-0.5 lg:flex lg:items-center lg:justify-center lg:gap-3'>
      <p className='flex'><FaEnvelope/>bankiti@gmail.com</p>
      <p className='flex'><FaPhone/>+233 xxxxxxxxx </p>
      <p className='flex'><FaMapMarkerAlt/>Kumasi,Ghana</p>

     </div>
     <div className='mt-10'><hr /></div>



      </div>


      
       





         
    

    
       
    
  )
}

export default Home