function returnFirstTwoDrivers(array){
    return array.slice(0,2)
};

function returnLastTwoDrivers(array){
    return array.slice(-2)
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function(number){
        return number * multiplier
    }
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayofDrivers, selection){
    return selection(arrayofDrivers)
}
    