{

    const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => {
      let checkKey = true;
      
      keys.forEach(function(key){
        if (!(key in obj)) {
          checkKey = false;
        }
      })
      return checkKey;
    };
    

      
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));
      


}