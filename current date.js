var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() +
    1;
var year = currentDate.getFullYear();
var formattedDate = '';
if (month < 10) {
  formattedDate += '0' + month;
}else{
  formattedDate += month;
}
formattedDate += '-';
if (day < 10) {
  formattedDate += '0' + day;
}else{
  formattedDate += day;
}
formattedDate += '-';
formattedDate += year;

console.log(formattedDate)
