let num = new Array();



function init(){ // 초기화
    num =[];
    // 중복없이 랜덤값 넣기
    // indexOf를 이용해서 -1이 나오면 일치하는게 없다.
    // 즉 중복되는 숫자가 없다는 뜻이니까 배열에 저장
    num.push(Math.floor(Math.random()*10)+1);
    for(var i=1; i<=3; i++){
        var temp = Math.floor(Math.random()*10)+1;
        if (num.indexOf(temp) == -1){
            num.push(temp);
        }else{ // 배열에 저장된 값이 나올때 else가 작동한다.
            i--;
        }
    }

}



function go(){ // 초기화
    tex =[];
    // 중복없이 랜덤값 넣기
    // indexOf를 이용해서 -1이 나오면 일치하는게 없다.
    // 즉 중복되는 숫자가 없다는 뜻이니까 배열에 저장
    tex.push(Math.floor(Math.random()*8));
    for(var i=1; i<=7; i++){
        var temp = Math.floor(Math.random()*8);
        if (tex.indexOf(temp) == -1){
            tex.push(temp);
        }else{ // 배열에 저장된 값이 나올때 else가 작동한다.
            i--;
        }
    }

}


window.onload=function(){
    init();
    let start = document.getElementById("start");
    start.addEventListener("click",start);

    let pic = document.getElementsByClassName("picture");
    for( var i=0; i<pic.length; i++)
        pic[i].addEventListener("click", same_search);
}  
function start(){
    go();
    let pic = document.getElementsByClassName("picture");
    for( var i=0; i<pic.length; i++){
        pic[tex[i]].innerHTML = num[i % 4];
        
    }
}
    // var pic1 = document.getElementById("pic1");
    // pic1.addEventListener("click", same_search);
    // var pic2 = document.getElementById("pic2");
    // pic2.addEventListener("click", same_search);
    // var pic3 = document.getElementById("pic3");
    // pic3.addEventListener("click", same_search);
    // var pic4 = document.getElementById("pic4");
    // pic4.addEventListener("click", same_search);
    // var pic5 = document.getElementById("pic5");
    // pic5.addEventListener("click", same_search);
    // var pic6 = document.getElementById("pic6");
    // pic6.addEventListener("click", same_search);
    // var pic7 = document.getElementById("pic7");
    // pic7.addEventListener("click", same_search);
    // var pic8 = document.getElementById("pic8");
    // pic8.addEventListener("click", same_search);
    

