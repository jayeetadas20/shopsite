import React from 'react'
import './CategoryBanner.css'
import womenbannerimg from '../Assets/Women-banner.png'

const CategoryBannerWomen = () => {
  return (
    <div className='CategoryBanner'>      
            <h1>Women's Collection</h1>
            <div className="CategoryBanner_img">
              <img src={womenbannerimg} alt="catbannerimg" />
            </div>
    </div>
  )
}

export default CategoryBannerWomen