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
    title: 'User Management',
    icon: IconUser,
    href: '/user-management'
  },
  {
    id: uniqueId(),
    title: 'Role Management',
    icon: IconShieldLock,
    href: '/role-management'
  },
  {
    id: uniqueId(),
    title: 'File Management',
    icon: IconFile,
    href: '/file-management'
  },
]

export default Menuitems
