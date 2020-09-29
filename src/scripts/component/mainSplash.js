import moment from "moment";
import TypeIt from "typeit";

$("#greet") //SET CSS
    .css({
        fontSize: "1.5em",
        textAlign: "center",
        padding: "0 .5em",
        display: "inline-block",
        whiteSpace: "nowrap"
        })

const generateGreetings = () => { //TIME AWARE GREETINGS

    let currentHour = moment().hour();
  
    if (currentHour >= 3 && currentHour < 12){
        return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 15){
        return "Good Afternoon";
    }   else if (currentHour >= 15 && currentHour < 20){
        return "Good Evening";
    } else if ((currentHour >= 20 && currentHour < 24) || (currentHour >= 0 && currentHour < 3)){
        return "Good Night";
    } else {
        return "Hello"
    }
};

const updateGreetings = () => {
    setTimeout(updateGreetings, 360000)
    return generateGreetings();
};

const getName = () => { //GET USERNAME
    if (localStorage.getItem("username") === null){ //CHECK IF USERNAME DON'T EXISTS
        name = window.prompt("Who do you want to be called?", "Name");
        while(name.length<1 || name === "Name"){
            alert("Name must be filled out and cannot be 'Name'!")
            name = window.prompt("Who do you want to be called?", "Name");
        }
        localStorage.setItem("username", name);
        return name;

    } else {
        name = localStorage.getItem("username")
        return name;
    }
};

const contentAppear = () => { //ANIMATE MAIN CONTENT APPEARANCE
    $("#timeDate")
        .fadeIn({duration: 3000, queue: false})
        .css({display:"none"})
        .slideDown(2500)
        .css({display:"block"});
    $("#search")
        .slideDown(2500)
        .css({display:"block"});
    $("#particles-js")
        .fadeIn(5000)
    $("#sidebar")
        .fadeIn(2500)
        .css({display: "flex"})
}

new TypeIt('#greet', { //TYPING ANIMATION
    strings: [updateGreetings()+ ", " + getName(),
            ],
    nextStringDelay: 2500,
    speed: 80,
    breakLines: false,
    waitUntilVisible: true,
    afterComplete: function (step, instance) {
        instance.destroy();
        setTimeout(contentAppear, 500)
        
    },
}).go()
