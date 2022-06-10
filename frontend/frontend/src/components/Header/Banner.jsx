import logo from '../../assets/logo/logo.png';
import Horloge from './Horloge';

function Banner() {
  return (
      <header className='banner'>
        <img src={logo} alt='Groupomania'/>
        <Horloge />
      </header>
  )
}

export default Banner