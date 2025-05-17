var points = 0;
var pointGrowth = 1;
var lastUpdate = Date.now()


function format(amount) {
  let power = Math.floor(Math.log10(amount))
  let mantissa = amount / Math.pow(10, power)
  if (power < 3) return amount.toFixed(2)
  return mantissa.toFixed(2) + "e" + power
}

function TestBoost() {
  pointGrowth *= 2
  pointGrowth **= 2
}

function updateGUI() {
  document.getElementById("points").textContent = format(points);
  document.getElementById("pointGrowth").textContent = 'You gain ' + format(pointGrowth) + ' points per second.';
}

function productionLoop(diff) {
  points += pointGrowth * diff
}

function mainLoop() {
  var diff = (Date.now() - lastUpdate) / 1000

  productionLoop(diff)
  updateGUI()

  lastUpdate = Date.now()
}

setInterval(mainLoop, 50)