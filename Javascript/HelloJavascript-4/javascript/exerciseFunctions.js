// Write a function that returns the area of a triangle.
// There are many formulas - this is one...
function triangleArea(base, height) {
    return (base * height) / 2;
}

// Write a function that returns the area of a circle.
function circleArea(radius) {
    return Math.PI * radius * radius;
}

// For shapes function
function rectangleArea(length, width) {
    return length * width;
}

// Write a function that returns the area of any shape.
// Ignore the lint error here
const SHAPES = {
    CIRCLE: "circle",
    RECTANGLE: "rectangle",
    TRIANGLE: "triangle"
}

// Testing..
console.log(SHAPES);

function shapeArea( shape, param1, param2 ) {
    let area = 0;

    switch (shape) {
        case SHAPES.CIRCLE:
            area = circleArea(param1);
            break;
        case SHAPES.TRIANGLE:
            area = triangleArea(param1, param2);
            break;
        case SHAPES.RECTANGLE:
            area = rectangleArea(param1, param2);
            break;
        default:
            break;
    }

    return area;
}

let area = shapeArea(SHAPES.RECTANGLE, 10, 20);
console.log(area);
