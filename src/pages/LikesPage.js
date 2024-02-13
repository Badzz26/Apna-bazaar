import React from "react";
import Layout from "../components/Layout/Layout";
import { useLikes } from "../context/Likes";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LikesPage = () => {
  const [likes, setLikes] = useLikes();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();


  //Remove liked product
  const removeLikedProduct = (pid) => {
    try {
        let myLikes = [...likes];
        let index = myLikes.findIndex(item => item._id === pid)
        myLikes.splice(index, 1)
        setLikes(myLikes);
        localStorage.setItem('likes', JSON.stringify(myLikes))
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
              {`Hello ${auth?.token && auth?.user?.name}`}
            </h1>
            <h4 className="text-center">
              {likes?.length > 1
                ? `You have liked ${likes.length} products. ${
                    auth?.token ? "" : "Please Login to view liked products"
                  }`
                : "No Liked Products"}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            {likes?.map((p) => (
              <div className="row card flex-row my-3">
                <div className="col-md-4">
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top product-image"
                    alt={p.name}
                  />
                </div>
                <div className="col-md-8">
                <div className="row">
                  <h5 className="col-md-6 card-title my-3">{p.name}</h5>
                  <p className="col-md-6 card-title my-3">Rs. {p.price}</p>
                  </div>
                  <p className="card-text">Product Details: {p.description}</p>

                  <div className="card-footer text-center">
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      View Details
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeLikedProduct(p._id)}
                    >
                      Remove Like
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LikesPage;
