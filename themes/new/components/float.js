
export default function ANIAdmire() {
  
  let count = 0
  let flag = true//判断素材状态
  let img= document.getElementById("admire")
  
  img.style.AnimationPlayState = "paused"//动画初始状态为停止

  function myEndFunction() {
  img.style.animation = null
  } //点击后设置动画为空，保证每次点击动画位置为初始状态

  img.addEventListener("click", function () {
    if (count == 3) {
      //每点击四次更换一次素材
      count = 0;
      if (flag) {
        img.style.animation = "jump 0.7s linear 0s 1,gululu 0.7s linear 0s 1"//动画赋值
        img.src =
          "https://patchwiki.biligame.com/images/umamusume/2/20/o9e5yn4nvsm4lf8zon22bin9l7rrauk.png"
        flag = false//更换素材
        img.addEventListener("webkitAnimationEnd", myEndFunction)//动画播放完成后清空动画
      } else {
        img.style.animation = "jump 0.7s linear 0s 1,gululu 0.7s linear 0s 1" //动画赋值
        img.src =
          "https://patchwiki.biligame.com/images/umamusume/0/08/7u6ud327zarqitc9i49ftudknxzw674.png"
        flag = true //更换素材
        img.addEventListener("webkitAnimationEnd", myEndFunction) //动画播放完成后清空动画
      }
    } else {
      count++
    }
  })
}

