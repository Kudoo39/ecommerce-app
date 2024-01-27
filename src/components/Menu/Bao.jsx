import React from 'react'
import img from '../../assets/bao3.jpg'
import './Bao.css'
import { useTranslation } from 'react-i18next'

const Bao = () => {
  const { t } = useTranslation()

  const menuItems = [
    {
      id: 1,
      name: t('bao.names1'),
      price: '€5.50'
    },
    {
      id: 2,
      name: t('bao.names2'),
      price: '€5.90'
    },
    {
      id: 3,
      name: t('bao.names3'),
      price: '€5.50'
    },
    {
      id: 4,
      name: t('bao.names4'),
      price: '€5.20'
    },
    {
      id: 5,
      name: t('bao.names5'),
      price: '€5.50'
    }
  ]

  return (
    <div className="bao-menu-container">
      <div className="bao-image">
        <img src={img} alt="Photo about Bao" />
      </div>
      <div className="bao-menu-items">
        {menuItems.map((item) => (
          <div className="bao-menu-item" key={item.id}>
            <h2>
              {item.id}. {item.name}
            </h2>
            <h4>{item.price}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bao
