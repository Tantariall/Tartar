if (localStorage.getItem('offline')==null) {localStorage.setItem('offline', Date.now())}
function save() {
    function s(key, value) {
        return localStorage.setItem(key, value)
    }
    s('player-data', JSON.stringify(player))
    s('u11', JSON.stringify(u11))
    s('u12', JSON.stringify(u12))
    s('settings', JSON.stringify(settings))
    s('offline', Date.now())
}

function load() {
    document.getElementsByClassName('loading')[0].style = 'display: block'
    function g(key) {
        return localStorage.getItem(key)
    }
    player = JSON.parse ( g('player-data')) || player
    u11 = JSON.parse ( g('u11')) || u11
    u12 = JSON.parse ( g('u12') ) || u12
    settings = JSON.parse (g('settings')) || settings
    offline = divide(minus(Date.now(), g('offline')), 1000) || 0
    setTimeout(() => {document.getElementsByClassName('loading')[0].style = 'display: none'}, 100)
}

function offline_progress() {
    settings.fps = 1
    for (offline.ceil(); offline>0; offline = minus(offline, 1)) {
        loop()
    }
    settings = JSON.parse (localStorage.getItem('settings'))
    offline = D(0)
    save()
}

function wipe() {
    localStorage.clear()
    location.reload()
}