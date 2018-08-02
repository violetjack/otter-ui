import './index.css'
import Article from './article'
import Button from './button'
import Cell from './cell'
import CellInput from './cell-input'
import ConfirmBox from './message/confirm-box'
import Input from './input'
import Loading from './loading'
import LoadingComp from './loading/loading'
import Nav from './nav'
import PointItem from './point-item'
import SearchBar from './search-bar'
import Tag from './tag'
import Toast from './toast'


const version = '2.2.13'
const install = function (Vue) {
  if (install.installed) { return }

  Vue.component(Article.name, Article)
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
