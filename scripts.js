const today_date = new Date();

//          DAY | 1
const messageHeaders = ["December 1<sup>st</sup>", "December 2<sup>nd</sup>","December 3<sup>rd</sup>"]
const messageText = ["One of the first images I have...<br>There will be more- though some you will find embarrasing lol", /*0*/
                  /*1 */  "I dont have a correct date for this one...<br>I think its us on the way home from Cambridge.<br>I just think its a really cool photo lol 👌",
                /*2*/ "Brighton,2nd August- a nice beach view to soothe your soul today."]




let day = Number(today_date.getDate());

if (today_date.getDate() == 1 || today_date.getDate() == 21) {
    superscript = "st"
} else if (today_date.getDate() == 2 || today_date.getDate() == 22) {
    superscript = "nd"
} else if (today_date.getDate() == 3 || today_date.getDate() == 23) {
    superscript = "rd"
} else {
    superscript = "th"
} // get the bit after 1st/2nd for date

function today() {
    document.getElementById("todaydate").innerHTML = `Today is the ${day}<sup>${superscript}</sup> of December`
}


function openDay(doorNumber) {
    if (doorNumber <= day) {
        opendoor(doorNumber)
    } else {
        alert(`Not so fast!!! \nYou can't open a door until it's day! \nYou can only open up to day ${day} today!`)
    }
}

function opendoor(doorNumber) {
    document.getElementById(`door${doorNumber}`).classList.replace("closed","open")
    document.getElementById(`door${doorNumber}`).style.backgroundImage = "url('https://raw.githubusercontent.com/jxctno/jxctno.github.io/main/media/opendoor.png')"
    play()
    setTimeout(10)
    document.getElementById("message").style.visibility = "visible"; // Open message
    document.getElementById("calendar").style.visibility = "hidden";
    let image = `https://raw.githubusercontent.com/jxctno/jxctno.github.io/main/media/img (${doorNumber}).jpg`
    document.getElementById("message_image").setAttribute("src", image);
    document.getElementById("messageHeader").innerHTML = messageHeaders[doorNumber - 1]

    document.getElementById("messageText").innerHTML = messageText[doorNumber - 1]
}

function closemessage() {
    document.getElementById("message").style.visibility = "hidden"; // close message
    document.getElementById("calendar").style.visibility = "visible";
}


function play() {
    var audio = document.getElementById("audio");
    audio.play();
}