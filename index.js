const menu = {
    1: { opcao: 'Pipoca', tempo: 10 },
    2: { opcao: 'Macarrão', tempo: 8 },
    3: { opcao: 'Carne', tempo: 15 },
    4: { opcao: 'Feijão', tempo: 12 },
    5: { opcao: 'Brigadeiro', tempo: 8 },
  };
  
  function prepararPedido (opcaoComida, tempo) {
    const comida = menu [opcaoComida];

    if (!comida) {
        return console.log('Prato inexistente');
      }
  
    let mensagem;
    const tempoPadrao = comida.tempo;

    if (tempo > tempoPadrao * 2 && tempo <= tempoPadrao * 3) {
        mensagem = 'A comida queimou';
    } else if (tempo < tempoPadrao) {
      mensagem = 'Tempo insuficiente';
    } else if (tempo > tempoPadrao * 3) {
      mensagem = 'Kabummm';
    } else {
      mensagem = 'Prato pronto, bom apeite!!!';
    }
    
    return console.log(mensagem);
  }

 prepararPedido (6, 24);

  