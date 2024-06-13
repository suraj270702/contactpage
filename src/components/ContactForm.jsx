import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [loading,setLoading]=useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const submitHandler = async (data) => {
    console.log(data);
    try {
      setLoading(true)
      const response = await axios.post(
        "http://localhost:8000/api/contact/create-contact",
        data
      );
      if (response.status === 200) {
        toast.success("Response Recorded Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }finally{
       setLoading(false)
    }
  };

  return (
    <div className="py-[90px] lg:py-[110px]">
      <div className="w-[340px] lg:w-[1170px] bg-white shadow-2xl rounded-[20px] h-full lg:h-[411px] px-[35px] pt-[40px] pb-[50px] lg:py-[70px] lg:px-[62px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="w-full lg:w-[358px]">
            <h1 className="text-[25px] lg:text-[35px] text-[#505050] font-bold">
              Got any questions?
            </h1>
            <h1 className="text-[18px] text-[#505050] font-medium lg:mt-[15px]">
              Let's discuss it over a cup of tea
            </h1>
          </div>
          <div className="w-full lg:w-[625px] h-full mt-[30px] lg:mt-0">
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="flex flex-col lg:flex-row items-start justify-between">
                <div className="w-full">
                  <input
                    name="name"
                    className="w-full mb-[25px] lg:mb-0 lg:w-[300px] px-[10px] py-[11px] text-[#505050] text-[11px] placeholder:text-[#505050] placeholder:text-[12px] outline-none border-b border-b-[#505050]"
                    placeholder="Name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-[11px] mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <input
                    name="organizationName"
                    className="w-full mb-[25px] lg:mb-0 lg:w-[300px] px-[10px] py-[11px] text-[#505050] text-[11px] placeholder:text-[#505050] placeholder:text-[12px] outline-none border-b border-b-[#505050]"
                    placeholder="Organization Name"
                    {...register("organizationName", {
                      required: "Organization Name is required",
                    })}
                  />
                  {errors.organizationName && (
                    <p className="text-red-500 text-[11px] mt-1">
                      {errors.organizationName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-start justify-between mt-0 lg:mt-[45px] ">
                <div className="w-full">
                  <input
                    name="email"
                    className="w-full mb-[25px] lg:mb-0 lg:w-[300px] px-[10px] py-[11px] text-[#505050] text-[11px] placeholder:text-[#505050] placeholder:text-[12px] outline-none border-b border-b-[#505050]"
                    placeholder="Email Id"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: "/^[^s@]+@[^s@]+.[^s@]+$/",
                        message: "Invalid Email!",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[11px] mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <input
                    name="mobileNo"
                    className="w-full mb-[25px] lg:mb-0 lg:w-[300px] px-[10px] py-[11px] text-[#505050] text-[11px] placeholder:text-[#505050] placeholder:text-[12px] outline-none border-b border-b-[#505050]"
                    placeholder="Contact Number"
                    {...register("mobileNo", {
                      required: "Mobile Number is required",
                      minLength: {
                        value: 10,
                        message: "Mobile Number Should Be 10 Digits",
                      },
                      maxLength: {
                        value: 10,
                        message:
                          "Mobile Number Should Not Be More Than 10 Digits",
                      },
                    })}
                  />
                  {errors.mobileNo && (
                    <p className="text-red-500 text-[11px] mt-1">
                      {errors.mobileNo.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between lg:mt-[45px]">
                <div className="w-full">
                  <input
                    name="message"
                    className="w-full mb-[60px] lg:mb-0 lg:w-[300px] px-[10px] pt-[11px] pb-[81px] text-[#505050] text-[11px] placeholder:text-[#505050] placeholder:text-[12px] outline-none border-b border-b-[#505050]"
                    placeholder="Message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-[11px] mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="w-[270px] lg:w-[143px] h-[50px] bg-[#00ADEE] px-[30px] py-[13px] rounded-[50px] text-[14px] font-medium text-[#ffffff]"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-x-[10px]">
                    Submit
                    <svg
                      width="21"
                      height="8"
                      viewBox="0 0 21 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.8536 4.35355C21.0488 4.15829 21.0488 3.84171 20.8536 3.64645L17.6716 0.464466C17.4763 0.269204 17.1597 0.269204 16.9645 0.464466C16.7692 0.659728 16.7692 0.976311 16.9645 1.17157L19.7929 4L16.9645 6.82843C16.7692 7.02369 16.7692 7.34027 16.9645 7.53553C17.1597 7.7308 17.4763 7.7308 17.6716 7.53553L20.8536 4.35355ZM0.5 4.5H20.5V3.5H0.5V4.5Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ContactForm;
