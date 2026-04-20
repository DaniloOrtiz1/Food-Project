import React from 'react';
import './Footer.css';
import logo from './logo.png';

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="footer" id="contato">

     {/* FAIXA TOPO */}
      <div className="footer-cta">
        <div className="footer-cta-inner">
          <div className="footer-cta-texto">
            <h2 className="footer-cta-titulo">
              Bora pedir um <span className="footer-laranja">Ortiz?</span>
            </h2>
            <p className="footer-cta-sub">
              Atendemos pelo WhatsApp todos os dias das 18h às 23h.
            </p>
          </div>
          
          {/* Botão corrigido e com classe nova */}
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-whatsapp-footer"
          >
            PEDIR AGORA
          </a>
        </div>
      </div>
      {/* CORPO PRINCIPAL */}
      <div className="footer-body">
        <div className="footer-body-inner">

          {/* COLUNA MARCA */}
          <div className="footer-col footer-col-marca">
           <div className="footer-logo"><img src={logo} alt="logo" /></div>
            <p className="footer-slogan">
              O sabor artesanal que domina a região. Feito com ingredientes
              selecionados e muito amor desde 2018.
            </p>
            <div className="footer-social">
              <a href="#" className="social-btn" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="#" className="social-btn" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="social-btn" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* COLUNA NAVEGAÇÃO */}
          <div className="footer-col">
            <h4 className="footer-col-titulo">Navegação</h4>
            <ul className="footer-lista">
              <li><a href="#home">Home</a></li>
              <li><a href="#lanches">Cardápio</a></li>
              <li><a href="#novidades">Novidades</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          {/* COLUNA HORÁRIOS */}
          <div className="footer-col">
            <h4 className="footer-col-titulo">Horários</h4>
            <ul className="footer-lista footer-horarios">
              <li>
                <span>Seg – Sex</span>
                <span className="footer-laranja">18h – 23h</span>
              </li>
              <li>
                <span>Sábado</span>
                <span className="footer-laranja">17h – 00h</span>
              </li>
              <li>
                <span>Domingo</span>
                <span className="footer-laranja">17h – 22h</span>
              </li>
            </ul>
          </div>

          {/* COLUNA CONTATO */}
          <div className="footer-col">
            <h4 className="footer-col-titulo">Contato</h4>
            <ul className="footer-lista footer-contato-lista">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.29h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.95a16 16 0 0 0 6 6l1.27-.82a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>(11) 99999-9999</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Rua das Hamburguerias, 42<br/>São Paulo – SP</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>contato@ortizburguer.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* RODAPÉ FINAL */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>© {ano} <strong>Ortiz Burguer</strong>. Todos os direitos reservados.</p>
          <p className="footer-bottom-direita">
            Desenvolvido <span>por</span> Danilo Ortiz
          </p>
        </div>
      </div>

    </footer>
  );
}