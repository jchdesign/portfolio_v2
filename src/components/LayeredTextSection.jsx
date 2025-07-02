function LayeredTextSection({text1, text2, orientation='big-small'}) {
  return (
    <div className='case-study container'>
      {orientation==='big-small' ? <>
        <br></br>
        <div className='left-80 h3 font-400'>{text1}</div>
        <br></br>
        <div className='right-80 text'>{text2}</div>
        <br></br>

      </> : 
      orientation==='small-big' ? <>
        <br></br>
        <div className='left-80 text'>{text1}</div>
        <br></br>
        <div className='right-80 h3 font-400'>{text2}</div>
        <br></br>
      </> : null
    }
    </div>
  )
}

export default LayeredTextSection