document.querySelector('button').addEventListener('click', calcDate);

function calcDate() {
    
    var date = new Date();

    var mesesDoAno = 12;
    var anoAtual = (date.getFullYear() - 1);
    var aniversario = false;

    //data de nascimento
    var nome = document.querySelector('.nome').value;
    var NascMes = document.querySelector('.mes').value;
    var NascAno = document.querySelector('.ano').value;
    var NascDia = document.querySelector('.dia').value;

    //Correcao do mes
    NascMes -= 1;

    var diasMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Data atual
    var monthNow = date.getMonth();
    var dayNow = date.getDate();

    //quantos anos voce tem de vida
    var totalAnos = anoAtual - NascAno;
    Math.round(totalAnos);

    // Verificando se o mes/dia do seu niver ja foi
    if (monthNow >= NascMes && NascDia <= dayNow) {
        aniversario = true;
        totalAnos += 1;
        Math.round(totalMeses) - 1;

    }

    //Total meses de nascimento
    var totalMeses = mesesDoAno - NascMes;

    //Quantos dias voce tem de vida
    var totalDias = diasMes[NascMes] - NascDia;

    aniversario ? aniversario = 'Parabens voce ja fez aniversario' : aniversario = 'Voce ainda nao fez aniversario'

    document.querySelector('p').innerHTML = `<b style='text-transform: uppercase;'><hr>${nome}</b><br><b>Anos:</b> ${totalAnos}  <b>Meses:</b> ${totalMeses} <b>Dias:</b> ${totalDias} <br>
             <b>${aniversario}</b>`
}
