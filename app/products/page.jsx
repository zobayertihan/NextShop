/* eslint-disable @next/next/no-img-element */
import CustomButton from "@/components/Button/CustomButton";
import { getAllProducts } from "@/app/utils/apiCalls";

export default async function Products() {
  const products = await getAllProducts();
  return (
    <div className="">
      <h1 className="text-2xl text-center p-5">Products Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 m-10">
        {products?.length > 0
          ? products?.map((product) => (
              <div
                className="border border-gray-100 hover:bg-gray-200 duration-300 shadow-md flex flex-col justify-between text-[#1E1E1E]"
                key={product.id}
              >
                <div className=" flex flex-col items-center px-3">
                  <div className="bg-gray-100 w-full my-3">
                    <img
                      className="h-64 w-full object-contain mix-blend-multiply py-2"
                      src={product.pictures}
                      alt="Product"
                    />
                  </div>
                  <p className="text-center font-semibold text-lg">
                    {product.title}
                  </p>
                  <p className="text-lg">
                    <span className="font-semibold">Price:</span>{" "}
                    {product.price}
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <CustomButton
                    route={`products/${product.id}`}
                    name="Details"
                  />
                </div>
              </div>
            ))
          : null}
      </div>
      <CustomButton route="" name="Home" />
    </div>
  );
}
