let html =document.querySelector('#html');
let style = document.querySelector('#style');
let string = `/* 
你好，我是小刘
接下来我要画一个简单的八卦图🤪
先建立一个盒子 
*/
#box {
  height: 200px;
  width: 200px;
  border: 1px solid #000;
}
/* 变成圆 */
#box {
    border-radius: 50%;
    border:none;
    box-shadow:0 0 3px rgba(0,0,0,.5) ;   
  }
  /*开始变八卦*/
  #box {
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);  
  }
  /*继续完善*/
  #box::before {
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background-color: black;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
  }
  #box::after {
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background-color: white;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
  }
  /*添加转动效果*/
  #box {
    animation: revolve 3s linear infinite normal;
  }`;
let count =1;

const tiemr = ()=>{
 setTimeout(
     ()=>{
         window.scroll(0,9999);
         html.scroll(0,9999);
        style.innerText = string.substring(0,count);
        html.innerText = string.substring(0,count);
        count+=1;
        if (count <=string.length )
        tiemr();
     },50
 )
};
tiemr();