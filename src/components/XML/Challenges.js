import challenge1 from './challenges/challenge1'
import challenge2 from './challenges/challenge2'
import challenge3 from './challenges/challenge3'
import challenge4 from './challenges/challenge4'
import challenge5 from './challenges/challenge5'
import challenge6 from './challenges/challenge6'
import challenge7 from './challenges/challenge7'
import challenge8 from './challenges/challenge8'
import challenge9 from './challenges/challenge9'
const challengeTitle = 'XML Challenge';

const challenges = [
	challenge1,
	challenge2,
	challenge3,
	challenge4,
	challenge5,
	challenge6,
	challenge7,
	challenge8,
	challenge9
];

let XMLChallenges = new Array();

challenges.forEach((challenge) => {
	console.log(challenge);
	XMLChallenges.push(
		{ 
			title: challenge.title,
			steps: challenge.steps,
			path: challenge.path
		}
	);
});

export default XMLChallenges;
