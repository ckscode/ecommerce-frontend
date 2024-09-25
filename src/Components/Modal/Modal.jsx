import React, { useContext } from 'react';
import { ContextApi } from '../../Api/DataApi';
import StarRating from '../Star';

const Modal = () => {
    const {product,setProduct} = useContext(ContextApi);
   
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h3 className="modal-title " id="exampleModalLabel">{product?.title}</h3>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <img className='w-100' src={product?.thumbnail} alt='image'/>
        <div className="d-flex align-products-center mt-3">
                          <h2 className="m-0 me-2">${product?.price} </h2>
                          <span className="text-secondary">
                            <del>
                              $
                              {Math.round(
                                product?.price +
                                  product?.price * (product?.discountPercentage / 100)
                              )}
                            </del>{" "}
                            <span className="text-dark">
                              ({Math.round(product?.discountPercentage)}% off)
                            </span>
                          </span>
                        </div>

                        {product?.stock<6 && product?.stock>0?<p className="text-danger my-1">Only {product.stock} left in stock!</p>:""}
                        <p>{product?.description}</p>
                        <span className="d-flex align-products-center">
                          <StarRating
                            rating={Math.round(product?.rating * 2) / 2}
                          />
                          <p className="m-0 mt-2">
                            &nbsp;{Math.round(product?.rating * 2) / 2}
                          </p>
                        </span>
      </div>
      <div className="modal-footer">
        <h5>{product.stock<1?<span className='text-danger'>out of stock</span>:<span>Available stock - {product.stock}</span>}</h5>
      </div>
    </div>
  </div>
</div>
    );
};

export default Modal;