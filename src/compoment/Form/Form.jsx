import Text from 'compoment/Text/Text'
import React, { useState } from 'react'
import formStyle from './Form.module.scss'

const Form = ({ title, handleClick, p, link, a, name }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  return (
    <div>
      <div className={formStyle.first_container}>
        <div className={formStyle.first}>
          <h3 className={formStyle.first_h3}>{name}</h3>
          <div className={formStyle.first_item}>
            <input
              className={formStyle.input_big}
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className={formStyle.first_item}>
            <input
              className={formStyle.input_big}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
          </div>
          <button
            className={formStyle.btn}
            onClick={() => handleClick(email, pass)}
          >
            {title}
          </button>

          <div className={formStyle.first_text}>
            <Text p={p} link={link} a={a} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
