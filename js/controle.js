let cont = 0
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add'); 
let completed = document.getElementById('completed');
let main = document.getElementById('area-item');

function addTarefa() {
    // Pegar o valor digitado no input
    let valorInput = input.value;
    // Validando input
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++cont;

        let novoItem = `<div id="${cont}" class="item">
        <div onclick="marcarTarefa(${cont})" class="item-icone">
            <i id="icone_${cont}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${cont})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${cont})" class="delete">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
                    <span class="material-icons">delete_outline</span>
                </svg>
                <span class="tooltiptext">remover</span>
            </button>
        </div>
    </div>`

        // add item na div
        let div = document.createElement('div');
        div.innerHTML += novoItem
        document.getElementById('ToDo').appendChild(div);

        // Zerar o campo
        input.value = "";
        input.focus();
        
        ToDo.style.display = 'block'
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove()
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if (classe == "item") {
        item.classList.add('clicado')

        var icone = document.getElementById('icone_'+ id);
        icone.classList.remove('mdi-circle-outline')
        icone.classList.add('mdi-check-circle')

        
        document.getElementById('completed').appendChild(item);
        completed.style.display = 'block'

    }else {
        item.classList.remove('clicado')

        var icone = document.getElementById('icone_'+ id);
        icone.classList.remove('mdi-check-circle')
        icone.classList.add('mdi-circle-outline')

        document.getElementById('ToDo').appendChild(item);
    }
}   

input.addEventListener("keyup", function(event) {
    // aciona se o botao ENTER é clicado
    if(event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})