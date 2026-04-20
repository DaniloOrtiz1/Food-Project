import React, { useState, useEffect } from 'react';
import Lanches from './Lanches';
import bebidas from './Bebidas';
import Carrinho from './Carrinho';
import Footer from './Footer';
import logo from './logo.png';
import { useCarrinho } from './CarrinhoContext';
import './App.css';
import Bebidas from './Bebidas';
import Mapas from './Mapa';
import Depoimentos from './Depoimentos';
import Mapa from './Mapa';


function App() {
  const [rolou, setRolou] = useState(false);
  const { totalItens, setAberto } = useCarrinho();

  useEffect(() => {
    const handleScroll = () => setRolou(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">

      <nav className={`navbar ${rolou ? 'nav-rolada' : ''}`}>
        <div className="logo"><img src={logo} alt="logo" /></div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#lanches">Lanches</a></li>
          <li><a href="#bebidas">Bebidas</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
        <button className="nav-carrinho-btn" onClick={() => setAberto(true)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          {totalItens > 0 && (
            <span className="nav-carrinho-badge">{totalItens}</span>
          )}
        </button>
      </nav>

      <Carrinho />

      <section className="showcase" id="home">
        <div className="showcase-inner">
          <div className="showcase-texto">
            <p className="showcase-pre">O sabor que domina a região</p>
            <h1 className="showcase-titulo">
                <span className="texto-fogo-realista">ORTIZ</span><br />
                <span className="laranja">BURGUER</span>
            </h1>
            <div className="showcase-linha"></div>
            <p className="showcase-desc">
              Pão brioche selado na manteiga, carne fresca moída diariamente
              e um molho artesanal secreto que você só encontra aqui.
            </p>
            <div className="showcase-btns">
              <a href="#lanches" className="btn-main">VER CARDÁPIO</a>
              <a href="#contato" className="btn-ghost">PEDIR AGORA</a>
            </div>
          </div>
          <div className="showcase-foto">
            <div className="foto-glow"></div>
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=900&auto=format&fit=crop"
              alt="Hambúrguer Ortiz"
              className="foto-burger"
            />
          </div>
        </div>
      </section>

      <Lanches />

      <section className="premium" id="premium">
        <div className="premium-grid">
          <div className="premium-img-wrap">
            <div className="premium-glow"></div>
            <img
              src="https://images.unsplash.com/photo-1667329829058-ac191ba4a905?q=80&w=800&auto=format&fit=crop"
              alt="Hambúrguer Premium"
              className="premium-img"
            />
          </div>
          <div className="premium-texto">
            <span className="premium-tag">PREMIUM EXPERIÊNCIA</span>
            <h2 className="premium-titulo">
              Melhor da <span className="laranja">Região</span>
            </h2>
            <div className="premium-linha"></div>
            <p className="premium-desc">
              O segredo do <strong>ORTIZ BURGUER</strong> está na escolha
              rigorosa dos ingredientes. Pão brioche selado na manteiga,
              carne fresca moída diariamente e um molho artesanal secreto
              que você só encontra aqui.
            </p>
           <button 
                className="btn-wpp" 
                onClick={() => setAberto(true)}
                >
                 PEÇA PELO WHATSAPP
                </button>
          </div>
        </div>
      </section>
    
      <Bebidas/>
      <Depoimentos/>
      <Mapa/>

      <Footer />
    </div>
  );
}

export default App;