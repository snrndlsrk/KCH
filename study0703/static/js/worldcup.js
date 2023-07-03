
// 기본 배열, 모든 이미지를 다  가지고있는 기본배열
const image=["노르웨이숲.jpeg","데본렉스.jpeg","라가머핀.jpeg","_4.jpeg","_5.jpeg",
"_6.jpeg","_7.jpeg","_8.jpeg","_9.jpeg","_10.jpeg","_11.jpeg",
"_12.png","_13.jpeg","_14.jpeg","_15.webp","_16.jpeg","_17.jpeg","_18.jpeg",
"_19.jpeg","_20.jpeg","_21.jpeg","_22.jpeg","_23.jpeg","_24.jpeg",
"_25.jpeg","_26.jpeg","_27.jpeg","_28.jpeg","_29.jpeg",
"_30.jpeg","_31.jpeg","_32.jpeg"];

const kind = ["노르웨이숲","데본렉스","라가머핀","_4","_5","_6","_7","_8","_9","_10","_11","_12","_13",
"_14","_15","_16","_17","_18","_19","_20","_21","_22","_23","_24","_25","_26","_27",
"_28","_29","_30","_31","_32"];



let 토너먼트1=new Array(); //현재 토너먼트
let 토너먼트2=new Array(); //다음 토너먼트 (현재 토너먼트에서 선택한 것)
let 순서=new Array();
let round = 32; //현재 몇강?(처음은 32강)
let count = 1; //현재 순서 (처음은 1번)

function 순서섞기(){
    for(var i=1; i<=round; i++){
        var tmp = Math.floor(Math.random() * round);
        if( 순서.indexOf(tmp) == -1){
            순서.push(tmp);
        }
        else{
            --i;
        }
    }
}
function 태그선택(id){
    return document.getElementById(id);
}

window.onload=function(){ /* 처음 화면이 로딩 되었을때 필요한 것만 넣는다. */
    var title = 태그선택("title");
    title.innerHTML=round+"강 "+count+"/"+(round/2);

    //토너먼트1 = image; 참조 복사 (같은걸 사용하기에 이미지 배열도 바뀜, 하나의 공간을 두명이서 같이씀)
    토너먼트1 = Array(round).fill().map((arr,i) => i); // 배열 얕은 복사(이미지 배열 바뀌지않음, 다른 공간에서 씀)
    //0부터31까지 숫자 토너먼트1 배열에 저장

    순서섞기();
    show();
    //이미지 클릭 이벤트 등록
    var left=태그선택("left");
    var right=태그선택("right");
    left.addEventListener("click",선택);
    right.addEventListener("click",선택);

}
function final(id, nid){
    var n = 태그선택(nid);
    n.style.display="none";
    var 최종 = 태그선택(id);
    최종.style.width="100%";
    최종.style.height="100vw";
}



function 선택(){

    if( this == 태그선택("left") ){
        토너먼트2.push(토너먼트1[순서[count*2-2]]);
        
    }else{
        토너먼트2.push(토너먼트1[순서[count*2-1]]);
    }
    if(round==2){ 
        final("left","right");
        var title =태그선택("title");
        title.innerHTML="최종선택  ";
    }else{
        if(count==round/2){
            round= round/2;
            count=0;
            순서=new Array();
            순서섞기();
            토너먼트1 = 토너먼트2.map((i)=>i);
            토너먼트2=new Array();
        }
        count++;
        var title =태그선택("title");
        title.innerHTML=round+"강  "+count+"/"+(round/2);
    }
    show();
}



function show(){
    var left = 태그선택("leftimg");
    var right = 태그선택("rightimg");
    var leftText = 태그선택("leftText");
    var rightText = 태그선택("rightText");

    left.src="./static/image/"+image[토너먼트1[순서[count*2-2]]];
    right.src="./static/image/"+image[토너먼트1[순서[count*2-1]]];
    leftText.innerHTML=kind[순서[count*2-2]];
    rightText.innerHTML=kind[순서[count*2-1]];
}