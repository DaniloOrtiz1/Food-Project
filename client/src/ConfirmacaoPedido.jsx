import React, { useEffect, useState } from 'react';
import './ConfirmacaoPedido.css';
import logo from './logo.png'; // Você importou como 'logo'

export default function ConfirmacaoPedido({ onVoltar }) {
  const [motoPos, setMotoPos] = useState(110);
  const [chegou, setChegou] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMotoPos(42), 300);
    const timer2 = setTimeout(() => setChegou(true), 1800);
    return () => { clearTimeout(timer); clearTimeout(timer2); };
  }, []);

  return (
    <div className="conf-overlay">
      <div className="conf-card">

        <div className="conf-logo-wrap">
          {/* O ERRO ESTAVA AQUI: Mudei de logoImg para logo */}
          <img src={logo} alt="Ortiz Burguer" className="conf-logo-img" />
        </div>

        <div className="conf-check-circle">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.8"
            strokeLinecap="round" strokeLinejoin="round" className="conf-check-svg">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h2 className="conf-titulo">Pedido confirmado!</h2>
        <p className="conf-sub">
          Obrigado por comprar na <span>Ortiz Burguer</span>!<br />
          Seu pedido já foi recebido e logo estará saindo quentinho pra você.
        </p>

        <div className="conf-rua">
          <div className="conf-rua-linha" />
          <div
            className="conf-moto"
            style={{ left: `${motoPos}%`, transform: 'translateX(-50%) translateY(-50%)' }}
          >
            {/* SVG da Moto */}
            <svg viewBox="0 0 80 40" width="90" height="45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="30" r="9" stroke="#ff6600" strokeWidth="2.5" fill="#1a1a1a" />
              <circle cx="15" cy="30" r="3" fill="#ff6600" />
              <circle cx="63" cy="30" r="9" stroke="#ff6600" strokeWidth="2.5" fill="#1a1a1a" />
              <circle cx="63" cy="30" r="3" fill="#ff6600" />
              <path d="M15 21 L28 10 L48 10 L63 21" stroke="#ff6600" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M15 21 L63 21" stroke="#ff6600" strokeWidth="2" strokeLinecap="round" />
              <path d="M28 10 L35 4 L50 4 L55 10" fill="#ff6600" stroke="#ff6600" strokeWidth="1" strokeLinejoin="round" />
              <path d="M58 10 L65 6 M65 6 L67 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <ellipse cx="40" cy="7" rx="5" ry="5" fill="#ff6600" />
              <path d="M35 12 Q40 16 45 12" stroke="#ff6600" strokeWidth="2" strokeLinecap="round" fill="none" />
              <rect x="20" y="12" width="14" height="10" rx="2" fill="#333" stroke="#ff6600" strokeWidth="1.2" />
              <line x1="27" y1="12" x2="27" y2="22" stroke="#ff6600" strokeWidth="1" />
              {!chegou && (
                <>
                  <line x1="0" y1="24" x2="8" y2="24" stroke="#ff6600" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                  <line x1="2" y1="28" x2="7" y2="28" stroke="#ff6600" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
                </>
              )}
            </svg>
          </div>
          <div className="conf-casa">
            <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
              <path d="M4 16 L16 4 L28 16" stroke="#ff6600" strokeWidth="2" strokeLinejoin="round" />
              <rect x="8" y="16" width="16" height="12" rx="1" fill="#1a1a1a" stroke="#ff6600" strokeWidth="1.5" />
              <rect x="13" y="22" width="6" height="6" rx="1" fill="#ff6600" opacity="0.4" />
            </svg>
          </div>
        </div>

        <div className="conf-status-row">
          <div className="conf-status-dot" />
          <span className="conf-status-txt">
            {chegou ? 'Entregador a caminho! 🔥' : 'Preparando seu pedido...'}
          </span>
        </div>

        <button className="conf-voltar" onClick={onVoltar}>
          Voltar ao cardápio
        </button>

      </div>
    </div>
  );
}