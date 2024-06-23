const digits = document.querySelectorAll(".Nom");

const operators = document.querySelectorAll(".operator");

const special = document.querySelectorAll("spec");

const dis = document.querySelector(".display");

let flag = true, sizFlag = true;;
for(let it of digits){
    it.addEventListener("mousedown", function(e){
        if(flag){
            dis.textContent = "";
            flag = false;
            dis.textContent += `${it.textContent}`
        }
        else{
            dis.textContent += `${it.textContent}`
        }
        if(dis.textContent.length > 18){
            dis.textContent = "Number is too big!"
            flag = true;
        }
    });
}

for(let it of operators){
    it.addEventListener("mousedown", function(e){
        if(flag){
            dis.textContent = "";
            flag = false;
            dis.textContent += `${it.textContent}`
        }
        else{
            dis.textContent += `${it.textContent}`
        }
        if(dis.textContent.length > 18){
            dis.textContent = "Number is too big!"
            flag = true;
        }
    });
}

const eq = document.querySelector("#equals");

const clearAll = document.querySelector("#clearAll");
clearAll.addEventListener("mousedown", () =>{
    dis.textContent = "00";
    num1 = "";
    num2 = "";
    op = "";
    flag = true;
});

const clear = document.querySelector("#clear");
clear.addEventListener("mousedown", () => {
    dis.textContent = dis.textContent.slice(0, -1);
});


eq.addEventListener("click", ()=>{
    let exp = dis.textContent;
    dis.textContent = "";

    let num1 = '0', num2 = '0', op;
    let curr = exp.charAt(0);
    if(isNaN(curr)){
        dis.textContent = "ERROR!";
        flag = true;
    } 
    else{
        num1 = `${curr}`;
        let i = 1;
        while(i < exp.length && !isNaN(exp.charAt(i))){
            num1 += exp.charAt(i);
            i++;
        }

        if(i < exp.length){
            op = exp.charAt(i);
            i++;
        }
        num2 = "";
        while(i < exp.length && !isNaN(exp.charAt(i))){
            num2 += exp.charAt(i);
            i++;
        }

        // console.log(num1 + ' '+ num2 + ' ' + op);

        if(i < exp.length){
            dis.textContent = "ERROR!";
            flag = true;
        } 
        else{
            let res;
            switch(op){
                case '+':
                    res = (+num1) + (+num2);
                    break;
                case '-':
                    res = (+num1) - (+num2)
                    break;
                case 'X':
                    res = (+num1) * (+num2)
                    break;
                case '÷':
                    if(num2 == 0) res = "cannot divide by zero"
                    else{
                        res = num1 / num2;
                    }
                    break;
                case '%':
                    res = (+num1) % (+num2)
                    break;
                default:
                    res = "Enter a valid op[erator";
            }
            dis.textContent = res;
            flag = true;
        }
    }
});