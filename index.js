//detection of button press
var array = ["w","a","s", "d", "j", "k", "l"];

for(var i = 0 ; i< array.length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

}

//detection of keyboard press 
    document.addEventListener("keydown",function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    });

    function makeSound(key){
        switch (key){
            case "w":
                var tom1 = new Audio("./tom-1.mp3");
                tom1.play();
            break;
            case "a":
                var tom4 = new Audio("./tom-4.mp3");
                tom4.play();
            break;
            case "s":
                var crash = new Audio("./crash.mp3");
                crash.play();
            break;
            case "d":
                var snare = new Audio("./snare.mp3");
                snare.play();
            break;
            case "j":
                var kick = new Audio("./kick-bass.mp3");
                kick.play();
            break;
            case "k":
                var tom3 = new Audio("./tom-3.mp3");
                tom3.play();
            break;
            case "w":
                var tom1 = new Audio("./tom-1.mp3");
                tom1.play();
            break;

            default: console.log(buttonInnerHTML);
        }
    }
            
    //button animation

        function buttonAnimation(currentKey){

            var activeButton = document.querySelector("." + currentKey);
            activeButton.classList.add("pressed");
       
            setTimeout(function(){
                activeButton.classList.remove("pressed");
            },100)
       
        }

    
       
       


