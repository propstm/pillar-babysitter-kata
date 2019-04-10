import logic from './logic';

test('Start Time Before End Time', () => {
    let startTimeCheck = logic.startTimeBeforeEndTime("2018-06-12T19:30", "2018-07-12T19:30");
    expect(startTimeCheck).toBe(true);
});
