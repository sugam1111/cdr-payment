
import { useState } from 'react';
import logo from '../images/logo.png'; // adjust the path based on file location

const Payment = () => {
  const [amount, setAmount] = useState("")
  const [active, setActive] = useState(1)


  const handleChange = (e) => {
    const value = e.target.value;
    const isValid = /^\d*\.?\d*$/.test(value);
    if(isValid){
      setAmount(value);
    }
    else{
      setAmount("")
    }
  }

  const isAmountValid = amount !== "" && !isNaN(amount)
  return (
    <div className='h-screen flex justify-center items-center bg-[#E5EAF5] '>
      <div className=" bg-[#FFFFFF] mx-auto rounded-[16px]">
        <div className=" bg-[#3B4CEE] py-[28px] pr-[41px] pl-[72px] rounded-t-[16px]">
          <img src={logo} alt="Logo" className="w-[134px] h-[47px]" />
        </div>
        <div className='flex flex-col h-full mx-auto py-[48px] px-[72px] gap-[28px]'>
          <h2 className="font-outfit font-medium text-[24px] leading-[116%] tracking-normal w-[651px] ">Payment amount</h2>

{/* -----------------------------input box------------------------------------------------------ */}
          <div className="relative w-[651px] h-[50px] border-[1.33px] border-[#D9DDFC] flex items-center rounded-lg">
            <input onChange={handleChange} value={amount} type="text" placeholder="Enter amount" className="ml-[62px] w-full pr-12 px-3 h-full focus:outline-none" />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700">
              AUD  <span className='ml-2'>|</span>
            </span>
          </div>
{/*  */}
          <div>
            <button
              disabled={!isAmountValid}
              className={`w-[651px] h-[54px] rounded-[8px] ${
                isAmountValid
                  ? "bg-[#3B4CEE] text-white cursor-pointer"
                  : "bg-[#D9DDFC] cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          </div>
           <div className='flex justify-center items-center gap-[16px]'>
            <div className='text-[#404348] text-[14px] '>Powered by <span className='font-bold'>Stripe </span></div>
            <div>|</div>
            <div className='flex justify-center items-center gap-2 text-[#3A4DEF]'>
              <div>Terms</div>
              <div className='h-1 w-1 bg-[#3A4DEF] rounded-full'></div>
              <div>Privacy</div>
            </div>
          </div>

          
       
        </div>
      </div>
    </div>
  );
};

export default Payment;
