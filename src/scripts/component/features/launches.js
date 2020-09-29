import moment from "moment";

const $display = $("content-container");
const request = new XMLHttpRequest();
let launchList;



export async function getUpcomingLaunches () {
    await request.open('GET', 'https://launchlibrary.net/1.4/launch/next/3');
    request.onload = function() {
        launchList = JSON.parse(request.responseText);
        renderLaunches(launchList);
    }
    request.send();
    return launchList;
}

const renderLaunches = (launchList) => { //IMPLEMENT ASYNC AWAIT
    for (let i=0; i<launchList.launches.length; i++){
        console.log(launchList.launches[i]);
        console.log("RENDERED!");
        $display.append(`
        <div class="items">
            <div class="text">
                <h1>${launchList.launches[i].name}</h1>
                <p>Launching from ${launchList.launches[i].location.pads[0].name} 
                at ${launchList.launches[i].location.name}<br>
                Blasting off at ${moment.utc(launchList.launches[i].isonet).utcOffset(7).format("HH:mm on dddd, DD MMM YYYY")}
                </p>
                <h2>Main engine start ${moment.utc(launchList.launches[i].isonet).utcOffset(7).fromNow()}</h2>
            </div>
            <img src="${launchList.launches[i].rocket.imageURL}">
        </div>
        `)
    }
}



