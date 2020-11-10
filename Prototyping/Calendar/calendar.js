const date = new Date();


const monthDays = document.querySelector('.days')

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

const firstDayIndex = date.getDay();

const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay();

const nextDays = 7 - lastDayIndex -1;

const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

document.querySelector('.date h2').innerHTML = months[date.getMonth()];

document.querySelector('.date p').innerHTML = date.toDateString();

let days = "";
//having trouble getting last month's days rendering without breaking the whole calendar.
//and aligning start of month to correct day of week. 
for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    monthDays.innerHTML = days;
  }

for(let i = 1; i <= lastDay; i++){
    if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth()
      ) {
        days += `<div class="active">${i}</div>`;
      } else{
        days +=`<div>${i}</div>`;
      }
        monthDays.innerHTML = days;
}


for(let j = 1; j <= nextDays; j++){
    days += `<div class = "next-date">${j}</div>`;
    monthDays.innerHTML = days;

}

