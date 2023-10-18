//A
const task1 = (number) => {
    if (number=== 0) {
        return;
    }
    task1(number - 1);
    console.log(number);
}
task1(5);


//B
let a = 1;
let b = 5;

const task2 =(a, b) => {
 if (a > b) {
    console.log(a);
    a--;
    task2(a, b);
 } else if (a < b) {
    console.log(a);
    a++;
    task2(a, b);
 } else {
    console.log(a);
 }
}

task2(a, b);


//E 

const task3 = (number) => {
    if (number < 10) {
        return number;
    } else {
        return number % 10 + task3(Math.floor(number / 10));
    }
}

console.log(task3(179));


//F 

const task4 = (num) => {
   if(num > 10) {
       console.log(num % 10);
       task4(Math.floor(num / 10));
   }
   else  {
      console.log(num);
  }
}

task4 (179);

// G 


const task5 = (num) => {
   if(num >= 10) {
      task5(Math.floor(num / 10));
   }
   console.log(num % 10);
   
}

task5 (179);
