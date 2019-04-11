# Pillar - Babysitter Kata

### Background
This kata simulates a babysitter working and getting paid for one night.  The rules are pretty straight forward.

### Feature
*As a babysitter<br>
In order to get paid for 1 night of work<br>
I want to calculate my nightly charge<br>*

### Requirements
The babysitter:
- starts no earlier than 5:00PM
- leaves no later than 4:00AM
- only babysits for one family per night
- gets paid for full hours (no fractional hours)
- should be prevented from mistakes when entering times (e.g. end time before start time, or outside of allowable work hours)

The job:
- Pays different rates for each family (based on bedtimes, kids and pets, etc...)
- Family A pays $15 per hour before 11pm, and $20 per hour the rest of the night
- Family B pays $12 per hour before 10pm, $8 between 10 and 12, and $16 the rest of the night
- Family C pays $21 per hour before 9pm, then $15 the rest of the night
- The time ranges are the same as the babysitter (5pm through 4am)

Deliverable:
- Calculate total pay, based on babysitter start and end time, and a family.

### Instructions
- Check out repository
- The tests and application are run using npm. If you do not already have Node installed you can download it from https://nodejs.org/en/download/
- Tests are written in Jest.  From the terminal run `npm run test` to run the tests for babysitting logic. Babysitting pay logic is in logic.js file, tests are in the corresponding logic.test.js file
- User interface is in the App.js file. From the terminal run `npm run build` to build the project which will launch the calculator in your web browser.



![Screenshot of babysitting calculator](https://github.com/propstm/pillar-babysitter-kata/blob/master/babysitterCalcScreenshot.png)







This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


