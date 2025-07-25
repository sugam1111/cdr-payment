import { useState } from 'react';
import logo from '../images/logo.png'; // adjust the path based on file location
import PaymentValidation from './PaymentValidation';

const Payment = () => {
  const [amount, setAmount] = useState("");
  const [active, setActive] = useState(1);

  const handleChange = (e) => {
    const value = e.target.value;
    const isValid = /^\d*\.?\d*$/.test(value);
    if (isValid) {
      setAmount(value);
    } else {
      setAmount("");
    }
  };

  const isAmountValid = amount !== "" && !isNaN(amount);

  return (
    <div className='min-h-screen flex justify-center items-center bg-[#E5EAF5] px-4 sm:px-6 py-6'>
      <div className="w-full max-w-[795px]  bg-white rounded-[16px] shadow-md">
        
        {/* Header */}
        <div className="bg-[#3B4CEE] py-6 px-8 sm:px-10 md:px-20 rounded-t-[16px]">
          <img src={logo} alt="Logo" className="w-[134px] h-[47px]" />
        </div>

        {active === 1 && (
          <div className='flex flex-col w-full py-8 px-4 sm:px-6 md:px-20 gap-6'>
            <h2 className="font-outfit font-medium text-[24px] leading-[116%] tracking-normal">
              Payment amount
            </h2>

            {/* Input box */}
            <div className=" relative w-full h-[50px] border border-[#D9DDFC] flex items-center rounded-lg">
              <input
                onChange={handleChange}
                value={amount}
                type="text"
                placeholder="Enter amount"
                className="ml-[62px] w-full pr-12 px-3 h-full focus:outline-none"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 text-sm">
                AUD <span className='ml-2'>|</span>
              </span>
            </div>

            <div className="w-full">
              <button
                disabled={!isAmountValid}
                className={`w-full h-[54px] rounded-[8px] text-base font-medium transition ${
                  isAmountValid
                    ? "bg-[#3B4CEE] text-white hover:bg-[#2e3ecc]"
                    : "bg-[#D9DDFC] text-gray-500 cursor-not-allowed"
                }`}
                onClick={() => setActive(2)}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {active === 2 && <PaymentValidation amount={amount}/>}

        {/* Footer */}
        <div className='flex flex-wrap justify-center items-center gap-4 text-sm text-center text-[#404348] px-4 py-6'>
          <div>
            Powered by <span className='font-bold'>Stripe</span>
          </div>
          <div className='hidden sm:block'>|</div>
          <div className='flex items-center gap-2 text-[#3A4DEF]'>
            <div>Terms</div>
            <div className='h-1 w-1 bg-[#3A4DEF] rounded-full'></div>
            <div>Privacy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
