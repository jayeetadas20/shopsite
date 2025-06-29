import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Items/Item'
import './css/Shopcategory.css'

const ShopCategory = (props) => {
  const {AllProduct_data} = useContext(ShopContext)
  return (
    <div className='ShopCategory'>
        <div className="catbanner">
          {props.banner}
        </div>

        <div className="shop_category_products">
           {AllProduct_data.map((item,index)=>{
              if(props.category===item.category){
              return <Item key={index} id={item.id} img={item.img} name={item.name} newPrice={item.newPrice} oldPrice={item.oldPrice} />
              } else{
                return null;
              }
           })}
        </div>
    </div>
  )
}

export default ShopCategory