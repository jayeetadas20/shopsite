import React from 'react'
import './CategoryBanner.css'
import kidbannerimg from '../Assets/kid-banner.png'

const CategoryBannerKids = () => {
  return (
    <div className='CategoryBanner'>      
            <h1>Women's Collection</h1>
            <div className="CategoryBanner_img">
              <img src={kidbannerimg} alt="catbannerimg" />
            </div>
    </div>
  )
}

export default CategoryBannerKids