{

    class Car {
      // make: string;
      // model: string;
      // year: number;

      constructor(public make: string, public model: string, public year: number){ // used public
      //   this.make = make;
      //   this.model = model;
      //   this.year = year;
      }
    
      getCarAge(): void{
        const currentYear = new Date().getFullYear(); 
        console.log( currentYear - this.year);
      }
    };
    



    const car = new Car("Honda", "Civic", 2014);
    car.getCarAge();






}