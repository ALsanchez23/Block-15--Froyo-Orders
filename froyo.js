
let userInputString= prompt("Please enter your order", "strawberry,strawberry,vanilla,coffee,coffee,coffee");

const froyoArray= userInputString.split(",");



function froyoOrders(){
  const froyoList = {};
  for (let flavor of froyoArray){
    console.log(flavor);
    if (flavor in froyoList){  //if the flavor is already  in the list
    froyoList[flavor] += 1; // add it to the existing total^
    } else {
      froyoList[flavor] = 1; // if its not in the list, add 1
    }
  }
return froyoList;
}
const froyoList = froyoOrders();
console.log(froyoList);