import React, { Fragment, useState } from 'react';
// import { useRecoilState } from 'recoil';
// import { logout } from '@/pages/login/api';
import { userRoleState } from '@/recoil/atoms/userAtom';
import { NavContainer, NavMenu, NavRight } from './navbar.styled'
import jwt_decode from 'jwt-decode'
import { useRouter } from 'next/router';

interface IMenuList {
  name: string;
  path: string;
}

const menuList: IMenuList[] = [
  {
    name: 'หน้าแรก',
    path: '/'
  },
  {
    name: 'รถทั้งหมด',
    path: '/allCar'
  },
  {
    name: 'รีวิว',
    path: '/review'
  },
  {
    name: 'ติดต่อเรา',
    path: '/contactUs'
  },
]

interface IDecodeToken {
  email: string;
  exp: number;
  name: string;
}

const App: React.FC = () => {
  const router = useRouter()
  const [currentPath, setCurrentPath] = useState(router.pathname)

  // const [role, setRole] = useRecoilState(userRoleState)
  const token: (string | null) = localStorage.getItem('here-tor-accessToken')
  if(token) {
    const decode:IDecodeToken = jwt_decode(token)
    const isExpire = decode.exp * 1000 < Date.now()
    if(isExpire) {
      // logout()
    } else {
      // setRole('admin')
    }
  }
  
  return  (
    <Fragment>
      <NavContainer>
        <div>
          <img src='https://firebasestorage.googleapis.com/v0/b/heartor-car-loei.appspot.com/o/logo.png?alt=media' style={{width: '60px', height: '60px'}} />
        </div>
        <NavRight>
          {menuList.map(menu => (
            <NavMenu to={menu.path} isactive={(currentPath === menu.path).toString()} onClick={() => setCurrentPath(menu.path)}  key={menu.name}>
            {menu.name}
          </NavMenu>
          ))}
        </NavRight>
      </NavContainer>
    </Fragment>
  )
};

export default App;