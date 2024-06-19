
// detecting button press through mouse click >>>>
var numberofbuttons = document.querySelectorAll(".drum").length;

for (var i = 0 ; i <  numberofbuttons ; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click" , function () {

        var buttoninnerhtml = this.innerHTML;
        makesound(buttoninnerhtml);  
        buttonanimation(buttoninnerhtml);

    })

}

//detecting keyboard press >>>>

document.addEventListener("keydown" , function (event) {

    makesound(event.key);
    buttonanimation(event.key);

});

function makesound(key) {

    switch (key) {
        case "w" :
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a" :
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "s" :
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d" :
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();  
            break;
            
        case "j" :
            var snare = new Audio("sounds/snare.mp3");
            snare.play(); 
            break;
            
        case "k" :
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
            
         case "l" :
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break; 
            
        default: console.log(innerHTML);
    }
}

//adding animation to the buttons 

function buttonanimation(currentkey) {

    var activebutton = document.querySelector("." + currentkey); //selects the class of the key of the instrument

    activebutton.classList.add("pressed");                       //pressed class is a shadow made in css which is being applied to the butttons

    setTimeout(function() {                                      //settimeout has two parameters one is the fuction what will be appllie and another one will be the time for what it wil be done
        activebutton.classList.remove("pressed");
    } , 100)

}






