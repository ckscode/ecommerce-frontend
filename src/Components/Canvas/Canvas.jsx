import React from 'react';

const Canvas = ({handleCategory}) => {
    return (
        <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        id="offcanvasWithBothOptions"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Select Product Category
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="d-flex align-items-center mb-3">
            <input
              id="smartphones"
              name="category"
              type="checkbox"
              value="smartphones"
              onChange={(e) => handleCategory(e.target.value)}
            />
            <label htmlFor="smartphones">&nbsp;Smartphones</label>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input
              id="laptops"
              name="category"
              type="checkbox"
              value="laptops"
              onChange={(e) => handleCategory(e.target.value)}
            />
            <label htmlFor="laptops">&nbsp;Laptops</label>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input
              id="fragrances"
              name="category"
              type="checkbox"
              value="fragrances"
              onChange={(e) => handleCategory(e.target.value)}
            />
            <label htmlFor="fragrances">&nbsp;Fragrances</label>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input
              id="skincare"
              name="category"
              type="checkbox"
              value="skincare"
              onChange={(e) => handleCategory(e.target.value)}
            />
            <label htmlFor="skincare">&nbsp;Skin care</label>
          </div>
        </div>
      </div>
    );
};

export default Canvas;