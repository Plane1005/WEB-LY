document.getElementById("pp").innerHTML = "789";

function p1() {
    document.getElementById("p1").style.color = "red";
    alert(1);
}

function p2() {
    var d = new Date();
    document.getElementById("h1").innerHTML = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDay();
    alert(2);
}

function p3() {
    document.getElementById("p3").className = "fn-active";
    alert(3);
}

function p4() {
    var parent = document.getElementById("p4").parentElement;
    var child = document.getElementById("p8");
    parent.removeChild(child);
    alert(4);
}

function p5() {
    window.open("https://www.taobao.com/");
    alert(5);
}

function p6() {
    var para = document.createElement("li");
    var node = document.createTextNode("p9");
    para.appendChild(node);
    var ele = document.getElementById("p6").parentNode;
    ele.appendChild(para);
    alert(6);
}

function p7() {
    var node = document.getElementById("di");
    node.style.width = screen.availWidth;
    alert(7);
}

function p8() {
    alert(8);
}