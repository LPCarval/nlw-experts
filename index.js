const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para construção de páginas web estáticas.",
        "Uma linguagem de marcação para estilizar páginas web.",
        "Uma linguagem de programação usada para criar interatividade em páginas web.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "variable x;",
        "let x = 10;",
        "x = 10;",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função utilizada para imprimir algo no console em JavaScript?",
      respostas: [
        "console.print()",
        "log.console()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o tipo de dado retornado pelo operador typeof?",
      respostas: [
        "String",
        "Number",
        "Undefined",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas: [
        "Uma função que é executada antes de outra função.",
        "Uma função que é passada como argumento para outra função e é executada após algum evento.",
        "Uma função que só pode ser chamada uma vez.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função utilizada para remover um elemento do final de um array em JavaScript?",
      respostas: [
        "pop()",
        "remove()",
        "delete()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método utilizado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método forEach() faz em JavaScript?",
      respostas: [
        "Itera sobre os elementos de um array e executa uma função de callback para cada elemento.",
        "Retorna o primeiro elemento de um array.",
        "Adiciona um elemento no início de um array.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de comentar uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de linha.",
        "<!-- Este é um comentário de linha. -->",
        "/* Este é um comentário de linha. */",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' +perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
     const estaCorreta = event.target.value == item.correta
  
     corretas.delete(item)
     if(estaCorreta){
       corretas.add(item)
     }
  
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }