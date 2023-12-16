import React, { useState } from 'react'
import { showSeeReview, showAddReview } from '../Store/utils'
import AddReviewModal from '../Components/AddReviewModal'
import ToastExample from '../Components/Toast'
import Circular from '../Components/Circular'
import ReviewModal from "../Components/ReviewModal"


const App = () => {

  const [refresh, setRefresh] = useState(false)

  const [update, setUpdate] = useState(false)

  console.log("hello world***")

  return (
    <div className="App">
      <ToastExample />
      <Circular />
      {ShopifyAnalytics.meta.page.customerId && <AddReviewModal setRefresh={setRefresh} refresh={refresh} setUpdate={setUpdate} />}
      <ReviewModal refresh={refresh} />
      <header className="App-header">
        <div>
          {ShopifyAnalytics.meta.page.customerId && <button type="button" className="btn btn-primary btn-lg me-2" onClick={showAddReview}>
            {!update ? "Add Review" : "Update Review"}
          </button>}
          <button type="button" className="btn btn-success btn-lg" onClick={showSeeReview}>
            View Reviews
          </button>
        </div>
      </header>
    </div>
  )
}

export default App