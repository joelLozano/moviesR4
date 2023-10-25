import React from 'react'
import './Carousel.css'


export default function Carousel() {
  return (
    <div className='container-carousel'>

        <div className='left'>left</div>

        <div className='container-image'>
            <img src="https://images5.alphacoders.com/132/thumbbig-1328421.webp" alt="" />
        </div>

        <div className='container-image'>
            <img src="https://www.gran-turismo.com/images/c/i13ynTpBw8HAmb.jpg" alt="" />
        </div>

        <div className='container-image'>
            <img src="https://files.merca20.com/uploads/2023/10/radical-eugenio-derbez.jpg" alt="" />
        </div>
        <div className='rigth'>rigth</div>
    </div>
  )
}