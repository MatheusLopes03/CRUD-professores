var linhaSelecionada = null;

function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

function limparCampos() {
    document.querySelector("#nomeProfessor").value = "";
    document.querySelector("#emailProfessor").value = "";
    document.querySelector("#salario").value = "";
    document.querySelector("#dataAdmissao").value = "";
}

// Adcionar

document.querySelector("#professor-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeProfessor = document.querySelector("#nomeProfessor").value;
    const emailProfessor = document.querySelector("#emailProfessor").value;
    const salario = document.querySelector("#salario").value;
    const dataAdmissao = document.querySelector("#dataAdmissao").value;

    if (nomeProfessor == "" || emailProfessor == "" || salario == "" || dataAdmissao == "") {
        showAlert("Por favor preencha todos os campos", "danger");
    } 
    else {
        if (linhaSelecionada == null) {
            const list = document.querySelector("#professor-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${nomeProfessor}</td>
                <td>${emailProfessor}</td>
                <td>${salario}</td>
                <td>${dataAdmissao}</td>
                <td>
                    <a href="#" class="btn btn-warning btn-sm edit"><i class="bi bi-pen-fill"></i></a>
                    <a href="#" class="btn btn-danger btn-sm delete"><i class="bi bi-trash-fill"></i></a>
                </td>
            `;
            list.appendChild(row);
            linhaSelecionada = null;
            showAlert("Professor adcionado", "sucess");
        } 
        else {
            linhaSelecionada.children[0].textContent = nomeProfessor;
            linhaSelecionada.children[1].textContent = emailProfessor;
            linhaSelecionada.children[2].textContent = salario;
            linhaSelecionada.children[3].textContent = dataAdmissao;
            linhaSelecionada = null;
            showAlert("Informacoes editadas", "info");
        }

        limparCampos();
    }
});

// Editar

document.querySelector("#professor-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        linhaSelecionada = target.parentElement.parentElement;
        document.querySelector("#nomeProfessor").value = linhaSelecionada.children[0].textContent;
        document.querySelector("#emailProfessor").value = linhaSelecionada.children[1].textContent;
        document.querySelector("#salario").value = linhaSelecionada.children[2].textContent;
        document.querySelector("#dataAdmissao").value = linhaSelecionada.children[3].textContent;
    }
});

// Deletar 

document.querySelector("#professor-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("Professor removido", "danger");
    }
});



const formatarSalario = document.querySelector("#salario");

const formatter = new Intl.NumberFormat("pt-BR", {
    style: "salario",
    salario: "BRL",
    minimumFractionDigits: 2,
});

currency.innerHTML = formatter.format(formatarSalario);