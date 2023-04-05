import React from 'react'
import { useParams } from 'react-router-dom'
import Head from './Head';
import styles from './Produto.module.css'

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError('Ocorreu um erro ao carregar o produto.');
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
  }, [id])

  if (loading) return <div className='loading'></div>
  if (error) return <p>ERROR: {error}</p>
  if (produto === null) return null;
  return (
    <section className={styles.produto}>
      <Head title={`Hanek | ${produto.nome}`} description={`Hanek | ${produto.nome}`} />
      <div className='animeLeft'>{produto.fotos.map((foto) => (
        <img key={foto.src} src={foto.src} alt={foto.titulo} />
      ))}</div>
      <div className='animeRight'>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  )
}

export default Produto