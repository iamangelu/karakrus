function randomCoin(arr){
    const idx = Math.floor(Math.random() * arr.length)
    return arr[idx];
}

export {randomCoin};