const returnFirstTwoDrivers = drivers => drivers.slice(0,2);
const returnLastTwoDrivers = drivers => drivers.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiple){
    return (fare) => fare * multiple
}

function fareDoubler(fare){
    const fairMultiplied = createFareMultiplier(2)(fare)
    return fairMultiplied
}

function fareTripler(fare){
    const fairMultiplied = createFareMultiplier(3)(fare)
    return fairMultiplied
}

function selectDifferentDrivers(drivers, selectionFunction){
    return selectionFunction(drivers)
}