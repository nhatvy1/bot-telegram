import {
  IconLayoutDashboard,
  IconUser,
  IconShieldLock,
  IconFile 
} from '@tabler/icons-react'

import { uniqueId } from 'lodash'

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home'
  },
  {
    id: uniqueId(),
    title: 'Trang chủ',
    icon: IconLayoutDashboard,
    href: '/'
  },
  {
    id: uniqueId(),
    title: 'Người dùng',
    icon: IconUser,
    href: '/user-management'
  },
  {
    id: uniqueId(),
    title: 'Phân quyền',
    icon: IconShieldLock,
    href: '/role-management'
  },
  {
    id: uniqueId(),
    title: 'Tập tin (File)',
    icon: IconFile,
    href: '/file-management'
  },
]

export default Menuitems
