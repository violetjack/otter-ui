import './packages/index.css'
import Actionsheet from './packages/actionsheet'
import Article from './packages/article'
import Badge from './packages/badge'
import Button from './packages/button'
import MtButton from './packages/button/mt'
import Cell from './packages/cell'
import MtCell from './packages/cell/mt'
import Checklist from './packages/checklist'
import ConfirmBox from './packages/message/confirm-box'
import DatetimePicker from './packages/datetime-picker'
import Field from './packages/field'
import MtField from './packages/field/mt'
import Indicator from './packages/indicator'
import InfiniteScroll from './packages/infinite-scroll'
import Input from './packages/input'
import Lazyload from './packages/lazyload'
import Loading from './packages/loading'
import LoadingComp from './packages/loading/loading'
import MessageBox from './packages/message-box'
import Nav from './packages/nav'
import Navbar from './packages/navbar'
import Picker from './packages/picker'
import PointItem from './packages/point-item'
import Popup from './packages/popup'
import Progress from './packages/progress'
import Radio from './packages/radio'
import range from './packages/range'
import RangePicker from './packages/range-picker'
import SearchBar from './packages/search-bar'
import Spinner from './packages/spinner'
import Swipe from './packages/swipe'
import Switch from './packages/switch'
import Tag from './packages/tag'
import Toast from './packages/toast'
import MToast from './packages/toast-mint'
import merge from './src/utils/merge';


const version = '0.1.4'
const install = function (Vue, config = {}) {
  if (install.installed) { return }

  Vue.component(Actionsheet.name, Actionsheet)
  Vue.component(Article.name, Article)
  Vue.component(Badge.name, Badge)
  Vue.component(Button.name, Button)
  Vue.component(MtButton.name, MtButton)
  Vue.component(Cell.name, Cell)
  Vue.component(MtCell.name, MtCell)
  Vue.component(Checklist.name, Checklist)
  Vue.component(ConfirmBox.name, ConfirmBox)
  Vue.component(DatetimePicker.name, DatetimePicker)
  Vue.component(Field.name, Field)
  Vue.component(MtField.name, MtField)
  Vue.component(Input.name, Input)
  Vue.component(LoadingComp.name, LoadingComp)
  Vue.component(Nav.name, Nav)
  Vue.component(Navbar.name, Navbar)
  Vue.component(Picker.name, Picker)
  Vue.component(PointItem.name, PointItem)
  Vue.component(Popup.name, Popup)
  Vue.component(Progress.name, Progress)
  Vue.component(Radio.name, Radio)
  Vue.component(range.name, range)
  Vue.component(RangePicker.name, RangePicker)
  Vue.component(SearchBar.name, SearchBar)
  Vue.component(Spinner.name, Spinner)
  Vue.component(Swipe.name, Swipe)
  Vue.component(Switch.name, Switch)
  Vue.component(Tag.name, Tag)
  Vue.use(InfiniteScroll);
  Vue.use(Lazyload, merge({
    loading: require('./src/assets/loading-spin.svg'),
    attempt: 3
  }, config.lazyload));

  Vue.$loading = Vue.prototype.$loading = Loading
  Vue.$messagebox = Vue.prototype.$messagebox = MessageBox
  Vue.$toast = Vue.prototype.$toast = Toast
  Vue.$mtoast = Vue.prototype.$mtoast= MToast
  Vue.$indicator = Vue.prototype.$indicator = Indicator
}

export default {
  version,
  install,
  Article,
  Button,
  Cell,
  ConfirmBox,
  Input,
  Loading,
  Nav,
  PointItem,
  SearchBar,
  Tag,
  Toast
}
