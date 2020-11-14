/*
(function(){
   
var main = document.querySelector("#main");
console.log(main);

var newDiv = document.querySelectorAll("p");
console.log(newDiv);
// newDiv.innerHTML = "<h1>new div</h1>";
})();
*/

// var ps = document.querySelectorAll("p");
// ps[0].innerHTML = 'nowa wartosc 111';

// funkcja samoodpalajaca :) 
(function(){

    var tooltip = null;

    function createTooltip(title, options){
        var div = document.createElement("div");
        div.textContent = title;
        div.className = "tooltip";
        document.body.appendChild(div);

        
        div.style.left = (options.x + options.w / 2 - div.offsetWidth / 2 ) + "px";
        div.style.top = (options.y - div.offsetHeight - 10) + "px";

        tooltip = div;
    }

    function showTooltip(e){
        var title = e.target.getAttribute("title");
        
        createTooltip(title, {
            w: e.target.offsetWidth,
            x: e.target.offsetLeft                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ,
            y: e.target.offsetTop
        });
    }

    function removeTooltip(e){
        e.target.setAttribute("title", tooltip.textContent);
        tooltip.parentNode.removeChild(tooltip);
    }
    
    var title = document.querySelectorAll("[title]");

    for(var i = 0; i < title.length; i++){
        console.log(i);
        console.log(title[i]);
        title[i].addEventListener("mouseenter", showTooltip, false);
        title[i].addEventListener("mouseleave", removeTooltip, false);
    }
})();
