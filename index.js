////clock section coding start
/// accessing the data using id selector for getting current date
const currHour = document.getElementById("hour");
const currMin = document.getElementById("min");
const currSec = document.getElementById("sec");
const currAmPm = document.getElementById("amPm");

function addZero(currentTime){
    currentTime < 10 ? '0'+ currentTime : currentTime;
    return currentTime;

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

////function for evening
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
const isParty = false;
partyTime.addEventListener("click", () => {
    if(isParty){
        partyTime.innerHTML = "IT'S PARTY TIME !!";
        execution();
    }
    else{
        partyTime.innerHTML = "Again Click to End Party";
        wishUpdate.innerHTML = "IT'S PARTY TIME !!";
        textUpdate.innerHTML = "LET'S ENJOY THE PARTY DUDE !!";
        imageUpdate.style.backgroundImage = "url('./party.svg')";
    }
    isParty != isParty;
});
  

// partyTime.addEventListener("click", () =>
// {
//     partyTime.innerHTML = "Again Click to End Party";
//     wishUpdate.innerHTML = "IT'S PARTY TIME !!";
//     textUpdate.innerHTML = "LET'S ENJOY THE PARTY DUDE !!";
//     imageUpdate.style.backgroundImage = "url('./party.svg')";
// });

// // partyTime.addEventListener("click", () =>
// // {
// //     execution();
// // });
