////clock section coding start
/// accessing the data using id selector for getting current date
const currHour = document.getElementById("hour");
const currMin = document.getElementById("min");
const currSec = document.getElementById("sec");
const currAmPm = document.getElementById("amPm");

function addZero(currentTime){
    return currentTime < 10 ? '0'.concat(currentTime) : currentTime;

}

/////////manipulating the data for current date
function time(){
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    currHour.innerHTML = `${addZero((h % 12) || 12)}`
    currMin.innerHTML  = `${addZero(m)}`
    currSec.innerHTML  = `${addZero(s)}`
    currAmPm.innerHTML = `${h >= 12 ? 'PM' : 'AM'}`
}

setInterval(time,1000);
///////clock section code complete


///////code section for changing images according to current time
const wishUpdate = document.querySelector("#wishing");
const textUpdate = document.querySelector("#message_text");
const imageUpdate = document.querySelector("#right_container");

const date = new Date();
const hr = date.getHours();

////function for morning
function morning(){
    wishUpdate.innerHTML = "GOOD MORNING !!";
    textUpdate.innerHTML = "WAKE-UP, IT'S MORNING";
    imageUpdate.style.backgroundImage = "url('./wake-up1.png')";
};

////function for afternoon
function afternoon(){
    wishUpdate.innerHTML = "GOOD AFTERNOON !!";
    textUpdate.innerHTML = "LET'S HAVE SOME LUNCH !!";
    imageUpdate.style.backgroundImage = "url('./lunch_image.png')";
};

////function for night
function night(){
    wishUpdate.innerHTML = "GOOD NIGHT !!";
    textUpdate.innerHTML = "IT'S NIGHT , SO GO & SLEEP !!";
    imageUpdate.style.backgroundImage = "url('./sleeping.png')";
};

////function for remaining time
function remaining(){
    wishUpdate.innerHTML = "ENJOY YOUR MOVIE !!";
    textUpdate.innerHTML = "MOVIE TIME , LET'S WATCH IT !!";
    imageUpdate.style.backgroundImage = "url('./chill.svg')";
}

////function for free time
function freeTime(){
    wishUpdate.innerHTML = "ENJOY YOUR PARTY !!";
    textUpdate.innerHTML = "PARTY TIME , LET'S ROCK !!";
    imageUpdate.style.backgroundImage = "url('./party.svg')";
}

//////conditions for these functions
function execution()
{
    if(hr>=5 && hr<12){
        morning();
    }
    else if(hr>=12 && hr<18){
        afternoon();

    }
    else if(hr>=18 && hr<24){
        night();
    }
    else{
        remaining();
    }
}

////function calling
execution();


/////code for party time
////first access the element
const partyTime = document.querySelector('#party-time');

//////manipulating on accessing data using Event Handler
let isParty = false;
partyTime.addEventListener("click", () => {
    if(isParty){
        partyTime.innerHTML = "PARTY TIME !!";
        execution();
    }
    else{
        partyTime.innerHTML = "Again Click to End Party";
        wishUpdate.innerHTML = "IT'S PARTY TIME !!";
        textUpdate.innerHTML = "LET'S ENJOY THE PARTY DUDE !!";
        imageUpdate.style.backgroundImage = "url('./party.svg')";
    }
    isParty =! isParty;
});
  

// // //select slot - morning
// const morningSlot = document.querySelector('#select1');
// morningSlot.addEventListener("click", ()=>{
//   morning();
// });

// // //time slot - afternoon
// const afternoonSlot = document.querySelector('#select2');
// afternoonSlot.addEventListener("click", ()=>{
//   afternoon();
// });

// // //time slot-night
// const nightSlot = document.querySelector('#select3');
// nightSlot.addEventListener("click", ()=>{
//   night();
// });


///////////////////////code for select section 1
let select = document.querySelector('#select1');
select.addEventListener("change", update);
function update() {
    var choice = select.value;
    if(choice === 'blank'){
        execution();
    }
    else if(choice === '12 AM - 01 AM'){
        morning();
    }
    else if( choice === '01 AM - 02 AM'){
        morning();
    }
    else if( choice === '02 AM - 03 AM'){
        morning();
    }
    else if( choice === '03 AM - 04 AM'){
        morning();
    }
    else if( choice === '04 AM - 05 AM'){
        morning();
    }
    else if( choice === '05 AM - 06 AM'){
        morning();
    }
    else if( choice === '06 AM - 07 AM'){
        morning();
    }
    else if( choice === '07 AM - 08 AM'){
        morning();
    }
    else if( choice === '08 AM - 09 AM'){
        morning();
    }
    else if( choice === '09 AM - 10 AM'){
        morning();
    }
    else if( choice === '10 AM - 11 AM'){
        morning();
    }
    else if( choice === '11 AM - 12 AM'){
        morning();
    }
    else if( choice === '12 PM - 01 PM'){
        morning();
    }
    else if( choice === '01 PM - 02 PM'){
        morning();
    }
    else if( choice === '02 PM - 03 PM'){
        morning();
    }
    else if( choice === '03 PM - 04 PM'){
        morning();
    }
    else if( choice === '04 PM - 05 PM'){
        morning();
    }
    else if( choice === '05 PM - 06 PM'){
        morning();
    }
    else if( choice === '06 PM - 07 PM'){
        morning();
    }
    else if( choice === '07 PM - 08 PM'){
        morning();
    }
    else if( choice === '08 PM - 09 PM'){
        morning();
    }
    else if( choice === '09 PM - 10 PM'){
        morning();
    }
    else if( choice === '10 PM - 11 PM'){
        morning();
    }
    else if( choice === '11 PM - 12 PM'){
        morning();
    }
    // else {
    //     freeTime();
    // }
}

update();


//////////////////code for select section 2
let select2 = document.querySelector('#select2');
select2.addEventListener("change", update1);
function update1() {
    var choice = select2.value;
    if(choice === 'blank'){
        execution();
    }
    else if(choice === '12 AM - 01 AM'){
        afternoon();
    }
    else if( choice === '01 AM - 02 AM'){
        afternoon();
    }
    else if( choice === '02 AM - 03 AM'){
        afternoon();
    }
    else if( choice === '03 AM - 04 AM'){
        afternoon();
    }
    else if( choice === '04 AM - 05 AM'){
        afternoon();
    }
    else if( choice === '05 AM - 06 AM'){
        afternoon();
    }
    else if( choice === '06 AM - 07 AM'){
        afternoon();
    }
    else if( choice === '07 AM - 08 AM'){
        afternoon();
    }
    else if( choice === '08 AM - 09 AM'){
        afternoon();
    }
    else if( choice === '09 AM - 10 AM'){
        afternoon();
    }
    else if( choice === '10 AM - 11 AM'){
        afternoon();
    }
    else if( choice === '11 AM - 12 AM'){
        afternoon();
    }
    else if( choice === '12 PM - 01 PM'){
        afternoon();
    }
    else if( choice === '01 PM - 02 PM'){
        afternoon();
    }
    else if( choice === '02 PM - 03 PM'){
        afternoon();
    }
    else if( choice === '03 PM - 04 PM'){
        afternoon();
    }
    else if( choice === '04 PM - 05 PM'){
        afternoon();
    }
    else if( choice === '05 PM - 06 PM'){
        afternoon();
    }
    else if( choice === '06 PM - 07 PM'){
        afternoon();
    }
    else if( choice === '07 PM - 08 PM'){
        afternoon();
    }
    else if( choice === '08 PM - 09 PM'){
        afternoon();
    }
    else if( choice === '09 PM - 10 PM'){
        afternoon();
    }
    else if( choice === '10 PM - 11 PM'){
        afternoon();
    }
    else if( choice === '11 PM - 12 PM'){
        afternoon();
    }
    // else {
    //     freeTime();
    // }
}

update1();


///////////////////////code for select section 3
let select3 = document.querySelector('#select3');
select3.addEventListener("change", update2);
function update2() {
    var choice = select3.value;
    if(choice === 'blank'){
        execution();
    }
    else if(choice === '12 AM - 01 AM'){
        night();
    }
    else if( choice === '01 AM - 02 AM'){
        night();
    }
    else if( choice === '02 AM - 03 AM'){
        night();
    }
    else if( choice === '03 AM - 04 AM'){
        night();
    }
    else if( choice === '04 AM - 05 AM'){
        night();
    }
    else if( choice === '05 AM - 06 AM'){
        night();
    }
    else if( choice === '06 AM - 07 AM'){
        night();
    }
    else if( choice === '07 AM - 08 AM'){
        night();
    }
    else if( choice === '08 AM - 09 AM'){
        night();
    }
    else if( choice === '09 AM - 10 AM'){
        night();
    }
    else if( choice === '10 AM - 11 AM'){
        night();
    }
    else if( choice === '11 AM - 12 AM'){
        night();
    }
    else if( choice === '12 PM - 01 PM'){
        night();
    }
    else if( choice === '01 PM - 02 PM'){
        night();
    }
    else if( choice === '02 PM - 03 PM'){
        night();
    }
    else if( choice === '03 PM - 04 PM'){
        night();
    }
    else if( choice === '04 PM - 05 PM'){
        night();
    }
    else if( choice === '05 PM - 06 PM'){
        night();
    }
    else if( choice === '06 PM - 07 PM'){
        night();
    }
    else if( choice === '07 PM - 08 PM'){
        night();
    }
    else if( choice === '08 PM - 09 PM'){
        night();
    }
    else if( choice === '09 PM - 10 PM'){
        night();
    }
    else if( choice === '10 PM - 11 PM'){
        night();
    }
    else if( choice === '11 PM - 12 PM'){
        night();
    }
   
}

update2();
