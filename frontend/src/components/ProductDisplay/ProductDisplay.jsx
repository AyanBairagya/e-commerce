import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../context/ShopContext';

export const ProductDisplay = (props) => {
    const { product } = props;

    const {addToCart} = useContext(ShopContext);
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>

            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-rightstar">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>


                </div>
                <div className="product-display-right-prices">
                    <div className="column">
                    <div className="product-display-right-prices-old"> ${product.old_price}</div>
                    <div className="product-display-right-prices-new"> ${product.new_price}</div>
                    </div>
                </div>
                <div className="product-display-right-prices-description">
                    A cornerstone of sophisticated attire, the VTEXX Men’s Regular-fit Full-sleeve Formal Shirt combines timeless style with functionality. Particularly suitable for professional settings and upscale occasions, this meticulously tailored formal shirt comes with full sleeves that offer refined aesthetics and provide added coverage and warmth. This long-sleeved shirt can seamlessly transition from formal to semi-formal with a simple rolling up of the sleeves. The contrasting border elevates the overall appeal while creating a relaxed yet stylish look.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="product-display-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>

                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className='product-display-right-category' > <span>Category :</span>Women , T-shirt,Crop Top</p>
                <p className='product-display-right-category' > <span>Tags :</span>Modern , Latest</p>



            </div>

        </div>
    )
}
