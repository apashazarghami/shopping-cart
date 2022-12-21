const shorten = title => {
    const splitedTitle = title.split(" ");
    const shortTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return shortTitle;
}

const separateNumbers = number => {
    const splitedNumber = String(number).split(".");
    const decimal = splitedNumber[1] ? true : false; 
    return({integer: Number(splitedNumber[0]), decimal});
}

export { shorten, separateNumbers };