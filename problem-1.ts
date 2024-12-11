{
    const sumArray = (numbers: number[]): number =>{
        let i: number = 0

        numbers.forEach((num: number) =>{
            i += num;
        })
        return i;
    }
    
    console.log(sumArray([1, 2, 3, 4, 5]))

    
    
}