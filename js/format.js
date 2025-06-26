const letters = ['', 'K', "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc", "UDc", "DDc", "TDc", "QaDc", "QiDc", "SxDc", "SpDc", "OcDc", "NDc", "Vg", "UVg", "DVg", "TVg", "QaVg",
    "QiVg", "SxVg", "SpVg", "OcVg", "NVg", "Tg", "UTg", "DTg", "TTg"
]
function format(x) {
    x = new Decimal(x)
    let e = x.add(0.00001).log10().floor()
    let e2 = e.add(0.00001).log10()
    if (x==0) return '0.000'
    if (x < 1) return x.toFixed(3)
    else if (e < letters.length*3-1) return mantissa(x, 1000, e.div(3).floor()) + letters[e.div(3).floor()]
    else if (e < 1000) return mantissa(x, 10, e, 2) + "e" + e
    else if (e2 < letters.length*3-1) return mantissa(x, 10, e, 2) + "e" + mantissa(e, 1000, e2.div(3).floor()) + letters[e2.div(3).floor()]
    else if (e2 < 1000) return "ee" + e2.toFixed(4)
}

function mantissa(x, base, power, fix) {
    let w = x.div(new Decimal(base).pow(power)).floor()
    let r = x.div(new Decimal(base).pow(power)).toFixed(4-String(w).length)
    if (fix!=null) {
        r = new Decimal(r).toFixed(fix)
    }
    if (r > base-0.01) {r = base-0.01}
    return r
}