{
    const removeDuplicates = (numbers: number[]): number[] =>{
        const uniqueNumbers: number[] = [];

        numbers.forEach((num) =>{
            let isDuplicat = false

            for(let i = 0; i < uniqueNumbers.length; i++){
                if(uniqueNumbers[i] === num){
                    isDuplicat = true;
                    break;
                }
            }

            if(isDuplicat === false){
                uniqueNumbers.push(num)
            }
        });
        return uniqueNumbers;
    }
    
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))




}