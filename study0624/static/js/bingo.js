let game=new Array();


function idEvent(eName,name,func){
    var id = document.getElementById(name); 
    id.addEventListener(eName,func);
}
function classEvent(eName,name,func){
    var clas = document.getElementsByClassName(name); 
    for( var i=0; i<clas.length; i++)
        clas[i].addEventListener(eName,func);
}


function num_init(){
    for(var i=1; i<=25; i++){
        var temp = (Math.floor(Math.random()*50)+1);
        if(game.indexOf(temp) == -1) game.push(temp);
        else i--;
    }
}
window.onload=function(){
    num_init();
    idEvent("click","game_start",start);
    classEvent("click","num",choice_num);
}

function start(){
    var clas = document.getElementsByClassName("num"); 
    for(var i=0; i<clas.length; i++){
        clas[i].innerText=game[i];
    }
}
function choice_num(){
    this.classList.add("check");

    var sel_num=this.innerText;
    for(var i=0; i<game.length; i++){
        if( sel_num==game[i]){
            game[i]=0; 
            if(check_bingo()) {
                alert("빙고");
            }
            break;  // 클릭한 곳의 숫자를 0으로 변경
        }
    }
}

function check_bingo(){
    for (var i = 0; i < 5; i++) {
        var rowSum = 0;
        for (var j = 0; j < 5; j++) {
            rowSum += game[i * 5 + j];
        }
        if (rowSum === 0) {
            return true; // Bingo!
        }
    }

    // Check columns
    for (var i = 0; i < 5; i++) {
        var colSum = 0;
        for (var j = 0; j < 5; j++) {
            colSum += game[j * 5 + i];
        }
        if (colSum === 0) {
            return true; // Bingo!
        }
    }

    // Check diagonals
    var diagonalSum1 = 0;
    var diagonalSum2 = 0;
    for (var i = 0; i < 5; i++) {
        diagonalSum1 += game[i * 6];
        diagonalSum2 += game[i * 4 + 4];
    }
    if (diagonalSum1 === 0 || diagonalSum2 === 0) {
        return true; // Bingo!
    }

    return false; // No bingo

    // 0 몇개 있는지 어디에 0이 연속으로 있는지 연속으로 몇개인가 확인하기 위한 함수
}