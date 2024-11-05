const checkLen = (string, number) => string.length <= number;

const isPalindrome = (str) => {
  const cleanedStr = str.replace(/\s/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
};

const extractNumbers = (str) => {
  const numbers = str.match(/\d+/g);
  if (!numbers) {return NaN;}
  const combinedNumbers = numbers.join('');
  return Number(combinedNumbers);
};
