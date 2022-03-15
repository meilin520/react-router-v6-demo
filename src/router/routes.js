import Layout from "../layout";
import Home from "../views/Home";
import Repos from "../views/Repos";
import About from "../views/About";
import ImageView from "../views/ImageView";
import NoMatch from "../views/NoMatch";
import Gallery from "../views/Gallery";
import AuthLayout from "../views/Auth";
import LoginPage from "../views/Auth/LoginPage";
import PublicPage from "../views/Auth/PublicPage";
import ProtectedPage from "../views/Auth/ProtectedPage";

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "",
        name: "home",
        index: true,
        component: Home,
      },
      {
        path: "/repos",
        name: "repos",
        meta: {
          keepAlive: true,
        },
        component: Repos,
      },
      {
        path: "/about",
        name: "about",
        component: About,
      },
      {
        path: "/img/:id",
        name: "imageview",
        component: ImageView,
      },
      {
        path: "/gallery",
        name: "gallery",
        component: Gallery,
      },
      {
        path: "/auth",
        name: "AuthLayout",
        component: AuthLayout,
        children: [
          {
            path: "",
            name: "PublicPage",
            component: PublicPage,
          },
          {
            path: "login",
            name: "LoginPage",
            component: LoginPage,
          },
          {
            path: "protected",
            name: "ProtectedPage",
            meta: {
                requireAuth: true,
            },
            component: ProtectedPage,
          },
        ],
      },
      {
        path: "*",
        name: "nomatch",
        component: NoMatch,
      },
    ],
  },
];

export default routes;
