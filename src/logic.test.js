import logic from './logic';

test('Test Invalid Family Selection', () => {
    let returnErrorWithBadFamilySelection = logic.calculatePay("2018-06-12T21:58", "2018-06-13T00:02", "");
    expect(returnErrorWithBadFamilySelection).toBe("Family selection is invalid.  You must select the family you babysat for. ");
});

test('Test Invalid Date Selection', () => {
    let returnErrorWithDateProblem = logic.calculatePay("2018-06-12T221:58", "2018-06-13T00:02", "Family B");
    expect(returnErrorWithDateProblem).toBe("The dates entered are invalid.  The longest amount of time you can babysit is for 11 hours. This is from 5pm on the first day, until 4am on the next. ");
});

test('Start Time Before End Time and is between 5pm and 4am', () => {
    let startTimeBeforeEndTime = logic.verifyTimeInputs("2018-06-12T19:30", "2018-07-12T20:30");
    expect(startTimeBeforeEndTime).toBe(true);
});

test('Worked max time for Family A - Earned $190', () => {
    let maxFamilyA = logic.calculatePay("2018-06-12T17:00", "2018-06-13T04:00", "Family A");
    expect(maxFamilyA).toBe(190);
});

test('Worked max time for Family B - Earned $140', () => {
    let maxFamilyB = logic.calculatePay("2018-06-12T17:00", "2018-06-13T04:00", "Family B");
    expect(maxFamilyB).toBe(140);
});

test('Worked max time for Family C - Earned $189', () => {
    let maxFamilyC = logic.calculatePay("2018-06-12T17:00", "2018-06-13T04:00", "Family C");
    expect(maxFamilyC).toBe(189);
});

test('Worked for Family A from 5:20-8:20 - Earned $45', () => {
    let threeHoursOneRate = logic.calculatePay("2018-06-12T17:20", "2018-06-13T20:20", "Family A");
    expect(threeHoursOneRate).toBe(45);
});

test('Worked for Family A from 10:30-11:30 - Earned $35', () => {
    let betweenRatesFamilyA = logic.calculatePay("2018-06-12T22:20", "2018-06-13T23:10", "Family A");
    expect(betweenRatesFamilyA).toBe(35);
});

test('Worked for Family A from 5:01-5:02 - Earned $15', () => {
    let oneMinuteOfWork = logic.calculatePay("2018-06-12T17:20", "2018-06-13T17:21", "Family A");
    expect(oneMinuteOfWork).toBe(15);
});

test('Worked for Family B from 9:58-12:02 - Earned $44', () => {
    let twoHoursFourMinutes = logic.calculatePay("2018-06-12T21:58", "2018-06-13T00:02", "Family B");
    expect(twoHoursFourMinutes).toBe(44);
});

