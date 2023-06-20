// func.js

//함수의 형태 4가지
// 입력과 출력이 없는 형태
// 입력은 있고 출력이 없는 형태
// 입력은 없고 출력만 있는 형태
// 입력과 출력이 있는 형태

// 함수에서 입력이라는 것은 함수의 내용이 실행되기
// 위해서 꼭 필요한 값이 있다면 함수 외부로부터
// 값을 받는 것을 "입력" 이라고 한다.
// 전문 용어로 "인자 인수" , "매개변수" 라고 한다.
// 함수의 바깥쪽에서 들어오는 값이 "인수"
// 인수의 값이 저장되는 것이 "인자"
// 함수에 "매개변수" 가 있다면 반드시 "입력"이 필요하다.
// 함수의 작은 ()안에 들어오는 게 "매개변수"다.
// 입력되는 인자가 5개면 인수도 5개야 한다.

/*
function sum(a,b,c,d,e){

}
*/

// 함수에서 출력은 함수에서 생성된 값을 다른 함수나
// 다른 곳에 보내고자 할 경우에 사용된다.
// return 을 사용해서 밖으로 내보낸다.

function sum(a,b){ // a=10, b=20
    var res = document.getElementById("sum_result");
    res.innerHTML=a+b;
}
// 입력은 있고 출력은 없는 상태.

// 웹에서 입력하는 모든 값은 전부 텍스트이다.
// input 태그에 입력한 값을 자바스크립트로 가져오려면
// value로 속성을 사용해야 한다.
// 모든 input태그에 값은 value에 저장되어있다.
// getElement을 통해서 input 태그를 가져오고
// 가져온 input 태그에서 value값을 뽑아내기
function plus(){
    var n1 = document.getElementById("num1");
    var n2 = document.getElementById("num2");
    var res = document.getElementById("result2");
    // res.innerHTML = Number(n1.value) + parseInt(n2.value);
    // 문자를 숫자로 변형해주려면 Number나 parseInt를 써라.
    res.innerHTML = Number(n1.value) + Number(n2.value);
    // type을 text 에서 number로 
}

function myage(){
    var year = document.getElementById("birth_year").value;
    var age = document.getElementById("age");
    print.innerHTML = 2023-Number(year);
}

//return = 함수에 있는 값을 함수 밖으로 내보낼때 사용된다.
//  함수 안에서 return이 실행되면 해당 함수를 종료 하고 값을 내보낸다.


function score_calc(){
    var kor = document.getElementById("kor");
    var mat = document.getElementById("mat");
    var mus = document.getElementById("mus");
    var res = document.getElementById("result3");

    if(kor.value=='' || !(kor.value>=0 && kor.value <=100)){
        alert("국어 점수 입력하시오");
        kor.focus(); // focus는 커서가 바로 떠서 입력할 수 있게 만듬.
        return;
    }
    else if( mat.value==''){
        alert("수학 점수 입력해라");
        mat.focus();
        return;
    }
    else if( mus.value==''){
        alert("음악 점수 입력해라");
        mus.focus();
        return;
    }
    else{
        //else 위에 조건식이 거짓일 경우 작동한다.
    }
    var tot = total(Number(kor.value), Number(mat.value), Number(mus.value)); // total이라는 함수 호출(실행)
    var avg_val = avg(tot);

    res.innerHTML="총점 :"+tot+" 평균 : "+avg_val;
}

function avg(tot){ // avg.tot = score_calc.tot
    return tot/3;
}

function total(k, m, s){
    return (k+m+s);
}

function my_minus_life(){
    var soju = document.getElementById("soju");
    var minute = document.getElementById("minute");
    // var hour = document.getElementById("hour");
    var day = document.getElementById("day");

    if(soju.value == ''){
        alert("몇잔 마셨는지 입력하세요");
        soju.focus();
        return;
    }
    var life = Number(soju.value) * 2 * 365 * 20;

    minute.innerHTML = "단축수명 : "+life+"분";
    hour.innerHTML = "단축수명 :" +(life/60)+"시간";
    day.innerHTML = "단축수명 :" + (life/60/24)+"일";
}
// switch 문은 if문과 다르게 조건식이 참이냐 거짓이냐에 따라
// 동작하는 조건문이 아니다.
// switch문은 값을 넣어서 해당 값에 따라 동작하도록 선택하는 문이다.
// 즉 여러분이 지금 사용하고 있는 vscode의 메뉴가 바로 switch문으로
// 만들어진것이다. 메뉴에서 내가 폴더열기를 선택하면 탐색창이 실행된다.
// 즉 내가 선택한 메뉴에 따른 동작을 하는것이다.
// switch문에서 동작할 내용 선택은 case로 만들어준다.
// 여러개의 case를 만들 수 있다.
/*
    switch(10){
        case 1:
            1을 선택하면 동작할 내용
        case 5:
            5을 선택하면 동작할 내용
        case 100:
            100을 선택하면 동작할 내용
        case 2:
            2를 선택하면 동작할 내용
        case 10:
            10을 선택하면 동작할 내용
            
    }
*/

/*
function my_order(){
    var main_menu = document.getElementById("night_snack");
    var side_menu = document.getElementById("side_menu");
    var alc = document.getElementById("alc");

    //출력엘리먼트
    var order_list = document.getElementById("order_result");

    var out="";
    var temp=menu(main_menu.value); // 메뉴 입력 시 판매하는 메뉴입력하면
    // 금액(숫자)이 return되고, 판매하지않는 메뉴입력시 문자열이 return된다.
    
    out += main_menu.value + "금액 : "+temp+"원<br>";
    
    var temp1 = menu(side_menu.value);
    out += side_menu.value+"금액 :"+temp1+"원<br>";

    var temp2 = menu(alc.value);
    out += alc.value+"금액 :"+temp2+"원<br>";

    if( typeof(temp) === 'string' || typeof(temp1)=== 'string' || typeof(temp2)==='string'){ //temp의 값 타입이 문자열이라면
        alert("판매하지 않는 메뉴입니다.");
        main_menu.value=''; // 요렇게 해주면 야식메뉴 input의 값이 지워진다.
        side_menu.value=''; // 요렇게 해주면 사이드메뉴 input의 값이 지워진다.
        alc.value='';   // 요렇게 해주면 주류 input의 값이 지워진다.
        main_menu.focus();
        return;
    }
    //temp열에 들어와있는게 문자열이면 제대로 입력하지 않은 것이고 숫자열이면
    //제대로 입력한 것이다.
    order_list.innerHTML = out;
}

function menu(name){

    var money=0;
    switch(name){
        case "족발":
            money=28000;
            break;  // switch case에서 break를 하지않으면
                    // 밑에 있는 case도 실행된다.
                    // break는 if문 단독으로 쓰여진거 빼고는 다 사용가능.
        case "반반치킨":    money=22000;    break;
        case "무뼈닭발":    money=19000;    break;
        case "페페로니피자":    money=18000;    break;
        case "짬뽕탕":      money=18000;    break;
        case "포케":    money=15000;    break; 
        case "감자튀김":    money=3000;     break;
        case "염통꼬치":    money=4000;     break;
        case "타코야끼":    money=6000;     break;
        case "치즈볼":      money=5000;     break;
        case "테라":    money=4000;     break;
        case "피치하이볼":      money=8000;     break;
        case "진로":    money=4000;     break;
        case "새로주":      money=4000;     break;
        case "카스":    money=4000;     break;
        case "발렌타인30살":    money=1100000;  break;
        case "시바스리갈":      money=59800;    break;
        default: // case에 없는 값 입력시 default가 실행된다.
            return "판매하지 않는 메뉴입니다.";
    }
    return money;
}
*/
/*
    오늘의 과제
    
    계림 카페 주문하기
    
    주문내용은 음료명, 아이스 또는 핫, 사이즈(m , L)

    음료 하나만 주문이 아니라 여러개 주문 내역이 나와야한다.

    예)
    아메리카노, 아이스, M - 2000원
    수박주스, 아이스, M - 4500원

    힌트 - 모든 함수에서 사용할 수 있는 변수 생성하려면 함수 밖에 만들면 된다.
    
*/

function my_order() {
    var mainDrink = document.getElementById("drink").value;
    var temperature = document.getElementById("temperature").value;
    var size = document.getElementById("size").value;

    var orderResult = document.getElementById("order_result");

    var totalPrice = 0;
    var orderList = "";

    var mainDrinkPrice = menu(mainDrink, temperature, size);
    if (typeof mainDrinkPrice === 'string') {
        alert("이런 음료는 다른 카페에서 드세요.");
        clearInputFields();
        return;
    }
    totalPrice += mainDrinkPrice;
    orderList += mainDrink + " " + temperature + " " + size + " / 금액: " + mainDrinkPrice + "원<br>";

    orderResult.innerHTML = "주문 내역:<br>" + orderList ;
}

function menu(name,temperature,size) {
    var money = 0;
    switch (name) {
        case "아메리카노":
            if (temperature === "hot" && size === "M") {
                money = 2000;
            } else if (temperature === "hot" && size === "L") {
                money = 2200;
            } else if (temperature === "ice" && size === "M") {
                money = 2000;
            } else if (temperature === "ice" && size === "L") {
                money = 2200;
            }
            break;
        case "카라멜 마키아또":
            if (temperature === "hot" && size === "M") {
                money = 3000;
            } else if (temperature === "hot" && size === "L") {
                money = 3500;
            } else if (temperature === "ice" && size === "M") {
                money = 3000;
            } else if (temperature === "ice" && size === "L") {
                money = 3500;
            }
            break;
        case "카페모카":
            if (temperature === "hot" && size === "M") {
                money = 3000;
            } else if (temperature === "hot" && size === "L") {
                money = 3500;
            } else if (temperature === "ice" && size === "M") {
                money = 3000;
            } else if (temperature === "ice" && size === "L") {
                money = 3500;
            }
            break;
        // 나머지 음료에 대한 가격 정보를 추가로 작성하세요.

        default:
            return "여기에 없어!!";
    }
    return money;
}
