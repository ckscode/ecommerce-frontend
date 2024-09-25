import React from "react";
import Products from "./Pages/Products/Products";
import { ContextProvider } from "./Api/DataApi";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <>
      <ContextProvider>
        <Layout>
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item  active">
                <div className="image1">
                  <div class="carousel-caption h-100 d-flex justify-content-center align-items-center">
                    <div>
                      <h1 className="fw-semibold display-2">Smartphones</h1>
                    
                    </div>
                  </div>
                
                </div>
              </div>
              <div className="carousel-item ">
                <div className="image2">
                <div class="carousel-caption h-100 d-flex justify-content-center align-items-center">
                    <div>
                      <h1 className="fw-semibold">Women's wear </h1>
                      <p>
                      "Stay Tuned for Our Latest Women's Wear Collection!"

                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="image3">
                <div class="carousel-caption h-100 d-flex justify-content-center align-items-center">
                    <div>
                      <h1 className="fw-semibold display-3">Products</h1>
                      <p>
                        Smartphones , laptops ,skin care and Arabic fragrances.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <Products />
        </Layout>
      </ContextProvider>
    </>
  );
}

export default App;
