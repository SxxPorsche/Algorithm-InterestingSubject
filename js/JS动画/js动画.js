// ele为要移动的盒子，target为目标位置（像素），spd为计数器的频率
window.onload = function () {
  animate(1);
};

const ele = document.getElementById('box');
function animate(speed) {
  let start = Date.now(); // remember start time
  let timer = setInterval(function() {
    window.requestAnimationFrame(function () {
      let timePassed = Date.now() - start;
      let step = Math.ceil(Math.abs(timePassed - 5000) / 10000);
      if (timePassed >= 5000) {
        clearInterval(timer); // finish the animation after 5 seconds
        return;
      }
      ele.style.left = ele.offsetLeft + step + 'px';
    });
  }, speed);
}

function animate1(target, speed){
  let timer = setInterval(function() {
    window.requestAnimationFrame(function () {
      let step = (target - ele.offsetLeft) / 10;
      //对步长进行二次加工(大于0向上取整,小于0向下取整)
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      //动画原理： 目标位置 = 当前位置 + 步长
      ele.style.left = ele.offsetLeft + step + "px";
      //检测缓动动画有没有停止
      if(Math.abs(target-ele.offsetLeft) <= Math.abs(step)) {
        //处理小数赋值
        ele.style.left = target + "px";
        clearInterval(timer);
      }
    });
  }, speed);
}
