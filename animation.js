var c = document.getElementById("clear")
var box = document.getElementById("box")

var clear = function(e){
    box.innerHTML = null;
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

var rec = document.createElementNS("http://www.w3.org/2000/svg", "circle");
rec.setAttribute("x", "250" );
rec.setAttribute("y", "250" );
rec.setAttribute("width", "250" );
rec.setAttribute("height", "250" );
rec.setAttribute("stroke", "black" );

c.addEventListener("click", clear);
box.addEventListener("click", draw);
