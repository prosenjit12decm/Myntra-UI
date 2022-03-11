import React from 'react';


export default function Main() {
  return (
    <div className='content-main'>
      <p>Get subcriptions and free shipping for you till 1 week</p>
      <div className='inner-content'>
        <div className='slidebar'>
          <div className='col1'>
            <div className='offer' style={{ backgroundColor: "rgb(186, 73, 32)" }}><p>Flat</p> 80% Off</div>
            <div className='offer' style={{ backgroundColor: "rgb(52, 52, 158)" }}><p>Flat</p> 70% Off</div>
            <div className='offer' style={{ backgroundColor: "rgb(44, 58, 44)" }}><p>Flat</p> 60% Off</div>
          </div>
          <div className='col2'>
            <img src='/images/slidebar-3.jfif' alt='loading....' />

          </div>
          <div className='col1'>
            <div className='offer' style={{ backgroundColor: "rgb(186, 73, 32)" }}><p>Half</p> PRICE <p>store</p> </div>
            <div className='offer' style={{ backgroundColor: "rgb(52, 52, 158)" }}><p>Style Under</p> Rs. 499</div>
            <div className='offer' style={{ backgroundColor: "rgb(44, 58, 44)" }}><p>Flat</p> Rs. 400 Off</div>
          </div>
        </div>
        <div className='discount'>
          <img src='/images/discount.webp' alt='loading....' />
        </div>
        <div className='sale'>
          <img src='/images/sale-timing.webp' alt='loading....' />
        </div>
        <div className='dealoftheday'>
          <hr/>
          <p>Deal Of The Day</p>
          <hr/>
          <div className='items'>
            <div><img src='/images/item1.webp' alt='loading....' /></div>
            <div><img src='/images/item2.webp' alt='loading....' /></div>
            <div><img src='/images/item3.webp' alt='loading....' /></div>
            <div><img src='/images/item4.webp' alt='loading....' /></div>
            <div><img src='/images/item5.webp' alt='loading....' /></div>
            <div><img src='/images/item6.webp' alt='loading....' /></div>
            <div><img src='/images/item7.webp' alt='loading....' /></div>
            <div><img src='/images/item8.webp' alt='loading....' /></div>
            <div><img src='/images/item9.webp' alt='loading....' /></div>
            <div ><img src='/images/item10.webp' alt='loading....' /></div>
          </div>
        </div>
        <div className='category'>
          <hr/>
          <p>WINTER WEAR</p>
          <hr/>
          <div className='winteritem'>
            <img src='/images/winter1.webp' alt='loading.....'  />
            <img src='/images/winter2.webp' alt='loading.....'  />
            <img src='/images/winter3.webp' alt='loading.....'  />
            <img src='/images/winter4.webp' alt='loading.....'  />
            <img src='/images/winter5.webp' alt='loading.....'  />
          </div>
        </div>
        <div className='sale'>
          <img src='/images/sale-offer.webp' alt='loading....' />
        </div>
        <div className='category'>
          <hr/>
          <p>TOP BRANDS</p>
          <hr/>
          <div className='winteritem'>
            <img src='/images/brand7.webp' alt='loading.....'/>
            <img src='/images/brand6.webp' alt='loading.....'/>
            <img src='/images/brand3.webp' alt='loading.....'/>
            <img src='/images/brand4.webp' alt='loading.....'/>
            <img src='/images/brand5.webp' alt='loading.....'/>
          </div>
        </div>
      </div>
    </div>
  );
}
