let focus=false; let cas=null, t = null, d = null, e = null; /*for upgrade_desc*/
function updUI() {                                                                      /*UI UPDATE*/
    function doc(x, y) {
        return document.getElementById(x).textContent = y
    }
    doc("points", format(player.points));
    doc("points-growth", format(PGrowth(1)));
    doc("u11", "1 | Cost: " + format(u11.cost) + " points");
    doc('u12', "2 | Cost: " + format(u12.cost) + " points");
    doc("offline-time", format(offline));

                                /*OTHER UI FUNCTIONS*/
    upgrade_desc();
    upgrade_status()
}



function tab(current) {                                                                 /*TABS SWITCH*/
    current = '.' + current
    function doc(all) {
        if (all == 0) return document.querySelectorAll('.u,.s,.story,.ach')
        else return document.querySelectorAll(all)
    }
    function el(id, c) {
        document.getElementById(id).classList.remove(c)
    }
    doc(0).forEach(x => x.style.display = 'none')

    document.querySelectorAll(current).forEach(x => x.style.display = '')

    el('upgrades-tab', 'active')
    el('settings-tab', 'active')
    el('story-tab', 'active')
    el('ach-tab', 'active')
    
    switch(current) {
        case '.u': document.getElementById('upgrades-tab').classList.add('active'); break
        case '.s': document.getElementById('settings-tab').classList.add('active'); break
        case '.story': document.getElementById('story-tab').classList.add('active'); break
        case '.ach': document.getElementById('ach-tab').classList.add('active'); break
    }
}



function upgrade_desc() {                                                              /*UPGRADE DESCRIPTIONS ON HOVER*/
    function f(id) {
        if (focus==false) id=null;
        switch (id) {
            case null: {
                t = null; d = null; e=null; break
            }
            case 'u11': {
                t="Common multiplier"
                d='Multiply points gain by x' + format(2)
                e=format(u11.amount) + ' bought<br>' + "Total: x" + format(u11.effect) + " points"
                break
            }
            case "u12": {
                t="Time multiplier"
                d="Multiply points gain based on time spent since buying this upgrade. Time count resets on every purchase."
                e=format(u12.amount) + ' / ' + format(u12.maximum) + " bought<br>" + "Total: x" + format(u12.effect) + " points<br>"
                break
            }
        }
    }
    function el() { /*ALL THE STYLING PART*/
        if (t==null) {return document.getElementsByClassName('upgrades-info-container')[0].style.color = '',
            document.getElementsByClassName('upgrades-info-container')[0].style.boxShadow = '',
            document.querySelectorAll('.info').forEach(x => x.classList.remove('is-visible'))
        }
        else return document.getElementsByClassName('upgrades-info-container')[0].style.color = 'white',
        document.getElementsByClassName('upgrades-info-container')[0].style.boxShadow = '0px 0px 30px black',
        document.getElementsByClassName('upgrade-title')[0].textContent = t,
        document.getElementsByClassName('upgrade-desc')[0].textContent = d,
        document.getElementsByClassName('upgrade-effect')[0].innerHTML = e,
        document.querySelectorAll('.info').forEach(x => x.classList.add('is-visible'))
    }

    if (focus==false) cas=null
    f(cas)
    el()
        
    function x(id) {
        return document.getElementById(id).onmouseover = function() {focus=true; setTimeout(() => {cas=id}, 100)},
        document.getElementById(id).onmouseout = function() {focus=false; cas=null}
    }

    x('u11')
    x('u12')
}


function upgrade_status() {
    function el(id, condition, condition2) {
        if (condition && condition2 == true) {return document.getElementById(id).classList.add('buyable')}
        else if (condition2 == false) {return document.getElementById(id).classList.add('bought')}
        else return document.getElementById(id).classList.remove('buyable'), document.getElementById(id).classList.remove('bought')
    }


    el('u11', compare(player.points, u11.cost)>0, checkmax(u11)>0)
    el('u12', compare(player.points, u12.cost)>0, checkmax(u12)>0)
}