function calculatePay(start, end, family){
    const dateStart = new Date(start);
    const dateEnd = new Date(end);
    const startTime = dateStart.getHours();
    const endTime = dateEnd.getHours();

    if(!verifyStartAndEndTime(dateStart, dateEnd)){
        return 0;
    }
    if(family === "Family A"){
        return babysatForFamilyA(startTime, endTime);
    }
    if(family === "Family B"){
        return babysatForFamilyB(startTime, endTime);
    }
    if(family === "Family C"){
        return babysatForFamilyC(startTime, endTime);
    }
}

function babysatForFamilyA(startTime, endTime){
    let totalPayment = 0;

    totalPayment += hourlyRate(startTime, endTime, 15, 17, 23); // $15/hr before 11pm
    totalPayment += hourlyRate(startTime, endTime, 20, 23, 4); // $20/hr rest of the evening

    return totalPayment;
}

function babysatForFamilyB(startTime, endTime){
    let totalPayment = 0;

    totalPayment += hourlyRate(startTime, endTime, 12, 17, 22); // $12/hr before 10pm
    totalPayment += hourlyRate(startTime, endTime, 8, 22, 24); // $8/hr from 10-12am
    totalPayment += hourlyRate(startTime, endTime, 16, 24, 4); // $16/hr rest of the evening

    return totalPayment; 
}

function babysatForFamilyC(startTime, endTime){
    let totalPayment = 0;

    totalPayment += hourlyRate(startTime, endTime, 21, 17, 21); // $21/hr before 9pm
    totalPayment += hourlyRate(startTime, endTime, 15, 21, 4); // $15/hr rest of the evening

    return totalPayment; 
}

function hourlyRate(startTime, endTime, rate, rateWindowStart, rateWindowEnd){
    let earningStartTime = 0;
    let earningEndTime = 0;

    if(endTime < 5){
        endTime = endTime + 24;
    }

    if(rateWindowEnd < 5){
        rateWindowEnd = rateWindowEnd + 24;
    }

    if(endTime < rateWindowStart){
        return 0;
    }
    if(startTime > rateWindowEnd){
        return 0;
    }

    if(startTime <= rateWindowStart){
        earningStartTime = rateWindowStart;
    }
    if(endTime >= rateWindowEnd){
        earningEndTime = rateWindowEnd;
    }
    if(startTime > rateWindowStart && startTime < rateWindowEnd){
        earningStartTime = startTime;
    }
    if(endTime >= rateWindowStart && endTime < rateWindowEnd){
        earningEndTime = endTime;
    }

    if((earningEndTime - earningStartTime) === 0){
        return rate; //pay one hour
    }

    return (earningEndTime - earningStartTime) * rate;

}

function isDateBetweenTimes(testDate) {
    let hour = testDate.getHours();
    if(hour >= 17 || hour <= 4){
        //todo add logic for leaving at 4am
        return true;
    }else{
        return false;
    }  
}

function verifyStartAndEndTime(startTime, endTime){
    const dateStart = new Date(startTime);
    const dateEnd = new Date(endTime);
    if(dateStart > dateEnd){
        return false;
    }else{
        if(!isDateBetweenTimes(dateStart) || !isDateBetweenTimes(dateEnd)){
            return false;
        }
    }
    return true;
}

module.exports = {
    verifyTimeInputs(){
        return verifyStartAndEndTime("2018-06-12T17:00", "2018-06-13T04:00");
    },
    calculatePay(start, end, family){
        return calculatePay(start, end, family);
    }    
};