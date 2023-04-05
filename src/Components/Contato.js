import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={styles.contato}>
      <Head title="Hanek | Contato" description="Essa é a nossa página de contato, que tal nos mandar uma mensagem?" />
      <img src={foto} alt="Máquina de escrever" className='animeLeft' />
      <div className='animeRight'>
        <h1>Contato</h1>
        <ul className={styles.dados}>
          <li>edinei.dev@gmail.com</li>
          <li>74 9 9962-2281</li>
          <li>Av. Tiradentes, Salvador</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato