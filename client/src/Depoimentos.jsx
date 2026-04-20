import React from 'react';
import './App.css'; // Usaremos o mesmo CSS para manter o padrão

const Depoimentos = () => {
  const avaliacoes = [
    { id: 1, nome: "Ricardo Silva", texto: "O melhor burger que já comi! A carne é suculenta e o molho secreto é de outro mundo.", estrelas: 5 },
    { id: 2, nome: "Carla Souza", texto: "Entrega rápida e o lanche chegou quentinho. O pão brioche faz toda a diferença!", estrelas: 5 },
    { id: 3, nome: "Marcos Oliveira", texto: "Ambiente e sabor nota 10. Recomendo o Bacon Smash!", estrelas: 5 }
  ];

  return (
    <section className="depoimentos" id="depoimentos">
      <div className="container-titulo">
        <span className="premium-tag">O QUE DIZEM NOSSOS CLIENTES</span>
        <h2 className="premium-titulo">Quem provou, <span className="laranja">viciou</span></h2>
        <div className="premium-linha" style={{margin: '10px auto'}}></div>
      </div>
      
      <div className="depoimentos-grid">
        {avaliacoes.map(item => (
          <div key={item.id} className="card-depoimento">
            <div className="estrelas">
              {"★".repeat(item.estrelas)}
            </div>
            <p className="depoimento-texto">"{item.texto}"</p>
            <h4 className="depoimento-autor">- {item.nome}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Depoimentos;