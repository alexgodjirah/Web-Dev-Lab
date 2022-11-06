const answer = 'brave';
const solution = 'blast';

const answerChar = [...answer];
const solutionChar = [...solution].map(e => {
    return { key: e, color: 'grey' };
})

solutionChar.forEach((e, i) => {
    if (answerChar[i] === e.key) {
        solutionChar[i].color = 'green';
        console.log(solutionChar[i]);
    }
})


const answerChars = solution.split('');
const array = [...Array(5 - answerChars.length)].map(e => console.log(e));
console.log(array);

console.log(5 - answerChars.length);