import React, { useEffect } from 'react';
import Image from 'next/image';
import CloseCart from '../../assets/icons/closeCart.svg';
import Link from 'next/link';
import { useState } from 'react';
import RemoveCartProduct from '../../assets/icons/removeCartProduct.svg';

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  _id: string;
}

interface CartModalProps {
  toggleCart: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ toggleCart }) => {

  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const initializedCart = savedCart.map((product: Product) => ({
      ...product,
      quantity: product.quantity || 1,
    }));
    setCart(initializedCart);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const getTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };


  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter(product => product._id !== productId);
    setCart(updatedCart);
  };
  return (
    <div className="fixed top-0 right-0 h-full w-full flex items-start justify-end bg-black bg-opacity-60 z-50" onClick={toggleCart}>
      <div className="bg-white w-[80%] max-w-[417px] h-full overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
        <div className="fixed top-0 w-[417px] border-b-2 border-[#D9D9D9] mb-5 p-6 bg-white">
          <button onClick={toggleCart} className="absolute top-4 right-10 p-2  text-white rounded-full">
            <Image src={CloseCart} alt="Close Cart" />
          </button>
          <h2 className="text-2xl font-bold">Savat</h2>
        </div>
        <div className="p-6 mt-[70px] mb-[120px]">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Savat bosh</p>
          ) : (
            <ul className="list-none p-0">
              {
                cart.map((product: Product) => (
                  <li key={product._id} className="flex items-center mb-4 pb-2">
                    <Image
                      src={product.image}
                      alt={product.title}
                      className="w-[108px] h-[105px] object-cover mr-4 rounded"
                      width={80}
                      height={80}
                    />
                    <div>
                      <p className="font-semibold text-lg">{product.title}</p>
                      <div className='flex justify-between'>
                        <p className="text-gray-600 mr-4">{product.quantity}</p>
                        <p className='text-gray-600 mr-4'>X</p>
                        <p className="text-[#B88E2F] w-[150px]">Rs. {product.price}.00</p>
                      </div>
                    </div>
                    <div className="">
                      <button onClick={() => removeFromCart(product._id)}><Image src={RemoveCartProduct} alt="Close Cart" /></button>
                    </div>
                  </li>
                ))
              }
            </ul>
          )}
        </div>
        <div className="fixed bottom-0 w-[417px] bg-white shadow-lg shadow-[#000]">
          <div className="flex justify-between border-b-2 border-[#D9D9D9] p-6">
            <p>SubTotal:</p>
            <p>Rp {getTotal().toFixed(2)}</p>
          </div>
          <div className='flex justify-between p-6 gap-[10px]'>
            <Link className='border border-[#000] rounded-[50px] px-[23px] py-[60x]' href="/cart" onClick={toggleCart}>Cart</Link>
            <Link className='border border-[#000] rounded-[50px] px-[23px] py-[60x]' href="/checkout" onClick={toggleCart}>Checkout</Link>
            <Link className='border border-[#000] rounded-[50px] px-[23px] py-[60x]' href="/comparison" onClick={toggleCart}>Comparison</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
