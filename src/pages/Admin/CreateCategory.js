// import React, { useEffect, useState } from "react";
// import Layout from "./../../components/Layout/Layout";
// import AdminMenu from "./../../components/Layout/AdminMenu";
// import toast from "react-hot-toast";
// import axios from "axios";
// import CategoryForm from "../../components/Form/CategoryForm";
// import { Modal } from "antd";

// const CreateCategory = () => {
//   const [categories, setCategories] = useState([]);
//   const [name, setName] = useState("");
//   const [visible, setVisible] = useState(false);
//   const [selected, setSelected] = useState(null);
//   const [updatedName, setUpdatedName] = useState("");
//   //handle Form
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         `${process.env.REACT_APP_API}/api/v1/category/create-category`,
//         {
//           name,
//         }
//       );
//       if (data?.success) {
//         toast.success(`${name} category created`);
//         getAllCategory();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("somthing went wrong in input form");
//     }
//   };

//   //get all cat
//   const getAllCategory = async () => {
//     try {
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_API}/api/v1/category/get-category`
//       );
//       if (data.success) {
//         setCategories(data.category);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something wwent wrong in getting catgeory");
//     }
//   };

//   useEffect(() => {
//     getAllCategory();
//   }, []);

//   //update category
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.put(
//         `${process.env.REACT_APP_API}/api/v1/category/update-category/${selected._id}`,
//         { name: updatedName }
//       );
//       if (data.success) {
//         toast.success(`${updatedName} is updated`);
//         setSelected(null);
//         setUpdatedName("");
//         setVisible(false);
//         getAllCategory();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error("Somtihing went wrong");
//     }
//   };
//   //delete category
//   const handleDelete = async (pId) => {
//     try {
//       const { data } = await axios.delete(
//         `${process.env.REACT_APP_API}/api/v1/category/delete-category/${pId}`
//       );
//       if (data.success) {
//         toast.success(`category is deleted`);

//         getAllCategory();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error("Somtihing went wrong");
//     }
//   };
//   return (
//     <Layout title={"Dashboard - Create Category"}>
//       <div className="container-fluid bg-light">
//         <div className="row">
//           <div className="col-md-3 p-4">
//             <AdminMenu />
//           </div>
//           <div className="col-md-9 content">
//             <h1 className="p-4 m-3 text-center">Manage Category</h1>
//             <div className="p-3 m-3 w-50">
//               <CategoryForm
//                 handleSubmit={handleSubmit}
//                 value={name}
//                 setValue={setName}
//               />
//             </div>
//             <div className="w-75 p-4 m-3">
//               <table className="table">
//                 <thead>
//                   <tr>
//                     <th scope="col">Name</th>
//                     <th scope="col">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {categories?.map((c) => (
//                     <>
//                       <tr>
//                         <td key={c._id}>{c.name}</td>
//                         <td>
//                           <button
//                             className="btn btn-success ms-2"
//                             onClick={() => {
//                               setVisible(true);
//                               setUpdatedName(c.name);
//                               setSelected(c);
//                             }}
//                           >
//                             Edit
//                           </button>
//                           <button
//                             className="btn btn-danger text-white ms-2"
//                             onClick={() => {
//                               handleDelete(c._id);
//                             }}
//                           >
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     </>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             <Modal
//               onCancel={() => setVisible(false)}
//               footer={null}
//               visible={visible}
//             >
//               <CategoryForm
//                 value={updatedName}
//                 setValue={setUpdatedName}
//                 handleSubmit={handleUpdate}
//               />
//             </Modal>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CreateCategory;


//GPT 1

// import React, { useEffect, useState } from "react";
// import Layout from "./../../components/Layout/Layout";
// import AdminMenu from "./../../components/Layout/AdminMenu";
// import toast from "react-hot-toast";
// import axios from "axios";
// import CategoryForm from "../../components/Form/CategoryForm";
// import { Modal, Table, Button } from "antd";
// import "../../styles/CreateCategoryStyles.css"; // Add the appropriate path to your styles

// const CreateCategory = () => {
//   const [categories, setCategories] = useState([]);
//   const [name, setName] = useState("");
//   const [visible, setVisible] = useState(false);
//   const [selected, setSelected] = useState(null);
//   const [updatedName, setUpdatedName] = useState("");

//   // handle Form
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         `${process.env.REACT_APP_API}/api/v1/category/create-category`,
//         {
//           name,
//         }
//       );
//       if (data?.success) {
//         toast.success(`${name} category created`);
//         getAllCategory();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong in input form");
//     }
//   };

//   // get all category
//   const getAllCategory = async () => {
//     try {
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_API}/api/v1/category/get-category`
//       );
//       if (data.success) {
//         setCategories(data.category);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong in getting category");
//     }
//   };

//   useEffect(() => {
//     getAllCategory();
//   }, []);

//   // update category
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.put(
//         `${process.env.REACT_APP_API}/api/v1/category/update-category/${selected._id}`,
//         { name: updatedName }
//       );
//       if (data.success) {
//         toast.success(`${updatedName} is updated`);
//         setSelected(null);
//         setUpdatedName("");
//         setVisible(false);
//         getAllCategory();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error("Something went wrong");
//     }
//   };

//   // delete category
//   const handleDelete = async (pId) => {
//     try {
//       const { data } = await axios.delete(
//         `${process.env.REACT_APP_API}/api/v1/category/delete-category/${pId}`
//       );
//       if (data.success) {
//         toast.success(`Category is deleted`);
//         getAllCategory();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error("Something went wrong");
//     }
//   };

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Actions",
//       key: "actions",
//       render: (text, record) => (
//         <>
//           <Button
//             type="button"
//             className="btn btn-success"
//             onClick={() => {
//               setVisible(true);
//               setUpdatedName(record.name);
//               setSelected(record);
//             }}
//           >
//             Edit
//           </Button>
//           <Button
//             type="button"
//             className=" btn btn-danger"
//             onClick={() => {
//               handleDelete(record._id);
//             }}
//           >
//             Delete
//           </Button>
//         </>
//       ),
//     },
//   ];

//   return (
//     <Layout title={"Dashboard - Create Category"}>
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-3 p-4">
//             <AdminMenu />
//           </div>
//           <div className="col-md-9 content">
//             <h1 className="p-4 m-3 text-center">Manage Category</h1>
//             <div className="p-3 m-3 w-50">
//               <CategoryForm
//                 handleSubmit={handleSubmit}
//                 value={name}
//                 setValue={setName}
//               />
//             </div>
//             <div className="w-75 p-4 m-3">
//               <Table dataSource={categories} columns={columns} />
//             </div>
//             <Modal
//               onCancel={() => setVisible(false)}
//               footer={null}
//               visible={visible}
//             >
//               <CategoryForm
//                 value={updatedName}
//                 setValue={setUpdatedName}
//                 handleSubmit={handleUpdate}
//               />
//             </Modal>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CreateCategory;


//GPT 2
import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import CategoryForm from "../../components/Form/CategoryForm";
import { Modal } from "antd";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  // Handle Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/category/create-category`,
        {
          name,
        }
      );
      if (data?.success) {
        toast.success(`${name} category created`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in input form");
    }
  };

  // Get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting category");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // Update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }
      );
      if (data.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  // Delete category
  const handleDelete = async (categoryId) => {
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/category/delete-category/${categoryId}`
      );
      if (data.success) {
        toast.success(`Category is deleted`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Create Category"}>
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-md-3 p-4">
            <AdminMenu />
          </div>
          <div className="col-md-7 content">
            <h1 className="p-4 m-3 text-center">Manage Category</h1>
            <div className="p-3 m-3 w-100">
              <CategoryForm
                handleSubmit={handleSubmit}
                value={name}
                setValue={setName}
              />
            </div>
            <div className="w-100 p-4 m-3">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((category) => (
                    <tr key={category._id}>
                      <td>{category.name}</td>
                      <td>
                        <div className="d-flex">
                          <button
                            className="btn btn-success ms-2 me-2"
                            onClick={() => {
                              setVisible(true);
                              setUpdatedName(category.name);
                              setSelected(category);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger text-white ms-2"
                            onClick={() => {
                              handleDelete(category._id);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              visible={visible}
            >
              <CategoryForm
                value={updatedName}
                setValue={setUpdatedName}
                handleSubmit={handleUpdate}
              />
            </Modal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
