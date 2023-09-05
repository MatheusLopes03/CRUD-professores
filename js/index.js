var tbody = document.querySelector("table>body")

function obterProfessoresDaAPI(){
    fetch("http://localhost:3000")
    .then(response => response.json())
    .then(response => {
        preencherTable(response)
    })
    .catch(erro => console.log(erro))
}

function preencherTable(professor){

    professor.map(professor => {
        var tr = document.createElement("tr");
        var tdNome = document.createElement("td");
        var tdEmail = document.createElement("td");
        var tdSalario = document.createElement("td");
        var tdAdmissao = document.createElement("td");

        tdNome.textContent = professor.nome;
        tdEmail.textContent = professor.email;
        tdSalario.textContent = professor.salario;
        tdAdmissao.textContent = professor.dataAdmissao;

        tr.appendChild(tdNome);
        tr.appendChild(tdEmail);
        tr.appendChild(tdSalario);
        tr.appendChild(tdAdmissao);

        tbody.appendChild(tr);
    })
    
}

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


obterProfessoresDaAPI();