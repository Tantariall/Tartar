var timeflow
function loop() {
    
    timeflow = divide(player.accel, settings.fps)
    player.points = sum(player.points, PGrowth())
    
    
    cost()
    effects()
    updUI()
}

function PGrowth(w) {
    let x = D(1)

    x = mult(x, u11.effect)
    x = mult(x, u12.effect)

    if (w==undefined) x = mult(x, timeflow)

    return x
}