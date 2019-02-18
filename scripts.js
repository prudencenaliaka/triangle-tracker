function triangle() {
  var sideX=parseInt(document.getElementById("sideX").value);
  var sideY=parseInt(document.getElementById("sideY").value);
  var sideZ=parseInt(document.getElementById('sideZ').value);

  if ((sideX+sideY)<=sideZ && (sideZ+sideY)<=sideX && (sideX+sideZ)<=sideY) {
    alert("not a triangle");
  }
    else if (sideX===sideY &&sideY===sideZ &&sideZ===sideX)
     {
      alert("equilateral");
    }
    else if(sideX!=sideY && sideY!=sideZ && sideZ!=sideX)
    {
    alert("scalene");
    }
    else
     {
      alert("isosceles");
    }
    }
