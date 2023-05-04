import React from 'react'
import mainStyle from './Main.module.scss'

const Main = () => {
  return (
    <>
      <div className={mainStyle.container}>
        <div className={mainStyle.content}>
          <div className={mainStyle.item}>
            <div className={mainStyle.text}>
              <h1 className={mainStyle.text_h1}>
                Начни творить в программировании
              </h1>
              <p className={mainStyle.text_p}>
                Выбери свой формат - от тестовых краткосрочных курсов, до 9{' '}
                <br />
                месяцев полноценного обучения профессии
              </p>
            </div>
            <div className={mainStyle.btns}>
              <button className={mainStyle.btns_blue}>
                Получить консультанию
              </button>
              <button className={mainStyle.btns_white}>
                Тест на профориентацию
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
