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
    title: 'Home Page',
    icon: IconLayoutDashboard,
    href: '/dashboard'
  },
  {
    id: uniqueId(),
    title: 'User Management',
    icon: IconUser,
    href: '/dashboard/user-management'
  },
  {
    id: uniqueId(),
    title: 'Role Management',
    icon: IconShieldLock,
    href: '/dashboard/role-management'
  },
  {
    id: uniqueId(),
    title: 'File Management',
    icon: IconFile,
    href: '/dashboard/file-management'
  },
]

export default Menuitems
