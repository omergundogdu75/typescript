function add(n1: number, n2: number, showResult: boolean,phrase: string) {
    const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 1.5;
const printResult = true;
const resultPhrase = 'Result is ';

const result = add(number1, number2, printResult, resultPhrase);
