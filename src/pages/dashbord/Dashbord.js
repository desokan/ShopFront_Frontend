import { useNavigate } from 'react-router-dom'
import classes from './Dashbord.module.css'
import React, { useState, useContext, useEffect } from 'react'
import Orders from './Orders'
import { DashbordNavigation } from '../../App'
import Addresses from './Addresses'
import Account from './Account'
import Wishlist from './Wishlist'

const Dashbord = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user') || {})
  )
  const navigate = useNavigate()
  const [dashbordNavigation, setDashbordNavigation] =
    useContext(DashbordNavigation)

  const [title, setTitle] = useState(dashbordNavigation)
  const handleTitle = (newTitle) => {
    setTitle(newTitle)
  }
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/')
  }
  console.log('user', user)
  const rightContent = () => {
    if (title === 'ORDERS') {
      return <Orders />
    } else if (title === 'ADDRESSES') {
      return <Addresses />
    } else if (title === 'ACCOUNT DETAILS') {
      return <Account />
    } else if (title === 'WISHLIST') {
      return <Wishlist />
    } else {
      return (
        <div className={classes.rightSectionContainer}>
          <div className={classes.rightSectionTextContainer}>
            <p className={classes.userInfo}>
              Hello <b>{user.username}</b> (not <b>{user.username}</b>?{' '}
              <span className={classes.span} onClick={handleLogout}>
                Log out
              </span>
              )
            </p>
            <p>
              From your account dashboard you can view your{' '}
              <span className={classes.span} onClick={() => setTitle('ORDERS')}>
                recent orders
              </span>
              , manage your{' '}
              <span
                className={classes.span}
                onClick={() => setTitle('ADDRESSES')}
              >
                shipping and billing addresses
              </span>
              , and{' '}
              <span
                className={classes.span}
                onClick={() => setTitle('ACCOUNT DETAILS')}
              >
                edit your password and account details
              </span>
              .
            </p>
          </div>
        </div>
      )
    }
  }
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <h1 className={classes.title}>{title}</h1>
        <ul className={classes.ul}>
          <li
            className={classes.listItem}
            onClick={() => handleTitle('DASHBOARD')}
          >
            DASHBOARD
          </li>
          <li
            className={classes.listItem}
            onClick={() => handleTitle('ORDERS')}
          >
            ORDERS
          </li>
          <li
            className={classes.listItem}
            onClick={() => handleTitle('ADDRESSES')}
          >
            ADDRESSES
          </li>
          <li
            className={classes.listItem}
            onClick={() => handleTitle('ACCOUNT DETAILS')}
          >
            ACCOUNT DETAILS
          </li>
          <li
            className={classes.listItem}
            onClick={() => handleTitle('WISHLIST')}
          >
            WISHLIST
          </li>
          <li className={classes.listItem} onClick={handleLogout}>
            LOGOUT
          </li>
        </ul>
      </div>
      <div className={classes.right}>{rightContent()}</div>
    </div>
  )
}

export default Dashbord
