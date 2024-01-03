import './Special.css'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../assets/cake1.jpg'
import img2 from '../../assets/cake2.jpg'
import img3 from '../../assets/cake3.jpg'
import { useTranslation } from 'react-i18next'

const Special = () => {
  const { t } = useTranslation()

  return (
    <div className="gray_background">
      <Carousel className="cake-container" data-bs-theme="dark">
        <Carousel.Item>
          <div className="carousel-content">
            <div className="bordered-box">
              <img src={img1} alt="Cake 1" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content">
            <div className="bordered-box">
              <img src={img2} alt="Cake 2" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content">
            <div className="bordered-box">
              <img src={img3} alt="Cake 3" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
export default Special
