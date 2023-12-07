import React, { useState, useEffect } from 'react'
import { hideLoader, hideSeeReview, showLoader, showToast } from '../Store/utils';
import { useSnapshot } from "valtio"
import state from "../Store/store"
import { getReviewData } from '../Fetch/getReviewData';
const ReviewModal = ({refresh}) => {

  const [reviewData, setReviewData] = useState([])

  const snap = useSnapshot(state)

  let customBlock = document.querySelector("#root");

  const productId = customBlock.getAttribute("data-product_id");

  const productTitle = customBlock.getAttribute("data-product_title")



  useEffect(() => {
    getReviewData(productId,setReviewData)
  }, [refresh])


  const StarRating = ({ rating }) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={index < rating ? "red" : "white"} stroke={index < rating ? "red" : "black"} class="bi bi-star-fill" viewBox="0 0 16 16" onClick={() => handleStarClick(index)}>
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
      </svg>
    ));

  };
  return (
    <div class={`modal fade ${snap.seeReview.open ? "show" : ""}`} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: snap.seeReview.open ? "block" : "none" }}>
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">{`Review For ${productTitle}`}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={hideSeeReview}></button>
          </div>
          <div class="modal-body">
            {
              reviewData?.map((review, index) => {
                return (
                  <>
                    <div key={index} class="card mb-3">
                      <div class="card-body">
                        <h5 class="card-title">{review.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{review.email}</h6>
                        <p class="card-text">{review.review}</p>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <StarRating rating={review.rating} />
                        </li>
                      </ul>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewModal