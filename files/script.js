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