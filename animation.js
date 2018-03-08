var c = document.getElementById("clear")
var box = document.getElementById("box")

var clear = function(e){
    box.innerHTML = null;
}

var click = function(){
    if (color == "black"){
	this.color = "red";
    }
    else{
	remove();
    }
},

var newCircle = function(cx, cy){
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var c = {x: cx,
	     y: cy,
	     radius: "10",
	     color: "black",
	     svg = circle,
	     display = function(){
		 this.svg.setAttribute("cx", cx.toString() );
		 this.svg.setAttribute("cy", cy.toString() );
		 this.svg.setAttribute("r", "10" );
		 this.svg.setAttribute("fill", this.color );
		 box.appendChild(circle);
		 this.svg.addEventListener("click", click);
	     },
	     remove = function(){
		 
	     }
	    }
    return c;   
}

var second = function(e){
    if (this.getAttribute("fill") == "red"){
	this.setAttribute("fill", "blue");
	e.stopPropagation();
    }
    else{
	box.removeChild(this);
	e.stopPropagation();
	var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	x = Math.floor( Math.random() * 500 );
	y = Math.floor( Math.random() * 500 );
	circle.setAttribute("cx", x.toString() );
	circle.setAttribute("cy", y.toString() );
	circle.setAttribute("r", "10" );
	circle.setAttribute("fill", "red" );
	box.appendChild(circle);
	circle.addEventListener("click", second, true);
    }
}

var draw = function(e){
    x = e.offsetX;
    y = e.offsetY;
    
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x.toString() );
    circle.setAttribute("cy", y.toString() );
    circle.setAttribute("r", "10");
    circle.setAttribute("fill", "red");
    box.appendChild(circle);
    circle.addEventListener("click", second, true);
}

c.addEventListener("click", clear);
box.addEventListener("click", draw);
