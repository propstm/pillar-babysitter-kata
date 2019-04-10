import logic from './logic';

test('Start Time Before End Time and is between 5pm and 4am', () => {
    let startTimeBeforeEndTime = logic.verifyTimeInputs("2018-06-12T19:30", "2018-07-12T20:30");
    expect(startTimeBeforeEndTime).toBe(true);
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

test('Worked for Family A from 5:20-8:20 - Earned $45', () => {
    let threeHoursOneRate = logic.workedThreeHoursWithOneRateFamilyA();
    expect(threeHoursOneRate).toBe(45);
});

test('Worked for Family A from 10:30-11:30 - Earned $35', () => {
    let betweenRatesFamilyA = logic.workedOneHourBetweenRatesFamilyA();
    expect(betweenRatesFamilyA).toBe(35);
});

test('Worked for Family A from 5:01-5:02 - Earned $15', () => {
    let oneMinuteOfWork = logic.workedOneMinuteFamilyA();
    expect(oneMinuteOfWork).toBe(15);
});

test('Worked for Family B from 9:58-12:02 - Earned $44', () => {
    let twoHoursFourMinutes = logic.workedTwoHoursFourMinutesFamilyB();
    expect(twoHoursFourMinutes).toBe(44);
});

