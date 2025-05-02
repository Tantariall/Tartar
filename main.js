  let points = 0;
  let pointGrowth = 1;
  let ticks=24;
  myTimer = setInterval(endOfTurnCalc, 1000/ticks);
  function endOfTurnCalc() {
    points = points+pointGrowth/ticks;
    document.getElementById("point_amount_string").innerHTML = points.toFixed(2);
    document.getElementById("point_amount").innerHTML = points;
  }