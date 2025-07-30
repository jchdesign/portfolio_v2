function InfoGrid({list}) {
  return (
    <div className='info-grid-3'>
        {list.length!==0 &&
            list.map((item) => (
              <div className='grid-item'>
                <>
                <img>{item.img}</img>
                <h3><strong>{item.title}</strong></h3>
                <p className='text'>{item.text}</p>
                </>
              </div>
            ))
          }
    </div>
  )
}

export default InfoGrid