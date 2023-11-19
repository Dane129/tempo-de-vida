function calcularIdade() {
  var anoNascimento = document.getElementById('anoNascimento').value;
  var nomeUsuario = document.getElementById('nomeUsuario').value;

  if (!isNaN(anoNascimento) && anoNascimento !== '' && anoNascimento > 0 && anoNascimento < 2100) {
    var anoAtual = new Date().getUTCFullYear();
    var idade = anoAtual - anoNascimento;
    var meses = idade * 12;
    var dias = idade * 365;

    anoNascimento = document.getElementById('anoNascimento').value = ''
    
    
    if (nomeUsuario != '') {
    var nome = 'É um prazer tê-lo(a) aqui, ' + nomeUsuario + '!';
    nomeUsuario = document.getElementById('nomeUsuario').value = ''
    }

    document.getElementById('nome').textContent = nome;
    document.getElementById('idade').textContent = idade;
    document.getElementById('meses').textContent = meses;
    document.getElementById('dias').textContent = dias;
  }

}