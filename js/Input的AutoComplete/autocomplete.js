window.onload = function () {
  const arr = ['a','apple','abandon','bilibili','beep','before','become','being','highmaintains','by','bye','banana'];
  document.querySelector('#input').addEventListener('input', function (e) {
    const reg = new RegExp(`^${e.target.value}`);
    const res = arr.filter(item => reg.test(item));
    const list = document.querySelector('#ul');
    ul.innerHTML = '';
    if (res && res.length) {
      window.requestAnimationFrame(function(){
        let fragment = document.createDocumentFragment();
        res.forEach(item => {
          let li = document.createElement('li', {
            key: item,
          });
          li.innerText = item;
          fragment.appendChild(li);
        });
        list.appendChild(fragment);
      })
    }
  });
};
