function HyperLink({text, url, size='text', img=''}) {
  return (
    <>
      {img !== '' ? <a className='header-icon' href={url} target='_blank'><img src={img} alt={img}/></a> : <a className={`text-link ${size}`} href={url} target='_blank'>{text}</a>}
    </>
  )
}

export default HyperLink