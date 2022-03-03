import React from 'react'

import style from './UserList.module.scss'
import { useSelector, useDispatch } from 'react-redux'

import { removeUserAction } from '../../store/userReducer'



function UserList() {

  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  const removeUser = (id) => {
    dispatch(removeUserAction(id))
  }
  return (
    <div className={style.user}>
      {users.length > 0 ?
        <div>
          {users.map((item, i) =>
            <div className={style.item} key={item.id}>
              <span>Email: {item.mail}</span>
              <span>ФИО: {item.name}</span>
              <span>ПОЛ: {item.gender}</span>
              <span className={`material-icons ${style.icon}`}
                onClick={() => removeUser(item.id)}>
                close
              </span>
            </div>
          )}
        </div>
        : null}
    </div>
  )
}

export default UserList