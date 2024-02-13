import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="d-flex">
          <input
            type="text"
            className="form-control m-2"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" className="btn btn-primary m-2">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CategoryForm;
