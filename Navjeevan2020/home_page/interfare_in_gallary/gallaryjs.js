var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var box0 = document.getElementById("box0");
var box11 = document.getElementById("box11");
var box12 = document.getElementById("box12");
var wrapper = document.getElementById("wrapper")
    /* buttons as variables */
var btn1 = document.getElementById("btnforshow1");
var btn2 = document.getElementById("btnforshow2");
var btn3 = document.getElementById("btnforshow3");
var btn4 = document.getElementById("btnforshow4");
var btn5 = document.getElementById("btnforshow5");
var btn6 = document.getElementById("btnforshow6");
var btn7 = document.getElementById("btnforshow7");
var btn8 = document.getElementById("btnforshow8");
var btn9 = document.getElementById("btnforshow9");
var btn0 = document.getElementById("btnforshow0");
var btn11 = document.getElementById("btnforshow11");
var btn12 = document.getElementById("btnforshow12");

function showmore1() {
    box2.style.display = "block";
    btn1.style.display = "none";
    btn2.style.display = "block";
    wrapper.style.height = "2300px";
}

function showmore2() {
    box3.style.display = "block";
    btn2.style.display = "none";
    btn3.style.display = "block";
    wrapper.style.height = "3400px";
}

function showmore3() {
    box4.style.display = "block";
    btn3.style.display = "none";
    btn4.style.display = "block";
    wrapper.style.height = "4500px";

}

function showmore4() {
    box5.style.display = "block";
    btn4.style.display = "none";
    btn5.style.display = "block";
    wrapper.style.height = "5600px";

}

function showmore5() {
    box6.style.display = "block";
    btn5.style.display = "none";
    wrapper.style.height = "6700px";
    btn6.style.display = "block";
}

function showmore6() {
    box7.style.display = "block";
    btn6.style.display = "none";
    wrapper.style.height = "7800px";
    btn7.style.display = "block";
}

function showmore7() {
    box8.style.display = "block";
    btn7.style.display = "none";
    wrapper.style.height = "8900px";
    btn8.style.display = "block";
}

function showmore8() {
    box9.style.display = "block";
    btn8.style.display = "none";
    wrapper.style.height = "10000px";
    btn9.style.display = "block";
}

function showmore9() {
    box0.style.display = "block";
    btn9.style.display = "none";
    wrapper.style.height = "11100px";
    btn0.style.display = "block";
}

function showmore0() {
    box11.style.display = "block";
    btn0.style.display = "none"
    wrapper.style.height = "12200px";
    btn11.style.display = "block";
}

function showmore11() {
    box12.style.display = "block";
    btn11.style.display = "none";
    wrapper.style.height = "13300px";
}
/*function showmore12(){
    box5.style.display = "block4;
    btn4.style.display = "none";
    wrapper.style.height = "4600px";
}*/
var windowsizeA = window.matchMedia("(max-width:1150px)");
if (windowsizeA.matches) {
    btn1.style.backgroundColor = "green";
    btn1.style.marginLeft = "320px";
    btn1.style.marginTop = "18px";
    btn1.style.fontSize = "30px";

    btn2.style.backgroundColor = "green";
    btn2.style.marginLeft = "320px";
    btn2.style.marginTop = "18px";
    btn2.style.fontSize = "30px";

    btn3.style.backgroundColor = "green";
    btn3.style.marginLeft = "320px";
    btn3.style.marginTop = "18px";
    btn3.style.fontSize = "30px";

    btn4.style.backgroundColor = "green";
    btn4.style.marginLeft = "320px";
    btn4.style.marginTop = "18px";
    btn4.style.fontSize = "30px";

    btn5.style.backgroundColor = "green";
    btn5.style.marginLeft = "320px";
    btn5.style.marginTop = "18px";
    btn5.style.fontSize = "30px";

    btn6.style.backgroundColor = "green";
    btn6.style.marginLeft = "320px";
    btn6.style.marginTop = "18px";
    btn6.style.fontSize = "30px";

    btn7.style.backgroundColor = "green";
    btn7.style.marginLeft = "320px";
    btn7.style.marginTop = "18px";
    btn7.style.fontSize = "30px";

    btn8.style.backgroundColor = "green";
    btn8.style.marginLeft = "320px";
    btn8.style.marginTop = "18px";
    btn8.style.fontSize = "30px";

    btn9.style.backgroundColor = "green";
    btn9.style.marginLeft = "320px";
    btn9.style.marginTop = "18px";
    btn9.style.fontSize = "30px";

    btn0.style.backgroundColor = "green";
    btn0.style.marginLeft = "320px";
    btn0.style.marginTop = "18px";
    btn0.style.fontSize = "30px";

    btn11.style.backgroundColor = "green";
    btn11.style.marginLeft = "320px";
    btn11.style.marginTop = "18px";
    btn11.style.fontSize = "30px";

    btn12.style.backgroundColor = "green";
    btn12.style.marginLeft = "320px";
    btn12.style.marginTop = "18px";
    btn12.style.fontSize = "30px";

    /*responsiveness of function */
    function showmore1() {
        box2.style.display = "block";
        btn1.style.display = "none";
        btn2.style.display = "block";
        wrapper.style.height = "2940px";
    }

    function showmore2() {
        box3.style.display = "block";
        btn2.style.display = "none";
        btn3.style.display = "block";
        wrapper.style.height = "4400px";
    }

    function showmore3() {
        box4.style.display = "block";
        btn3.style.display = "none";
        btn4.style.display = "block";
        wrapper.style.height = "5840px";

    }

    function showmore4() {
        box5.style.display = "block";
        btn4.style.display = "none";
        btn5.style.display = "block";
        wrapper.style.height = "7270px";

    }

    function showmore5() {
        box6.style.display = "block";
        btn5.style.display = "none";
        wrapper.style.height = "8710px";
        btn6.style.display = "block";
    }

    function showmore6() {
        box7.style.display = "block";
        btn6.style.display = "none";
        wrapper.style.height = "10150px";
        btn7.style.display = "block";
    }

    function showmore7() {
        box8.style.display = "block";
        btn7.style.display = "none";
        wrapper.style.height = "11600px";
        btn8.style.display = "block";
    }

    function showmore8() {
        box9.style.display = "block";
        btn8.style.display = "none";
        wrapper.style.height = "13050px";
        btn9.style.display = "block";
    }

    function showmore9() {
        box0.style.display = "block";
        btn9.style.display = "none";
        wrapper.style.height = "14500px";
        btn0.style.display = "block";
    }

    function showmore0() {
        box11.style.display = "block";
        btn0.style.display = "none"
        wrapper.style.height = "15910px";
        btn11.style.display = "block";
    }

    function showmore11() {
        box12.style.display = "bloc3";
        btn11.style.display = "none";
        wrapper.style.height = "15900px";
    }
}

/*for mobile */
var windowsizeB = window.matchMedia("(max-width:360px)");
if (windowsizeB.matches) {
    btn1.style.backgroundColor = "transparent";
    btn1.style.marginLeft = "80px";
    btn1.style.marginTop = "18px";
    btn1.style.fontSize = "16px";

    btn2.style.backgroundColor = "transparent";
    btn2.style.marginLeft = "80px";
    btn2.style.marginTop = "18px";
    btn2.style.fontSize = "16px";

    btn3.style.backgroundColor = "transparent";
    btn3.style.marginLeft = "80px";
    btn3.style.marginTop = "18px";
    btn3.style.fontSize = "16px";

    btn4.style.backgroundColor = "transparent";
    btn4.style.marginLeft = "80px";
    btn4.style.marginTop = "18px";
    btn4.style.fontSize = "16px";

    btn5.style.backgroundColor = "transparent";
    btn5.style.marginLeft = "80px";
    btn5.style.marginTop = "18px";
    btn5.style.fontSize = "16px";

    btn6.style.backgroundColor = "transparent";
    btn6.style.marginLeft = "80px";
    btn6.style.marginTop = "18px";
    btn6.style.fontSize = "16px";

    btn7.style.backgroundColor = "transparent";
    btn7.style.marginLeft = "80px";
    btn7.style.marginTop = "18px";
    btn7.style.fontSize = "16px";

    btn8.style.backgroundColor = "transparent";
    btn8.style.marginLeft = "80px";
    btn8.style.marginTop = "18px";
    btn8.style.fontSize = "16px";

    btn9.style.backgroundColor = "transparent";
    btn9.style.marginLeft = "80px";
    btn9.style.marginTop = "18px";
    btn9.style.fontSize = "16px";

    btn0.style.backgroundColor = "transparent";
    btn0.style.marginLeft = "80px";
    btn0.style.marginTop = "18px";
    btn0.style.fontSize = "16px";

    btn11.style.backgroundColor = "transparent";
    btn11.style.marginLeft = "80px";
    btn11.style.marginTop = "18px";
    btn11.style.fontSize = "16px";

    btn12.style.backgroundColor = "transparent";
    btn12.style.marginLeft = "80px";
    btn12.style.marginTop = "18px";
    btn12.style.fontSize = "16px";



    /*responsiveness of function */
    function showmore1() {
        box2.style.display = "block";
        btn1.style.display = "none";
        btn2.style.display = "block";
        wrapper.style.height = "1860px";
    }

    function showmore2() {
        box3.style.display = "block";
        btn2.style.display = "none";
        btn3.style.display = "block";
        wrapper.style.height = "2760px";
    }

    function showmore3() {
        box4.style.display = "block";
        btn3.style.display = "none";
        btn4.style.display = "block";
        wrapper.style.height = "3670px";

    }

    function showmore4() {
        box5.style.display = "block";
        btn4.style.display = "none";
        btn5.style.display = "block";
        wrapper.style.height = "4580px";

    }

    function showmore5() {
        box6.style.display = "block";
        btn5.style.display = "none";
        wrapper.style.height = "5480px";
        btn6.style.display = "block";
    }

    function showmore6() {
        box7.style.display = "block";
        btn6.style.display = "none";
        wrapper.style.height = "6380px";
        btn7.style.display = "block";
    }

    function showmore7() {
        box8.style.display = "block";
        btn7.style.display = "none";
        wrapper.style.height = "7300px";
        btn8.style.display = "block";
    }

    function showmore8() {
        box9.style.display = "block";
        btn8.style.display = "none";
        wrapper.style.height = "8200px";
        btn9.style.display = "block";
    }

    function showmore9() {
        box0.style.display = "block";
        btn9.style.display = "none";
        wrapper.style.height = "9100px";
        btn0.style.display = "block";
    }

    function showmore0() {
        box11.style.display = "block";
        btn0.style.display = "none"
        wrapper.style.height = "10000px";
        btn11.style.display = "block";
    }

    function showmore11() {
        box12.style.display = "block";
        btn11.style.display = "none";
        wrapper.style.height = "10900px";
    }
}
/* */
var pictures = [
    "schoolpictures/0.jpg",
    "schoolpictures/1.jpg",
    "schoolpictures/2.jpg",
    "schoolpictures/3.jpg",
    "schoolpictures/4.jpg",
    "schoolpictures/5.jpg",
    "schoolpictures/6.jpg",
    "schoolpictures/7.jpg",
    "schoolpictures/8.jpg",
    "schoolpictures/9.jpg",
    "schoolpictures/10.jpg",
    "schoolpictures/11.jpg",
    "schoolpictures/12.jpg",
    "schoolpictures/13.jpg",
    "schoolpictures/14.jpg",
    "schoolpictures/15.jpg",
    "schoolpictures/16.jpg",
    "schoolpictures/17.jpg",
    "schoolpictures/18.jpg",
    "schoolpictures/19.jpg",
    "schoolpictures/20.jpg",
    "schoolpictures/21.jpg",
    "schoolpictures/22.jpg",
    "schoolpictures/23.jpg",
    "schoolpictures/24.jpg",
    "schoolpictures/25.jpg",
    "schoolpictures/26.jpg",
    "schoolpictures/27.jpg",
    "schoolpictures/28.jpg",
    "schoolpictures/29.jpg",
    "schoolpictures/30.jpg",
    "schoolpictures/31.jpg",
    "schoolpictures/32.jpg",
    "schoolpictures/33.jpg",
    "schoolpictures/34.jpg",
    "schoolpictures/35.jpg",
    "schoolpictures/36.jpg",
    "schoolpictures/37.jpg",
    "schoolpictures/38.jpg",
    "schoolpictures/39.jpg",
    "schoolpictures/40.jpg",
    "schoolpictures/41.jpg",
    "schoolpictures/42.jpg",
    "schoolpictures/43.jpg",
    "schoolpictures/44.jpg",
    "schoolpictures/45.jpg",
    "schoolpictures/46.jpg",
    "schoolpictures/47.jpg",
    "schoolpictures/48.jpg",
    "schoolpictures/49.jpg",
    "schoolpictures/50.jpg",
    "schoolpictures/51.jpg",
    "schoolpictures/52.jpg",
    "schoolpictures/53.jpg",
    "schoolpictures/54.jpg",
    "schoolpictures/55.jpg",
    "schoolpictures/56.jpg",
    "schoolpictures/57.jpg",
    "schoolpictures/58.jpg",
    "schoolpictures/59.jpg",
    "schoolpictures/60.jpg",
    "schoolpictures/61.jpg",
    "schoolpictures/62.jpg",
    "schoolpictures/63.jpg",
    "schoolpictures/64.jpg",
    "schoolpictures/65.jpg",
    "schoolpictures/66.jpg",
    "schoolpictures/67.jpg",
    "schoolpictures/68.jpg",
    "schoolpictures/69.jpg",
    "schoolpictures/70.jpg",
    "schoolpictures/71.jpg",
    "schoolpictures/72.jpg",
    "schoolpictures/73.jpg",
    "schoolpictures/74.jpg",
    "schoolpictures/75.jpg",
    "schoolpictures/76.jpg",
    "schoolpictures/77.jpg",
    "schoolpictures/78.jpg",
    "schoolpictures/79.jpg",
    "schoolpictures/80.jpg",
    "schoolpictures/81.jpg",
    "schoolpictures/82.jpg",
    "schoolpictures/83.jpg",
    "schoolpictures/84.jpg",
    "schoolpictures/85.jpg",
    "schoolpictures/86.jpg",
    "schoolpictures/87.jpg",
    "schoolpictures/88.jpg",
    "schoolpictures/89.jpg",
    "schoolpictures/90.jpg",
    "schoolpictures/91.jpg",
    "schoolpictures/92.jpg",
    "schoolpictures/93.jpg",
    "schoolpictures/94.jpg",
    "schoolpictures/95.jpg",
    "schoolpictures/96.jpg",
    "schoolpictures/97.jpg",
    "schoolpictures/98.jpg",
    "schoolpictures/99.jpg",
    "schoolpictures/100.jpg",
    "schoolpictures/101.jpg",
    "schoolpictures/102.jpg",
    "schoolpictures/103.jpg",
    "schoolpictures/104.jpg",
    "schoolpictures/105.jpg",
    "schoolpictures/106.jpg",
    "schoolpictures/107.jpg",
    "schoolpictures/108.jpg",
    "schoolpictures/109.jpg",
    "schoolpictures/110.jpg",
    "schoolpictures/111.jpg",
    "schoolpictures/112.jpg",
    "schoolpictures/113.jpg",
    "schoolpictures/114.jpg",
    "schoolpictures/115.jpg",
    "schoolpictures/116.jpg",
    "schoolpictures/117.jpg",
    "schoolpictures/118.jpg",
    "schoolpictures/119.jpg",
    "schoolpictures/120.jpg",
    "schoolpictures/121.jpg",
    "schoolpictures/122.jpg",
    "schoolpictures/123.jpg",
    "schoolpictures/124.jpg",
    "schoolpictures/125.jpg",
    "schoolpictures/126.jpg",
    "schoolpictures/127.jpg",
    "schoolpictures/128.jpg",
    "schoolpictures/129.jpg",
    "schoolpictures/130.jpg",
    "schoolpictures/131.jpg",
    "schoolpictures/132.jpg",
    "schoolpictures/133.jpg",
    "schoolpictures/134.jpg",
    "schoolpictures/135.jpg",
    "schoolpictures/136.jpg",
    "schoolpictures/137.jpg",
    "schoolpictures/138.jpg",
    "schoolpictures/139.jpg",
    "schoolpictures/140.jpg",
    "schoolpictures/141.jpg",
    "schoolpictures/142.jpg",
    "schoolpictures/143.jpg",
    "schoolpictures/144.jpg",
    "schoolpictures/145.jpg",
    "schoolpictures/146.jpg",
    "schoolpictures/147.jpg",
    "schoolpictures/148.jpg",
    "schoolpictures/149.jpg",
    "schoolpictures/150.jpg",
    "schoolpictures/151.jpg",
    "schoolpictures/152.jpg",
    "schoolpictures/153.jpg",
    "schoolpictures/154.jpg",
    "schoolpictures/155.jpg",
    "schoolpictures/156.jpg",
    "schoolpictures/157.jpg",
    "schoolpictures/158.jpg",
    "schoolpictures/159.jpg",
    "schoolpictures/160.jpg",
    "schoolpictures/161.jpg",
    "schoolpictures/162.jpg",
    "schoolpictures/163.jpg",
    "schoolpictures/164.jpg",
    "schoolpictures/165.jpg",
    "schoolpictures/166.jpg",
    "schoolpictures/167.jpg",
    "schoolpictures/168.jpg",
    "schoolpictures/169.jpg",
    "schoolpictures/170.jpg",
    "schoolpictures/171.jpg",
    "schoolpictures/172.jpg",
    "schoolpictures/173.jpg",
    "schoolpictures/174.jpg",
    "schoolpictures/175.jpg",
    "schoolpictures/176.jpg",
    "schoolpictures/177.jpg",
    "schoolpictures/178.jpg",
    "schoolpictures/179.jpg",
    "schoolpictures/180.jpg",
    "schoolpictures/181.jpg",
    "schoolpictures/182.jpg",
    "schoolpictures/183.jpg",
    "schoolpictures/184.jpg",
    "schoolpictures/185.jpg",
    "schoolpictures/186.jpg",
    "schoolpictures/187.jpg",
    "schoolpictures/188.jpg",
    "schoolpictures/189.jpg",
    "schoolpictures/190.jpg",
    "schoolpictures/191.jpg",
    "schoolpictures/192.jpg",
    "schoolpictures/193.jpg",
    "schoolpictures/194.jpg",
    "schoolpictures/195.jpg",
    "schoolpictures/196.jpg",
    "schoolpictures/197.jpg",
    "schoolpictures/198.jpg",
    "schoolpictures/199.jpg",
    "schoolpictures/200.jpg",
    "schoolpictures/201.jpg",
    "schoolpictures/202.jpg",
    "schoolpictures/203.jpg"

];
var img = document.getElementById("img");
var indexnum = 0;

function nextpic() {
    img.setAttribute("src", pictures[indexnum]);
    indexnum++;
    if (indexnum > 22) {
        indexnum = 0;
        console.log("clicked");
    }
}

function backpic() {
    img.setAttribute("src", pictures[indexnum]);
    indexnum--;
    if (indexnum < 0) {
        indexnum = 22;
        console.log("clicked");
    }
}
/*close button for popup screen */

/* for onclick event in javascript for pictures*/
var body = document.getElementById("body");
var imgscreen = document.getElementById("imgbox")
var gbox = document.getElementById("gallarybox");


function closebtn() {
    imgscreen.style.display = "none";
    imgscreen.style.opacity = "0";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "flex";
    gbox.style.transition = "display 0.5s";
}

function errremover() {
    gbox.style.opacity = "1";
    gbox.style.transition = "opacity 0.5s";
}

function a1img() {
    img.setAttribute("src", pictures[0]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a2img() {
    img.setAttribute("src", pictures[1]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a3img() {
    img.setAttribute("src", pictures[2]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a4img() {
    img.setAttribute("src", pictures[3]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a5img() {
    img.setAttribute("src", pictures[4]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a6img() {
    img.setAttribute("src", pictures[5]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a7img() {
    img.setAttribute("src", pictures[6]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a8img() {
    img.setAttribute("src", pictures[7]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a9img() {
    img.setAttribute("src", pictures[8]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a10img() {
    img.setAttribute("src", pictures[9]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a11img() {
    img.setAttribute("src", pictures[10]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a12img() {
    img.setAttribute("src", pictures[11]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a13img() {
    img.setAttribute("src", pictures[12]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a14img() {
    img.setAttribute("src", pictures[13]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a15img() {
    img.setAttribute("src", pictures[14]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a16img() {
    img.setAttribute("src", pictures[15]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a17img() {
    img.setAttribute("src", pictures[16]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a18img() {
    img.setAttribute("src", pictures[17]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a19img() {
    img.setAttribute("src", pictures[18]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a20img() {
    img.setAttribute("src", pictures[19]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
}
imgscreen.style.transition = "display 0.5s";
gbox.style.opacity = "0";
gbox.style.transition = "opacity 0.5s";

function a21img() {
    img.setAttribute("src", pictures[20]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
}
imgscreen.style.transition = "display 0.5s";
gbox.style.opacity = "0";
gbox.style.transition = "opacity 0.5s";

function a22img() {
    img.setAttribute("src", pictures[21]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a23img() {
    img.setAttribute("src", pictures[22]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a24img() {
    img.setAttribute("src", pictures[23]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a25img() {
    img.setAttribute("src", pictures[24]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a26img() {
    img.setAttribute("src", pictures[25]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a27img() {
    img.setAttribute("src", pictures[26]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a28img() {
    img.setAttribute("src", pictures[27]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a29img() {
    img.setAttribute("src", pictures[28]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a30img() {
    img.setAttribute("src", pictures[29]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a31img() {
    img.setAttribute("src", pictures[30]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a32img() {
    img.setAttribute("src", pictures[31]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a33img() {
    img.setAttribute("src", pictures[32]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a34img() {
    img.setAttribute("src", pictures[33]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a35img() {
    img.setAttribute("src", pictures[34]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a36img() {
    img.setAttribute("src", pictures[35]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a37img() {
    img.setAttribute("src", pictures[36]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a38img() {
    img.setAttribute("src", pictures[37]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a39img() {
    img.setAttribute("src", pictures[38]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a40img() {
    img.setAttribute("src", pictures[39]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a41img() {
    img.setAttribute("src", pictures[40]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a42img() {
    img.setAttribute("src", pictures[41]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a43img() {
    img.setAttribute("src", pictures[42]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a44img() {
    img.setAttribute("src", pictures[43]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a45img() {
    img.setAttribute("src", pictures[44]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a46img() {
    img.setAttribute("src", pictures[45]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a47img() {
    img.setAttribute("src", pictures[46]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a48img() {
    img.setAttribute("src", pictures[47]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a49img() {
    img.setAttribute("src", pictures[48]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a50img() {
    img.setAttribute("src", pictures[49]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a51img() {
    img.setAttribute("src", pictures[50]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a52img() {
    img.setAttribute("src", pictures[51]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a53img() {
    img.setAttribute("src", pictures[52]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a54img() {
    img.setAttribute("src", pictures[53]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a55img() {
    img.setAttribute("src", pictures[54]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a56img() {
    img.setAttribute("src", pictures[55]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a57img() {
    img.setAttribute("src", pictures[56]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a58img() {
    img.setAttribute("src", pictures[57]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a59img() {
    img.setAttribute("src", pictures[58]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a60img() {
    img.setAttribute("src", pictures[59]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a61img() {
    img.setAttribute("src", pictures[60]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a62img() {
    img.setAttribute("src", pictures[61]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a63img() {
    img.setAttribute("src", pictures[62]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a64img() {
    img.setAttribute("src", pictures[63]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a65img() {
    img.setAttribute("src", pictures[64]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a66img() {
    img.setAttribute("src", pictures[65]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a67img() {
    img.setAttribute("src", pictures[66]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a68img() {
    img.setAttribute("src", pictures[67]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a69img() {
    img.setAttribute("src", pictures[68]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a70img() {
    img.setAttribute("src", pictures[69]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a71img() {
    img.setAttribute("src", pictures[70]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a72img() {
    img.setAttribute("src", pictures[71]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a73img() {
    img.setAttribute("src", pictures[72]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a74img() {
    img.setAttribute("src", pictures[73]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a75img() {
    img.setAttribute("src", pictures[74]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a76img() {
    img.setAttribute("src", pictures[75]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a77img() {
    img.setAttribute("src", pictures[76]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a78img() {
    img.setAttribute("src", pictures[77]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a79img() {
    img.setAttribute("src", pictures[78]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a80img() {
    img.setAttribute("src", pictures[79]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a81img() {
    img.setAttribute("src", pictures[80]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a82img() {
    img.setAttribute("src", pictures[81]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a83img() {
    img.setAttribute("src", pictures[82]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a84img() {
    img.setAttribute("src", pictures[83]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a85img() {
    img.setAttribute("src", pictures[84]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a86img() {
    img.setAttribute("src", pictures[85]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a87img() {
    img.setAttribute("src", pictures[86]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a88img() {
    img.setAttribute("src", pictures[87]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a89img() {
    img.setAttribute("src", pictures[88]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a90img() {
    img.setAttribute("src", pictures[89]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a91img() {
    img.setAttribute("src", pictures[90]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a92img() {
    img.setAttribute("src", pictures[91]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a93img() {
    img.setAttribute("src", pictures[92]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a94img() {
    img.setAttribute("src", pictures[93]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a95img() {
    img.setAttribute("src", pictures[94]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a96img() {
    img.setAttribute("src", pictures[95]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a97img() {
    img.setAttribute("src", pictures[96]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a98img() {
    img.setAttribute("src", pictures[97]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a99img() {
    img.setAttribute("src", pictures[98]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a100img() {
    img.setAttribute("src", pictures[99]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a101img() {
    img.setAttribute("src", pictures[100]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a102img() {
    img.setAttribute("src", pictures[101]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a103img() {
    img.setAttribute("src", pictures[102]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a104img() {
    img.setAttribute("src", pictures[103]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a105img() {
    img.setAttribute("src", pictures[104]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a106img() {
    img.setAttribute("src", pictures[105]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a107img() {
    img.setAttribute("src", pictures[106]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a108img() {
    img.setAttribute("src", pictures[107]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a109img() {
    img.setAttribute("src", pictures[108]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a110img() {
    img.setAttribute("src", pictures[109]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a111img() {
    img.setAttribute("src", pictures[110]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a112img() {
    img.setAttribute("src", pictures[111]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a113img() {
    img.setAttribute("src", pictures[112]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a114img() {
    img.setAttribute("src", pictures[113]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a115img() {
    img.setAttribute("src", pictures[114]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a116img() {
    img.setAttribute("src", pictures[115]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a117img() {
    img.setAttribute("src", pictures[116]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a118img() {
    img.setAttribute("src", pictures[117]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a119img() {
    img.setAttribute("src", pictures[118]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a120img() {
    img.setAttribute("src", pictures[119]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a121img() {
    img.setAttribute("src", pictures[120]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a122img() {
    img.setAttribute("src", pictures[121]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a123img() {
    img.setAttribute("src", pictures[122]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a124img() {
    img.setAttribute("src", pictures[123]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a125img() {
    img.setAttribute("src", pictures[124]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a126img() {
    img.setAttribute("src", pictures[125]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a127img() {
    img.setAttribute("src", pictures[126]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a128img() {
    img.setAttribute("src", pictures[127]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a129img() {
    img.setAttribute("src", pictures[128]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a130img() {
    img.setAttribute("src", pictures[129]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a131img() {
    img.setAttribute("src", pictures[130]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a132img() {
    img.setAttribute("src", pictures[131]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a133img() {
    img.setAttribute("src", pictures[132]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a134img() {
    img.setAttribute("src", pictures[133]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a135img() {
    img.setAttribute("src", pictures[134]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a136img() {
    img.setAttribute("src", pictures[135]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a137img() {
    img.setAttribute("src", pictures[136]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a138img() {
    img.setAttribute("src", pictures[137]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a139img() {
    img.setAttribute("src", pictures[138]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a140img() {
    img.setAttribute("src", picture0s[139]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a141img() {
    img.setAttribute("src", pictures[140]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a142img() {
    img.setAttribute("src", pictures[141]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a143img() {
    img.setAttribute("src", pictures[142]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a144img() {
    img.setAttribute("src", pictures[143]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a145img() {
    img.setAttribute("src", pictures[144]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a146img() {
    img.setAttribute("src", pictures[145]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a147img() {
    img.setAttribute("src", pictures[146]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a148img() {
    img.setAttribute("src", pictures[147]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a149img() {
    img.setAttribute("src", pictures[148]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a150img() {
    img.setAttribute("src", pictures[149]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a151img() {
    img.setAttribute("src", pictures[150]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a152img() {
    img.setAttribute("src", pictures[151]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a153img() {
    img.setAttribute("src", pictures[152]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a154img() {
    img.setAttribute("src", pictures[153]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a155img() {
    img.setAttribute("src", pictures[154]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a156img() {
    img.setAttribute("src", pictures[155]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a157img() {
    img.setAttribute("src", pictures[156]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a158img() {
    img.setAttribute("src", pictures[157]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a159img() {
    img.setAttribute("src", pictures[158]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a160img() {
    img.setAttribute("src", pictures[159]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a161img() {
    img.setAttribute("src", pictures[160]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a162img() {
    img.setAttribute("src", pictures[161]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a163img() {
    img.setAttribute("src", pictures[162]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a164img() {
    img.setAttribute("src", pictures[163]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a165img() {
    img.setAttribute("src", pictures[164]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a166img() {
    img.setAttribute("src", pictures[165]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a167img() {
    img.setAttribute("src", pictures[166]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a168img() {
    img.setAttribute("src", pictures[167]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a169img() {
    img.setAttribute("src", pictures[168]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a170img() {
    img.setAttribute("src", pictures[169]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a171img() {
    img.setAttribute("src", pictures[170]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a172img() {
    img.setAttribute("src", pictures[171]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a173img() {
    img.setAttribute("src", pictures[172]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a174img() {
    img.setAttribute("src", pictures[173]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a175img() {
    img.setAttribute("src", pictures[174]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a176img() {
    img.setAttribute("src", pictures[175]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a177img() {
    img.setAttribute("src", pictures[176]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a178img() {
    img.setAttribute("src", pictures[177]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a179img() {
    img.setAttribute("src", pictures[178]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a180img() {
    img.setAttribute("src", pictures[179]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a181img() {
    img.setAttribute("src", pictures[180]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a182img() {
    img.setAttribute("src", pictures[181]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a183img() {
    img.setAttribute("src", pictures[182]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a184img() {
    img.setAttribute("src", pictures[183]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a185img() {
    img.setAttribute("src", pictures[184]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a186img() {
    img.setAttribute("src", pictures[185]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a187img() {
    img.setAttribute("src", pictures[186]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a188img() {
    img.setAttribute("src", pictures[187]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a189img() {
    img.setAttribute("src", pictures[188]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a190img() {
    img.setAttribute("src", pictures[189]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a191img() {
    img.setAttribute("src", pictures[190]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a192img() {
    img.setAttribute("src", pictures[191]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a193img() {
    img.setAttribute("src", pictures[192]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a194img() {
    img.setAttribute("src", pictures[193]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a195img() {
    img.setAttribute("src", pictures[194]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a196img() {
    img.setAttribute("src", pictures[195]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a197img() {
    img.setAttribute("src", pictures[196]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a198img() {
    img.setAttribute("src", pictures[197]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a199img() {
    img.setAttribute("src", pictures[198]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a200img() {
    img.setAttribute("src", pictures[199]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a201img() {
    img.setAttribute("src", pictures[200]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a202img() {
    img.setAttribute("src", pictures[201]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}

function a203img() {
    img.setAttribute("src", pictures[202]);
    imgscreen.style.display = "block";
    imgscreen.style.opacity = "1";
    imgscreen.style.transition = "display 0.5s";
    gbox.style.display = "none";
    gbox.style.transition = "display 0.5s";
}