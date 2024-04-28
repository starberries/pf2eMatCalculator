// Variables
let button = document.querySelector('button');

let gradeSelect = document.querySelector('.grade');
let gradeList = [
  { text: 'Low-Grade', value: 'low' },
  { text: 'Standard-Grade', value: 'standard' },
  { text: 'High-Grade', value: 'high' }
];
let materialSelect = document.querySelector('.material');
let materialList = [
  { text: 'Cold Iron', value: 'cold-iron' },
  { text: 'Silver', value: 'silver' },
  { text: 'Adamantine', value: 'adamantine' }
];
let itemSelect = document.querySelector('.item');

let data = {
  "cold-iron": {
    "low": {
      "weapon": 40,
      "armor": 140
  },
    "standard": {
      "weapon": 880,
      "armor": 1200
    },
    "high": {
      "weapon": 9000,
      "armor": 20000
    }
  },
  "silver": {
    "low": {
      "weapon": 40,
      "armor": 140
    },
    "standard": {
      "weapon": 880,
      "armor": 1200
    },
    "high": {
      "weapon": 9000,
      "armor": 20000
    }
  },
  "adamantine": {
    "low": {
      "weapon": undefined,
      "armor": undefined
    },
    "standard": {
      "weapon": 1400,
      "armor": 1600
    },
    "high": {
      "weapon": 13500,
      "armor": 32000
    }
  }
};

let price = document.querySelector('.price');
let craft = document.querySelector('.craft');
let amount = document.querySelector('.amount');

// Select Options
gradeList.forEach(option =>
  gradeSelect.add(
    new Option(option.text, option.value)
  )
);

materialList.forEach(option =>
  materialSelect.add(
    new Option(option.text, option.value)
  )
);

// Button
button.onclick = function() {
  let g = gradeSelect.value;
  let m = materialSelect.value;
  let i = itemSelect.value;
  
  let totalPrice = getTotalPrice(m,g,i);
  let craftingPrice = (totalPrice / 2);
  let materalAmount = getMaterialAmount(craftingPrice, g)
  
  printResults(totalPrice, craftingPrice, materalAmount)
};

// Functions
function getBulkPrice(m, g, i) {
  let basePrice = data[m][g][i]
  let bulkPrice = basePrice / 10
  return bulkPrice
};

function getMaterialAmount(c, g) {
    let gradePercentage = 1
  
  if (g == "low") { gradePercentage = 0.1 }
  else if (g == "standard") { gradePercentage = 0.25 }
  
  let materialAmount = (c * gradePercentage)
  
  return materialAmount
}

function getTotalPrice(m, g, i) {
  let bulk = document.querySelector('.bulk').value;
  let basePrice = data[m][g][i];
  
  let bulkPrice = getBulkPrice(m, g, i);
  
  let totalPrice = (bulk * bulkPrice) + basePrice
  return totalPrice
};

function printResults(totalPrice, craftingPrice, materialAmount) {
  price.textContent = totalPrice;
  craft.textContent = craftingPrice;
  amount.textContent = materialAmount;
}