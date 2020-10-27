var pictures = [
    "background/a.jpg",
    "background/b.jpg",
    "background/c.jpg",
    "background/d.jpg",
    "background/e.jpg",
    "background/img/0.jpg",
    "background/img/1.jpg",
    "background/img/2.jpg",
    "background/img/3.jpg",
    "background/img/4.jpg",
    "background/img/5.jpg",
    "background/img/6.jpg",
    "background/img/7.jpg",
    "background/img/8.jpg",
    "background/img/9.jpg",
    "background/img/11.jpg",
    "background/img/12.jpg",
    "background/img/13.jpg",
    "background/img/14.jpg",
    "background/img/15.jpg",
    "background/img/16.jpg",
    "background/img/17.jpg",
    "background/img/18.jpg",
    "background/img/19.jpg",
    ];
    var img = document.getElementById("img");
    var indexnum = 0;
    function nextpic(){
        img.setAttribute("src",pictures[indexnum]);
        indexnum++;
        if(indexnum > 22){
            indexnum = 0;
            console.log("clicked");
        }
    }
    function backpic(){
        img.setAttribute("src",pictures[indexnum]);
        indexnum--;
        if(indexnum < 0){
            indexnum = 22;
            console.log("clicked");
        }
    }