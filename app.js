// task 1
let customersPotencialJobInHours = 40;
let mySalaryPerHour = 150;
let myJobHoursPerDay = 5;
let myLeftWorkingDays = 8;
let myLeftWorkingHours = myJobHoursPerDay * myLeftWorkingDays;
let myTotalSalary = mySalaryPerHour * customersPotencialJobInHours;

console.log("Can I work? - " + (myLeftWorkingHours >= customersPotencialJobInHours));
console.log("My total salary is - USD " + myTotalSalary);
