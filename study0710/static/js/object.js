window.onload = function(){

    var body = document.getElementsByTagName("body");
    // body[0].innerHTML="<div>오늘 비와?</div>";

    var node = document.createElement("div");
    node.setAttribute("id","rain"); // 태그에 속성 부여
    node.addEventListener("click",function(){alert("졸리냐?");})
    var text = document.createTextNode("오늘 비 많이와?");
    node.appendChild(text); // 태그에 글씨넣기
    body[0].appendChild(node);  // 만든 태그를 누구 밑에 둘 것인지 위치 선정
}

function exit(){
    window.close();
}
let child="";
function winopen(){
    child = window.open("./child.html","_blank","width=500,height=400");
    // window.open("https://www.naver.com","_blank","");
    // window.open("주소","새창의 이름 또는 타겟","옵션");

    // open함수의 두번째 인자로
    // _blank 또는 아무것도 넣지 않으면
    // 현재 브라우저에 새 탭으로 열기하려면 옵션부분에 너비,높이 지정안하다.
    // 너비와 높이를 지정하면 새 브라우저로 열기가 된다.
}
function child_getName(){
    // 자식창의 id가 name인 input값 가져오기
    var name = child.document.getElementById("name").value;
    // 부모창의 div에 출력
    document.getElementById("name").innerHTML=name;    
}

function child_write(){
    child.document.getElementById("message").innerText="머리카락 휘날리며 와";
}


function child_close(){
    child.window.close();
}