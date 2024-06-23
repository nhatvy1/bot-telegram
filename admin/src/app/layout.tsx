import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './global.css'
import AppProvider from '@/context/AppProvider'
import { cookies } from 'next/headers'
import MuiProvider from '@/theme/ThemeProvider'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')

  return (
    <html lang='en'>
      <body>
        <MuiProvider>
          <AppProvider initialToken={sessionToken?.value}>
            {children}
            <ToastContainer
              position='top-right'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='light'
            />
          </AppProvider>
        </MuiProvider>
      </body>
    </html>
  )
}
