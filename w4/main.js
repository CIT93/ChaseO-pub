const cfpData = [];

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apt") {
    houseSizePoints = 2;
  }
  
  return houseSizePoints;
  
}

function determineHouseholdPts(numberInHousehold) {
 
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 7) {
    houseHoldPoints = 2;
  }
  
  return houseHoldPoints;
}

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseholdPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, houseSizePTS, total]);
}

function displayOutput() {
 for (arr of cfpData){
  console.log(arr)
  const output = document.getElementById("output");
  const newP = document.createElement("p");
  newP.textContent = `Carbon Footprint total is ${arr[4]}, you get ${arr[2]} points, if your members are ${arr[0]}, so your living arrangements would be ${arr[1]}, then your points should be ${arr[3]}.`;
  output.appendChild(newP)
 }
}

start(5, "apt");
start(4, "large");
start(3, "medium");
start(1, "small");
start(1, "apt");
start(1, "medium");
start(1, "large");
start(2, "apt");
start(2, "small");
start(2, "medium");
start(2, "large");
start(3, "apt");
start(3, "small");
start(3, "medium");
start(3, "large");
start(4, "apt");
start(4, "small");
start(4, "medium");
start(4, "large");
start(5, "apt");
start(5, "small");
start(5, "medium");
start(5, "large");
start(6, "apt");
start(6, "small");
start(6, "medium");
start(6, "large");
start(7, "apt");
start(7, "small");
start(7, "medium");
start(7, "large");

displayOutput();
