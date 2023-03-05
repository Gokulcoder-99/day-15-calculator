console.log('This is html internal script file.');

function backResult(){
    let totRes = document.getElementById("result").value;
    let totRes_length = totRes.length;
    let backRes = totRes.slice(0,totRes_length-1);
    document.getElementById("result").value = backRes;
}
function clrResult(){
    document.getElementById("result").value='';
}
function dispResult(val){
    document.getElementById("result").value+=val;
}
function calculate(){
    var inpStr=document.getElementById("result").value.split('');
    var symb_index=0;
    for(let i=0; i<inpStr.length;i++){
        if(inpStr[i]=='+' || inpStr[i]=='-' || inpStr[i]=='*' || inpStr[i]=='/' || inpStr[i]=='%'){
            symb_index=i;
        }
    }
    var a=Number(inpStr.slice(0,symb_index).join(''));
    var b=Number(inpStr.slice(symb_index+1).join(''));
    var symb=inpStr[symb_index];

    if(symb=='+'){
        document.getElementById("result").value=a+b;
    }else if(symb=='-'){
        document.getElementById("result").value=a-b;
    }else if(symb=='*'){
        document.getElementById("result").value=a*b;
    }else if(symb=='/'){
        document.getElementById("result").value=a/b;
    }else if(symb=='%'){
        document.getElementById("result").value=a%b;
    }
    
}