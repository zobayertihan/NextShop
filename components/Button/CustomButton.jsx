"use client";
import { useRouter } from "next/navigation";
import React from "react";

const CustomButton = ({ route, name }) => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center">
      <button
        // className=" mb-2 bg-gray-100 px-10 py-3 text-gray-900 rounded-xl text-xl"
        className="bg-[#C1DCDC] px-6 py-3 font-medium text-lg text-[#1E1E1E] flex gap-2 items-center my-2 border rounded-2xl"
        onClick={() => router.push(`/${route}`)}
      >
        {name}
      </button>
    </div>
  );
};

export default CustomButton;
