import React, { useState } from "react";
import card from "../svg/card.svg";
import amex from "../svg/amex.svg";
import visa from "../svg/visa.svg";
import down from "../svg/down.svg";

const PaymentValidation = () => {
  const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="flex justify-center items-center border border-black bg-[#E5EAF5] w-full">
      <div className="bg-[#FFFFFF] w-full">
        {/* Header */}
        <div className="flex flex-col py-12 px-4 sm:px-6 md:px-10 gap-7">
          <h2 className="font-outfit font-medium text-2xl leading-[116%] tracking-normal">
            Payment Summary
          </h2>

          {/* Amount Input */}
          <div className="relative w-full  h-[50px] border border-[#D9DDFC] flex items-center rounded-lg">
            <input
              onChange={handleChange}
              value={amount}
              type="text"
              placeholder="Enter amount"
              className="ml-[62px] w-full pr-12 px-3 h-full focus:outline-none"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 text-sm">
              AUD <span className="ml-2">|</span>
            </span>
          </div>
        </div>

        <hr className="border-t border-gray-300 mt-4" />

        {/* Main Form */}
        <div className="flex flex-col gap-6 px-4 sm:px-6 md:px-10 py-10">
          {/* Email */}
          <div className="">
            <label className="text-[#404348] text-base font-semibold">Email</label>
            <div className=" h-[50px] border border-[#D9DDFC] flex items-center rounded-lg">
              <input
                className="px-4 h-full focus:outline-none"
                type="email"
                placeholder="email@example.com"
              />
            </div>
          </div>

          {/* Card Information */}
          <div className="">
            <label className="text-[#404348] text-base font-semibold">Card Information</label>
            <div className="w-full h-[50px] border border-[#D9DDFC] flex items-center rounded-t-lg">
              <input
                className="px-4 w-full h-full focus:outline-none"
                type="text"
                placeholder="1234 1234 1234 1234"
              />
              <div className="flex gap-2 pr-6">
                <img src={visa} alt="Visa" />
                <img src={card} alt="Card" />
                <img src={amex} alt="Amex" />
              </div>
            </div>

            <div className="flex ">
              <div className="w-1/2 border border-t-0 border-r-0 border-[#D9DDFC] rounded-bl-lg">
                <input
                  className="w-full h-[50px] px-4 focus:outline-none"
                  type="text"
                  placeholder="MM/YY"
                />
              </div>
              <div className="w-1/2 border border-t-0 border-[#D9DDFC] rounded-br-lg">
                <input
                  className="w-full h-[50px] px-4 focus:outline-none"
                  type="text"
                  placeholder="CVC"
                />
              </div>
            </div>
          </div>

          {/* Name on Card */}
          <div className="">
            <label className="text-[#404348] text-base font-semibold">Name on Card</label>
            <div className="w-full h-[50px] border border-[#D9DDFC] flex items-center rounded-lg">
              <input
                className="px-4 w-full h-full focus:outline-none"
                type="text"
                placeholder="eg. John Doe"
              />
            </div>
          </div>

          {/* Address */}
          <div className="">
            <label className="text-[#404348] text-base font-semibold">Address</label>
            <div className="h-[50px] border border-[#D9DDFC] flex items-center rounded-lg">
              <input
                className="px-4 h-full focus:outline-none"
                type="text"
                placeholder="Street Address or PO box"
              />
            </div>
          </div>

          {/* City & State */}
          <div className="flex flex-col sm:flex-row gap-4  ">
            {/* City */}
            <div className=" sm:w-1/2">
              <label className="text-[#404348] text-base font-semibold">City</label>
              <div className="h-[50px] border border-[#D9DDFC] flex items-center rounded-lg">
                <input
                  className="px-4  h-full focus:outline-none"
                  type="text"
                  placeholder="City"
                />
              </div>
            </div>

            {/* State */}
            <div className=" sm:w-1/2">
              <label className="text-[#404348] text-base font-semibold">State</label>
              <div className="h-[50px] border border-[#D9DDFC] flex items-center rounded-lg">
                <input
                  className="px-4 w-full h-full focus:outline-none"
                  type="text"
                  placeholder="State, Province, Region"
                />
              </div>
            </div>
          </div>

          {/* Country */}
          <div className="w-full ">
            <label className="text-[#404348] text-base font-semibold">Country</label>
            <div className="relative h-[50px] border border-[#D9DDFC] flex items-center rounded-lg">
              <select className="w-full h-full px-4 appearance-none focus:outline-none">
                <option value="" hidden>Select country</option>
                <option value="au">Australia</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
              </select>
              <img src={down} alt="Dropdown icon" className="absolute right-4 pointer-events-none" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full ">
            <button className="w-full h-[50px] bg-[#3B4CEE] text-white rounded-lg border border-[#D9DDFC]">
              Pay | AUD {amount || "100.00"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentValidation;
