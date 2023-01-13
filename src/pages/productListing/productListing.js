import React, {useEffect} from 'react'
import Layout from '../../components/layout/layout';
import Navigation from '../../components/navigation/navigation';
import styles from './productListing.module.scss';
import { useRouter } from 'next/router'

import { products } from '../../../mockData/mockData';
import ProductCard from '../../components/productCard/productCard';
const ProductListing = () => {
    const router = useRouter()
    
  return (
        <Layout>
            <div className={styles.productListing}>
                {
                    products.map((product) => (
                        <ProductCard product={product}key={product.id} name={product.name} price={product.price} productId={product.id}/>
                    ))
                }
            </div>
        </Layout>
  )
}

export default ProductListing;