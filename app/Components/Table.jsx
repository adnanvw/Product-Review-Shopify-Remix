import React, { useEffect, useState } from 'react'
import { Page, LegacyCard, DataTable } from '@shopify/polaris';

const Table = ({ topProducts, worstProducts }) => {

    const [rows, setRows] = useState([])

    useEffect(() => {

        if (topProducts && topProducts.length) {
            const data = topProducts?.map((item) => {
                return [<img src={item.image} style={{ height: "100px", width: "100px" }} />, item.productTitle, item.rating]
            })
            setRows(data)

        }
    }, [topProducts])
    
    useEffect(() => {

        if (worstProducts && worstProducts.length) {
            const data = worstProducts?.map((item) => {
                return [<img src={item.image} style={{ height: "100px", width: "100px" }} />, item.productTitle, item.rating]
            })
            setRows(data)

        }
    }, [worstProducts])


    return (
        <>
            <DataTable
                columnContentTypes={[
                    'text',
                    'text',
                    'numeric',
                ]}
                headings={[
                    'Product-Image',
                    'Product-Title',
                    'Product-Rating',
                ]}
                rows={rows}
            />
        </>
    )
}

export default Table