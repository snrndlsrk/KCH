
// 1. 전역 변수와 지역변수 차이를 알아보겠습니다.
// 2. 두개의 함수를 통해 전역과 지역사용 비교

// 숫자나 연산자를 클릭하면 input 태그에 출력시키기!
// 클릭한 숫자나 연산자가 input 태그에 계속 나오게 만들기
// 하려면 어떻게 해야할까요?
// 이 작업을 위해서 필요한 변수는 지역? 변수?
/*
function select(){
    var a=100; // 지역변수
    a++;
    return a; // a라는 변수가 넘어가는게 아니라 a안에 저장되어있는 값이 넘어감.
    
}
function easy(){
    
    alert("출력 :" + select() ); // +select()를 적어야 실행한다.
}
*/
/*
var a=100; // 전역 변수 - 전체를 봐야 하기에 값을 예측하기가 어려워 너무 남발하지말자.
function select(){
    a++;
    
}
function easy(){
    select();
    alert("출력 :" + a ); 
}

function select(v){
    alert(v);
}
*/
let out=""; // 전역변수 - 내가 클릭한 숫자나 연산자를 쌓아두기 위해서
            // 전역변수가 아니고 지역변수로 생성시 클릭할 때 마다 새로운
            // 지역변수가 생성된다. 이전에 클릭했던 내용은 사라진다.
let op="";  // 연산자를 저장할 전역변수
            // 전역으로 만드는 이유는 연산자 입력후 두번째 숫자를 입력하기 때문에
            // 연산자를 함수의 종료와 함께 날려버리면 안되니까
let num1=0; // 첫번째 피연산자
let num2=0; // 두번째 피연산자


function select(val){
    if(val==="="){ // 계산 결과를 보기위해 = 클릭했을 경우 실행되는 if문
        out = calc(); // let 변수를 전역변수로 주었기에 어디든지 쓸 수있어서 ()안에 아무것도 안넣는다.
        // 계산하기 위한 함수, 계산된 결과를 반환(return)할 것이다.
    }
    else{
    out = out + val;
    // alert( out.length);

    if(typeof(val)==='string'){ // val변수의 값이 문자열인지 확인(연산자 클릭한경우)
        op=val;
        // alert("연산자입니다.")
    }
    if( op === ""){ // op변수가 빈값이면 연산자를 클릭하지 전이다.}
    num1 = Number(out); // 첫번째 숫자는 연산자를 클릭하기 전까지가 첫번째 피연산자이다.
    // 연산자 클릭한 이후부터는 두번째 피연산자 숫자가 들어와야 한다.
    // 연산자 이전과 이후가 구분이 되야 피연산자 1과 피연산자 2로 나누어 줄 수 있다.
    // op는 +-*/가 들어가있다.
    }else{ // op변수가 빈값이 아니라면 두번째 피연산자가 입력될 것이다.
        var index = out.indexOf(op)+1;
        num2 = Number(out.slice(index));
    }
        // alert(num2);
    }
    
    document.getElementById("result").value=out;
}


function calc(){
    switch(op){
        case "+":
            return num1=num1+num2;
        case "-":
            return num1=num1-num2;
        case "*":
            return num1=num1*num2;
        case "/":
            return num1=parseInt(num1/num2); // / 연산은 소수점도 나오니까 정수만 나오게 하기위해 parseInt사용.
    }
}


// 7+8하고 = 클릭하면 15가 출력된다.
// 15에 + 클릭하고 4를 클릭하면 19가 나오게 하려면 어떻게 해야할까?




/*
function select(val){
    out = out + val;
    alert(out+" "+val);
    let num1 = Number(out) +1;
    document.getElementById("result").value=num1;
}
// 문자열을 숫자열로 바꿀려면 Number와 parseInt를 사용한다.
// 숫자열이 제대로 되었는지 확인하려면 뒤에 +1 숫자를 붙여본다.
// val에 숫자가 쭉 들어오다가 문자가 들어온다는건 연산자가 들어온다는것
// +-/*가 언제쓰여지냐를 확인해여함.
*/



/*
let out="0"; // 

function select(val){
    out = out + val; // 문자열과 숫자열을 더하면 문자열이된다.
    document.getElementById("result").value=out;
}

// 하나클릭할때마다 하나만 나오게 하려면 이렇게 바꿔야함

function select(val){
    document.getElementById("result").val;
}

//오류가있는지 없는지 점검하는데 디버빙인데, 직접 내가 변수 넣어서 결과를 내는것이 가장복잡하다. 
// 4를 입력하면 out(0)+val(4)=4
// 7을 입력하면 out(4)+val(7)=11
// 이런 수작업을 하면서 변수를 내가 찾아봐야함.
*/