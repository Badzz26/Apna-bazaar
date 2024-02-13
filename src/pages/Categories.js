// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import useCategory from "../hooks/useCategory";
// import Layout from "../components/Layout/Layout";
// const Categories = () => {
//   const categories = useCategory();
//   return (
//     <Layout title={"All Categories"}>
//       <div className="container">
//         <div className="row">
//           {categories.map((c) => (
//             <div className="col-md-6 mt-5 mb-3 gx-3 gy-3" key={c._id}>
//               <Link to={`/category/${c.slug}`} className="btn category">
//                 {c.name}
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Categories;

// import React from "react";
// import { Link } from "react-router-dom";
// import useCategory from "../hooks/useCategory";
// import Layout from "../components/Layout/Layout";

// const Categories = () => {
//   const categories = useCategory();

//   return (
//     <Layout title={"All Categories"}>
//       <h1 className="text-center m-5">All Categories</h1>
//       <div className="container d-flex flex-wrap justify-content-center">
//         {categories.map((c) => (
//           <div className="m-3" key={c._id}>
//             <Link to={`/category/${c.slug}`} className="btn category">
//               {c.name}
//             </Link>
//           </div>
//         ))}
//       </div>
//     </Layout>
//   );
// };

// export default Categories;

import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import "../styles/CategoriesStyles.css"; // Add your custom CSS file for styling

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"All Categories"}>
      <div className="categories-container">
        <h1 className="text-center mb-5">Explore Our Categories</h1>
        <div className="category-buttons-container">
          {categories.map((c) => (
            <div className="category-button" key={c._id}>
              <Link to={`/category/${c.slug}`} className="btn category-link">
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;


