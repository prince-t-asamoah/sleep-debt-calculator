//Find the sleep hours per each weekday.
const getSleepHours = day => {
  let days = day.toLowerCase();
  let numOfSleepHours;

  switch (days) {
    case 'monday': numOfSleepHours = 5;
    break;
    case 'tuesday': numOfSleepHours = 6;
    break;
    case 'wednesday': numOfSleepHours = 7;
    break;
    case 'thursday': numOfSleepHours = 8;
    break;
    case 'friday': numOfSleepHours = 9;
    break;
    case 'saturday': numOfSleepHours = 11;
    break;
    case 'sunday': numOfSleepHours = 10;
  }
  return numOfSleepHours;
}

//Calclulate total sleep hours in a week
const getActualSleepHours = () => {
  let totalSleepHours =
  getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday');
  return totalSleepHours;
}

//Calculate total sleep hours needed in a week.
const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
}

//Calculate hours of sleep needed or owed.
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);

//Print total sleep hours in a week
  console.log('Total hour(s) of sleep in a week: ' + actualSleepHours + 'hr(s)');

//Print total ideal sleep hours in a week
  console.log('Total hour(s) of ideal sleep needed in a week: ' + idealSleepHours + 'hr(s)');

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${actualSleepHours - idealSleepHours} hours more sleep in a week which more sleep than needed.`);
  } else {
    console.log(`You got ${idealSleepHours - actualSleepHours} hours less of sleep, you need more rest.`);
  }
}
//Function call to calculate sleep debt.
calculateSleepDebt();
