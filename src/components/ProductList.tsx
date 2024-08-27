import React, { useState, useEffect } from 'react'

const ProductList = ({ category }: { category: string }) => {
    const [products, setProducts] = useState<string[]>([])

    useEffect(() => {
        console.log('Fetching data...', category)
        setProducts(['Product 1', 'Product 2', 'Product 3'])
    }, [category])

    return (
        <div>ProductList</div>
    )
}

export default ProductList