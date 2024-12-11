{

    type Circle = {
      shape: "circle";
      radius: number;
    }
    type Rectangle = {
      shape: "rectangle";
      width: number;
      height: number;
    }
      
    type Shape = Circle | Rectangle;
      
    const calculateShapeArea = (shape: Shape) =>{
    if ("radius" in shape && typeof shape.radius === "number"){
      return Math.PI * shape.radius * shape.radius;
    }

    else if(
      "width" in shape && "height" in shape &&
      typeof shape.width === "number" && typeof shape.height === "number"
    ){      // the ractangle logic
      return shape.width * shape.height;
    }
    };
      

    //circle input & console      
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea)

    
    //ractangel input & console
    const rectangleArea = calculateShapeArea({
      shape: "rectangle",
      width: 4,
      height: 6,
    })
    console.log(rectangleArea); 
    



}