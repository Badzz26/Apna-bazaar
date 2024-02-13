// import React, { useState, useEffect } from "react";
// import Layout from "../components/Layout/Layout";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// const CategoryProduct = () => {
//   const params = useParams();
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [category, setCategory] = useState([]);

//   useEffect(() => {
//     if (params?.slug) getPrductsByCategory();
//   }, [params?.slug]);

//   const getPrductsByCategory = async () => {
//     try {
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_API}/api/v1/product/product-category/${params.slug}`
//       );
//       setProducts(data?.products);
//       setCategory(data?.category);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Layout>
//       <div className="container mt-3">
//         <h4 className="text-center">Category - {category?.name}</h4>
//         <h6 className="text-center">{products?.length} result(s) found </h6>
//         {/* <div className="row"> */}
//         <div className="container-fluid row mt-0">
//           {/* All Products rendering*/}
//           <div className="col-md-1"></div>
//           <div className="products col-md-10">
//             <div className="d-flex flex-wrap">
//               {products?.map((p) => (
//                 <div
//                   key={p._id}
//                   className="card m-2"
//                   style={{ width: "15rem" }}
//                 >
//                   <img
//                     src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
//                     className="card-img-top"
//                     alt={p.name}
//                   />
//                   <div className="card-body ">
//                     <p className="card-text card-price"> Rs. {p.price}</p>
//                     <h5 className="card-title">{p.name}</h5>

//                     <p className="card-text">
//                       {p.description.substring(0, 30)}...
//                     </p>
//                     <div className="btns">
//                       <button
//                         className="btn "
//                         onClick={() => navigate(`/product/${p.slug}`)}
//                       >
//                         More Details
//                       </button>
//                       <button className="btn ">Like</button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="col-md-1"></div>
//         </div>
//         {/* </div> */}
//       </div>
//     </Layout>
//   );
// };

// export default CategoryProduct;

import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/HomePageStyles.css";

const CategoryProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});

  useEffect(() => {
    if (params?.slug) {
      getProductsByCategory();
    }
  }, [params?.slug]);

  const getProductsByCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-4">
        <h1 className="text-center mb-4">Category - {category?.name}</h1>
        <h6 className="text-center">{products?.length} result(s) found </h6>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products?.map((p) => (
            <div key={p._id} className="col">
              <div className="card h-100">
                <div className="card-body text-center">
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top product-image"
                    alt={p.name}
                  />
                  <h5 className="card-title mt-3">{p.name}</h5>
                  <p className="card-text card-price">Rs. {p.price}</p>
                  <div className="card-footer">
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      View Details
                    </button>
                    <button className="btn btn-outline-secondary">Like</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;

