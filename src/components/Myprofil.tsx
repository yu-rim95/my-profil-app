import 'swiper/swiper-bundle.css';
import '../App.scss';

function Myprofil() {
  const links = [
    { text: 'Link 1', url: '/link1' },
    { text: 'Link 2', url: '/link2' },
    { text: 'Link 3', url: '/link3' },
  ];
  return (
    <div className='myprofil'>
        <div className="flow-container">
        <ul className="flow-text">
          {links.map((link, index) => (
            <li className="flow-wrap" key={index}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
        <div>
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
            <div className="shooting_star"></div>
        </div>
   
    </div>
  )
}

export default Myprofil
