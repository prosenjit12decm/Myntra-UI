import React, { useContext } from 'react';
import { products } from '../Data';
import Product from './Product';



export default function Studiio() {
    // const [productarr, setproductarr] = useContext();
    // let arr = productarr.map();w+
  return (
      <div>
          {
              products.map(products =>
                <Product
                    id = {products.id}
                    title = {products.title}
                    description ={products.description}
                    price = {products.price}
                    img ={products.img}
                />)
          }
      </div>
  );
}
