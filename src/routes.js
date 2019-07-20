import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import Home from './views/home';
import Teams from './views/teams'
import AddTeam from './views/addteam'
import Articles from './views/articles'
import AddArticles from './views/addarticles'

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
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
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
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