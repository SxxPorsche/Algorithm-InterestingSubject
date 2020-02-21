/**
 * @return {number}
 */
function MoreThanHalfNum_Solution(numbers)
{
  if (!numbers.length || !numbers) return 0;
  let count = 1, number = numbers[0];
  for(let i = 1; i < numbers.length; i++) {
    if (numbers[i] === number) {
      count ++;
    } else {
      count --;
    }
    if (count <= 0) {
      number = numbers[i];
    }
  }

  console.log(number)
  if (numbers.filter((item) => item === number).length > numbers.length / 2) return number;
  return 0;
}

console.log(MoreThanHalfNum_Solution([2,2,2,2,2,1,3,4,5]));