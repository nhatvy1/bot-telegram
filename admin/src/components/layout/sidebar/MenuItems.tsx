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
    href: '/dashboard'
  },
  {
    id: uniqueId(),
    title: 'Người dùng',
    icon: IconUser,
    href: '/dashboard/user-management'
  },
  {
    id: uniqueId(),
    title: 'Phân quyền',
    icon: IconShieldLock,
    href: '/dashboard/role-management'
  },
  {
    id: uniqueId(),
    title: 'Tập tin (File)',
    icon: IconFile,
    href: '/dashboard/file-management'
  },
]

export default Menuitems
