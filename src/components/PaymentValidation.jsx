import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import card from "../svg/card.svg";
import amex from "../svg/amex.svg";
import visa from "../svg/visa.svg";
import down from "../svg/down.svg";
import Model from "./Model";
import { useState } from "react";

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Email is not valid" })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: "Email must match standard email format",
    }),

  card: z
    .string()
    .min(16, { message: "Card number must be at least 16 digits" })
    .max(19, { message: "Card number must be at most 19 digits" })
    .regex(/^\d+$/, { message: "Card number must contain only numbers" }),

  date: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
    message: "Date must be in MM/YY format",
  }),

  cvc: z
    .string()
    .min(3, { message: "CVC must be at least 3 digits" })
    .max(4, { message: "CVC must be 3 or 4 digits" })
    .regex(/^\d+$/, { message: "CVC must be numeric" }),

  nameoncard: z
    .string()
    .min(2, { message: "Name on card must be at least 2 characters" }),

  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters" }),

  city: z.string().min(2, { message: "City is required" }),

  state: z.string().min(2, { message: "State is required" }),

  country: z.string().min(1, { message: "Country is required" }),
});

const PaymentValidation = ({ amount, setAmount }) => {
  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const [showModel, setShowModel] = useState(false);


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const cardNo = watch("card");


  const onSubmit = (data) => {
    console.log(`$ ${amount} paid succesfully !`, data);
    setShowModel(true);
  };

  return (
    <div className="flex justify-center items-center bg-[#E5EAF5] w-full">
      <div className="bg-white w-full">
        {/* Header */}
        <div className="flex flex-col py-12 px-4 sm:px-6 md:px-10 gap-7">
          <h2 className="font-outfit font-medium text-2xl">Payment Summary</h2>

          {/* Amount Input */}
          <div className="relative w-full h-[50px] border border-[#D9DDFC] flex items-center rounded-lg">
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

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6 px-4 sm:px-6 md:px-10 py-10">
            <div>
              <label className="text-[#404348] text-base font-semibold">
                Email
              </label>
              <div className="h-[50px] border border-[#D9DDFC] flex items-center rounded-lg">
                <input
                  {...register("email")}
                  className="px-4 h-full w-full focus:outline-none"
                  type="email"
                  placeholder="email@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>


{/* using state here to display in model trying */}
            <div>
              <label className="text-[#404348] text-base font-semibold">
                Card Information
              </label>
              <div className="w-full h-[50px] border border-[#D9DDFC] flex items-center rounded-t-lg">
                <input
                  {...register("card")}
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
              {errors.card && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.card.message}
                </p>
              )}

              <div className="flex">
                <div className="w-1/2 border border-t-0 border-r-0 border-[#D9DDFC] rounded-bl-lg">
                  <input
                    {...register("date")}
                    className="w-full h-[50px] px-4 focus:outline-none"
                    type="text"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="w-1/2 border border-t-0 border-[#D9DDFC] rounded-br-lg">
                  <input
                    {...register("cvc")}
                    className="w-full h-[50px] px-4 focus:outline-none"
                    type="text"
                    placeholder="CVC"
                  />
                </div>
              </div>
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.date.message}
                </p>
              )}
              {errors.cvc && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.cvc.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-[#404348] text-base font-semibold">
                Name on Card
              </label>
              <div className="w-full h-[50px] border border-[#D9DDFC] flex items-center rounded-lg">
                <input
                  {...register("nameoncard")}
                  className="px-4 w-full h-full focus:outline-none"
                  type="text"
                  placeholder="eg. John Doe"
                />
              </div>
              {errors.nameoncard && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.nameoncard.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-[#404348] text-base font-semibold">
                Address
              </label>
              <div className="h-[50px] border border-[#D9DDFC] flex items-center rounded-lg">
                <input
                  {...register("address")}
                  className="px-4 h-full w-full focus:outline-none"
                  type="text"
                  placeholder="Street Address or PO box"
                />
              </div>
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="sm:w-1/2">
                <label className="text-[#404348] text-base font-semibold">
                  City
                </label>
                <div className="h-[50px] border border-[#D9DDFC] flex items-center rounded-lg">
                  <input
                    {...register("city")}
                    className="px-4 h-full w-full focus:outline-none"
                    type="text"
                    placeholder="City"
                  />
                </div>
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.city.message}
                  </p>
                )}
              </div>

              <div className="sm:w-1/2">
                <label className="text-[#404348] text-base font-semibold">
                  State
                </label>
                <div className="h-[50px] border border-[#D9DDFC] flex items-center rounded-lg">
                  <input
                    {...register("state")}
                    className="px-4 h-full w-full focus:outline-none"
                    type="text"
                    placeholder="State, Province, Region"
                  />
                </div>
                {errors.state && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.state.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="text-[#404348] text-base font-semibold">
                Country
              </label>
              <div className="relative h-[50px] border border-[#D9DDFC] flex items-center rounded-lg">
                <select
                  {...register("country")}
                  className="w-full h-full px-4 appearance-none focus:outline-none"
                >
                  <option value="" hidden>
                    Select country
                  </option>
                  <option value="au">Australia</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                </select>
                <img
                  src={down}
                  alt="Dropdown icon"
                  className="absolute right-4 pointer-events-none"
                />
              </div>
              {errors.country && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.country.message}
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={!isValid}
                className={`w-full h-[50px] rounded-lg border border-[#D9DDFC] text-white
                  ${
                    isValid ? "bg-[#3B4CEE] cursor-pointer" : "bg-gray-400 cursor-not-allowed"
                  }`}
              >
                Pay | AUD $ {amount || "100.00"}
              </button>
            </div>
          </div>
        </form>
        {showModel && <Model cardNo={cardNo} amount={amount}/>}

      </div>
    </div>
  );
};

export default PaymentValidation;
