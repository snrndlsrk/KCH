var numbers = [];

function playTurn() {
    var userInput = document.getElementById("userInput").value;
    var inputArray = userInput.split(",");

    for (var i = 0; i < inputArray.length; i++) {
        var number = parseInt(inputArray[i]);

    

        numbers.push(number);
    }

    var computerNumbers = getComputerNumbers();
    var result = document.getElementById("result");
    

    for(var i=0; i<numbers.length; i++){
        result.innerHTML += "내가 입력한 숫자:" + numbers[i] + "<br>";
    }
    for (var i = 0; i < computerNumbers.length; i++) {
        result.innerHTML += "컴퓨터가 입력한 숫자:" + computerNumbers[i] + "<br>";
    }

    if (computerNumbers.length >= 31) {
        result.innerHTML += "<br>컴퓨터 승리!";
        document.getElementById("userInput").disabled = true;
    }
}

function getComputerNumbers() {
    var lastNumber = numbers.length > 0 ? numbers[numbers.length - 1] : 0;
    var computerNumbers = [];

    for (var i = 1; i <= 3; i++) {
        var nextNumber = lastNumber + i;

        if (nextNumber % 3 === 0) {
            computerNumbers.push(i);
            break;
        }
    }

    return computerNumbers;
}
