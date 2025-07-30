function HyperLink({text, url, size='text', img=''}) {
  return (
    <>
      {img !== '' ? <a className='header-icon' href={url} target='_blank' rel="noopener noreferrer"><img src={img} alt={img}/></a> : <a className={`text-link`} href={url} target='_blank' rel="noopener noreferrer">{text}</a>}
    </>
  )
}

export default HyperLink