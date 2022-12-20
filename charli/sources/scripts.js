var ids = document.querySelectorAll('[id]')

function loadScript() {
    alert("Hello!\nMerry Chrismas\nLove, Joshua")
}

function clickme(){
    alert("You have no idea wht i could do to this phone lol")
    for (i=0;i<ids.length;i++){
        document.getElementById(ids[i]).style.visibility = "visible"
    }
    document.getElementById("title_main").remove()
}