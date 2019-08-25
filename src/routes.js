import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views


import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";


import Home from './redux components/homecontainer';
import Teams from './redux components/teamcontainer'
import AddTeam from './redux components/addteamcontainer'
import Articles from './redux components/articlescontainer'
import AddArticles from './redux components/addarticlescontainer'





export default [
  {
    path: "/admin",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: Home
  }
  ,
  {
    path:'/home',
    layout: DefaultLayout,
    component: Home
  },
  {
    path:'/teams',
    layout: DefaultLayout,
    component: Teams
  },
  {
    path:'/addteams',
    layout: DefaultLayout,
    component: AddTeam
  },
  {
    path:'/articles',
    layout: DefaultLayout,
    component: Articles
  },
  {
    path:'/addarticles',
    layout: DefaultLayout,
    component: AddArticles
  }
];
