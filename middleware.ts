import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // 미들웨어 로직
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // token이 없으면 로그인 페이지로 리다이렉트
        return !!token;
      },
    },
    pages: {
      signIn: "/login",
    },
  },
);

// 미들웨어를 적용할 경로 설정
export const config = {
  matcher: [
    /*
     * 다음 경로들을 제외한 모든 요청에 미들웨어를 적용합니다:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - login (로그인 페이지)
     * - public 폴더
     */
    "/((?!api|_next/static|_next/image|favicon.ico|login|public).*)",
  ],
};
