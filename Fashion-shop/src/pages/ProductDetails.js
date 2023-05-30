import React, {useContext} from 'react';

//import useParams
import { useParams } from 'react-router-dom';

// cart context
import { CartContext } from '../contexts/CartContext';

// product context
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  //get product id
  const { id } = useParams()
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  //get the single product by id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  //Khong tim thay san pham
  if (!product) {
    return <section className='h-screen flex justify-center items-center'>Loading...</section>
  }

  const {title, price, description, image} = product;

  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
        <div className='container mx-auto border shadow-sm p-16 rounded'>
          <div className='flex flex-col lg:flex-row items-center'>
            {/* Image */}
            <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
              <img className='max-w-[200px] lg:max-w-sm' src={image} alt=''/>
            </div>
    
            {/* Text */}
            <div className='flex-1 text-center lg:text-left'>
              <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>
                {title}
              </h1>
              <div className='text-xl text-red-500 font-medium mb-6 '>
                $ {price}
              </div>
              <p className='mb-8'>{description}</p>
              <button onClick={()=> addToCart(product, product.id)} className='bg-white py-4 px-8 text-primary border rounded border-black'> 
                Thêm vào giỏ hàng
              </button>

              <button onClick={()=> addToCart(product, product.id)} className='bg-primary py-4 px-8 text-white ml-8 rounded'> 
                Mua ngay
              </button>
            </div>
          </div>
        
        </div>
    </section>
    );
};

export default ProductDetails;
