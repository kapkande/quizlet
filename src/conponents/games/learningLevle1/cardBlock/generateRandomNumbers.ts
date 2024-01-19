export function generateRandomNumbers(carentNumber: number, max: number ) {
    const uniqueNumbers = new Set();
    
    console.log(carentNumber);
    uniqueNumbers.add(carentNumber);

    const min = 0
    const count = 4 

    while (uniqueNumbers.size < count) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        uniqueNumbers.add(randomNumber);
    }
    const arr = Array.from(new Set(uniqueNumbers))
    
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log(arr + ' arr');
    return arr as number[];
}