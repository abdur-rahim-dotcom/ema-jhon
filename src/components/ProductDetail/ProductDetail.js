import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from './../../fakeData/index';
import './ProductDetail.css'
import Product from '../Product/Product';


const ProductDetail = () => {
    const { productKey } = useParams();
    const findProduct = fakeData.find(pd => pd.key === productKey)
    return (
        <div className='product-detail'>

            <Product
                showButton={false}
                product={findProduct}></Product>
        </div>
    );
};

export default ProductDetail;