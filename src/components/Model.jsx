import React from "react";
import tick from "../svg/tick.svg";

const Model = ({cardNo, amount}) => {
  return (
    <div className="flex justify-center items-center bg-black/60  fixed inset-0">
      <div className="max-w-[540px] h-[737px]  bg-white rounded-lg">
        <div className="flex flex-col items-center   mx-[60px] mt-[60px] w-[420px] h-[569px]">
            
          <div className="        flex flex-col">
              <img src={tick} alt="" />

            <div className="pt-[24px] flex flex-col items-center">
              <h1 className="text-[20px] font-semibold">Payment Succesful</h1>
              <p className="text-[#6C6C6C]">Successfully paid <span className="font-bold text-black">${amount}</span></p>
            </div>
          </div>




          <div className="flex  flex-col  w-full h-full">
            <div className="py-[12px] text-[#404348]">Payment Details</div>
            <div className="bg-[#ECECEC] text-[#404348] border border-[#ECECEC] border-dashed rounded-lg flex flex-col">

                <div className="flex justify-between px-[24px] pt-[16px]">
                    <div>Status :</div>
                    <div><button>Success</button></div>
                </div>

                <div className="flex justify-between px-[24px] pt-[16px]">
                    <div>Transaction ID :</div>
                    <div><button>{cardNo}</button></div>
                </div>

                <div className="flex justify-between px-[24px] pt-[16px]">
                    <div>Date :</div>
                    <div><button>6 June</button></div>
                </div>

                <div className="flex justify-between px-[24px] pt-[16px]">
                    <div>Type of Transaction :</div>
                    <div><button>Credit Card</button></div>
                </div>

                <div className="flex justify-between px-[24px] py-[16px]">
                    <div>Service :</div>
                    <div><button>Standard Package</button></div>
                </div>

                <hr />

                <div className="flex justify-between px-[24px] py-[16px]">
                    <div>Total :</div>
                    <div><button>AUD $100</button></div>
                </div>
                
                

            </div>
          </div>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-4 text-sm text-center text-[#404348] my-[20px]'>
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

export default Model;
