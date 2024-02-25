/* eslint-disable @next/next/no-img-element */

import CustomButton from "@/components/Button/CustomButton";
import { getProductDetails } from "@/app/utils/apiCalls";

export default async function ProductDetails({ params }) {
  const { productDetails } = params;
  const product = await getProductDetails(productDetails);
  return (
    <div className=" tw-container flex flex-col items-center px-3 text-[#000] w-96 bg-gray-100 ">
      <div className="my-5 font-semibold text-lg">
        {product.product.shippableProduct.category} &gt;{" "}
        {product.product.shippableProduct.subcategory} &gt;{" "}
        {product.product.shippableProduct.subcategory2} &gt;{" "}
        {product.product.shippableProduct.subcategory3}
      </div>
      <div className="grid grid-cols-12 gap-10">
        <div className="my-3 col-span-6">
          <img
            className="h-auto w-full object-contain mix-blend-multiply py-2"
            src={product.product.shippableProduct.pictures.list}
            alt="Product"
          />
        </div>
        <div className="text-start my-auto col-span-6">
          <p className="font-bold text-3xl mb-5">
            {product.product.shippableProduct.title}
          </p>
          <ul className="list-disc ms-4">
            <li>{product.product.shippableProduct.description1}</li>
            <li>{product.product.shippableProduct.description2}</li>
          </ul>
          <p className="text-lg">
            <span className="font-semibold text-lg">Brand Name: </span>
            {product.product.shippableProduct.brandName}
          </p>
          <p className="text-lg">
            {" "}
            <span className="font-semibold text-lg"> Seller:</span>{" "}
            {product.product.seller.name}
          </p>
          <p className="text-lg">
            {" "}
            <span className="font-semibold text-lg">Status:</span>{" "}
            {product.product.status}
          </p>
          <p className="text-lg">
            {" "}
            <span className="font-semibold text-lg">Price:</span>{" "}
            {product.price} $
          </p>
          <p className="text-lg">
            {" "}
            <span className="font-semibold text-lg">Stock:</span>{" "}
            {product.inStock}
          </p>
          {/* <p className="">
            description: {product.product.shippableProduct.description1}{" "}
            {product.product.shippableProduct.s}
          </p> */}
          <p className="text-lg">
            <span className="font-semibold text-lg">Warranty: </span>
            {product.product.shippableProduct.warranty}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-lg">Product Type:</span>{" "}
            {product.product.productType}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-lg">Refurbished:</span>{" "}
            {product.product.shippableProduct.isRefurbished == "False"
              ? "No"
              : "Yes"}
          </p>
          <div>
            <p className=" text-lg">
              <span className="font-semibold">Specifications: </span>
              <ul className="list-disc ms-5">
                {product.product.shippableProduct.specifications
                  .split("&bull;")
                  .map((specification, index) => {
                    const trimmedSpec = specification.trim();
                    if (trimmedSpec) {
                      return <li key={index}>{trimmedSpec}</li>;
                    }
                    return null; // If the specification is empty, return null to skip rendering
                  })}
              </ul>
            </p>
          </div>
          <p className="my-1 text-lg">
            {product.product.shippableProduct.notes2 === "" ? (
              ""
            ) : (
              <span>
                <span className="text-lg font-semibold">N.B.</span>{" "}
                {product.product.shippableProduct.notes2}
              </span>
            )}
          </p>
        </div>
      </div>
      {/* <ProductsButton /> */}
      <CustomButton route="products" name="Back" />
    </div>
  );
}
