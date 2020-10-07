import {getUpcomingLaunches} from "./features/launches.js";
import {resetUsername} from "./features/resetUname.js";
import {renderCalc} from "./features/calculator"

$("#sidebar")
    .css({
        position: "absolute",
        right: "0vw",
        top: "0vw",
        zIndex: "2",
        display: "none",
        alignItems: "flex-start",
        height: "100%"
    })

    $("#sidebar button")
        .css({
            position: "relative",
            border: "none",
            backgroundColor: "inherit",
            right: "1vw",
            top: "1vw"
        })
        .on("click",function(){
            sidebarContentAnim()
        })

    $("#sidebar button i")
        .css({
            color: "white",
            fontSize:"2em",
        })

$("#sidebarContent")
    .css({
        position: "relative",
        backgroundColor: "rgba(0,0,0, 0.3)",
        height: "100%",
        display: "none"
    })
    
    $("#sidebarContent ul")
        .css({
            listStyleType: "none",
            textAlign: "left",
            whiteSpace: "nowrap",
            margin: "0",
            padding: ".5em 1em"
        })

    $("#sidebarContent ul li")
        .css({
            padding: ".5em",
        })
        .hover(
            function(){
                $(this).addClass("menuHovered");
            }, function(){
                $(this).removeClass("menuHovered");
            }
        )

$("#display button i")
        .css({
            color: "white",
            fontSize:"2em",
        })

//JAVASCRIPTS
const $display = $("#display");
const $launches= $("#sidebar #sidebarContent ul li[id='rktLaunch']");
const $calc= $("#sidebar #sidebarContent ul li[id='calculator']");
const $resetName= $("#sidebar #sidebarContent ul li[id='rstUname']")

const sidebarContentAnim = () => {
    $("#sidebarContent")
        .animate({width:'toggle'},1000)
}

const displayRender = () => {
    $display
        .css({
            zIndex: "4"
        })
        .addClass("container")
        .fadeIn(1000)
    
    $("#closeContent")
        .css({
            position: "absolute",
            border: "none",
            backgroundColor: "transparent",
            right: "-1vw",
            top: "-1vw"
        })
        .on("click",function(){
            displayClose()
        })
    $("#closeContent i")
        .css({
            color: "white",
            fontSize:"2em",
        })
}

const displayClose = () => {
    $display.hide();
    $(".items").remove();
    $display.removeClass("container")
}

//SIDEBAR MENU OPTIONS
$launches.on("click", function(){
    sidebarContentAnim();
    getUpcomingLaunches();
    displayRender();
})

$calc.on("click", function(){
    sidebarContentAnim();
    renderCalc();
    displayRender();
})

$resetName.on("click", function(){
    resetUsername();
    location.reload();
})

$(document).mouseup(function(e) 
{
    const container = $display;

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide().removeClass("container");
        $(".items").remove();
    }
});