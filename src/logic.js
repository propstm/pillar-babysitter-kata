// **********************************************************
// The babysitter:
//
// starts no earlier than 5:00PM 
// leaves no later than 4:00AM
// only babysits for one family per night
// gets paid for full hours (no fractional hours)
// should be prevented from mistakes when entering times (e.g. end time before start time, or outside of allowable work hours)
// The job:
//
// Pays different rates for each family (based on bedtimes, kids and pets, etc...)
// Family A pays $15 per hour before 11pm, and $20 per hour the rest of the night
// Family B pays $12 per hour before 10pm, $8 between 10 and 12, and $16 the rest of the night
// Family C pays $21 per hour before 9pm, then $15 the rest of the night
// The time ranges are the same as the babysitter (5pm through 4am)
// Deliverable:

// Calculate total pay, based on babysitter start and end time, and a family.
// ****************

function calculatePay(startTime, endTime, family){
    const dateStart = new Date(startTime);
    const dateEnd = new Date(endTime);
    
    if(family === "family A"){
        return babysatForFamilyA(dateStart, dateEnd);
    }
    if(family === "family B"){
        return babysatForFamilyB(dateStart, dateEnd);
    }
    if(family === "family B"){
        return babysatForFamilyC(dateStart, dateEnd);
    }
}

function babysatForFamilyA(dateStart, dateEnd){
    // Family A pays $15 per hour before 11pm, 
    // $20 per hour the rest of the night
    const startTime = dateStart.getHours();
    const endTime = dateEnd.getHours();
    let totalPayment = 0;


    if(endTime < 12 && endTime > 4){
        //leaving before 12am
        totalPayment = 15 *(11 - startTime);
    }else if(endTime == 12){
        totalPayment = 110; 
    }else{
        //end time after midnight
        totalPayment = 110 + (20 * endTime)
    }

    return totalPayment;
}

function babysatForFamilyB(dateStart, dateEnd){
    // Family B pays $12 per hour before 10pm, 
    // $8 between 10 and 12, 
    // $16 the rest of the night
    const startTime = dateStart.getHours();
    const endTime = dateEnd.getHours();
    let totalPayment = 0;
    return totalPayment;
}

function babysatForFamilyC(dateStart, dateEnd){
    // Family C pays $21 per hour before 9pm, 
    // then $15 the rest of the night
    const startTime = dateStart.getHours();
    const endTime = dateEnd.getHours();
    let totalPayment = 0;
}

function isDateBetweenTimes(testDate) {
    const hour = testDate.getHours();
    if(hour>=17 || hour <5){
        //todo add logic for leaving at 4am
        return true;
    }else{
        return false;
    }  
}

module.exports = {
    verifyStartTime: function (startTime){
        const date = new Date(startTime);
        return isDateBetweenTimes(date);
    },
    verifyEndTime: function(endTime){
        const date = new Date(endTime);
        return isDateBetweenTimes(date);
    },
    startTimeBeforeEndTime: function (startTime, endTime) {
        const dateStart = new Date(startTime);
        const dateEnd = new Date(endTime);
        if(dateStart > dateEnd){
            return false;
        }else{
            return true;
        }
    },
    workedMaxTimeForFamilyA(){
        return calculatePay("2018-06-12T197:00", "2018-06-13T04:00", "family A");
    },
    workedMaxTimeForFamilyB(){
        return calculatePay("2018-06-12T197:00", "2018-06-13T04:00", "family B");
    },
    workedMaxTimeForFamilyC(){
        return calculatePay("2018-06-12T197:00", "2018-06-13T04:00", "family C");
    }



};