import React, { useState } from 'react'
import { useSnapshot } from "valtio"
import state from "../Store/store"
import { hideAddReview } from "../Store/utils"

const AddReviewModal = () => {

  const [rating, setRating] = useState(0);

  const [review, setReview] = useState("")

  const snap = useSnapshot(state)

  const handleReview = (e) => {
    setReview(e.target.value)
  }

  const handleStarClick = (starIndex) => {
    // console.log(starIndex,"   kkkOPP  ",rating)
    if (starIndex == rating - 1) {
      setRating(el => el - 1)
    } else {
      setRating(starIndex + 1);

    }
  };


  const handleSubmit = (e) => {
    console.log("lll*/-", rating, review)

    // Specify the URL endpoint for your API
    const apiUrl = `https://${location.host}/apps/test/public/api/saveReview`;

    // Create an object with the data you want to send in the request body
    const postData = {
      review,
      customerId:ShopifyAnalytics.meta.page.customerId,
      rating,
      shop:Shopify.shop
    };

    // Use the fetch function to make a POST request
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify the content type as JSON
        // Add any other headers if required
      },
      body: JSON.stringify(postData), // Convert the data object to a JSON string
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the JSON response
      })
      .then(data => {
        // Handle the data from the response
        console.log('Response data:', data);
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
      });

  }

  return (
    <>
      <div class={`modal fade ${snap.addReview.open ? "show" : ""}`} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: snap.addReview.open ? "block" : "none" }}>
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add Review</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={hideAddReview}></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Add Review</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={review} onChange={handleReview}></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Rating:</label>
                {Array.from({ length: 5 }, (_, index) => (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={index < rating ? "red" : "white"} stroke={index < rating ? "red" : "black"} class="bi bi-star-fill" viewBox="0 0 16 16" onClick={() => handleStarClick(index)}>
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                ))}
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={hideAddReview}>Close</button>
              <button type="button" class="btn btn-primary" onClick={handleSubmit}>Add Review</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddReviewModal