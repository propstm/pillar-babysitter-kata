import logic from './logic';

test('Start Time Before End Time', () => {
    let startTimeBeforeEndTime = logic.startTimeBeforeEndTime("2018-06-12T19:30", "2018-07-12T19:30");
    expect(startTimeBeforeEndTime).toBe(true);
});

test('Starts no earlier than 5:00PM', () => {
    let startTimeCheck = logic.verifyStartTime("2018-06-12T09:30");
    expect(startTimeCheck).toBe(true);
});

test('Leaves no later than 4:00AM', () => {
    let endTimeCheck = logic.verifyEndTime("2018-06-12T09:30");
    expect(endTimeCheck).toBe(true);
});
