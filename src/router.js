import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Article from './views/Article.vue'
import Button from './views/Button.vue'
import Cell from './views/Cell.vue'
import CellInput from './views/CellInput.vue'
import Input from './views/Input.vue'
import Loading from './views/Loading.vue'
import Message from './views/Message.vue'
import Nav from './views/Nav.vue'
import PointItem from './views/PointItem.vue'
import SearchBar from './views/SearchBar.vue'
import Tag from './views/Tag.vue'
import Toast from './views/Toast.vue'
import CommonCss from './views/CommonCss.vue'

Vue.use(Router)

export const compRoutes = [
  {
    path: '/article',
    name: 'article',
    component: Article
  },
  {
    path: '/button',
    name: 'button',
    component: Button
  },
  {
    path: '/cell',
    name: 'cell',
    component: Cell
  },
  {
    path: '/cell-input',
    name: 'cell-input',
    component: CellInput
  },
  {
    path: '/input',
    name: 'input',
    component: Input
  },
  {
    path: '/loading',
    name: 'loading',
    component: Loading
  },
  {
    path: '/message',
    name: 'message',
    component: Message
  },
  {
    path: '/nav',
    name: 'nav',
    component: Nav
  },
  {
    path: '/point-item',
    name: 'point-item',
    component: PointItem
  },
  {
    path: '/search-bar',
    name: 'search-bar',
    component: SearchBar
  },
  {
    path: '/tag',
    name: 'tag',
    component: Tag
  },
  {
    path: '/toast',
    name: 'toast',
    component: Toast
  },
  {
    path: '/common-css',
    name: 'common-css',
    component: CommonCss
  }
]

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    ...compRoutes
  ]
})

