function ImageSection({img}) {
  return (
    <section style={{
        margin: '0 -2rem',
        padding: '0'
      }}>
        <img style={{
            width:'100%',
            height:'100%',
        }} src={img} alt={img}/>
    </section>
  )
}

export default ImageSection