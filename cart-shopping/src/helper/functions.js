//assets
import fullStar from "../assets/full-star.png";
import halfStar from "../assets/half-star.png";

const shorten = title => {
    const splitedTitle = title.split(" ");
    const shortestTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
    const shorterTitle = `${splitedTitle[0]} ${splitedTitle[1]} ${splitedTitle[2]}`;
    const shortDescrption = `${splitedTitle[0]} ${splitedTitle[1]} ${splitedTitle[2]} ${splitedTitle[3]} ${splitedTitle[4]} ${splitedTitle[5]}`
    return ({shorterTitle, shortestTitle, shortDescrption});
}

const separateNumbers = number => {
    const splitedNumber = String(number).split(".");
    const decimal = splitedNumber[1] ? true : false; 
    return({integer: Number(splitedNumber[0]), decimal});
}

const createRate = (rate) => {
    let rateTag;
    if(separateNumbers(rate).integer === 1 && !separateNumbers(rate).decimal) {
        rateTag = <div>
            <img src={fullStar} alt="rate" />
        </div>    
    }
    if(separateNumbers(rate).integer === 1 && separateNumbers(rate).decimal) {
        rateTag = <div>
            <img src={fullStar} alt="rate" />
            <img src={halfStar} alt="rate" />
        </div>
        
    }
    if(separateNumbers(rate).integer === 2 && !separateNumbers(rate).decimal) {
        rateTag = <div>
            <img src={fullStar} alt="rate" />
            <img src={fullStar} alt="rate" />
        </div>
        
    }
    if(separateNumbers(rate).integer === 2 && separateNumbers(rate).decimal) {
        rateTag = <div>
            <img src={fullStar} alt="rate" />
            <img src={fullStar} alt="rate" />
            <img src={halfStar} alt="rate" />
        </div>

    }
    if(separateNumbers(rate).integer === 3 && !separateNumbers(rate).decimal) {
        rateTag = <div>
            <img src={fullStar} alt="rate" />
            <img src={fullStar} alt="rate" />
            <img src={fullStar} alt="rate" />
        </div>
        
    }
    if(separateNumbers(rate).integer === 3 && separateNumbers(rate).decimal) {
        rateTag = <div>
            <img src={fullStar} alt="rate" />
            <img src={fullStar} alt="rate" />
            <img src={fullStar} alt="rate" />
            <img src={halfStar} alt="rate" />
        </div>
        
    }
    if(separateNumbers(rate).integer === 4 && !separateNumbers(rate).decimal) {
        rateTag = <div>
            <img src={fullStar} alt="rate" />
            <img src={fullStar} alt="rate" />
            <img src={fullStar} alt="rate" />
            <img src={fullStar} alt="rate" />
        </div>
        
    }
    if(separateNumbers(rate).integer === 4 && separateNumbers(rate).decimal) {
        rateTag = <div>
            <img src={fullStar} alt="rate" />
            <img src={fullStar} alt="rate" />
            <img src={fullStar} alt="rate" />
            <img src={fullStar} alt="rate" />
            <img src={halfStar} alt="rate" />
        </div>
        
    }
    if(separateNumbers(rate).integer === 5 && !separateNumbers(rate).decimal) {
        rateTag = <div>
            <img src={fullStar} alt="rate" />
            <img src={fullStar} alt="rate" />
            <img src={fullStar} alt="rate" />
            <img src={fullStar} alt="rate" />
            <img src={fullStar} alt="rate" />
        </div>
        
    }
    return rateTag;
}

const isInCart = (state, id) => {
    if(!state.selectedItems.find(product => product.id === id)) {
        return false;
    } else {
        return true;
    }
}

const countQuantity = (state, id) => {
    const index = state.selectedItems.findIndex(product => product.id === id);
    return state.selectedItems[index].quantity;
}

export { shorten, createRate, isInCart, countQuantity };