import React, { useEffect, useState } from "react";
import './products.css'
import axios from "axios";


const Products = () => {
  const [data, setData] = useState();
  const [category,setCategory] = useState([]);
  useEffect(() => {
    axios.post("http://localhost:4000/api/data",{category:category})
      .then((response) => setData(response.data.data))
      .catch((err) => console.log(err));
  }, [category]);

const handleCategory = (e) =>{
  if(category.includes(e)){
   setCategory(category.filter((ele)=>ele!==e))
  }else{
    setCategory([...category,e])
  }
    
}

  console.log(data)

  return (
    <div className="w-100 justify-content-center">
      <div className="w-100 px-2 d-flex justify-content-between align-items-center">
        <div className="text-secondary fs-5 filter" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" >
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
        {data!==undefined?<>
          {data&&data.map((item, index) => {
            return (
              <div key={item.id} className="col-sm-6 col-md-4 col-lg-3 my-3">
                <div  className="card shadow-sm p-1">
                  <img className="mx-auto card-img-top" src={item.thumbnail} />
                  <div className="card-body">
                    <h4>${item.price}</h4>
                    <h5>{item.title}</h5>
                    <h6 className="">{item.brand}</h6>
                  </div>
                </div>
              </div>
            );
          })}</>:""}
       
      </div>



<div className="offcanvas offcanvas-start" data-bs-scroll="true"  id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Select Product Category</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div className="d-flex align-items-center mb-3">
    <input id='smartphones'  name='category'type="checkbox" value='smartphones' onChange={(e)=>handleCategory(e.target.value)}/>
    <label htmlFor="smartphones">&nbsp;Smartphones</label>
    </div>
    <div className="d-flex align-items-center mb-3">
    <input id='laptops'  name='category'type="checkbox" value='laptops' onChange={(e)=>handleCategory(e.target.value)}/>
    <label htmlFor="laptops">&nbsp;Laptops</label>
    </div>
    <div className="d-flex align-items-center mb-3">
    <input id='fragrances'  name='category'type="checkbox" value='fragrances' onChange={(e)=>handleCategory(e.target.value)}/>
    <label htmlFor="fragrances">&nbsp;Fragrances</label>
    </div>
    <div className="d-flex align-items-center mb-3">
    <input id='skincare'  name='category'type="checkbox" value='skincare' onChange={(e)=>handleCategory(e.target.value)}/>
    <label htmlFor="skincare">&nbsp;Skin care</label>
    </div>
  </div>
</div>


    </div>
  );
};

export default Products;
