import React from 'react'

import styles from './UserCreate.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { addUserAction } from '../../store/userReducer'

function UserCreate() {
  const [user, setUser] = React.useState({
    id: 0,
    mail: '',
    name: '',
    gender: '',
    showError: false
  })
  const [mailError, setMailError] = React.useState('ошибка')
  const [nameError, setNameError] = React.useState('')
  const [genderError, setGenderError] = React.useState('')

  const dispatch = useDispatch()

  React.useEffect(() => {
    if (!!user.showError) {
      user.name.length < 3 ? setNameError('не может быть короче 3 символов') : setNameError('')
    }
  }, [user])

  const handleChangeMail = (e) => {
    setUser({
      ...user,
      mail: e.target.value
    })
  }
  const handleChangeName = (e) => {
    setUser({
      ...user,
      name: e.target.value,
      showError: true
    })
  }
  const handleChangeSelect = (e) => {
    setUser({
      ...user,
      gender: e.target.value
    })
  }
  const isValidMail = (mail) => {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(mail).toLowerCase())
  }
  const isValidUser = () => {
    return user.name && user.gender && isValidMail(user.mail)
  }
  const clearForm = () => {
    setUser({
      ...user,
      mail: '',
      name: '',
      gender: '',
      showError: false
    })
  }
  const addUser = () => {
    setUser({
      ...user,
      id: user.id++
    })
    dispatch(addUserAction(user))
    clearForm()
  }


  return (
    <div className={styles.forms}>
      <h1>Создать пользователя</h1>
      {!isValidMail(user.mail)
        ?
        (<span>Введите корректный email</span>) : null
      }
      <input type="mail" placeholder='Email*' value={user.mail} onChange={handleChangeMail} required />
      {nameError && <span style={{ color: "red" }}>{nameError}</span>}
      <input type="text" placeholder='ФИО' value={user.name} onChange={handleChangeName} required />
      {<span style={{ color: "red" }}>{genderError}</span>}
      <select className={styles.select} onChange={handleChangeSelect} value={user.gender}>
        <option value='' >Выбрать пол</option>
        <option value="Мужской">Мужской</option>
        <option value="Женский">Женский</option>
        <option value="Иное">Иное</option>
      </select>
      <button
        className={`${styles.btn} ${!isValidUser() ? '' : styles.active}`}
        onClick={addUser}
        disabled={!isValidUser()}
      >Создать</button>
    </div >
  )
}

export default UserCreate