import React from 'react'
import { Link } from 'react-router-dom';
import Head from './Head'
import styles from './Produtos.module.css'

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    try {
      setLoading(true);
      fetch('https://ranekapi.origamid.dev/json/api/produto')
        .then(response => response.json())
        .then(json => setProdutos(json));
    } catch (erro) {
      setError('ERROR: ', erro);
    } finally {
      setLoading(false);
    }
  }, [])

  if (error) return <div>{error}</div>
  if (loading || produtos === null) return <div className='loading'></div>
  return (
    <section className={`${styles.produtos} animeUp`}>
      <Head title="Hanek | Produtos" description="Bem vindo a nossa página principal, conheça nossos produtos" />
      {produtos.map(({ id, fotos, nome, preco, descricao }) => (
        <Link to={`produto/${id}`} key={id}>
          <img src={fotos[0].src} alt={fotos[0].titulo} />
          <h2 className={styles.nome}>{nome}</h2>
        </Link>
      ))}

    </section>
  )
}

export default Produtos