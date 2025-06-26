var u11 = {
    cost: D(10),
    effect: D(1),
    amount: 0,
    maximum: Infinity,
}

var u12 = {
    cost: D(1000),
    effect: D(1),
    secondary: D(10),
    amount: 0,
    maximum: 10
}

player.upgrades.push(u11, u12)

function buy(x) {
    if (compare(player.points, x.cost)>=0 && checkmax(x)>0) {
        player.points = minus(player.points, x.cost)
        x.amount = sum(1, x.amount)

        switch (x) {                    /*Secondary effects*/
            case u12: {
                u12.secondary = D(10)
            }
        }
    }
}

function effects() {
    u11.maximum = D(Infinity)

    u11.effect = power(2, u11.amount)
    u12.effect = max(power(log(u12.secondary, 10), divide(u12.amount, 2)), 1)
    u12.secondary = sum(u12.secondary, timeflow)
}

function cost() {
    u11.cost = mult( 10, power(sum( 2.5, mult(0.01, u11.amount) ), u11.amount) ) /*10 x (2.5 + 0.01 x AMO) ^ AMO */
    u12.cost = mult(1000, power(10, u12.amount))
}


    /*function disp(id, o) {                    HIDE UPGRADES CODE
        return document.getElementById(id).style.display = o
    }
    if (player.points.cmp(new Decimal(10))>0 || u11.unlocked==1) {disp("u11", "block"); u11.unlocked = 1}
        else disp("u11", "none")*/