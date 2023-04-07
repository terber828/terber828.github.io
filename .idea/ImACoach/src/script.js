let numFilesDownloaded = 0;
function confirmDownload() {
    let yes = confirm("are you sure you want to download this file?");
    if(yes) {
        numFilesDownloaded++;
    }
    if(numFilesDownloaded==4){
        alert("Thanks for downloading all the files at the same time!")
    }
    return yes;
}
function submitAlert(){
    alert("Thank you for your submission.");
}
function changeColorPalette1(){
    document.querySelector(':root').style.setProperty('--MainColor', 'aliceblue');
    document.querySelector(':root').style.setProperty('--AccentColor', 'rgb(253, 142, 139)');
    document.querySelector(':root').style.setProperty('--HighlighColor', 'rgb(252, 174, 78)');
    document.querySelector(':root').style.setProperty('--TextColor', 'black');
}
function changeColorPalette2(){
    document.querySelector(':root').style.setProperty('--MainColor', 'White');
    document.querySelector(':root').style.setProperty('--AccentColor', 'lightgray');
    document.querySelector(':root').style.setProperty('--HighlighColor', 'gray');
    document.querySelector(':root').style.setProperty('--TextColor', 'black');

}
function changeColorPalette3(){
    document.querySelector(':root').style.setProperty('--MainColor', 'darkblue');
    document.querySelector(':root').style.setProperty('--AccentColor', 'darkgreen');
    document.querySelector(':root').style.setProperty('--HighlighColor', 'lightgray');
    document.querySelector(':root').style.setProperty('--TextColor', 'white');
}

let numReviewButtonPresses = 0;
function review(){
    if(numReviewButtonPresses==0) {
        document.getElementById("review").innerHTML = "You thought this would change something or at least store the value but I don't care what you think about my website but I love you TAs:)<br> Click the buttons again to see me laugh at you";
    }else{
        troll();
    }
    numReviewButtonPresses++;
}
function troll(){
    document.getElementById("review").insertAdjacentHTML("afterend", "ha");
    document.getElementById("timesClicked").innerHTML = "I have laughed at you this many times: "+numReviewButtonPresses;

}


