function determineHouseholdPts(numberInHousehold) {
  console.log("Inside the function");
  if (numberInHousehold === 1) {
    carbonFootprintPoints = carbonFootprintPoints + 14;
  } else if (numberInHousehold === 2) {
    carbonFootprintPoints = carbonFootprintPoints + 12;
  } else if (numberInHousehold === 3) {
    carbonFootprintPoints = carbonFootprintPoints + 10;
  } else if (numberInHousehold === 4) {
    carbonFootprintPoints = carbonFootprintPoints + 8;
  } else if (numberInHousehold === 5) {
    carbonFootprintPoints = carbonFootprintPoints + 6;
  } else if (numberInHousehold === 6) {
    carbonFootprintPoints = carbonFootprintPoints + 4;
  } else if (numberInHousehold > 6) {
    carbonFootprintPoints = carbonFootprintPoints + 2;
  }
  console.log(`Based on the number of member of the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}`);
}

let carbonFootprintPoints = 0;
//const numberInHousehold = 3;


// global scope

determineHouseholdPts(3);
determineHouseSizePts("apt");


// If you have a large house, then add 10 points to your score.
// If you have a medium-sized house, then add 7 points.
// If you have a small house, then add 4 points.
// If you live in an apartment, then add 2 points.

function determineHouseSizePts(sizeOfHome) {
    if (sizeOfHome === "large") {
       carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (sizeOfHome === "medium") {
       carbonFootprintPoints = carbonFootprintPoints + 7; 
    } else if (sizeOfHome === "small") {
       carbonFootprintPoints = carbonFootprintPoints + 4; 
    } else if (sizeOfHome === "apt") {
       carbonFootprintPoints = carbonFootprintPoints + 2; 
    }
    console.log(`Based of the ${sizeOfHome} house the points would be ${carbonFootprintPoints}`);   
}
