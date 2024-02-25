//to get list of products
export async function getAllProducts() {
  const apiResponse = await fetch(
    "https://groupyfy.com:8000/published-products"
  );
  const result = await apiResponse.json();

  return result;
}

// to get a single product
export async function getProductDetails(id) {
  const apiResponse = await fetch(
    `https://groupyfy.com:8000/published-products/${id}`
  );
  const result = await apiResponse.json();

  return result;
}
