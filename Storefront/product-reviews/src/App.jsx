import React from 'react'
import { hideAddReview, showAddReview } from '../Store/utils'
import AddReviewModal from '../Components/AddReviewModal'

const App = () => {
  return (
    <div className="App">
      <AddReviewModal/>
      <header className="App-header">
        <div>
          <button type="button" className="btn btn-primary btn-lg me-2" onClick={()=>showAddReview()}>
            Add Review
          </button>
          <button type="button" className="btn btn-success btn-lg" onClick={()=>hideAddReview()}>
            View Reviews
          </button>
        </div>
      </header>
    </div>
  )
}

export default App