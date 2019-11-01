function animate(ele,attrObj,speedTime,callBack){
//var callBack = function(){alert("运动完了")}
clearInterval(ele.timer);
ele.timer = setInterval(function(){
var flag = true;//表示所有的属性都到达 了目标值。
for(var attr in attrObj){
var current = 0;//保存属性的当前值
if(attr != "zIndex"){
if(attr === "opacity"){
current = param(ele,attr) * 100;
}else{
current = Math.ceil(parseFloat(param(ele,attr)));//在width时，获取值时有精度缺失。
}
var speed = (attrObj[attr] - current) / 10;
speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

if(attrObj[attr] != current){	
flag = false;
}
}
//只要有一个属性没有到达 目标值，下面的程序都要来执行。
if(attr === "opacity"){
ele.style[attr] = (current + speed) / 100;
}else if(attr === "zIndex"){
ele.style[attr] = attrObj[attr];
}else{
ele.style[attr] = current + speed + "px";
}
}
if(flag){//所有的属性都到达 了目标值。
//停止定时器
clearInterval(ele.timer);
//正好是属性运动结束时
if(callBack){
callBack();
}
}
},speedTime);
};
function param(ele,attr){
return window.getComputedStyle ? window.getComputedStyle(ele,null)[attr] : ele.currentStyle[attr];//返回的是带单位的字符串
}