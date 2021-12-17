function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours()
    msg.innerHTML =`Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
       img.src = 'manhã.png'
       document.body.style.background = '#97A5A8'
    } else if (hora >=12 && hora < 18) {
        //Boa tarde!
        img.src = 'tarde.png'
        document.body.style.background ='#FCC670'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#274253'
        //Boa noite!
    }
}