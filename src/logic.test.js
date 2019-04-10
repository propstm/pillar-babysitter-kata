import logic from './logic';

test('Start Time Before End Time', () => {
    let startTimeBeforeEndTime = logic.startTimeBeforeEndTime("2018-06-12T19:30", "2018-07-12T19:30");
    expect(startTimeBeforeEndTime).toBe(true);
});

test('Starts no earlier than 5:00PM', () => {
    let startTimeCheck = logic.verifyStartTime("2018-06-12T17:30");
    expect(startTimeCheck).toBe(true);
});

test('Leaves no later than 4:00AM', () => {
    let endTimeCheck = logic.verifyEndTime("2018-06-12T01:30");
    expect(endTimeCheck).toBe(true);
});

test('Worked max time for Family A - Earned $190', () => {
    let maxFamilyA = logic.workedMaxTimeForFamilyA();
    expect(maxFamilyA).toBe(190);
});

test('Worked max time for Family B - Earned $140', () => {
    let maxFamilyB = logic.workedMaxTimeForFamilyB();
    expect(maxFamilyB).toBe(140);
});

test('Worked max time for Family C - Earned $189', () => {
    let maxFamilyC = logic.workedMaxTimeForFamilyC();
    expect(maxFamilyC).toBe(189);
});

test('Worked for Family A from 10:30-11:30 - Earned $35', () => {
    let betweenRatesFamilyA = logic.workedOneHourBetweenRatesFamilyA();
    expect(betweenRatesFamilyA).toBe(35);
});

test('Worked for Family A from 4:20-8:20 - Earned $45', () => {
    let threeHoursOneRate = logic.workedThreeHoursWithOneRateFamilyA();
    expect(threeHoursOneRate).toBe(45);
});


