import React, { useState } from 'react';
import { useCarrinho } from './CarrinhoContext';
import './Carrinho.css';
import ConfirmacaoPedido from './ConfirmacaoPedido';

function calcularFrete(cepNum) {
  if (cepNum >= 1000000 && cepNum <= 9999999) {
    if (cepNum <= 5999999) return { valor: 6.99, zona: 'Centro/Zona Oeste' };
    if (cepNum >= 4000000 && cepNum <= 4899999) return { valor: 8.99, zona: 'Zona Sul' };
    if (cepNum >= 2000000 && cepNum <= 2999999) return { valor: 8.99, zona: 'Zona Norte' };
    if ((cepNum >= 3000000 && cepNum <= 3999999) || (cepNum >= 8000000 && cepNum <= 8999999)) return { valor: 9.99, zona: 'Zona Leste' };
    return { valor: 9.99, zona: 'São Paulo' };
  }
  if (cepNum >= 6000000 && cepNum <= 9999999) return { valor: 14.99, zona: 'Grande São Paulo' };
  return null;
}

export default function Carrinho() {
  const { itens, aberto, setAberto, remover, alterarQtd, limpar, total, totalItens, frete, setFrete } = useCarrinho();

  const [cepInput, setCepInput] = useState('');
  const [cepStatus, setCepStatus] = useState('idle');
  const [confirmado, setConfirmado] = useState(false);

  async function buscarFrete() {
    const cep = cepInput.replace(/\D/g, '');
    if (cep.length !== 8) { setCepStatus('erro'); return; }
    setCepStatus('loading');
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await res.json();
      if (data.erro) { setCepStatus('erro'); setFrete(null); return; }
      if (data.uf !== 'SP') { setCepStatus('forasp'); setFrete(null); return; }
      const resultado = calcularFrete(parseInt(cep, 10));
      if (!resultado) { setCepStatus('forasp'); setFrete(null); return; }
      setFrete({ valor: resultado.valor, zona: resultado.zona, bairro: data.bairro || data.localidade, cep });
      setCepStatus('ok');
    } catch {
      setCepStatus('erro');
      setFrete(null);
    }
  }

  function limparFrete() {
    setFrete(null);
    setCepInput('');
    setCepStatus('idle');
  }

  function mensagemWpp() {
    const linhas = itens.map(i => `• ${i.qtd}x ${i.nome} (${i.preco})`).join('\n');
    const freteTexto = frete
      ? `\n🛵 *Entrega (${frete.zona}):* R$ ${frete.valor.toFixed(2).replace('.', ',')}`
      : '';
    const texto = `Olá! Gostaria de fazer o seguinte pedido:\n\n${linhas}${freteTexto}\n\n*Total: R$ ${total.toFixed(2).replace('.', ',')}*\n📍 CEP: ${frete?.cep ?? 'não informado'}`;
    return `https://wa.me/5511999999999?text=${encodeURIComponent(texto)}`;
  }

  function handlePedir() {
    window.open(mensagemWpp(), '_blank');
    setAberto(false);
    setConfirmado(true);
  }

  function handleVoltar() {
    setConfirmado(false);
    limpar();
    limparFrete();
  }

  return (
    <>
      <div
        className={`carrinho-overlay ${aberto ? 'ativo' : ''}`}
        onClick={() => setAberto(false)}
      />

      <div className={`carrinho-painel ${aberto ? 'aberto' : ''}`}>

        <div className="carrinho-header">
          <div className="carrinho-header-esq">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="carrinho-header-icon">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="carrinho-titulo">Seu Pedido</span>
            {totalItens > 0 && <span className="carrinho-badge">{totalItens}</span>}
          </div>
          <button className="carrinho-fechar" onClick={() => setAberto(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {itens.length === 0 ? (
          <div className="carrinho-vazio">
            <div className="carrinho-vazio-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </div>
            <p className="carrinho-vazio-titulo">Carrinho vazio</p>
            <p className="carrinho-vazio-sub">Adicione lanches do cardápio para começar seu pedido.</p>
            <button className="carrinho-vazio-btn" onClick={() => setAberto(false)}>VER CARDÁPIO</button>
          </div>
        ) : (
          <>
            <div className="carrinho-lista">
              {itens.map(item => (
                <div className="carrinho-item" key={item.id}>
                  <img src={item.img} alt={item.nome} className="carrinho-item-img" />
                  <div className="carrinho-item-info">
                    <p className="carrinho-item-nome">{item.nome}</p>
                    <p className="carrinho-item-preco">{item.preco}</p>
                    <div className="carrinho-item-controles">
                      <button onClick={() => alterarQtd(item.id, -1)} className="ctrl-btn">−</button>
                      <span className="ctrl-qtd">{item.qtd}</span>
                      <button onClick={() => alterarQtd(item.id, +1)} className="ctrl-btn">+</button>
                    </div>
                  </div>
                  <button className="carrinho-item-remover" onClick={() => remover(item.id)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                      <path d="M10 11v6M14 11v6" />
                      <path d="M9 6V4h6v2" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="carrinho-rodape">

              <div className="frete-box">
                <p className="frete-label">🛵 Calcular entrega</p>
                {!frete ? (
                  <div className="frete-input-row">
                    <input
                      className="frete-input"
                      type="text"
                      placeholder="Digite seu CEP"
                      maxLength={9}
                      value={cepInput}
                      onChange={e => {
                        const v = e.target.value.replace(/\D/g, '').slice(0, 8);
                        const fmt = v.length > 5 ? `${v.slice(0, 5)}-${v.slice(5)}` : v;
                        setCepInput(fmt);
                        setCepStatus('idle');
                      }}
                      onKeyDown={e => e.key === 'Enter' && buscarFrete()}
                    />
                    <button
                      className="frete-btn"
                      onClick={buscarFrete}
                      disabled={cepStatus === 'loading'}
                    >
                      {cepStatus === 'loading' ? '...' : 'OK'}
                    </button>
                  </div>
                ) : (
                  <div className="frete-resultado">
                    <div className="frete-resultado-info">
                      <span className="frete-zona">{frete.zona}</span>
                      <span className="frete-valor">+ R$ {frete.valor.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <button className="frete-alterar" onClick={limparFrete}>alterar</button>
                  </div>
                )}
                {cepStatus === 'erro' && <p className="frete-msg frete-msg-erro">CEP inválido. Verifique e tente novamente.</p>}
                {cepStatus === 'forasp' && <p className="frete-msg frete-msg-erro">Só entregamos em São Paulo. 😕</p>}
              </div>

              <div className="carrinho-total">
                <span>Subtotal</span>
                <span>R$ {(total - (frete?.valor ?? 0)).toFixed(2).replace('.', ',')}</span>
              </div>

              {frete && (
                <div className="carrinho-total" style={{ color: '#ff6600' }}>
                  <span>Entrega</span>
                  <span>R$ {frete.valor.toFixed(2).replace('.', ',')}</span>
                </div>
              )}

              <div className="carrinho-total carrinho-total-final">
                <span>Total</span>
                <span className="carrinho-total-valor">
                  R$ {total.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <button
                className="carrinho-wpp-btn btn-whatsapp-carrinho"
                onClick={handlePedir}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="wpp-icon">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.107.549 4.09 1.51 5.814L.055 23.454a.5.5 0 0 0 .491.546.5.5 0 0 0 .153-.024l5.796-1.847A11.934 11.934 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 0 1-5.273-1.531l-.378-.225-3.918 1.249 1.086-3.834-.247-.394A9.818 9.818 0 0 1 2.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z" />
                </svg>
                PEDIR PELO WHATSAPP
              </button>

              <button className="carrinho-limpar" onClick={() => { limpar(); limparFrete(); }}>
                Limpar carrinho
              </button>

            </div>
          </>
        )}

      </div>

      {confirmado && (
        <ConfirmacaoPedido onVoltar={handleVoltar} />
      )}
    </>
  )
}