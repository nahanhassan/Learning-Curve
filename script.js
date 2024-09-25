let orderQuantity = document.getElementById("orderQuantity").value;
let orderQuantityN = parseInt(orderQuantity);

let smvValue = document.getElementById("smvValue").value;
let smvValueN = parseFloat(smvValue);

let machines = document.getElementById("machines").value;
let machinesN = parseInt(machines);

let helpers = document.getElementById("helpers").value;
let helpersN = parseInt(helpers);

let calculation = document.getElementById("calculation");

calculation.addEventListener("click", function (e) {
  e.preventDefault();
  //   console.table({ orderQuantityN, smvValueN, machinesN, helpersN });
  //   console.table({ orderQuantity, smvValue, machines, helpers });
  console.log(orderQuantity);
});
