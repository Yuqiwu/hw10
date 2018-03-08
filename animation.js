var c = document.getElementById("clear")
var box = document.getElementById("box")

var clear = function(e){
    box.innerHTML = null;
}

var newCircle = function(cx, cy){
    var c = {x: cx,
	     y: cy,
	     radius: "10",
	     color: "black",
	     svg: document.createElementNS("http://www.w3.org/2000/svg", "circle"),
	     display: function(){
		 this.svg.setAttribute("cx", cx.toString() );
		 this.svg.setAttribute("cy", cy.toString() );
		 this.svg.setAttribute("r", this.radius );
		 this.svg.setAttribute("fill", this.color );
		 box.appendChild(this.svg);
		 this.svg.addEventListener("click", this.remove);
	     },
	     remove: function(e){
		 if ( e.target.getAttribute("fill") == "black"){
		     e.target.setAttribute("fill", "red");
		     e.stopPropagation();
		 }
		 else{
		     box.removeChild(e.target);
		     e.stopPropagation();
		     randX = Math.floor( Math.random() * 500 );
		     randY = Math.floor( Math.random() * 500 );
		     newCircle(randX, randY);
		 }
	     }
	    }
    c.display();
    return c;   
}

var draw = function(e){
    newCircle(e.offsetX, e.offsetY);
}

c.addEventListener("click", clear);
box.addEventListener("click", draw);
