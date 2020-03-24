// aa-bb-cc/aa_bb_cc => aaBbCc
function transfer(str) {
  const res = str.replace(/[_\-]/g, '');
  const res2 = str.split(/[_\-/]/g);
  for(let i = 1; i < res2.length; i++) {
    res2[i] = res2[i].replace(/[a-z]/, (match) => match.toUpperCase());
  }
  console.log(res, res2.join(''));
}

transfer('aa-bb-cc/aa_bb_cc');
