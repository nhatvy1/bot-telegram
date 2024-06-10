import { NextRequest, NextResponse } from 'next/server'

const privatePaths = ['/']
const authPaths = ['/login', '/register']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const sessionToken = request.cookies.get('sessionToken')?.value

  // // Đăng nhập rồi thì ko cho vào login / register nữa
  // if (authPaths.some((path) => pathname.startsWith(path)) && sessionToken) {
  //   return NextResponse.redirect(new URL('/', request.url))
  // }

  // // Chưa đăng nhập thì không cho vào private paths
  if (privatePaths.some((path) => pathname.startsWith(path)) && !sessionToken) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/']
}
