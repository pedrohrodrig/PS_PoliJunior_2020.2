// Calcula a nota da P3 necessária para atingir a média pretendida
var calculoMedia = (ps1, nt1, ps2, nt2, ps3, med, nt3) => {

    var pp1 = parseInt(document.getElementById(ps1).value);
    var p1 = parseFloat(document.getElementById(nt1).value);
    var pp2 = parseInt(document.getElementById(ps2).value);
    var p2 = parseFloat(document.getElementById(nt2).value);
    var pp3 = parseInt(document.getElementById(ps3).value);
    var m = parseFloat(document.getElementById(med).value);

    var final = document.getElementById(nt3);

    // verifica se o input é válido
    var verif = 0;
    var pesos = [pp1, pp2, pp3];
    var notas = [p1, p2, m];

    pesos.forEach(i => {
        if (i <= 0) {
            final.innerHTML = 'Um ou mais valores são inválidos';
            verif = 1;
        }
    })
    notas.forEach(j => {
        if (j < 0 || j > 10) {
            final.innerHTML = 'Um ou mais valores são inválidos';
            verif = 1;
        }
    })
    if (veNulo(pesos) != 0 || veNulo(notas) != 0) {
        final.innerHTML = 'Todos os campos são obrigatórios';
        verif = 1;
    }

    // se os inputs forem válidos, faz-se a conta
    if (verif == 0) {
        var soma = pp1 + pp2 + pp3;
        var np3 = (m * soma - p1 * pp1 - p2 * pp2) / pp3;

        if (np3 > 10) {
            final.innerHTML = 'Por mais que queiramos não dá: ' + np3.toFixed(2);
        }
        else if (np3 < 0) {
            final.innerHTML = 'Nota negativa é pra poucos: ' + np3.toFixed(2);
        }
        else { final.innerHTML = np3.toFixed(2); }
    }

}

// verifica se o usuário digitou algo e retorna 1 caso contrário
function veNulo(i) {
    var y = 0
    i.forEach(j => {
        if (isNaN(j)) {
            y = 1;
        }
    })

    return y;
}

var retornaNulo = () => {
    document.getElementById('p3_w').innerHTML = null;
}

/* Quando o usuário clica no botão,
alterna entre esconder e mostrar o dropdown */
function dropaTexto() {
    document.getElementById("myDropdown").classList.toggle("show");

    // Fecha o dropdown se o usuário clica fora dele
    window.onclick = function (event) {
        if (!event.target.matches('.dpd') && !event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}

// "Entra" no login ao clicar no botão 
var send = document.querySelector('#entrar');

send.addEventListener('click', function () {
    
    window.location.href = 'logado.html';
            
})

/* detecta tamanho da janela e adapta layout de alguns objetos, 
adicionando linhas por exemplo */
function tamanhoJanela() {
    var largura = window.innerWidth;

    var login = document.querySelector('#login');
    var cadastro = document.querySelector('#cadastro');
    var linha = document.getElementById('tabela menor');
    var pravoce = document.querySelector('#pravc');
    var linha2 = document.querySelector('#responsive');
    var compartilhar = document.getElementById('responsive');
    var contato = document.querySelector('#contato');

    if (largura < 650) {
        pravoce.classList.remove('col8');
        pravoce.classList.add('col12');

    } else {
        pravoce.classList.remove('col12');
        pravoce.classList.add('col8');
    }

    if (largura < 820) {
        linha.classList.add('linha');

        login.classList.remove('col6');
        login.classList.add('col12');

        cadastro.classList.remove('col6');
        cadastro.classList.add('col12');

    } else {
        linha.classList.remove('linha');

        cadastro.classList.remove('col12');
        cadastro.classList.add('col6');

        login.classList.remove('col12');
        login.classList.add('col6');
    }

    if (largura < 420) {
        linha2.classList.add('linha');

        compartilhar.classList.remove('col6');
        compartilhar.classList.add('col12');

        contato.classList.remove('col6');
        contato.classList.add('col12');
    } else {
        linha2.classList.remove('linha');

        compartilhar.classList.remove('col12');
        compartilhar.classList.add('col6');

        contato.classList.remove('col12');
        contato.classList.add('col6');
    }
}

tamanhoJanela()
window.addEventListener('resize', function () {
    tamanhoJanela();
})

/* faz o menu responsivo retrair ou mostrar com o clique
quando a tela tem largura menor que 600px */
var botaoMenu = document.getElementById('menuNav');
var texto = document.querySelector(".txt");
botaoMenu.addEventListener("click", function () {
    var x = document.getElementById('navbar');
    if (x.className === "navbar") {
        x.className += " responsive";
        texto.className += " extraMargin"
    } else {
        x.className = "navbar";
        texto.className = "txt";
    }
})