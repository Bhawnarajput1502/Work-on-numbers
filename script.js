const basket1Count = document.querySelector(".left-apples span");
const basket2Count = document.querySelector(".right-apples span");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const totalApples = 10;

let secondBasketCount =  0;
 let firstBasketCount = totalApples -  secondBasketCount;

basket1Count.innerText= firstBasketCount;
basket2Count.innerText =secondBasketCount;

rightArrow.addEventListener('click',() =>{
  if(firstBasketCount > 0){
firstBasketCount--;
basket1Count.innerText= firstBasketCount;
secondBasketCount++;
basket2Count.innerText =secondBasketCount;
  }
})

leftArrow.addEventListener('click',() =>{
  if(secondBasketCount > 0){
firstBasketCount++;
basket1Count.innerText= firstBasketCount;
secondBasketCount--;
basket2Count.innerText =secondBasketCount;
  }
})