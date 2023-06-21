
let show = false; // start 버튼 클릭 유무
let cmp_num = new Array(); // 두개의 숫자를 비교하기 위한 배열
let choice = new Array(); // 클릭한 두개의 span태그 인덱스 저장 배열
let end = 0; // 4가 되면 게임 끝
let step = 0; // 클릭횟수 제한을 위한 변수


let num = new Array(); // 화면에 표시되는 숫자 저장 배열
let board = new Array(); // 숫자가 출력될 위치 저장 배열

function init(){ //초기화
    //중복없이 랜덤값 넣기
    //indexOf를 이용해서 -1이 나오면 일치하는게 없다ㅏ.
    //  즉 중복되는 숫자가 없다는 뜻이니까  배열에저장
    num.push(Math.floor(Math.random()*10)+1 );
    for(var i=1; i<=3; i++){
        var temp = Math.floor(Math.random()*10)+1;
        if ( num.indexOf(temp) == -1){
            num.push(temp);
        }else{
            i--;
        }
    }

    board.push(Math.floor(Math.random()*8) );
    for(var i=1; i<=7; i++){
        var temp = Math.floor(Math.random()*8);
        if ( board.indexOf(temp) == -1){
            board.push(temp);
        }else{
            i--;
        }
    }
    var count = document.getElementById("count");
    count.innerText=0;
}

window.onload=function(){
    init(); //초기화 함수 실행
    let start = document.getElementById("start");
    // id가 start인 버튼 태그가져오기
    start.addEventListener("click",play);
// 버튼 태그에 클릭 이벤트 등록하기(실행 함수는 play함수)
    let pic = document.getElementsByClassName("picture");
    for( var i=0; i<pic.length; i++){
        pic[i].addEventListener("click",same_search);
    }

}
function play(){
    let pic = document.getElementsByClassName("back");
    for( var i=0; i<pic.length; i++){
        pic[board[i]].innerHTML = num[i%4]  ;
    }
    setTimeout( function(){
        let pic = document.getElementsByClassName("back");
        for(var i=0; i<pic.length; i++){
            pic[i].style.display="none";
        }
        show = true; // start 버튼 클릭 했다 라는 의미
    }, 2000);

    // setTimeout 안에 있는 pic이 지역변수라서 먼저 실행됨. play 안에 있는 pic은 전역변수
// setTimeout(함수, 시간) -> 여기서 함수는 직접 만들어서 써도됨.
// 지정된 시간에 계속 실행되는게 setInterval
// setTimeout

}

function same_search(){
    if(!show){ // show 변수가 false라면 not 연산에 의해 true가 적용
                // show 변수가 true라면 not 연산에 의해 false가 적용
        alert("start 버튼을 클릭하세요");
        return; // start버튼을 클릭하지 않았으면 same_search 함수를 실행 시키지 않음.
    }

    // 클릭횟수 증가시키기
    if( step == 20){ // 20번 클릭하면 더 이상 진행이 되지 않게
                    // show는 false로 바꾸고 함수 종료
        alert("다음기회에 도전하세요");
        show=false;
        return;
    }
    var count = document.getElementById("count");
    count.innerText = ++step;
    // ++ 증가하는것을 뒤에하면 출력하고 숫자가 올라가고 앞에 하면 출력전에 숫자가 카운팅된다.
    

    var child = this.children[0]; // child변수는 td태그의 자식인 span이다.
                                    //td태그 밑에 있는 모든 자식을 배열로 들어가있다.
    child.style.display="inline";

    let span = document.getElementsByClassName("back");
    for(var i=0; i<span.length; i++){
        if(span[i] === child)
        choice.push(i); // 클릭한 td의 span태그 인덱스를 배열에 저장
    }
    cmp_num.push(parseInt(child.innerText)); // 클릭한 td>span의 숫자를 배열에 저장

    if( cmp_num.length == 2){ // 배열에 숫자 2개가 저장되어 있다면 비교
        if(cmp_num[0] == cmp_num[1]){
        cmp_num = new Array();
        choice = new Array();
        end++; // 같은 숫자 찾으면 end 변수 1씩 증가
    }
    else{
        setTimeout(function(){
            cmp_num = new Array();
            let pic = document.getElementsByClassName("back");
            for(var i=0; i<choice.length; i++){
                pic[choice[i]].style.display="none";
            }
            choice = new Array();
        }, 500);
    }
}
    if(end == 4){
        alert("게임 끝");
        show=false;
    }
    // var child = this.firstChild;
    // alert(child);
    // this.style.background="red";
}
// 자식태그 가져오는 방법 :
// children - 모든 자식태그를 htmlcollextion 배열로 가져온다.
// childNodes - 모든 자식태그를 nodeList의 배열로 가져온다.
// firstChild - 첫번째 자식 태그
// lastChild - 마지막 자식 태그










// getElementById() 또는 getElementByClassName() 등 을 사용하면
// 태그의 객체라는 것이 반환된다. 태그의 객체를 변수에 담아서 사용해왔다.
// 자바스크립트에서는 html 태그를 element, 요소 또는 객체라고 한다.
// 객체를 표현하는 방법 중에 자기 자신을 의미하는 this가 있다.
// same_search 함수를 실행 시킨건 td태그이다.
// 즉 td라는 객체에 의해 same_search함수가 실행된 것이다.
// same_search 함수 안에서 this라고 사용하면 same_search함수를 실행시킨
// td 태그를 의미한다.
// td 라는 객체에 의해서 실행된 함수가 same_search이다.
// this가 가리키는 객체는 td이다.
// 나를 실행시킨 객체를 this
// 자바스크립트에서 태그는 객체이다.
// 누구를 실행할때마다 this가 달라지는데 그때 해당하는데 td이다.
// this를 사용하게 된 이유는 위에 pic[i].addEventListener("click",same_search); 를 입력해서
// td 객체에 same_search를 연결시켰기 때문에
// span은 td의 자식이다. child를 사용하여 자바스크립트에서 자식을 불러온다.
// 화면에 안나오는 이유는 띄어쓰기도 문자열부터 들어간다.







// 내가 한 거
// let num = new Array();



// function init(){ // 초기화
//     num =[];
//     // 중복없이 랜덤값 넣기
//     // indexOf를 이용해서 -1이 나오면 일치하는게 없다.
//     // 즉 중복되는 숫자가 없다는 뜻이니까 배열에 저장
//     num.push(Math.floor(Math.random()*10)+1);
//     for(var i=1; i<=3; i++){
//         var temp = Math.floor(Math.random()*10)+1;
//         if (num.indexOf(temp) == -1){
//             num.push(temp);
//         }else{ // 배열에 저장된 값이 나올때 else가 작동한다.
//             i--;
//         }
//     }

// }



// function go(){ // 초기화
//     tex =[];
//     // 중복없이 랜덤값 넣기
//     // indexOf를 이용해서 -1이 나오면 일치하는게 없다.
//     // 즉 중복되는 숫자가 없다는 뜻이니까 배열에 저장
//     tex.push(Math.floor(Math.random()*8));
//     for(var i=1; i<=7; i++){
//         var temp = Math.floor(Math.random()*8);
//         if (tex.indexOf(temp) == -1){
//             tex.push(temp);
//         }else{ // 배열에 저장된 값이 나올때 else가 작동한다.
//             i--;
//         }
//     }

// }


// window.onload=function(){
//     init();
//     let start = document.getElementById("start");
//     start.addEventListener("click",start);

//     let pic = document.getElementsByClassName("picture");
//     for( var i=0; i<pic.length; i++)
//         pic[i].addEventListener("click", same_search);
// }  
// function start(){
//     go();
//     let pic = document.getElementsByClassName("picture");
//     for( var i=0; i<pic.length; i++){
//         pic[tex[i]].innerHTML = num[i % 4];
        
//     }
// }
//     // var pic1 = document.getElementById("pic1");
//     // pic1.addEventListener("click", same_search);
//     // var pic2 = document.getElementById("pic2");
//     // pic2.addEventListener("click", same_search);
//     // var pic3 = document.getElementById("pic3");
//     // pic3.addEventListener("click", same_search);
//     // var pic4 = document.getElementById("pic4");
//     // pic4.addEventListener("click", same_search);
//     // var pic5 = document.getElementById("pic5");
//     // pic5.addEventListener("click", same_search);
//     // var pic6 = document.getElementById("pic6");
//     // pic6.addEventListener("click", same_search);
//     // var pic7 = document.getElementById("pic7");
//     // pic7.addEventListener("click", same_search);
//     // var pic8 = document.getElementById("pic8");
//     // pic8.addEventListener("click", same_search);
    

