/**
 * @return {boolean}
 */
function VerifySequenceOfBST(sequence) {
  if (!sequence || !sequence.length) return false;

  function isBST(seq) {
    if (!seq.length) return true;
    const root = seq.pop();
    let i = 0;
    while(seq[i] < root) {
      i++;
    }
    let index = i;
    while(i < seq.length) {
      if(seq[i] < root) return false;
      i++;
    }
    return isBST(seq.slice(0 ,index)) && isBST(seq.slice(index));
  }

  return isBST(sequence);
}

console.log(VerifySequenceOfBST([2,4,3,6,8,7,5]));
