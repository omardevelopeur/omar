let h1=document.getElementsByTagName("h1");
let but1=document.getElementsByTagName("button");
but1[0].onclick=function(){
    h1[0].innerHTML="first";
}
but1[1].onclick=function(){
    h1[1].innerHTML="second";
}