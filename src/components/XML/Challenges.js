import challenge1 from './challenges/challenge1'
import challenge2 from './challenges/challenge2'
import challenge3 from './challenges/challenge3'
const challengeTitle = 'XML Challenge';

const challenges = [
	challenge1,
	challenge2,
	challenge3
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
