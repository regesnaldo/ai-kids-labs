import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: [
    "/kids/:path*",
    "/adultos/:path*",
    "/dashboard/:path*",
    "/perfil/:path*",
    "/cursos/:path*",
  ],
};
