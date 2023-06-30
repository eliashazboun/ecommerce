import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import './Products.scss'
import useFetch from '../../hooks/useFetch'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Products = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(500)
  const [sort, setSort] = useState(null)
  const [selectedSubCategory, setSelectedSubCategory] = useState([])
  const [open, setOpen] = useState(false)

  const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);
  const category = useFetch(`/categories?populate=*&[filters][id][$eq]=${catId}`);

  const handleOpen = () => {
    setOpen(!open)
  }
  
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCategory(isChecked ? [...selectedSubCategory, value] : selectedSubCategory.filter((item) => item !== value))
  }


  

  return (
    <div className='products'>
      <div className="wrap">
        
        <div className={`left${open ? " open" : ""}`}>
          <span>
            <div className={`icon${open ? " open" : ""}`} onClick={handleOpen}>
            <ArrowForwardIosIcon/>
          </div>
          </span>
          <div className="filterItem">
            {category.loading ? "Loading...." : <h1>{category.data[0].attributes.title}</h1>}
            <h2>Product Categories</h2>
            {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
            ))}
          </div>
          <div className="filterItem">
            <h2>Filter by price</h2>

            <div className="inputItem">
              <span>0</span>
              <input type="range" min={0} max={300} step={20} onChange={(e)=>setMaxPrice(e.target.value)}/>
              <span>{maxPrice}</span>
            </div>
          </div>

          <div className="filterItem">
            <h2>Sort By</h2>
            <div className="inputItem">
              <input type="radio" id='asc' value='asc' name='price'  onChange={e => setSort(':asc')} />
              <label htmlFor="asc">Price (Lowest First)</label>
            </div>
            <div className="inputItem">
              <input type="radio" id='desc' value='desc' name='price' onChange={e => setSort(':desc')} />
              <label htmlFor="desc">Price (Highest First)</label>
            </div>
          </div>
        </div>
      </div>

      <div className="right">
        {category.loading ? "Loading..." :<img className='catImg' src={process.env.REACT_APP_UPLOAD_URL + category.data[0].attributes.img.data.attributes.url } alt="" />}
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCategory}/>
      </div>
    </div>
  )
}

export default Products