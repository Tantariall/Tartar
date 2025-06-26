const D = x => new Decimal(x)
const sum = (a, b) => D(a).add(b)
const mult = (a, b) => D(a).times(b)
const minus = (a, b) => D(a).sub(b)
const divide = (a, b) => D(a).div(b)
const power = (a, b) => D(a).pow(b)
const log = (a, base) => D(a).logarithm(base)
const compare = (a, b) => D(a).cmp(b)
const max = (a, b) => Decimal.max(a, b)
const checkmax = id => compare(id.maximum, id.amount) /*Returns 1 if maximum > amount, 0 if maximum = amount*/


var offline = D(0)
var player = {
    accel: D(1),
    points: D(0),
    upgrades: []
}

var settings = {
    fps: 60,
    autosave: 30,
}

window.onload = function() {
    load()
    tab('u')
}

setInterval(loop, 1000/settings.fps)
setInterval(save, 1000*settings.autosave)