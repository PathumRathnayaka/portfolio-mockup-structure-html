var _firstNumber,_secondNumber,_answer,_operator;

function setScreen(num){


    if (document.getElementById('txtScreen').value !="0"){

        document.getElementById('txtScreen').value += num;
    }
    else {
        document.getElementById('txtScreen').value = num;
    }
    console.log(num);
}

function reset(){
    document.getElementById('txtScreen').value = "0";
}

function setOperator(op){
    console.log(op);
    _firstNumber=document.getElementById('txtScreen').value;
    document.getElementById('txtScreen').value = "0";
    console.log("first Number"+_firstNumber);

    _operator=op;
}

function getAnswer(){
    _secondNumber=document.getElementById('txtScreen').value;
    console.log("second Number"+_secondNumber);

    if (_operator=='+'){
        _answer = Number(_firstNumber)  +  Number(_secondNumber);
    }
    else if (_operator=='-'){
        _answer = Number(_firstNumber)  -  Number(_secondNumber);
    }
    else if (_operator=='*'){
        _answer =Number(_firstNumber)   * Number(_secondNumber);
    }
    else if (_operator=='/'){
        _answer = Number(_firstNumber)  /  Number(_secondNumber);
    }

    console.log("Answer"+_answer);

    document.getElementById('txtScreen').value = _answer;
}