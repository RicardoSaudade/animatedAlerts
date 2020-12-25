function botaoAlert() {
    alert ("ALERTA ===== ALERTA");
}

function botaoAlertaPulsatil() {
    var divDoAlertaPulsatil = document.getElementById('alertaPulsatil')
    var isDisplayed = getComputedStyle(divDoAlertaPulsatil).display;
    
    if(isDisplayed === 'none'){
        aparece(divDoAlertaPulsatil);
    }

    if (isDisplayed === 'block') {
        some(divDoAlertaPulsatil);
    }
}

function botaoAlertaPersonalizado() {
    var divDoAlertaPersonalizado = document.getElementById('alertaPersonalizado');
    var isDisplayed = getComputedStyle(divDoAlertaPersonalizado).display;
    
    if (isDisplayed === 'block') {
        some(divDoAlertaPersonalizado)
    }

    if (isDisplayed === 'none') {
        aparece(divDoAlertaPersonalizado)
        
    }
}

function botaoAlertaRoll() {
    var alertaQueRola = document.getElementById('alertaRoll');
    var isDisplayed = getComputedStyle(alertaQueRola).display;

    if(isDisplayed === 'none'){
        aparece(alertaQueRola)
    }

    if(isDisplayed === 'block'){
        some(alertaQueRola)
    }
}

function aparece(watchaha) {
    watchaha.style.display = 'block'
}

function some(watchaha) {
    watchaha.style.display = 'none'
}

