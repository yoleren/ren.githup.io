
//滑动门特效
var navTip=getElem('.nav-line');
var navItems=getAllElem('.nav-item');
var setTip=function(idx,lib){
    lib[idx].onmouseover=function(){
        navTip.style.left=(idx*90)+16+'px';
    }
    var currentIdx=0;
    lib[idx].onmouseout=function(){
        for (var i = 0; i < lib.length; i++) {
            if (getCls(lib[i]).indexOf('nav-item_status_active')>-1){
                currentIdx=i;
                break;
            }
        }
        navTip.style.left=(currentIdx*90)+16+'px';
    }
}

//导航下面的滑块，按鼠标hover状态进行滑动
for (var i = 0; i < navItems.length; i++) {
    setTip(i,navItems);
}
var navItems=getAllElem('.nav-item');
var switchNavItemsActive=function(idx){
    for (var i = 0; i < navItems.length; i++) {
        delCls(navItems[i],'nav-item_status_active');
        navTip.style.left=87+'px';
    }
    addCls(navItems[idx],'nav-item_status_active'); 
    navTip.style.left=(idx*90)+16+'px';
    for (var i = 0; i < outLineItems.length; i++) {
        delCls(outLineItems[i],'outline__item_status_active');
    }
    addCls(outLineItems[idx],'outline__item_status_active');
}

//第二步：滚动到哪里就播放到哪里
window.onscroll = function () {
    var top  = document.documentElement.scrollTop;  //获取滚动条的高度
    //滚动导航条时导航栏的变化
    if( top > 87 ){  
        addCls( getElem('.header'),'header_status_black');
        addCls( getElem('.outline'),'outline_status_in');
        addCls( getElem('.outline2'),'outline_status_in');
    }else{
        delCls( getElem('.header'),'header_status_black');
        delCls( getElem('.outline'),'outline_status_in');
        delCls( getElem('.outline2'),'outline_status_in');
        switchNavItemsActive(0);
    }
   /* if( top > 730){   
        switchNavItemsActive(1);
    }
    if( top > 1200){   
        switchNavItemsActive(2);
    }
    if( top > 2300){       
        switchNavItemsActive(3);
    }
    if( top > 3700){
        switchNavItemsActive(4);
    }
    if( top > 4550){      
        switchNavItemsActive(5);
    }
    if( top > 5580){
        switchNavItemsActive(6);
    }*/
     if( top > 736-87){   
        switchNavItemsActive(1);
    }
    if( top > 736+580-87){   
        switchNavItemsActive(2);
    }
    if( top > 736+580+1100-87){       
        switchNavItemsActive(3);
    }
    if( top > 736+580+1100+1300-87){
        switchNavItemsActive(4);
    }
    if( top > 736+580+1100+1300+950-87){      
        switchNavItemsActive(5);
    }
    if( top > 736+580+1100+1300+950+420-87){
        switchNavItemsActive(6);
    }
 }

//第三步:导航条和侧边栏双向定位
var navItems = getAllElem('.nav-item');
var outLineItems = getAllElem('.outline__item');
var outline2 = getElem('.outline2');
var hire= getElem('.hire');
var setNavJump = function(i,lib){
    lib[0].onclick=function(){
        document.documentElement.scrollTop = 0;
    }
    lib[1].onclick=function(){
        document.documentElement.scrollTop = 730;
    }
    lib[2].onclick=function(){
        document.documentElement.scrollTop = 1300;
    }
    lib[3].onclick=function(){
        document.documentElement.scrollTop = 2400;
    }
    lib[4].onclick=function(){
        document.documentElement.scrollTop = 3700;
    }
    lib[5].onclick=function(){
        document.documentElement.scrollTop = 4650;
    }
    lib[6].onclick=function(){
        document.documentElement.scrollTop = 5080;
    }
}
for(var i=0;i<navItems.length;i++){
    setNavJump(i,navItems);
}
for(var i=0;i<outLineItems.length;i++){
    setNavJump(i,outLineItems);
}
outline2.onclick=function(){
    document.documentElement.scrollTop = 0;
}
hire.onclick=function(){
    document.documentElement.scrollTop = 5080;
}


//logo滚动

window.onload=function(){
    var oDiv  =  document.getElementById('box3');
    var oUl = document.getElementsByTagName('ul')[0];
    var Li = oUl.getElementsByTagName('li');//获取ul下的所有li
    oUl.style.width = Li[0].offsetWidth*Li.length+'px';//ul的宽度等于每个li的宽度乘以所有li的长度
    var speed = 5
    
    //主方法
    function move(){
        //如果左边横向滚动了长度一半之后,回到初始位置      
        if(oUl.offsetLeft<-oUl.offsetWidth){
            oUl.style.left = '0'
        }
        //如果右边横向滚动的距离大于0 就让他的位置回到一半
        if(oUl.offsetLeft>0){
            oUl.style.left = -oUl.offsetWidth+'px';
        }
        oUl.style.left = oUl.offsetLeft-2+'px';//进行左横向滚动
        //oUl.style.left = oUl.offsetLeft+speed+'px';//进行右横向滚动
    }
    //调用方法
    var timer = setInterval(move,30)
    //鼠标指向的时候 暂停
    oUl.onmouseover=function(){
        clearInterval(timer);
    }   
    //鼠标离开之后 继续滚动
    oUl.onmouseout=function(){
         timer = setInterval(move,30)
    }
}

/*//星空瓶滚动
 function autoPlay(){
    var picss = oUl.getElementsByTagName('picss');
    var pic5 = oUl.getElementsByTagName('pic5');
    var pic51 = oUl.getElementsByTagName('pic51');
          play=setInterval(function(){ //这个paly是为了保存定时器的，变量必须在全局声明 不然其他方法调不到 或者你可以调用auto.play 也许可以但是没时间试了
          index++;
          index>=picss.length&&(index=);//可能有优先级问题，所以用了括号，没时间测试了。
          show(index);
          },)
 }
 autoPlay();//马上调用，我试过用window.onload调用这个方法，但是调用之后影响到了其他方法，使用autoPlay所以只能这样调用了
 //div的鼠标移入移出事件
 picss.onmouseover=function(){
  clearInterval(play);
 };
 picss.onmouseout=function(){
  autoPlay();
 };
*/

/*var imglist = document.getElementById('img-list').getElementsByTagName("div");
var index=0;
var timer=null;
//设置自动播放函数
function autoPlay () {
   if (++index >= imglist.length) {index = 0};
   changeImg(index);
}
// 鼠标划过整个容器时停止自动播放
imglist.onmouseover = function () {
   clearInterval(timer);
}
// 鼠标离开整个容器时继续播放至下一张
imglist.onmouseout=function(){
   timer=setInterval(autoPlay,3000);
}
// 定义并调用自动播放函数
timer = setInterval(autoPlay, 3000);

// 定义图片切换函数
function changeImg (curIndex) {
   for (var i = 0; i < imglist.length; i++) {
     imglist[i].style.display = "none";
   }
   imglist[curIndex].style.display = "block";
   imglist.style.backgroundColor= "#fff";
}*/
 




