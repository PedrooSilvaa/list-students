let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/2Dn/aluno';
fetch(url)
.then((response) => response.json())
.then(json => {
  // Do something with the data
    console.log(json.alunos);
    console.log(json.aluno[0].matricula);
    document.querySelector("#nome").value = json.aluno[0].nome;
    document.querySelector("#matricula").value = json.aluno[0].matricula;
    document.querySelector("#turno").value = json.aluno[0].turno;
});