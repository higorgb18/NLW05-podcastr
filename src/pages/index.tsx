

export default function Home(props) {
  return (
    <h1>Index</h1>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60*60*8, //faz uma nova chamada api a cada 8 horas (3 chamadas por dia)
  }
}
