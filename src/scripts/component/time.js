import moment from "moment";

$("#timeDate")
    .css({display:"none"}) //init as none to allow anim to proceed

const displayTime = () => {
    $("#clock")
    .css({
        fontSize: "5em",
        textAlign: "center",
        display:"block"
    })
    .text(moment().format("HH:mm"));

    $("#date")
    .css({
        fontSize: "1em",
        textAlign: "center",
        display:"block"
    })
    .text("Today is " + moment().format("dddd, DD MMMM YYYY"));
};
 
const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000)
};
 
updateTime();