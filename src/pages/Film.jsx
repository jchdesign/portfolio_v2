import film_data from '../data/film_data';

import Directory from '../components/Directory';

function Film() {
  return (
    <main className='film'>
        <Directory 
            heading={'FILM SCORING AND SOUND DESIGN'} 
            description={"Writing waveform worlds."}
            data={film_data}
        />
    </main>
  )
}

export default Film