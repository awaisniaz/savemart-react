import React from 'react'
import { Skeleton } from 'antd';
function Card({ item, loading }: any) {
    return <div className="product-card">
        {item?.rating > 40 ? <div className="badge">Hot</div> : null}
        <div className="product-tumb">
            {loading ? <Skeleton.Image active={true} /> : <img src="https://i.imgur.com/xdbHo4E.png" alt="" />}
        </div>
        <div className="product-details">
            <span className="product-catagory">Women,bag</span>
            <h4><a href="">{item?.Name}</a></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
            <div className="product-bottom-details">
                <div className="product-price"><small>$96.00</small>${item?.rating}</div>
                <div className="product-links">
                    <a href=""><i className="fa fa-heart"></i></a>
                    <a href=""><i className="fa fa-shopping-cart"></i></a>
                </div>
            </div>
        </div>
    </div>
}


export default Card
