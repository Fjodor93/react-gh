import '../Content.css';
import '../Products.css';
import React from 'react';
import { Helmet } from 'react-helmet';

function Products() {
    return (
        <div className='contentcontainer'>
        <Helmet><title>Products</title></Helmet>
        <h1>Produkter</h1>
        </div>

    ); 
  }

  export default Products;