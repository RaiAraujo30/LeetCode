function demeritPoints(speed){
    if (speed < 75){
        return "Ok"
    }
    let point = 0
    let start = 75
    while (point <=12){
        if(point === 12){
            return "Suspended"
        }
        if(speed >= start){
            point++
            start+=5
        } else {
            return ("Points: " + point)
        } 

    }
}

console.log(demeritPoints(74))