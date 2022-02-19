const KEYWORD = 'jesus';

export function validateLetter(letter: string, i: number) {
  return letter === KEYWORD[i];
}

export function validateLetterInWord(letter: string) {
  return KEYWORD.includes(letter);
}

export function validateWord(guess: string): string {
  return guess
    .split('')
    .map((letter: string, index: number) => {
      const checkLetterPositition = validateLetter(letter, index);
      const checkLetterInWord = validateLetterInWord(letter);

      if (checkLetterPositition) return '🟩';
      else if (checkLetterInWord) return '🟨';
      else return '🟥';
    })
    .join('');
}

import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Tente adivinhar a palavra biblica do dia: ', (guess) => {
  if (guess.length != 5) console.log('A palavra deve ter 5 letras.');
  else console.log(guess.toUpperCase() + '\n', validateWord(guess));
  rl.close();
});
