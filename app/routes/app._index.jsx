import { Page, LegacyCard, DataTable } from '@shopify/polaris';
import React, { useEffect, useState } from 'react';
import Table from '../Components/Table';
import { hideLoader, showLoader, showToast } from '../Store/utils';
import Circular from '../Components/Circular';
import ToastExample from '../Components/Toast';


function DataTableExample() {

  const [topProducts, setTopProducts] = useState([])

  const [worstProducts, setWorstProducts] = useState([])


  const getTopProducts = () => {
    // Example GET request using Fetch
    showLoader()
    fetch('api/getTopProducts')
      .then(response => {
        // Check if the response status is OK (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response as JSON
        return response.json();
      })
      .then(data => {
        // Handle the JSON data here
        console.log('Response:', data);
        setTopProducts(data.finalArray)
        hideLoader()
        showToast("Products fetched successfully.", false)
      })
      .catch(error => {
        // Handle errors here
        console.error('Error:', error);
        hideLoader()
        showToast("Something went wrong...", true)
      });

  }


  const getWorstProducts = () => {
    // Example GET request using Fetch
    showLoader()
    fetch('api/worstProducts')
      .then(response => {
        // Check if the response status is OK (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response as JSON
        return response.json();
      })
      .then(data => {
        // Handle the JSON data here
        console.log('Response:', data);
        setWorstProducts(data.finalArray)
        hideLoader()
        showToast("Products fetched successfully.", false)
      })
      .catch(error => {
        // Handle errors here
        console.error('Error:', error);
        hideLoader()
        showToast("Something went wrong...", true)
      });

  }

  useEffect(() => {
    getTopProducts()
    getWorstProducts()
  }, [])

  return (
    <>
      <Circular />
      <ToastExample />
      <Page title="Products-Review-Rating">
        <LegacyCard>
          <div style={{ textAlign: "center", fontSize: "30px", fontWeight: "bold", padding: "22px", lineHeight: "32px" }}>Top Rated Products</div>
          <Table topProducts={topProducts} />
        </LegacyCard>
        <LegacyCard>
          <div style={{ textAlign: "center", fontSize: "30px", fontWeight: "bold", padding: "22px", lineHeight: "32px" }}>Low Rated Products</div>
          <Table worstProducts={worstProducts} />

        </LegacyCard>
      </Page>
    </>
  );
}

export default DataTableExample