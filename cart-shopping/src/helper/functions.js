const shorten = title => {
    const splitedTitle = title.split(" ");
    const shortTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return shortTitle;
}

export { shorten };