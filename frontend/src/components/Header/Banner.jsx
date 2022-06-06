import logo from '../../assets/logo/logo.png';
import Horloge from './Horloge';

function Banner() {
  return (
      <div className='banner'>
        <img src={logo} alt='Groupomania'/>
        <Horloge />
      </div>
  )
}

export default Banner