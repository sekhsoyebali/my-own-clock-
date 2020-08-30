setInterval(() => {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    
    let rotateHour = hours*30 + minutes/2;
    let rotateMinute = minutes*6;
    let rotateSecond = seconds*6;
    
    hour.style.transform = `rotate(${rotateHour}deg)`;
    minute.style.transform = `rotate(${rotateMinute}deg)`;
    second.style.transform = `rotate(${rotateSecond}deg)`;
}, 1000);
