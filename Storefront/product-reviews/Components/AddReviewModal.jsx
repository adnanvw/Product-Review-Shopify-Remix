import React, { useState } from 'react'
import {useSnapshot} from "valtio"
import state from "../Store/store"

const AddReviewModal = () => {

  const [rating, setRating] = useState(0);

  const snap = useSnapshot(state)

  const handleStarClick = (starIndex) => {
    setRating(starIndex + 1);
  };

  return (
    <>
      <div class={`modal fade ${snap.open?"show":""}`} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display:snap.open?"block":"none"}}>
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add Review</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Add Review</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Rating:</label>
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={`star-icon bi bi-star${index < rating ? '-fill' : ''}`}
                    onClick={() => handleStarClick(index)}
                  ></span>
                ))}
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddReviewModal