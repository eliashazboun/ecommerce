import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
  const id = useParams().id
  const [selectedImage, setSelectedImage] = useState('img');
  const [quantity,setQuantity] = useState(1)

  const dispatch = useDispatch()

  const {data, loading, error} = useFetch(`/products/${id}?populate=*`)
  


  return (
    <div className='product'>
      {loading ? ("Loading...") : (<><div className="left">
        <div className="images">
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e => setSelectedImage('img')}/>
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e => setSelectedImage('img2')} />
        </div>
        <div className="mainImg">
          <img src={process.env.REACT_APP_UPLOAD_URL +data?.attributes[selectedImage]?.data?.attributes?.url} alt="" />
        </div>
      </div>

      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className='price'>{data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add" onClick={()=>dispatch(addToCart({
          id:data.id,
          title:data.attributes.title,
          desc:data.attributes.desc,
          price:data.attributes.price,
          img:data.attributes.img.data.attributes.url,
          quantity


        }))}>
          <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon/> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>

      </div>
      </>)}
    </div>
  )
}

export default Product