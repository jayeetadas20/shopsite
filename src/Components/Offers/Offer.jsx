import React from 'react'
import './Offer.css'
import offerimg from '../Assets/offer_img.png'

const Offer = () => {
  return (
    <div className='offer'>
        <div className="offer_div">
            <div className="offer_div_left">
                <h2><span>Exclusive Offers</span><br/> For you !</h2>
                <p>grabe Your offer now.</p>
                <a href="#" className="btn offer_btn">
                    Ltest Collection
                </a>
            </div>
            <div className="offer_div_right">
                <img src={offerimg} alt="offer_img" />
            </div>
        </div>
    </div>
  )
}

export default Offer