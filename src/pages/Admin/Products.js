// import React, { useState, useEffect } from "react";
// import AdminMenu from "../../components/Layout/AdminMenu";
// import Layout from "./../../components/Layout/Layout";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { Link } from "react-router-dom";
// const Products = () => {
//   const [products, setProducts] = useState([]);

//   //getall products
//   const getAllProducts = async () => {
//     try {
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_API}/api/v1/product/get-product`
//       );
//       setProducts(data.products);
//     } catch (error) {
//       console.log(error);
//       toast.error("Something Went Wrong");
//     }
//   };

//   //lifecycle method
//   useEffect(() => {
//     getAllProducts();
//   }, []);
//   return (
//     <Layout>
//       <div className="row m-3 p-3">
//         <div className="col-md-3">
//           <AdminMenu />
//         </div>
//         <div className="col-md-9">
//           <h1 className="text-center">All Products List</h1>
//           <div className="d-flex flex-wrap">
//             {products?.map((p) => (
//               <Link
//                 style={{ textDecoration: "none" }}
//                 key={p._id}
//                 to={`/dashboard/admin/product/${p.slug}`}
//                 className="product-link"
//               >
//                 <div className="card m-2" style={{ width: "15rem" }}>
//                   <img
//                     src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
//                     className="card-img-top"
//                     alt={p.name}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title ">{p.name}</h5>
//                     <p className="card-text card-price"> Rs. {p.price}</p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Products;

//GPT 1

// import React, { useState, useEffect } from "react";
// import AdminMenu from "../../components/Layout/AdminMenu";
// import Layout from "./../../components/Layout/Layout";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import "../../styles/HomePageStyles.css"; // Add the appropriate path to your styles

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   // Get all products
//   const getAllProducts = async () => {
//     try {
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_API}/api/v1/product/get-product`
//       );
//       setProducts(data.products);
//     } catch (error) {
//       console.log(error);
//       toast.error("Something Went Wrong");
//     }
//   };

//   // Lifecycle method
//   useEffect(() => {
//     getAllProducts();
//   }, []);

//   return (
//     <Layout title={"Admin Dashboard - Products"}>
//       <div className="container mt-4">
//         <div className="row row-cols-1 row-cols-md-3 g-4">
//           <div className="col-md-3">
//             <AdminMenu />
//           </div>
//           <div className="col-md-9">
//             <h1 className="text-center mb-4">All Products List</h1>
//             <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//               {products?.map((p) => (
//                 <div key={p._id} className="col">
//                   <Link
//                     style={{ textDecoration: "none" }}
//                     to={`/dashboard/admin/product/${p.slug}`}
//                     className="product-link"
//                   >
//                     <div className="card h-100">
//                       <img
//                         src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
//                         className="card-img-top product-image"
//                         alt={p.name}
//                       />
//                       <div className="card-body">
//                         <h5 className="card-title">{p.name}</h5>
//                         <p className="card-text card-price">Rs. {p.price}</p>
//                       </div>
//                     </div>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Products;

//GPT 2
import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "../../styles/HomePageStyles.css"; // Add the appropriate path to your styles

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product`
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  // Lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout title={"Admin Dashboard - Products"}>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-3 ">
            <AdminMenu />
          </div>
          <div className="col-md-8">
            <h1 className="text-center mb-4">All Products List</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {products?.map((p) => (
                <div key={p._id} className="col mb-4">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/dashboard/admin/product/${p.slug}`}
                    className="text-dark text-decoration-none"
                  >
                    <div className="card h-100 product-card">
                      <img
                        src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                        className="card-img-top product-image"
                        alt={p.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text card-price">Rs. {p.price}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
