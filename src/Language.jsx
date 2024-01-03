import React from 'react'
import { useTranslation } from 'react-i18next'
import './Language.css'

const LanguageSelector = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
    <div className="language-selector">
      <button onClick={() => changeLanguage('fi')}>FI</button>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('vi')}>VI</button>
    </div>
  )
}

export default LanguageSelector
