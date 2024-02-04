const radius = [8, 9, 2, 1.5, 27];
/*
Output
area = [201.06, 254.34, 12.56, 7.065, 2290.22],
circumference = [50.24, 56.52, 12.56, 9.42, 169.65],
diameter = [16, 18, 4, 3, 54]
*/

// Q  | Brute force approach to calculate area, circumference and diameter

function calculateArea() {
  const area = [];
  for (let i = 0; i < radius.length; i++) {
    area.push(Math.PI * radius[i] * radius[i]);
  }
  return area;
}

const area = calculateArea(radius);
console.log(area); // area = [201.06, 254.34, 12.56, 7.065, 2290.22],

function calculateCircumference() {
  const circumference = [];
  for (let i = 0; i < radius.length; i++) {
    circumference.push(2 * Math.PI * radius[i]);
  }
  return circumference;
}

const circumference = calculateCircumference(radius);
console.log(circumference); // circumference = [50.24, 56.52, 12.56, 9.42, 169.65],

function calculateDiameter() {
  const diameter = [];
  for (let i = 0; i < radius.length; i++) {
    diameter.push(2 * radius[i]);
  }
  return diameter;
}

const diameter = calculateDiameter(radius);
console.log(diameter); // diameter = [16, 18, 4, 3, 54]

// Q  | Refactor the above code using higher order function

function areaDiameterCircumference(radius, type) {
  const PI = 3.14159;

  switch (type.toLowerCase()) {
    case "area":
      return PI * radius * radius;
    case "diameter":
      return 2 * radius;
    case "circumference":
      return 2 * PI * radius;
    default:
      return 'Invalid type. Please provide "area", "diameter", or "circumference".';
  }
}

function calculate(radiusArray, type) {
  const result = [];

  for (let i = 0; i < radiusArray.length; i++) {
    result.push(areaDiameterCircumference(radiusArray[i], type));
  }

  return result;
}

const calculateArea = calculate(radius, "area");
console.log(calculateArea); // [201.06, 254.34, 12.56, 7.065, 2290.22]

// Similarly, we can calculate circumference and diameter

const calculateCircumference = calculate(radius, "circumference");
console.log(calculateCircumference); // [50.24, 56.52, 12.56, 9.42, 169.65]

const calculateDiameter = calculate(radius, "diameter");
console.log(calculateDiameter); // [16, 18, 4, 3, 54]

// Q | Refactor using higher order function and map

function areaDiameterCircumference(radius, type) {
  const PI = 3.14159;

  switch (type.toLowerCase()) {
    case "area":
      return PI * radius * radius;
    case "diameter":
      return 2 * radius;
    case "circumference":
      return 2 * PI * radius;
    default:
      return 'Invalid type. Please provide "area", "diameter", or "circumference".';
  }
}

function calculate(radiusArray, type) {
  return radiusArray.map((radius) => areaDiameterCircumference(radius, type));
}

const calculateArea = calculate(radius, "area");
console.log(calculateArea); // [201.06, 254.34, 12.56, 7.065, 2290.22]

// Similarly, we can calculate circumference and diameter

const calculateCircumference = calculate(radius, "circumference");
console.log(calculateCircumference); // [50.24, 56.52, 12.56, 9.42, 169.65]

const calculateDiameter = calculate(radius, "diameter");
console.log(calculateDiameter); // [16, 18, 4, 3, 54]
