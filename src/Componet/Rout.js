import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Rout = () => {
  var { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get('https://dummyjson.com/products/' + id)
      .then(response => setData(response.data))
  
  }, [])


  if (data != null) {
    return (
      <>
        <div className="text-section-1">
          <div className="item_img-2">
            {
              data.images.map((v)=>{
                return <img src={v} alt="" />
              })
            }
          </div>
          {/* {v.discountPercentage} */}
          <div className="item_tex_2">
            <ul>
              <li> <span>Title:-</span>{data.title} </li>
              <li><span>Description:-</span>  {data.description}</li>
              <li><span>Category:-</span> {data.category}</li>
              <li><span>Price:-</span>{data.price}</li>
              <li><span>Brand:-</span>{data.brand}</li>
               <li><span>Stock:-</span>{data.stock}</li>
               <li><span>Tags:-</span>{data.tags}</li>
               <li><span>Sku:-</span>{data.sku}</li>


              <li><span>DiscountPercentage:-</span>{data.discountPercentage}</li>
              <li><span>Rating:-</span>{data.rating}</li>
            </ul>
          </div>

        </div>
      </>
    )
  }
  else {
    <h2>
      Loading...
    </h2>
  }
}

export default Rout;