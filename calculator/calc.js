var result = 0;
var operator = "";

        function operation(op) {
            var input = parseFloat(document.getElementById("result").value);
            if (!isNaN(input)) {
                if (operator === "") {
                    result = input;
                } else {
                    if (operator === "+"){
                        result += input;
                    }
                    else if(operator === "-") {
                        result -= input;
                    }
                    else if(operator === "*") {
                        result *= input;
                    }
                    else if(operator === "/") {
                        result /= input;
                    }
                    }
                }
                operator = op;
                document.getElementById("result").value = "";
            }

        function calculate() {
            var input = parseFloat(document.getElementById("result").value);
            if (!isNaN(input)) {
                if (operator === "+"){
                    result += input;
                }
                else if(operator === "-") {
                    result -= input;
                }
                else if(operator === "*") {
                    result *= input;
                }
                else if(operator === "/") {
                    result /= input;
                }
                }

                document.getElementById("result").value = result;
                document.getElementById("output").innerHTML = result;
                operator = "";
        
            }

        function clearInput(){

                document.getElementById("result").value = "";
                document.getElementById("output").innerHTML = "0";
           
            }    

