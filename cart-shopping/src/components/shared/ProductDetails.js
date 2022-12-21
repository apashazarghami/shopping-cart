import React, { useContext } from "react";
import { useParams } from "react-router-dom";

//context
import { ProductsContext } from "../../context/ProductsContextProvider";

//assets
import men from "../../assets/men's clothing.png";
import women from "../../assets/women's clothing.png";
import jewelery from "../../assets/jewelery.png";
import electronics from "../../assets/electronics.png";
import fullStar from "../../assets/full-star.png";
import halfStar from "../../assets/half-star.png";

//function
import { separateNumbers } from "../../helper/functions";

const ProductDetails = () => {
    const id = useParams();
    const products = useContext(ProductsContext);
    const product = products[id.id - 1];
    const { image, category, title, description, price, rating:{rate, count} } = product;
    return(
        <div>
           <img src={image} alt={title} />
           <div>
                {
                    category === "men's clothing" && <img src={men} alt="men's clothing" />
                }
                {
                    category === "jewelery" && <img src={jewelery} alt="jewelery" />
                }
                {
                    category === "electronics" && <img src={electronics} alt="electronics" />
                }
                {
                    category === "women's clothing" && <img src={women} alt="electronics" />
                }
                <p>{category}</p>
           </div>
           <div>
               <div>
                   <h3>{title}</h3>
                   <div>
                        {
                           separateNumbers(rate).integer === 1 && !separateNumbers(rate).decimal &&
                           <div>
                               <img src={fullStar} alt="rate" />
                           </div>
                       }
                       {
                           separateNumbers(rate).integer === 1 && separateNumbers(rate).decimal &&
                           <div>
                               <img src={fullStar} alt="rate" />
                               <img src={halfStar} alt="rate" />
                           </div>
                       }
                       {
                           separateNumbers(rate).integer === 2 && !separateNumbers(rate).decimal &&
                           <div>
                               <img src={fullStar} alt="rate" />
                               <img src={fullStar} alt="rate" />
                           </div>
                       }
                       {
                           separateNumbers(rate).integer === 2 && separateNumbers(rate).decimal &&
                           <div>
                               <img src={fullStar} alt="rate" />
                               <img src={fullStar} alt="rate" />
                               <img src={halfStar} alt="rate" />
                           </div>
                       }
                       {
                           separateNumbers(rate).integer === 3 && !separateNumbers(rate).decimal &&
                           <div>
                               <img src={fullStar} alt="rate" />
                               <img src={fullStar} alt="rate" />
                               <img src={fullStar} alt="rate" />
                           </div>
                       }
                       {
                           separateNumbers(rate).integer === 3 && separateNumbers(rate).decimal &&
                           <div>
                               <img src={fullStar} alt="rate" />
                               <img src={fullStar} alt="rate" />
                               <img src={fullStar} alt="rate" />
                               <img src={halfStar} alt="rate" />
                           </div>
                       }
                       {
                           separateNumbers(rate).integer === 4 && !separateNumbers(rate).decimal &&
                           <div>
                               <img src={fullStar} alt="rate" />
                               <img src={fullStar} alt="rate" />
                               <img src={fullStar} alt="rate" />
                               <img src={fullStar} alt="rate" />
                           </div>
                       }
                       {
                           separateNumbers(rate).integer === 4 && separateNumbers(rate).decimal &&
                           <div>
                               <img src={fullStar} alt="rate" />
                               <img src={fullStar} alt="rate" />
                               <img src={fullStar} alt="rate" />
                               <img src={fullStar} alt="rate" />
                               <img src={halfStar} alt="rate" />
                           </div>
                       }
                       {
                           separateNumbers(rate).integer === 5 && !separateNumbers(rate).decimal &&
                           <div>
                               <img src={fullStar} alt="rate" />
                               <img src={fullStar} alt="rate" />
                               <img src={fullStar} alt="rate" />
                               <img src={fullStar} alt="rate" />
                               <img src={fullStar} alt="rate" />
                           </div>
                       }
                   </div>
               </div>
               <div>
                   <p>{description}</p>
                   <span>({count} Reviews)</span>
               </div>
               <div>
                   <p>${price}</p>
                   <div>
                       <button>-</button>
                       <span>0</span>
                       <button>+</button>
                   </div>
                   <button>Cart</button>
               </div>
           </div>
        </div>
    )
}

export default ProductDetails;