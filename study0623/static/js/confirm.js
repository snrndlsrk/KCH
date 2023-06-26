
window.onload=function(){
    var drwNo = document.querySelector("#drwNo");
    var btnDefault = document.querySelector("#btnDefault");
    var btnSearch = document.querySelector("#btnSearch");

    btnDefault.addEventListener("click", data_default);
    btnSearch.addEventListener("click", data_search);
    var file = document.querySelector("#lotto");
    file.addEventListener("input",function(e){
        let target = e.target; // 선택된 파일 참조
        let files = target.files; // 선택된 파일은 배열의 형식으로 저장된다.
        // 첫번째 파일 참조를 해야 내가 선택한 파일은 읽을 수 있다.
        let reader = new FileReader();
        reader.addEventListener("load",function(){
            var str = reader.result;
            var temp = str.split("\n"); // n은 enter이고 enter는 새로운 줄을 만들라는 뜻(new line)

            for( var i in temp){ // 몇번을 반복하는지 이미 배열에 저장되어있으니 배열에서 사용가능이다.
                // i 는 0-1072번까지 index가 들어가짐.
            // for( var i=0; i<temp,length; i++){
                lotto.push( temp[i].split("\t")); // t는 tap이고 
            }
            
        });
        reader.readAsText(files[0]);
    });

    var opt="";
    for(var i=1073; i>=1; i--)
        opt += "<option>"+i+"</option>";
    drwNo.innerHTML=opt;
    drwNo.addEventListener("change", select_count);
}       

let sel_count=0; // 발표 회차 선택
function select_count(){
    sel_count=this.selectedIndex;
}


function data_default(){

}
function data_search(){
    if(lotto.length==0){
        alert("로또 파일을 먼저 열어주세요");
        return;
    }
    let win_num = new Array();
    for(var i=2; i<=7; i++){ // 내가 선택한 회차 당첨번호 win_num배열에 저장
        win_num.push(parseInt( lotto[sel_count][i] ) );
    }
    for(var line=1; line<=5; line++){

        var input = document.getElementsByClassName("input"+line);
        var num_arr = new Array();
        
        for(var i=0; i<input.length; i++){
            if(input[i].value!=''){
                var val = input[i].value;
                num_arr.push("<span>"+input[i].value+"</span>");
            }
                num_arr.push(input[i].value);
        }
        if( num_arr.length==6){
            var resN = document.getElementsByClassName("resultNumber");
            resN[line-1].innerHTML=num_arr;
            // 결과확인 버튼을 클릭하면 input 태그에 입력한 숫자를 모두 선택번호 td에 띄우기 출력하기
        }
    }
}
