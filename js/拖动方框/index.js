window.onload = function () {
  const rectangle = document.querySelector('#rectangle');
  rectangle.addEventListener('mousedown', function (e) {
    let dx = e.clientX - rectangle.offsetLeft;
    let dy = e.clientY - rectangle.offsetTop;
    const moveRectangle = throttle(
      function (e) {
        rectangle.style.left = e.clientX - dx + 'px';
        rectangle.style.top = e.clientY - dy + 'px';
      }, 6
    );
    document.onmousemove = function (e) {
      window.requestAnimationFrame(function () {
        moveRectangle(e);
      });
    }
  });
  rectangle.addEventListener('mouseup', function (e) {
    document.onmousemove = null;
  })
};

function throttle(fn, threshold) {
  let timer = null;
  return function (...props) {
    if (!timer) {
      let res = fn.apply(this, props);
      timer = setTimeout(() => {
        // clearTimeout(timer);
        timer = null;
      }, threshold);
      if (res !== undefined) {
        return res;
      }
    }
  }
}
