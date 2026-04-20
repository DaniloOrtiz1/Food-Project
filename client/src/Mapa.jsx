import React from 'react';

const Mapa = () => {
  return (
    <section className="mapa-secao" id="contato">
      <div className="container-titulo" style={{textAlign: 'center', marginBottom: '30px'}}>
        <h2 className="premium-titulo">Nossa <span className="laranja">Localização</span></h2>
        <p className="premium-desc">Venha nos visitar ou peça para entrega!</p>
      </div>
      
      <div className="mapa-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6333!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAyLjAiUyA0NsKwMzgnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000" 
          width="100%" 
          height="450" 
          style={{ border: 0, borderRadius: '15px', filter: 'grayscale(100%) invert(90%) contrast(90%)' }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Mapa;