const timeFormat = time =>{
    if (time < 60){
        return time < 10 ? `0${time}` : `${time}`;
    }else{
        Math.floor(time / 60) +'m' + (time % 60) + 's' 
    }
}

export {
    timeFormat
}