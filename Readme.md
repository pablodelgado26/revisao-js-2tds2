## Revisão *array*

## Algoritmo Pizzaiolo: Montando a Pizza Perfeita 🍕🧀🥓**

Contexto: Uma lanchonete modernizou o seu sistema de pedidos! Agora, os clientes montam suas pizzas diretamente no código, sem precisar de interface gráfica. Você irá desenvolver um algoritmo que monta uma pizza a partir de arrays predefinidos de ingredientes, selecionando cada ingrediente pela sua posição no array.

Tarefa:
Definir os Arrays de Ingredientes: Aqui estão os arrays com os ingredientes da pizzaria:

Criar a Pizza:  Crie um novo array chamado `pizza` que irá armazenar os ingredientes da pizza montada.

Selecionar os Ingredientes:  Utilize os índices dos arrays para adicionar os seguintes ingredientes à pizza:

- Massa: `massas[1]` (Integral)
- Molho: `molhos[0]` (Molho de Tomate)
- Queijo: `queijos[2]` (Provolone)
- Carne: `carnes[3]` (Bacon)
- Vegetal: `vegetais[4]` (Manjericão)

Exibir a Pizza:  Utilize `console.log()` para exibir os ingredientes da pizza no terminal, um em cada linha.

## Exercício: Batalha de Robôs 🤖💥

Contexto: Em um futuro distante, robôs gigantes batalham em arenas pelo entretenimento das multidões! Você é o programador responsável por controlar o arsenal de um desses robôs.

Criar o Arsenal: Crie um array chamado armas contendo pelo menos 5 tipos de armas (strings), como "Laser", "Mísseis", etc.

Robô Atacante: Crie um array chamado ataques que inicialmente estará vazio. Este array representará a sequência de ataques que seu robô irá realizar.

Nome do Robô: A posição 0 do array deve indicar o nome do robô e a mensagem deve mostrar “Nome: [nome do robô]”.

Plano de Ataque: Adicione a ordem dos ataques ao array, usando os índices do array armas.

Relatório de Batalha: Exiba no console a sequência de ataques do seu robô, um por linha, prefixando cada ataque com "Ataque [número do ataque]: [nome do ataque]".

## Exercício: Maratona de Livros 📚

Contexto: Um leitor apaixonado por livros definiu uma meta de ler um certo número de livros por mês. Você precisa criar um programa que o ajude a acompanhar seu progresso e verificar se ele atingiu sua meta.

Definir a Meta: Crie uma variável chamada metaLivros e defina a meta de leitura mensal (número inteiro).

Registrar os Livros Lidos: Crie um array chamado livrosLidos e preencha-o com os nomes (strings) dos livros que o leitor já leu no mês atual. 

Analisar o Progresso:

- Utilize um laço de repetição for para percorrer o array livrosLidos e exibir no console o nome de cada livro lido.
- Após o loop, utilize uma estrutura de decisão if para verificar se a quantidade de livros lidos (livrosLidos.length) atingiu ou ultrapassou a metaLivros.
- Exiba no console a mensagem apropriada:
    - Meta Atingida: "Parabéns! Você atingiu sua meta de leitura!"
    - Meta Não Atingida: "Você está progredindo! Faltam [quantidade] livros para atingir sua meta."