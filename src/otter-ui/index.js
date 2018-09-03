import './packages/index.css'
import Actionsheet from './packages/actionsheet'
import Article from './packages/article'
import Badge from './packages/badge'
import Button from './packages/button'
import Cell from './packages/cell'
import CellInput from './packages/cell-input'
import ConfirmBox from './packages/message/confirm-box'
import Input from './packages/input'
import Loading from './packages/loading'
import LoadingComp from './packages/loading/loading'
import Nav from './packages/nav'
import PointItem from './packages/point-item'
import SearchBar from './packages/search-bar'
import Tag from './packages/tag'
import Toast from './packages/toast'


const version = '0.1.3'
const install = function (Vue) {
  if (install.installed) { return }

  Vue.component(Actionsheet.name, Actionsheet)
  Vue.component(Article.name, Article)
  Vue.component(Badge.name, Badge)
  Vue.component(Button.name, Button)
  Vue.component(Cell.name, Cell)
  Vue.component(CellInput.name, CellInput)
  Vue.component(ConfirmBox.name, ConfirmBox)
  Vue.component(Input.name, Input)
  Vue.component(LoadingComp.name, LoadingComp)
  Vue.component(Nav.name, Nav)
  Vue.component(PointItem.name, PointItem)
  Vue.component(SearchBar.name, SearchBar)
  Vue.component(Tag.name, Tag)

  Vue.prototype.$loading = Loading
  Vue.prototype.$toast = Toast
}

export default {
  version,
  install,
  Article,
  Button,
  Cell,
  CellInput,
  ConfirmBox,
  Input,
  Loading,
  Nav,
  PointItem,
  SearchBar,
  Tag,
  Toast
}
