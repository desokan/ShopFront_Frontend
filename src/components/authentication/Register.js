import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './Register.module.css'
import BackDrop from '../util/Backdrop'
import { motion } from 'framer-motion'
import CloseIcon from '../svgs/CloseIcon'
import { useTranslation } from 'react-i18next'

const Register = ({ closeRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  })
  const { t } = useTranslation()
  const [errorMessage, setErrorMessage] = useState('')
  const [failed, setFailed] = useState(false)
  const [red, setRed] = useState('')
  const [shake, setShake] = useState('')
  const sk = 'shake 0.2s ease-in-out 0s 2'

  const handleCloseRegister = () => {
    closeRegister(false)
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  function handleSubmit(e) {
    e.preventDefault()

    const opts = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }

    async function register() {
      try {
        const registerRes = await fetch(
          'https://determined-trench-coat-mite.cyclic.app/register',
          opts
        )

        const data = await registerRes.json()
        if (registerRes.status === 200 || registerRes.status === 201) {
          handleCloseRegister()
          localStorage.setItem('token', data.token)

        } else {
          setErrorMessage(data.errors)
          setFailed(true)
          setRed('red')
          setShake(sk)
        }
      } catch (error) {}
    }

    register()
  }

  return (
    <div className={classes.backDrop}>
      <BackDrop />
      <motion.div
        className={classes.registerBox}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={classes.closeRegisterForm}>
          <p className={classes.registerText}> {t('register.Register')}</p>
          <button
            className={classes.closeRegister}
            onClick={handleCloseRegister}
          >
            <CloseIcon />
          </button>
        </div>
        <form className={classes.registerForm} onSubmit={handleSubmit}>
          <input
            style={{
              color: `${red}`,
              animation: `${shake}`
            }}
            className={classes.textBox}
            type="text"
            placeholder={t('register.Username')}
            onChange={(e) => handleChange(e)}
            value={formData.username}
            name="username"
          />
          <input
            style={{
              color: `${red}`,
              animation: `${shake}`
            }}
            className={classes.textBox}
            type="text"
            placeholder={t('register.Email')}
            onChange={(e) => handleChange(e)}
            value={formData.email}
            name="email"
          />
          <input
            style={{
              color: `${red}`,
              animation: `${shake}`
            }}
            className={classes.textBox}
            type="password"
            placeholder={t('register.Password')}
            onChange={(e) => handleChange(e)}
            value={formData.password}
            name="password"
            required
          />
          {!failed && <div className={classes.error}> </div>}
          {failed && <div className={classes.error}>{errorMessage}</div>}
          <br />
          <p className={classes.personalData}>{t('register.Text')}</p>

          <button className={classes.registerButton} type="submit">
            {t('register.Register')}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default Register
