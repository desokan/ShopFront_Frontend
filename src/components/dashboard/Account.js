import { useState } from 'react'
import classes from './Account.module.css'
import { useTranslation } from 'react-i18next'
const Account = () => {
  const {t} = useTranslation()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    displayName: '',
    emailAddress: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
    <form>
      <div className={classes.nameContainer}>
        <input
          type="text"
          className={classes.nameInputs}
          placeholder={t("accountDetails.first")}
          value={formData.firstName}
          name="firstName"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          className={classes.nameInputs}
          placeholder={t("accountDetails.last")}
          value={formData.lastName}
          name="lastName"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className={classes.DisplayNameEmail}>
        <input
          type="text"
          className={classes.nameInputs}
          placeholder={t("accountDetails.display")}
          value={formData.displayName}
          name="displayName"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          className={classes.nameInputs}
          placeholder={t("accountDetails.email")}
          value={formData.emailAddress}
          name="emailAddress"
          onChange={(e) => handleChange(e)}
        />
        <h4>{t("accountDetails.change")}</h4>
        <input
        id={classes.noMargin}
          type="text"
          className={classes.nameInputs}
          placeholder={t("accountDetails.current")}
          value={formData.currentPassword}
          name="currentPassword"
          onChange={(e) => handleChange(e)}
        />{' '}
        <input
          type="text"
          className={classes.nameInputs}
          placeholder={t("accountDetails.new")}
          value={formData.newPassword}
          name="newPassword"
          onChange={(e) => handleChange(e)}
        />{' '}
        <input
          type="text"
          className={classes.nameInputs}
          placeholder={t("accountDetails.confirm")}
          value={formData.confirmPassword}
          name="confirmPassword"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button type="submit" className={classes.submit}>
      {t("accountDetails.button")}
      </button>
    </form>
  )
}
export default Account
