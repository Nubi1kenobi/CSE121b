const PI = 3.14;
let area = 0;
function circleArea(radius) {
  const area = radius * radius * PI;
  return area;
}

//radius = 3
area = circleArea(3);
console.log(area);
// radius = 4
area = circleArea(4);
console.log(area);