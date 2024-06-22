'use client'
import { styled } from '@mui/material'
import Box from '@mui/material/Box'

import { ReactNode, useState } from 'react'
import Sidebar from '@/components/layout/sidebar/Sidebar'
import Header from '@/components/layout/header/Header'

const MainWrapper = styled('div')(() => ({
  display: 'flex',
  minHeight: '100vh',
  width: '100%'
}))

const PageWrapper = styled('div')(() => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  zIndex: 1,
  backgroundColor: 'transparent',
  overflow: 'auto'
}))

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  return (
    <MainWrapper className='mainwrapper'>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={() => setMobileSidebarOpen(false)}
      />
      <PageWrapper className='page-wrapper'>
        <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />
        <Box p={4}>
          <Box sx={{ minHeight: 'calc(100vh - 170px)' }}>{children}</Box>
        </Box>
      </PageWrapper>
    </MainWrapper>
  )
}
