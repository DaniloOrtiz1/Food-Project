import React, { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);
  const [aberto, setAberto] = useState(false);
  const [frete, setFrete] = useState(null);

  function adicionar(produto) {
    setItens(prev => {
      const existe = prev.find(i => i.id === produto.id);
      if (existe) {
        return prev.map(i =>
          i.id === produto.id ? { ...i, qtd: i.qtd + 1 } : i
        );
      }
      return [...prev, { ...produto, qtd: 1 }];
    });
    setAberto(true);
  }

  function remover(id) {
    setItens(prev => prev.filter(i => i.id !== id));
  }

  function alterarQtd(id, delta) {
    setItens(prev =>
      prev
        .map(i => i.id === id ? { ...i, qtd: i.qtd + delta } : i)
        .filter(i => i.qtd > 0)
    );
  }

  function limpar() {
    setItens([]);
  }

  const total = itens.reduce((acc, i) => {
    const num = parseFloat(i.preco.replace('R$', '').replace(',', '.').trim());
    return acc + num * i.qtd;
  }, 0) + (frete?.valor ?? 0);

  const totalItens = itens.reduce((acc, i) => acc + i.qtd, 0);

  return (
    <CarrinhoContext.Provider value={{
      itens, aberto, setAberto,
      adicionar, remover, alterarQtd, limpar,
      total, totalItens,
      frete, setFrete
    }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}