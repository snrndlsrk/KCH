/*
    현재 태그(엘리먼트)의 다음 태그를 가져오는방법
    - .nextSibling (형제태그를 의미한다.)
    태그(엘리먼트) 객체에 클래스를 추가하는 방법
    - element.classList.add('클래스이름');
    클래스 여러개 추가
    - element.classList.add('클래스이름','클래스이름');
    클래스 이름 변경
    - element.classList.replace('변경전이름','변경후이름');
    클래스 삭제
    - element.classList.toggle('삭제할 클래스 이름');
    조건에 따라 클래스 삭제
    - element.classList.toggle('삭제클리스이름',조건식);
    태그(element) 객체에 클래스가 있는지 확인방법
    - element.classList.contains('클래스이름');
    - 해당 클래스이름이 있다면 true 없다면 false

    dataset
    - HTML5부터는 태그에 데이터를 담을 수 있는 개념이 생겼다.
    - 데이터 속성은 태그에 data- 로 시작한다.
    - dataset은 브라우저에 어떠한 행동도 관여하지 않기 때문에
    자유롭게 데이터를 넣어 사용하면 된다.
    - 자바스크립트에서 활용을 할 수 있고 html에서는 다른 속성처럼
    태그에 영향을 주지않는다.
    - 다른 속성이라 하면 width, height, style 등등
    <div width="200"> -> 이거는 width라는 속성에 의해
    div의 크기에 영향을 준다. 하지만 dataset은 영향을 주지않는다.

    window.innerWidth;  브라우저의 화면 너비
    window.innerHeight; 브라우저의 화면 높이
    window.outerWidth;  브라우저의 전체 너비
    window.outerHeight; 브라우저의 전체 높이

    브라우저의 크기가 변경되면 동작하는 함수 - resize();
*/
window.onresize=function(){
    var wd = window.innerWidth;
    if( wd > 786){
        var list = document.getElementsByClassName("menu_list")[0];
        list.style.display="none";
        list.dataset.show='1';
    }
}



    
    window.onload=function(){
    // 화면이 전부 로딩 되면 시작하는 함수
    var icon = document.getElementsByClassName("strapIcon");
    icon[0].addEventListener("click", open_close);

    content = document.querySelector("#content");
}       


        // var list = document.getElementsByClassName("menu_list");
        // list[0].style.display="block";

// 형제 태그 찾을때 html에서 엔터를 쳤는지 바로 뒤에 뒀는지 확인해야함.
// 엔터로 띄어쓰기하면 nextSibling을 두번 쳐야함

function open_close(){
    var list = document.getElementsByClassName("strapIcon")[0].nextSibling; // this는 icon을 의미하고 nextSibling은 다음형제를 뜻함
    var show = list.dataset.show;
    if(show==1){
        list.style.display="block";
        list.dataset.show='0';
    }
    else{
        list.style.display="none";
        list.dataset.show='1';
    }
    // var isActive = list.classList.contains("list_active");
    // if(isActive)
    //     list.classList.toggle("list_active");
    // else
    //     list.classList.add("list_active");
}

let content = null;

function win_confirm(){
    alert("당첨확인 클릭");
}
function make_num(){

    var out="<table class='makeTable'>";

    for(var n=1; n<=5; n++){
    let lucky_num = new Array();
    lucky_num.push(Math.floor(Math.random()*45)+1);
    for(var i=1; i<6; i++){
        var num = Math.floor(Math.random()*45)+1;
        if(lucky_num.indexOf(num) == -1){
            lucky_num.push(num);
        }
        else{
            i--;
        }
    }
    lucky_num.sort(function(a,b){return a-b;})

    // 로또 숫자를 태그에 담아주기
    

    out += "<tr>";

    out+="<td class='numTd'>"+n+".</td>";
    for(var i=0; i<lucky_num.length; i++){
        out += "<td class='numTd'>"+lucky_num[i]+"</td>";
    }
    out += "</tr>";

    // 짝,홀 갯수, 총합
    var even=0, odd=0;  // even 짝, odd 홀
    var total=0;
    for(var i=0; i<lucky_num.length; i++){
        total += lucky_num[i];
        if(lucky_num[i]%2 === 0){
            even++;
        }
        else
            odd++;
    }

    // 산술적 복합성 값 구하기
    var ac = new Array();
    for(var i=lucky_num.length-1; i>=1; i--){
        for(var k=i-1; i>=0; i--){
            lucky_num[i] - lucky_num[k];
        }
    }

    out+= "<td colspan='7'>"+
    "총합 : "+total+"  "+
    "홀/짝 : "+odd+"/"+even+"</td>";


    } // 5번 반복하는 for문 끝
    out += "</table>";

    // 출력
    content.innerHTML= out;
    
}
function num_count(){
    alert("출현횟수");
}