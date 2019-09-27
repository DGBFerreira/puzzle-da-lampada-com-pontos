var Player = { pts: 0,
    qtdClick: 0,
    pontuacao: getScore()
}

function getScore()
{
    return this.pts
}

function coincidecia()
{
    if(pts == qtdClick){
        window.alert("Uma coincidência ocorreu, seus cliques são seus pontos!");
        console.log("Uma coincidência ocorreu, seus cliques são seus pontos!");
        pts += 5;
    }
}

function ganharPts()
{
    document.getElementById('pontos').innerHTML = Player.pts += 5;
    document.getElementById('cliques').innerHTML = Player.qtdClick;
}

function perderPts()
{
    var x = Player.pts % 2;
    pts = (x == 1) ? impar() : par();
    if(Player.pts < 0)
    {
        document.getElementById('pontos').innerHTML = "0";
    }
}

function impar()
{
    document.getElementById('pontos').innerHTML = Player.pts -= 2;
    document.getElementById('cliques').innerHTML = Player.qtdClick += 1;
    document.getElementById('img2').src='img/pic_bulboff.gif';
}

function par()
{
    document.getElementById('pontos').innerHTML = Player.pts -= 3;
    document.getElementById('cliques').innerHTML = Player.qtdClick += 1;
    document.getElementById('img1').src='img/pic_bulboff.gif';
}

function zerado()
{
    if(Player.pts < 0)
    {
        document.getElementById('pontos').innerHTML = "0";
    }
    coincidecia();
}

function botao1()
{
    document.getElementById('lamp1').src='img/pic_bulbon.gif';
    document.getElementById('lamp2').src='img/pic_bulboff.gif';
    document.getElementById('lamp3').src='img/pic_bulboff.gif';
    ganharPts();
    perderPts();
}

function botao2()
{
    document.getElementById('lamp1').src='img/pic_bulboff.gif';
    document.getElementById('lamp2').src='img/pic_bulboff.gif';
    document.getElementById('lamp3').src='img/pic_bulboff.gif';
    ganharPts();
    perderPts();
}

function botao3()
{
    document.getElementById('lamp1').src='img/pic_bulbon.gif';
    document.getElementById('lamp2').src='img/pic_bulbon.gif';
    document.getElementById('lamp3').src='img/pic_bulboff.gif';
    ganharPts();
    perderPts();
}

function botao4()
{
    document.getElementById('lamp1').src='img/pic_bulboff.gif';
    document.getElementById('lamp2').src='img/pic_bulbon.gif';
    document.getElementById('lamp3').src='img/pic_bulboff.gif';
    ganharPts();
    perderPts();
}

function botao5()
{
    document.getElementById('lamp3').src='img/pic_bulbon.gif';
    ganharPts();
    perderPts();
}

function botao6()
{
    document.getElementById('lamp1').src='img/pic_bulbon.gif';
    document.getElementById('lamp3').src='img/pic_bulbon.gif';
    ganharPts();
    perderPts();
}

function ligarTudo()
{
    document.getElementById('lamp1').src='img/pic_bulbon.gif'
    document.getElementById('lamp2').src='img/pic_bulbon.gif'
    document.getElementById('lamp3').src='img/pic_bulbon.gif'
}

function apagarTudo()
{
    document.getElementById('lamp1').src='img/pic_bulboff.gif'
    document.getElementById('lamp2').src='img/pic_bulboff.gif'
    document.getElementById('lamp3').src='img/pic_bulboff.gif'
}

/*function mostrarPts()
{
    document.write("Sua pontuação é:" + " " + getScore() + ".");
}

function mostrarClicks()
{
    document.write("Você clicou " + Player.qtdClick + " vezes.");
}

function espVazio()
{
    document.write(" ");
}*/