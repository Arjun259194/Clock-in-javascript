function currentTime(){
    let date = new Date();
    const timeObj = {
        HH:date.getHours() > 12 ? date.getHours() % 12: date.getHours(),
        MM:date.getMinutes(),
        SS:date.getSeconds(),
        timeZone:date.getHours() > 12 ? 'PM' : 'AM'
    };    
    timeObj.HH == 0 ? timeObj.HH = 12 : null;

    return `${timeObj.HH}:${timeObj.MM}:${timeObj.SS} ${timeObj.timeZone}`;
}



function clock(){
    const timerDiv = document.querySelector('.time');
    timerDiv.innerHTML = currentTime();

    setTimeout(() => {
        clock();
    }, 500);
}