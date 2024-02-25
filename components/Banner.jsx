/* eslint-disable @next/next/no-img-element */

import { getAllProducts } from "@/app/utils/apiCalls";

export default async function Banner() {
  const products = await getAllProducts();

  let images = [];
  products.map((product) => images.push(product.pictures));

  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImageUrl = images[randomIndex];

  return (
    <div className="tw-container">
      <div className=" mx-auto bg-[#d9ebeb] rounded-xl md:py-10 md:h-[512px] flex md:flex-row flex-col justify-between gap-6 px-6 py-5 md:px-12 relative">
        <div className="flex flex-col gap-6 max-h-[339px] max-w-[512px] mt-10">
          <h1 className=" font-extrabold text-[#000] md:text-[64px] md:w-[512px] h-auto text-[20px]">
            Buy Your Dream Products
          </h1>
          <div className="text-[#1E1E1E] flex gap-6 md:gap-12">
            <div className="flex flex-col">
              <p className="md:text-3xl">{products.length}+</p>
              <p className="md:text-lg">Products</p>
            </div>
            <p className="text-2xl">|</p>
            <div className="flex flex-col">
              <p className="md:text-3xl">100+</p>
              <p className="md:text-lg">Customers</p>
            </div>
          </div>
        </div>
        <div className=" md:flex items-center hidden">
          <img
            className="h-96 w-96 mix-blend-multiply"
            src={randomImageUrl}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
