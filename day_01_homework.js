const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);


//RETURNS THE MURDERER IS MISS SCARLET

let murderer = 'Professor Plum';

let changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

let declareSecondMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const secondVerdict = declareSecondMurderer();
console.log(secondVerdict);

//The murderer is Mrs. Peacock.

let secondMurderer = 'Professor Plum';

const declareThirdMurderer = function() {
  let secondMurderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareThirdMurderer();
console.log('First Verdict: ', firstVerdict);

const thirdVerdict = `The murderer is ${secondMurderer}.`;
console.log('Third Verdict: ', thirdVerdict);

//Third Verdict:  The murderer is Professor Plum.

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

//Suspect three is Mrs. Peacock.

 const secondScenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

let changeWeapon = function(newWeapon) {
  secondScenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${secondScenario.weapon}.`;
}

changeWeapon('Revolver');
const newVerdict = declareWeapon();
console.log(newVerdict);

//The weapon is the Revolver.

let anotherMurderer = 'Colonel Mustard';

const changeTheMurderer = function() {
  anotherMurderer = 'Mr. Green';

  const plotTwist = function() {
    anotherMurderer = 'Mrs. White';
  }

  plotTwist();
}

const declareTheMurderer = function () {
  return `The murderer is ${anotherMurderer}.`;
}

changeTheMurderer();
const anotherVerdict = declareTheMurderer();
console.log(anotherVerdict);

//The murderer is Mrs. White.

const thirdScenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeTheScenario = function() {
  thirdScenario.murderer = 'Mrs. Peacock';
  thirdScenario.room = 'Dining Room';

  const thePlotTwist = function(room) {
    if (thirdScenario.room === room) {
      thirdScenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(theMurderer) {
      if (thirdScenario.murderer === theMurderer) {
        thirdScenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  thePlotTwist('Dining Room');
}

const declareTheWeapon = function() {
  return `The weapon is ${thirdScenario.weapon}.`
}

changeTheScenario();
const otherVerdict = declareTheWeapon();
console.log(otherVerdict);

//The weapon is Candle Stick.

let moreMurderer = 'Professor Plum';

if (moreMurderer === 'Professor Plum') {
  let moreMurderer = 'Mrs. Peacock';
}

let declareTheLastMurderer = function() {
  return `The murderer is ${moreMurderer}.`;
}

const theLastVerdict = declareTheLastMurderer();
console.log(theLastVerdict);

//The murderer is Professor Plum.
