//滑动门特效
var navTip=getElem('.nav-line');
var navItems=getAllElem('.nav-item');
var pic1=getElem('.bg1');
var pic2=getElem('.bg2');
var pic3=getElem('.bg3');
var pic4=getElem('.bg4');
/*var setTip=function(idx,lib){
    lib[0].onmouseover=function(){
        navTip.style.left=0+'px';
        pic1.style.display="block";
        pic2.style.display="none";
        pic3.style.display="none";
    }
    lib[1].onmouseover=function(){
        navTip.style.left=(1*90)+'px';
        pic1.style.display="none";
        pic2.style.display="block";
        pic3.style.display="none";
    }
    lib[2].onmouseover=function(){
        navTip.style.left=(2*90)+'px';
        pic1.style.display="none";
        pic2.style.display="none";
        pic3.style.display="block";
    }
    var currentIdx=0;
    lib[idx].onmouseout=function(){
        for (var i = 0; i < lib.length; i++) {
            if (getCls(lib[i]).indexOf('nav-item_status_active')>-1){
                currentIdx=i; 
                break;
            }
        }
        navTip.style.left=(currentIdx*90)+'px';
    }
}*/
var setTip=function(idx,lib){
    lib[0].onclick=function(){
        navTip.style.left=0+'px';
        pic1.style.display="block";
        pic2.style.display="none";
        pic3.style.display="none";
        pic4.style.display="none";
    }
    lib[1].onclick=function(){
        navTip.style.left=(1*90)+'px';
        pic1.style.display="none";
        pic2.style.display="block";
        pic3.style.display="none";
        pic4.style.display="none";
    }
    lib[2].onclick=function(){
        navTip.style.left=(2*90)+'px';
        pic1.style.display="none";
        pic2.style.display="none";
        pic3.style.display="block";
        pic4.style.display="none";
    }
    lib[3].onclick=function(){
        navTip.style.left=(3*90)+'px';
        pic1.style.display="none";
        pic2.style.display="none";
        pic3.style.display="none";
        pic4.style.display="block";
    }
  /*  var currentIdx=0;
    lib[idx].onmouseout=function(){
        for (var i = 0; i < lib.length; i++) {
            if (getCls(lib[i]).indexOf('nav-item_status_active')>-1){
                currentIdx=i; 
                break;
            }
        }
        navTip.style.left=(currentIdx*90)+'px';
    }*/
}

//导航下面的滑块，按鼠标hover状态进行滑动
for (var i = 0; i < navItems.length; i++) {
    setTip(i,navItems);
}
var navItems=getAllElem('.nav-item');
var switchNavItemsActive=function(idx){
    for (var i = 0; i < navItems.length; i++) {
        delCls(navItems[i],'nav-item_status_active');
        navTip.style.left=90+'px';
    }
    addCls(navItems[idx],'nav-item_status_active'); 
    navTip.style.left=(idx*90)+'px';
}

/*//返回
var outline2 = getElem('.outline2');
function backTop(){
    window.scrollBy(0,-100)
    scrolldelay=setTimeout('backTop()',20)
    var sTop=document.documentElement.scrollTop+document.body.scrollTop
    if (sTop===0) {
        clearTimeout(scrolldelay)
    }
}
outline2.onclick=backTop;*/