# Projeto Validação de Formulário

Este projeto tem como objetivo criar um formulário que valide o preenchimento dos campos obrigatórios. Um design simples é apresentado em dois cenários:

1. **Formulário enviado com um ou mais campos vazios**  
   Nesse caso, uma mensagem aparecerá abaixo do campo vazio, indicando ao usuário quais campos precisam ser preenchidos. A borda do campo também ficará vermelha.

2. **Formulário enviado com todos os campos preenchidos**  
   Nesse caso, a borda de todos os campos ficará verde, indicando que o preenchimento está correto.

## Tecnologias utilizadas

O projeto utiliza HTML, CSS e JavaScript puros. Por meio de condicionais, os textos de erro são adicionados dinamicamente apenas quando o usuário esquece de preencher algum campo, evitando o uso de textos pré-carregados com `display: none`.
