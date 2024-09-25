import React, { useContext, useEffect, useState } from "react";
import "./products.css";
import axios from "axios";
import StarRating from "../../Components/Star";
import { ContextApi } from "../../Api/DataApi";
import Canvas from "../../Components/Canvas/Canvas";

const Products = () => {
  const { data, setCategory, category, setData } = useContext(ContextApi);
  const handleCategory = (e) => {
    if (category.includes(e)) {
      setCategory(category.filter((ele) => ele !== e));
    } else {
      setCategory([...category, e]);
    }
  };

  console.log(data);

  return (
    <div className="w-100 justify-content-center">
      <div className="w-100 px-2 d-flex justify-content-between align-items-center">
        <div
          className="text-secondary fs-5 filter"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
        >
          <i className="fa-solid fa-filter"></i>
          &nbsp;<span className="">Filter</span>
        </div>
        <div className="w-25 ms-auto d-flex rounded-pill border border-secondary">
          <input
            className="form-control border-0 rounded-pill"
            type="search"
            placeholder="Search"
          />
          <button
            className="btn text-secondary border-0 rounded-pill"
            type="submit"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <div className="row w-100 mx-auto">
        {data !== undefined ? (
          <>
            {data &&
              data.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className="col-sm-6 col-md-4 col-lg-3 my-3"
                  >
                    <div className="card shadow-sm p-1">
                      <img
                        className="mx-auto card-img-top"
                        src={item.thumbnail}
                      />
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <h2 className="m-0 me-2">${item.price} </h2>
                          <span className="text-secondary">
                            <del>
                              $
                              {Math.round(
                                item.price +
                                  item.price * (item.discountPercentage / 100)
                              )}
                            </del>{" "}
                            <span className="text-dark">
                              ({Math.round(item.discountPercentage)}% off)
                            </span>
                          </span>
                        </div>
                        <h4 className="my-1">{item.title}</h4>
                        <p className="two-line-text">{item.description}</p>
                        <span className="d-flex align-items-center">
                          <StarRating
                            rating={Math.round(item.rating * 2) / 2}
                          />
                          <p className="m-0 mt-1">
                            &nbsp;{Math.round(item.rating * 2) / 2}
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </>
        ) : (
          ""
        )}
      </div>

    <Canvas handleCategory={(e)=>handleCategory(e)}/>
    </div>
  );
};

export default Products;
