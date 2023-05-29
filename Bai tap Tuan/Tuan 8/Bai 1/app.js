function drawRainbow() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 100;
    
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.strokeStyle = "red";
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(x + 20, y + 20, radius, 0, 2 * Math.PI, false);
    ctx.strokeStyle = "orange";
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(x + 40, y + 40, radius, 0, 2 * Math.PI, false);
    ctx.strokeStyle = "yellow";
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(x + 60, y + 60, radius, 0, 2 * Math.PI, false);
    ctx.strokeStyle = "green";
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(x + 80, y + 80, radius, 0, 2 * Math.PI, false);
    ctx.strokeStyle = "blue";
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(x + 100, y + 100, radius, 0, 2 * Math.PI, false);
    ctx.strokeStyle = "purple";
    ctx.stroke();
  }