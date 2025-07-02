import { Link } from 'react-router-dom';
import HyperLink from './HyperLink';

import spotifyIcon from '../assets/Icons/spotify.svg';
import youtubeIcon from '../assets/Icons/youtube.svg';
import linkedinIcon from '../assets/Icons/linkedin.svg';
import githubIcon from '../assets/Icons/github.svg';
import emailIcon from '../assets/Icons/email.svg';

function Header({home=false}) {
  return (
    <div className='header'>
      {!home ? <Link to={'/'} className='text-link h3'>JEFFCHANG.MP3</Link> : <div></div>}
      <div className='header-icon-container'>
          <HyperLink img={spotifyIcon} url={'https://open.spotify.com/artist/27GE283UaGrIuteEU5c7GZ?si=Sj6INxeyTbWMz5jaxNfI0w'}/>
          <HyperLink img={youtubeIcon} url={'https://www.youtube.com/channel/UCxYGjYe7M7cBsPw1Aw_dOgQ'}/>
          <HyperLink img={linkedinIcon} url={'https://www.linkedin.com/in/jchdesign/'}/>
          <HyperLink img={githubIcon} url={'https://github.com/jchdesign'}/>
          <HyperLink img={emailIcon} url={'mailto:jchang@ischool.berkeley.edu'}/>
      </div>
    </div>
  )
}

export default Header