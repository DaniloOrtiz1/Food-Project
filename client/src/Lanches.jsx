import React from 'react';
import './Lanches.css';
import { useCarrinho } from './CarrinhoContext';

const produtos = [
  { id: 1, nome: 'Classic Ortiz', descricao: 'Blend 180g, queijo cheddar, alface, tomate e molho da casa', preco: 'R$ 28,90', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop' },
  { id: 2, nome: 'Bacon Smash', descricao: 'Blend 200g smashado, bacon crocante, cebola caramelizada', preco: 'R$ 34,90', img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=600&auto=format&fit=crop' },
  { id: 3, nome: 'Double Fire', descricao: 'Dois blends 150g, pimenta jalapeño, molho picante especial', preco: 'R$ 39,90', img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=600&auto=format&fit=crop' },
  { id: 4, nome: 'Truffle Gold', descricao: 'Blend 200g, maionese trufada, rúcula, queijo brie derretido', preco: 'R$ 44,90', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop' },
  { id: 5, nome: 'Crispy Chicken', descricao: 'Frango empanado crocante, mel e mostarda, picles artesanal', preco: 'R$ 31,90', img: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=600&auto=format&fit=crop' },
  { id: 6, nome: 'BBQ Ranch', descricao: 'Blend 180g, molho BBQ defumado, cebola crispy, queijo prato', preco: 'R$ 33,90', img: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=600&auto=format&fit=crop' },
  { id: 7, nome: 'Veggie Ortiz', descricao: 'Blend de grão-de-bico, queijo coalho grelhado, pesto caseiro', preco: 'R$ 29,90', img: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=600&auto=format&fit=crop' },
  { id: 8, nome: 'Black & Gold', descricao: 'Pão black, blend 220g, cheddar duplo, molho especial da casa', preco: 'R$ 47,90', img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=600&auto=format&fit=crop' },
];

function LancheCard({ lanche }) {
  const { adicionar } = useCarrinho();

  return (
    <div className="lanche-card">
      <div className="lanche-card-img-wrap">
        <img src={lanche.img} alt={lanche.nome} className="lanche-card-img" />
        <span className="lanche-card-preco">{lanche.preco}</span>
      </div>
      <div className="lanche-card-body">
        <h3 className="lanche-card-nome">{lanche.nome}</h3>
        <p className="lanche-card-desc">{lanche.descricao}</p>
        <button
          className="lanche-card-btn"
          onClick={() => adicionar(lanche)}
        >
          EU QUERO
        </button>
      </div>
    </div>
  );
}

export default function Lanches() {
  return (
    <section className="lanches-section" id="lanches">
      <div className="lanches-header">
        <span className="lanches-pre">NOSSO CARDÁPIO</span>
        <h2 className="lanches-titulo">
          Nossos <span className="laranja-card">Lanches</span>
        </h2>
        <div className="lanches-linha"></div>
      </div>
      <div className="lanches-grid">
        {produtos.map((lanche) => (
          <LancheCard key={lanche.id} lanche={lanche} />
        ))}
      </div>
    </section>
  );
}