/**
 * @return {string}
 */
function PrintMinNumber(numbers) {
  if (!numbers.length) return '';
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if ('' + numbers[i] + numbers[j] > '' + numbers[j] + numbers[i]) {
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
      }
    }
  }
  return numbers.join('');
}

console.log(PrintMinNumber([3, 32, 321]));
