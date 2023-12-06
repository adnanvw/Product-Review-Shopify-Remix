import React from 'react'
import { showSeeReview, showAddReview } from '../Store/utils'
import AddReviewModal from '../Components/AddReviewModal'

const App = () => {

  

  console.log("hello world***")
  return (
    <div className="App">
      <AddReviewModal/>
      <header className="App-header">
        <div>
          <button type="button" className="btn btn-primary btn-lg me-2" onClick={showAddReview}>
            Add Review123
          </button>
          <button type="button" className="btn btn-success btn-lg" onClick={showSeeReview}>
            View Reviews
          </button>
        </div>
      </header>
    </div>
  )
}

export default App