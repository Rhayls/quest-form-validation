const inputs = document.querySelectorAll('.input');
const btnSubmit = document.getElementById('btn-submit');


const requiredInput = (event) => {
    event.preventDefault();

    inputs.forEach((input) => {
        const errorTag = input.parentElement.querySelector('.campo-obrigatorio')
        if(errorTag) {
            errorTag.remove();
            // validação inicial para a mensagem não aparecer de forma inesperada.
        }

        if(input.value === '') {
            // adição da borda vermelha para elementos vazios.
            input.classList.add('required');
            input.classList.remove('isNotEmpty');
            // criação dinâmica da mensagem de campo obrigatório

            const campoObrigatorio = document.createElement('p');
            campoObrigatorio.textContent = "Campo obrigatório";
            campoObrigatorio.classList.add('campo-obrigatorio');

            input.insertAdjacentElement("afterend", campoObrigatorio)
        } else {
            input.classList.add('isNotEmpty')
            input.classList.add('required');
        }
    });
}

btnSubmit.addEventListener('click', requiredInput);