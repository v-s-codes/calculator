const topics=["general","mathematics","physics","chemistry"]
function makeArrayBySpaceSeparatedString(firstString){
    var curr="";
    var firstArray=[];
    for(var i=0;i<firstString.length;i++){
        if(firstString[i]==' '){
            if(curr.length>0)firstArray.push(parseFloat(curr));
            curr="";
        }
        else{
            curr=curr+firstString[i];
        }
    }
    if(curr.length>0)firstArray.push(parseFloat(curr));
    return firstArray;
}
function moreClicked(num){
    var plus=document.getElementsByClassName("fa-plus-square-o")[num];
    var dash=document.getElementsByClassName("fa-minus-square-o")[num];
    plus.style.display="none";
    dash.style.display="inline"
    var topic=document.getElementsByClassName(topics[num]);
    // topic.style.display="block";
    for(var i=0;i<topic.length;i++){
        topic[i].style.display="block";
    }
}
function lessClicked(num){
    var plus=document.getElementsByClassName("fa-plus-square-o")[num];
    var dash=document.getElementsByClassName("fa-minus-square-o")[num];
    plus.style.display="inline";
    dash.style.display="none"
    var topic=document.getElementsByClassName(topics[num]);
    // topic.style.display="none";
    for(var i=0;i<topic.length;i++){
        topic[i].style.display="none";
    }
}
function barsClicked(){
    var bars=document.getElementsByClassName("fa-bars")[0];
    var times=document.getElementsByClassName("fa-times")[0];
    var sub=document.getElementsByClassName("full-width")[0];
    sub.style.display="block";
    var con=document.getElementsByClassName("content")[0];
    con.style.display="none";
    times.style.visibility="visible";
    bars.style.visibility="hidden";
}
function timesClicked(){
    var bars=document.getElementsByClassName("fa-bars")[0];
    var times=document.getElementsByClassName("fa-times")[0];
    var sub=document.getElementsByClassName("full-width")[0];
    sub.style.display="none";
    var con=document.getElementsByClassName("content")[0];
    con.style.display="block";
    times.style.visibility="hidden";
    bars.style.visibility="visible";
}
function binaryOperation(){
    var result=document.getElementsByClassName("res");
    var inputs=document.getElementsByClassName("inp");
    var firstNumber=inputs[0].value, secondNumber=inputs[1].value, Operator=inputs[2].value;
    if(firstNumber.length==0 || secondNumber.length==0 || Operator.length==0){
        alert("Please fill in the required fields!");
        return;
    }
    var firstFloat=parseFloat(firstNumber), secondFloat=parseFloat(secondNumber);
    var firstInt=parseInt(firstFloat), secondInt=parseInt(secondFloat);
    var answer;
    if(firstFloat==firstInt && secondFloat==secondInt){
        if(Operator==1){
            answer=firstInt+secondInt;
        }
        else if(Operator==2){
            answer=firstInt-secondInt;
        }
        else if(Operator==3){
            answer=firstInt*secondInt;
        }
        else if(Operator==4){
            if(secondInt==0){
                alert("Denminator must be non-zero!");
                return;
            }
            if(firstInt%secondInt==0){
                answer=firstInt/secondInt;
            }
            else{
                answer=firstFloat/secondFloat;
            }
        }
        if(Operator==5){
            if(firstInt==0 && secondInt<=0){
                alert("Exponent must be positive if the base is zero!");
                return;
            }
            answer=Math.pow(firstInt,secondInt);
        }
        if(Operator==6){
            if(firstInt<=0 || secondInt<=0){
                alert("Both the numbers must be positive!");
                return;
            }
            if(firstInt==1){
                alert("Base can't be unity!");
                return;
            }
            answer=Math.log(secondInt)/Math.log(firstInt);
        }
        if(Operator==7){
            if(secondFloat==0){
                alert("Second number can not be zero!");
                return;
            }
            answer=firstInt%secondInt;
        }
    }
    else{
        if(Operator==1){
            answer=firstFloat+secondFloat;
        }
        else if(Operator==2){
            answer=firstFloat-secondFloat;
        }
        else if(Operator==3){
            answer=firstFloat*secondFloat;
        }
        else if(Operator==4){
            if(secondFloat==0){
                alert("Denominator must be non-zero!");
                return;
            }
            answer=firstFloat/secondFloat;
        }
        if(Operator==5){
            if(firstFloat==0 && secondFloat<=0){
                alert("Exponent must be positive if the base is zero!");
                return;
            }
            // if(secondFloat!=secondInt){
            //     alert("Currently we can find powers for integer exponents only!");
            //     return;
            // }
            answer=Math.pow(firstFloat,secondFloat);

        }
        if(Operator==6){
            if(firstFloat<=0 || secondFloat<=0){
                alert("Both the numbers must be positive!");
                return;
            }
            if(firstFloat==1){
                alert("Base can't be unity!");
                return;
            }
            answer=Math.log(secondFloat)/Math.log(firstFloat);
        }
        if(Operator==7){
            if(secondFloat==0){
                alert("Second number can not be zero!");
                return;
            }
            answer=firstFloat%secondFloat;
        }
    }
    if(Number.isNaN(answer)){
        alert("Invalid input!");
        return;
    }
    document.getElementsByClassName("row")[0].style.marginBottom="10px";
    result[0].innerHTML="Result is: "+answer;
    result[0].style.backgroundColor="rgba(0,0,0,0.1)";
    result[0].style.color="black";
    result[0].style.display="block";
}

function unaryOperation(){
    var result=document.getElementsByClassName("res");
    var inputs=document.getElementsByClassName("inp");
    var Number=inputs[4].value, Operator=inputs[5].value;
    if(Number.length==0 || Operator.length==0){
        alert("Please fill in the required fields!");
        return;
    }
    var Float=parseFloat(Number);
    var Int=parseInt(Float);
    if(Int==Float)Float=Int;
    var answer;
    if(Operator==1){
        answer=Float*Float;
    }
    else if(Operator==2){
        answer=Float*Float*Float;
    }
    else if(Operator==3){
        if(Float<0){
            alert("Negative numbers don't have real square-root!");
            return;
        }
        answer=Math.sqrt(Float);
    }
    else if(Operator==4){
        answer=Math.cbrt(Float);
    }
    
    document.getElementsByClassName("row")[1].style.marginBottom="10px";
    result[1].innerHTML="Result is: "+answer;
    result[1].style.backgroundColor="rgba(0,0,0,0.1)";
    result[1].style.color="black";
    result[1].style.display="block";
}

function conversion(quantity){
    //length->0,
    const convArray=[
                        [1e-010, 0.01, 10, 0.1, 1e-015, 0.304798, 1e+009, 100, 0.0253998, 1000, 9.46053e+015, 1e+006, 1, 1e-006, 0.001, 3.08413e+016, 1e-012],
                        [0.2, 0.0647989, 1, 1000, 1e-006, 0.001, 28.3495, 453.592, 100000, 6350.29, 1e+006, 907185]
                    ];
                var arr=[1,2];
                arr[100]=3;
                console.log(arr.length);
                    
    var inputs=document.getElementsByClassName("inp");        
    var firstUnit=inputs[quantity*4-3].value, secondUnit=inputs[quantity*4-2].value, valStr= inputs[quantity*4-4].value;
    if(firstUnit.length==0 || secondUnit.length==0 || valStr.length==0){
        alert("Please fill in the required fields!");
        return;
    }    
    var result=document.getElementsByClassName("res");
    var answer=0;
    if(valStr<0){
        alert("The quantity can not be negative!");
        return;
    }
    if(firstUnit==secondUnit){
        answer=valStr;
    }
    else{
        answer=valStr;
        answer*=convArray[quantity-1][firstUnit-1];
        answer/=convArray[quantity-1][secondUnit-1];
    }
    
    document.getElementsByClassName("row")[quantity-1].style.marginBottom="10px";
    result[quantity-1].innerHTML="Result is: "+answer;
    result[quantity-1].style.backgroundColor="rgba(0,0,0,0.1)";
    result[quantity-1].style.color="black";
    result[quantity-1].style.display="block";
}
function cConverter(num){
    var firstCurrency = document.getElementsByClassName("inp")[num*4-3];
    var firstAmount = document.getElementsByClassName("inp")[num*4-4];
    var secondCurrency = document.getElementsByClassName("inp")[num*4-2];
    var secondAmount = document.getElementsByClassName("res")[num-1];
    var firstCurrencyValue = firstCurrency.value;
    var secondCurrencyValue = secondCurrency.value;
    var firstAmountValue=firstAmount.value;
    if(firstCurrencyValue.length==0 || secondCurrencyValue.length==0 || firstAmountValue.length==0){
        alert("Please fill in the required fields!");
        return;
    }
    fetch(`https://api.exchangerate-api.com/v4/latest/${firstCurrencyValue}`)
        .then(res => res.json())
        .then(res => {
        var rate = res.rates[secondCurrencyValue];
        document.getElementsByClassName("row")[num-1].style.marginBottom="10px";
        secondAmount.innerHTML="Result is: "+(rate*parseFloat(firstAmountValue));
        secondAmount.style.backgroundColor="rgba(0,0,0,0.1)";
        secondAmount.style.color="black";
        secondAmount.style.display="block";
    })
}
function distanceFormula(){
    var firstArray=[], secondArray=[];
    var inputs=document.getElementsByClassName("inp");
    var firstString=inputs[0].value, secondString=inputs[1].value;
    firstArray=makeArrayBySpaceSeparatedString(firstString);
    secondArray=makeArrayBySpaceSeparatedString(secondString);
    var n=firstArray.length, m=secondArray.length, i=0;
    if(n==0 || m==0){
        alert("Please fill in all the input fields!");
        return;
    }
    if(n!=m){
        alert("Number of values must be same in both the input fields!");
        return;
    }
    var ans=0;
    for(i=0;i<n;i++){
        ans+=Math.pow(firstArray[i]-secondArray[i],2);
    }
    var answer=Math.sqrt(ans);
    if(Number.isNaN(answer)){
        alert("Invalid Input!");
        return;
    }
    var result=document.getElementsByClassName("res");
    document.getElementsByClassName("row")[0].style.marginBottom="10px";
    result[0].innerHTML="Result is: "+answer;
    result[0].style.backgroundColor="rgba(0,0,0,0.1)";
    result[0].style.color="black";
    result[0].style.display="block";
}
function sectionFormula(num){
    var firstArray=[], secondArray=[];
    var inputs=document.getElementsByClassName("inp");
    var firstString=inputs[3+num*4].value, secondString=inputs[4+num*4].value;
    firstArray=makeArrayBySpaceSeparatedString(firstString);
    secondArray=makeArrayBySpaceSeparatedString(secondString);
    var n=firstArray.length, m=secondArray.length, i=0;
    if(n==0 || m==0){
        alert("Please fill in all the input fields!");
        return;
    }
    if(n!=m){
        alert("Number of values must be same in all the input fields!");
        return;
    }
    var answer="";
    if(num==0){
        var ratio=parseFloat(document.getElementsByClassName("inp")[5].value),z;
        answer+='(';
        for(i=0;i<n-1;i++){
            z=(ratio*secondArray[i]+firstArray[i])/(ratio+1);
            answer+=z;
            answer+=', ';
        }
        z=(ratio*secondArray[i]+firstArray[i])/(ratio+1);
        answer+=z;
        answer+=')';
    }
    else{
        var thirdString=inputs[5+num*4].value;
        var thirdArray=[];
        thirdArray=makeArrayBySpaceSeparatedString(thirdString);
        var l=thirdArray.length;
        if(l==0){
            alert("Please fill in all the input fields!");
            return;
        }
        if(l!=n){
            alert("Number of values must be same in all the input fields!");
            return;
        }
        var a=true,b=true,c=true,d=true;
        for(i=0;i<n;i++){
            if(firstArray[i]!=secondArray[i]){
                a=false;
                d=false;
            }
            if(firstArray[i]!=thirdArray[i]){
                b=false;
                d=false;
            }
            if(secondArray[i]!=thirdArray[i]){
                c=false;
                d=false;
            }
            if(a==false && b==false && c==false){
                break;
            }
        }
        if(d){
            alert("All the points are coinciding!");
            return;
        }
        if(c){
            alert("The point coincides with second point!");
            return;
        }
        if(b){
            alert("The point coincides with first point!");
            return;
        }
        if(a){
            alert("Both the given points coincide!");
            return;
        }
        var found=false;
        var ratio1,ratio2;
        for(i=0;i<n;i++){
            if(secondArray[i]==thirdArray[i] && firstArray[i]!=thirdArray[i]){
                alert("The points are not collinear!");
                return;
            }
            if(secondArray[i]!=thirdArray[i]){
                if(found==false){
                    ratio1=(firstArray[i]-thirdArray[i]);
                    ratio2=(thirdArray[i]-secondArray[i]);
                    found=true;
                }
                else{
                    var z=(firstArray[i]-thirdArray[i])/(thirdArray[i]-secondArray[i]);
                    if(ratio1*(thirdArray[i]-secondArray[i])!=ratio2*(firstArray[i]-thirdArray[i])){
                        alert("The points are not collinear!");
                        return;
                    }
                }
            }
        }
        if(ratio1/ratio2<0){
            if(ratio1<0)ratio1*=-1;
            if(ratio2<0)ratio2*=-1;
            answer="External division with ratio "+(ratio1/ratio2);
        }
        else{
            if(ratio1<0)ratio1*=-1;
            if(ratio2<0)ratio2*=-1;
            answer="Internal division with ratio "+(ratio1/ratio2);
        }
    }
    var result=document.getElementsByClassName("res");
    document.getElementsByClassName("row")[1+num].style.marginBottom="10px";
    result[1+num].innerHTML="Result is: "+answer;
    result[1+num].style.backgroundColor="rgba(0,0,0,0.1)";
    result[1+num].style.color="black";
    result[1+num].style.display="block";
}
function seeMore(num){
    var btnMore=document.getElementsByClassName("see-more")[num];
    var btnLess=document.getElementsByClassName("see-less")[num];
    var remContent=document.getElementsByClassName("remaining")[num];
    btnMore.style.display="none";
    btnLess.style.display="inline";
    remContent.style.display="inline";
}
function seeLess(num){
    var btnMore=document.getElementsByClassName("see-more")[num];
    var btnLess=document.getElementsByClassName("see-less")[num];
    var remContent=document.getElementsByClassName("remaining")[num];
    btnMore.style.display="inline";
    btnLess.style.display="none";
    remContent.style.display="none";
}
function makeLineGraph(){
    var inp=document.getElementsByClassName("inp")[11].value;
    if(inp.length==0){
        alert("Please fill in the input field!");
        return;
    }
    var inpArray=makeArrayBySpaceSeparatedString(inp);
    if(inpArray.length!=3){
        alert("There must be three number values!");
        return;
    }
    var a=inpArray[0], b=inpArray[1], c=inpArray[2];
    // alert(a);
    // alert(b);
    // alert(c);

    if(a==0 && b==0){
        alert("'a' and 'b' can't be zero simultaneously!");
        return;
    }
    var canvas=document.querySelector('canvas');
    if(screen.width<=700){
        canvas.width=0.8*screen.width;
    }
    else{
        canvas.width=0.7*screen.width;
    }
    canvas.height=canvas.width*0.75;
    var ctx=canvas.getContext('2d');
    var y=canvas.height-10, x=10;

    ctx.beginPath();
    while(x<canvas.width){
        ctx.moveTo(x,canvas.height);
        ctx.lineTo(x,0);
        x+=10;
    }
    while(y>0){
        ctx.moveTo(0,y);
        ctx.lineTo(canvas.width,y);
        y-=10;
    }
    ctx.strokeStyle='green';
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle='black';
    x=10*parseInt(0.05*canvas.width);
    y=canvas.height-10*parseInt(0.05*canvas.height);
    ctx.moveTo(x,0);
    ctx.lineTo(x,canvas.height);
    ctx.moveTo(0,y);
    ctx.lineTo(canvas.width,y);
    ctx.stroke();
    
    // alert(a);
    // alert(b);
    // alert(c);
var k;
    if(a==0){
        var yIntersection=(-1*c)/b;
        // alert(yIntersection);
        var z=yIntersection;
        if(z<0)z*=-1;
        // alert(z);
        // alert(canvas.height);
        var w=parseInt((canvas.height/2-10)*0.1);
        // alert(w);
        k=(parseInt((z+w-1)/w));
        // if()

        ctx.beginPath();
        ctx.strokeStyle='blue';
        // alert(y+10*yIntersection/k);
        ctx.moveTo(0,y-10*yIntersection/k);
        ctx.lineTo(canvas.width,y-10*yIntersection/k);
        ctx.stroke();
        // chng.innerHTML="Scale: 1 box = "+k+" units.";
        // return;
    }
    else if(b==0){
        var xIntersection=(-1*c)/a;
        // alert(yIntersection);
        var z=xIntersection;
        if(z<0)z*=-1;
        // alert(z);
        // alert(canvas.height);
        var w=parseInt((canvas.width/2-10)*0.1);
        // alert(w);
         k=(parseInt((z+w-1)/w));
        // if()

        ctx.beginPath();
        ctx.strokeStyle='blue';
        // alert(y+10*yIntersection/k);
        ctx.moveTo(x+10*xIntersection/k,0);
        ctx.lineTo(x+10*xIntersection/k,canvas.height);
        ctx.stroke();
        // chng.innerHTML="Scale: 1 box = "+k+" units.";
        // return;
    }
    else{
        // alert('third');
        var xIntersection=(-1*c)/a, yIntersection=(-1*c)/b;
        // alert(xIntersection);
        var z1=xIntersection, z2=yIntersection;
        if(z1<0)z1*=-1;
        if(z2<0)z2*=-1;
        var w1=parseInt((canvas.width/2-10)*0.1);
        // alert(w);
        var k1=(parseInt((z1+w1-1)/w1));
        // if()
        var w2=parseInt((canvas.height/2-10)*0.1);
        // alert(w);
        var k2=(parseInt((z2+w2-1)/w2));
        k=k1>k2?k1:k2;
        ctx.beginPath();
        ctx.strokeStyle='blue';
        // alert(y+10*yIntersection/k);
        // alert(xIntersection);
        // alert(a); alert(b); alert(c);
        // alert(x);
        // alert(y);
        
        if(k==0){k=1;}
        ctx.moveTo(x-10000*k*(10/k),y-((10000*k*a-c)/b)*(10/k));
        ctx.lineTo(x+10000*k*(10/k),y+((10000*k*a+c)/b)*(10/k));
        ctx.stroke();
        // chng.innerHTML="Scale: 1 box = "+k+" units.";
        // return;
    }
    var result=document.getElementsByClassName("res");
    document.getElementsByClassName("row")[3].style.marginBottom="10px";
    result[3].innerHTML="Scale: 1 box = "+k+" units.";
    result[3].style.backgroundColor="rgba(0,0,0,0.1)";
    result[3].style.color="black";
    result[3].style.display="block";
    result[4].style.display="block";
}
function trigFunction(){
    var converter=[1,180.0/Math.PI,0.9,1.0/60.0,1.0/3600.0];
    var undefinedForTan=[90,Math.PI/2,100,5400,32400];
    var undefinedForCot=[180,Math.PI,200,10800,64800];
    var inputs=document.getElementsByClassName("inp");
    var result=document.getElementsByClassName("res");
    var angle=inputs[0].value, unit=inputs[1].value, operator=inputs[2].value;
    if(angle.length==0 || unit.length==0 || operator.length==0){
        alert("Please fill in the required fields!");
        return;
    }
    var angleValue=parseFloat(angle);
    if(operator==3){
        if(angleValue%undefinedForTan[parseInt(unit)-1]==0 && angleValue%undefinedForCot[parseInt(unit)-1]!=0){
            alert("tan is not defined for this value of angle!");
            return;
        }
    }
    if(operator==4){
        if(angleValue%undefinedForCot[parseInt(unit)-1]==0){
            alert("cot is not defined for this value of angle!");
            return;
        }
    }
    if(operator==5){
        if(angleValue%undefinedForTan[parseInt(unit)-1]==0 && angleValue%undefinedForCot[parseInt(unit)-1]!=0){
            alert("sec is not defined for this value of angle!");
            return;
        }
    }
    if(operator==6){
        if(angleValue%undefinedForCot[parseInt(unit)-1]==0){
            alert("cosec is not defined for this value of angle!");
            return;
        }
    }
    var answer;
    var values;
    var rem=angleValue%360;
    if(rem==0){
        values=[0,1,0,1/0,1,1/0];
    }
    else if(rem==30){
        values=[0.5,Math.cos(Math.PI/6.0),Math.tan(Math.PI/6.0),1/Math.tan(Math.PI/6.0),1/Math.cos(Math.PI/6.0),2];
    }
    else if(rem==45){
            
    }
    else if(rem==180){
        values=[0,-1,0,1/0,-1,1/0];
    }
    else{
        angleValue*=converter[parseInt(unit)-1];
        angleValue*=(Math.PI/180.0);
        values=[Math.sin(angleValue),Math.cos(angleValue),Math.tan(angleValue),1.0/Math.tan(angleValue),1.0/Math.cos(angleValue),1.0/Math.sin(angleValue)];
    }
    answer=values[parseInt(operator)-1];
    document.getElementsByClassName("row")[0].style.marginBottom="10px";
    result[0].innerHTML="Result is: "+answer;
    result[0].style.backgroundColor="rgba(0,0,0,0.1)";
    result[0].style.color="black";
    result[0].style.display="block";        
}