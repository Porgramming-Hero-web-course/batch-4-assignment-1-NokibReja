{

    const countWordOccurrences = (sentence: string, word: string): number => {

        const lowerCaseSentence = sentence.toLowerCase()
        const lowerCaseWord = word.toLowerCase()
    
        const singleWords = lowerCaseSentence.split(" ")

        const repatWords = singleWords.filter((checkWord) => checkWord === lowerCaseWord)

        return repatWords.length;
    }
    

    console.log(countWordOccurrences("I love TypeScript and TypeScript is amazing", "typescript"))
    



}