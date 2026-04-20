import React from 'react';
import './Bebidas.css';
import { useCarrinho } from './CarrinhoContext';

const bebidas = [
  { id: 101, nome: 'Coca-Cola Original', descricao: 'Lata 350ml, estupidamente gelada', preco: 'R$ 7,00', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop' },
  { id: 102, nome: 'Suco de Laranja', descricao: 'Natural da fruta, 400ml sem conservantes', preco: 'R$ 12,00', img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=600&auto=format&fit=crop' },
  { id: 103, nome: 'Heineken Long Neck', descricao: 'Cerveja premium 330ml, puro malte', preco: 'R$ 14,00', img: 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?q=80&w=600&auto=format&fit=crop' },
  { id: 104, nome: 'Budweiser Long Neck', descricao: 'Cerveja premium 330ml, puro malte', preco: 'R$ 14,00', img: 'https://images.unsplash.com/photo-1644447381354-662bfd7c78f2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 105, nome: 'Corona Long Neck', descricao: 'Cerveja premium 330ml, puro malte', preco: 'R$ 14,00', img: 'https://images.unsplash.com/photo-1600213903598-25be92abde40?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 106, nome: 'Pink Lemonade', descricao: 'Limão siciliano e frutas vermelhas, 400ml', preco: 'R$ 15,00', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop' },
  { id: 107, nome: 'Água Mineral', descricao: 'Com ou sem gás, 500ml', preco: 'R$ 5,00', img: 'https://images.unsplash.com/photo-1629470937827-9f1c9b9df448?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 108, nome: 'Milkshake de Nutella', descricao: '400ml de pura cremosidade com avelã', preco: 'R$ 22,00', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
];

// Corrigido o nome da função interna para bater com o map abaixo
function BebidaCard({ bebida }) {
  const { adicionar } = useCarrinho();

  return (
    <div className="bebida-card"> 
      <div className="bebida-card-img-wrap">
        <img src={bebida.img} alt={bebida.nome} className="bebida-card-img" />
        <span className="bebida-card-preco">{bebida.preco}</span>
      </div>
      <div className="bebida-card-body">
        <h3 className="bebida-card-nome">{bebida.nome}</h3>
        <p className="bebida-card-desc">{bebida.descricao}</p>
        <button
          className="bebida-card-btn"
          onClick={() => adicionar(bebida)}
        >
          EU QUERO
        </button>
      </div>
    </div>
  );
}

export default function Bebidas() {
  return (
    /* REMOVIDO o paddingTop: '0' para o padding do CSS funcionar e desgrudar */
    <section className="bebidas-section" id="bebidas">
      <div className="bebidas-header">
        <span className="bebidas-pre">PARA ACOMPANHAR</span>
        <h2 className="bebidas-titulo">
          Nossas <span className="laranja-bebida">Bebidas</span>
        </h2>
        <div className="bebidas-linha"></div>
      </div>
      <div className="bebidas-grid">
        {bebidas.map((bebida) => (
          <BebidaCard key={bebida.id} bebida={bebida} />
        ))}
      </div>
    </section>
  );
}