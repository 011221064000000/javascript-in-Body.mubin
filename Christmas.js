
const today = new Date();


const christmasDay = new Date(today.getFullYear(), 11, 25);


if (today.getTime() > christmasDay.getTime()) {
  christmasDay.setFullYear(christmasDay.getFullYear() + 1);
}


const daysLeft = Math.ceil((christmasDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));


console.log(`There are ${daysLeft} days left until Christmas!`);
