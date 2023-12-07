import { hideLoader, showLoader, showToast } from "../Store/utils";

export const getReviewData = async(productId,setReviewData) => {

    showLoader()
    // Specify the URL endpoint for your API
    const apiUrl = `https://${location.host}/apps/test/public/api/getReview`;

    // Create an object with the data you want to send in the request body
    const postData = {
      productId
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
        hideLoader()
        setReviewData(data.reviewData)
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
        hideLoader()
        showToast("Something went wrong...", true)
      });

  }