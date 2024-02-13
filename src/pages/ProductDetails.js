// import React, { useState, useEffect } from "react";
// import Layout from "./../components/Layout/Layout";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// const ProductDetails = () => {
//   const params = useParams();
//   const [product, setProduct] = useState({});

//   //inital details
//   useEffect(() => {
//     if (params?.slug) getProduct();
//   }, [params?.slug]);
//   //getProduct
//   const getProduct = async () => {
//     try {
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`
//       );
//       setProduct(data?.product);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <Layout>
//       <div className="container d-flex mt-4">
//         <div className="">
//           <img
//             src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
//             className="card-img-details"
//             alt={product.name}
//           />
//         </div>
//         <div className="">
//           <h1>Product Details</h1>
//           <h6>Name : {product.name}</h6>
//           <h6>Description : {product.description}</h6>
//           <h6>Price : {product.price}</h6>
//           <h6>Category : {product?.category?.name}</h6>
//           <button class="btn ms-1">LIKE</button>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default ProductDetails;


//GPT 1
import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  // Fetch product details
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`
        );
        setProduct(data?.product);
      } catch (error) {
        console.log(error);
      }
    };

    if (params?.slug) getProduct();
  }, [params?.slug]);

  return (
    <Layout>
      <div className="container pt-5">
        <div className="row pt-5">
          <div className="col-md-2"></div>
          <div className="col-md-4 mb-4">
            <img
              src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
              className="img-fluid rounded"
              alt={product.name}
            />
          </div>
          <div className="col-md-6">
            <h1 className="mb-3">Product Details</h1>
            <h6>
              <strong>Name:</strong> {product.name}
            </h6>
            <h6>
              <strong>Description:</strong> {product.description}
            </h6>
            <h6>
              <strong>Price:</strong> {product.price}
            </h6>
            <h6>
              <strong>Category:</strong> {product?.category?.name}
            </h6>
            <button className="btn btn-primary mt-3" onClick={() => navigate("/like")}>
              LIKE
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;


