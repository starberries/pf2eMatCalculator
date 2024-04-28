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