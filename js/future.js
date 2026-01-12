var favColor = document.getElementById('favColor');
var favNum = document.getElementById('favNum');
var fda = document.getElementById('fda');
//var bcolor = favColor.options[favColor.selectedIndex].value;

function bgcolor() {
}

function removeSpace(word) {
    var space=0;
    var newWord ="";
    for (i=0;i<word.length;i++) {
        if (word[i]==" "){
            if (space==1){continue;}
            space=1;
        }
        else{space =0;}
        newWord += word[i];
    }
  //  document.write(newWord);
    return newWord;
}


function Func() {
    if (removeSpace(document.getElementById('name').value)=== " " || document.getElementById('name').value ==="") {
        alert("이름을 입력해 주세요!")
    }
    else if (favColor.options[favColor.selectedIndex].value === "선택") {
        alert("태어난 해을 선택해 주세요")
    }
    else if (favNum.options[favNum.selectedIndex].value=== "선택") {
        alert("태어난 월을 선택해 주세요")
    }
    else if (fda.options[fda.selectedIndex].value === "선택") {
        alert("태어난 일을 선택해 주세요")
    }
    
    else {
        func()
    }
}

function func() {
  var name= document.getElementById('name').value ;
  var bcolor = favColor.options[favColor.selectedIndex].value;
  var bnum = favNum.options[favNum.selectedIndex].value;
  var bda = fda.options[fda.selectedIndex].value;
  //name = removeSpace(name);
    
  document.body.style.backgroundColor = bcolor;
  
  document.getElementById("intro").style.color = bcolor;
  document.getElementById('main').style.display="none";
  document.getElementById('result').style.display="block";
    
  document.getElementById("intro").innerHTML= ""+ name + " _님의 미래는<br>"
  document.getElementById("resultImg d1").src = "https://u2dio.com/img/bg_future.jpg"
  document.getElementById("col").innerHTML = "" + "🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁<br><br>" + bnum + numbers[bnum] +"<br>" + bda + days[bda] + "<br><br>🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁<br>"; 
  document.getElementById('submit').style.display="none";


if (bcolor=="White") {
  document.getElementById("intro").style.color = "#888";
  document.getElementById("result").style.backgroundColor = "#eee";
 }
else if (bcolor=="Black") {
  document.getElementById("title").style.color = "#fff";
 }
} 

function detailed() {
var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
var d3 = document.getElementById("d3");
d1.style.display="block";
d2.style.display="block";
d3.style.display="block";

document.getElementById("details").style.display="none";
}


function clipBoard(Link) {
            // 글을 쓸 수 있는 란을 만든다.
            var aux = document.createElement("input");
            // 지정된 요소의 값을 할당 한다.
            aux.setAttribute("value", Link);
            // body에 추가.
            document.body.appendChild(aux);
            // 지정된 내용을 강조한다.
            aux.select();
            // 텍스트를 카피 하는 변수를 생성
            document.execCommand("copy");
            // body 로 부터 다시 반환 한다.
            document.body.removeChild(aux);
            //alert(aux.value);
            alert("주소가 복사되었으니 공유하세요!");
        }


function ShareKakaoTalk() {
    Kakao.Link.sendScrap({
        requestUrl: location.href
    });
};

// 사용할 앱의 JavaScript 키를 설정해 주세요.
Kakao.init('6c0e33825dc4add763233384f47cfbc0');
function shareKatalk() {
Kakao.Link.sendScrap({
requestUrl: location.href
});
};