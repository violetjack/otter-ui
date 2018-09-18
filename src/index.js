import 'packages/index.css'
import Actionsheet from 'packages/actionsheet'
import Article from 'packages/article'
import Badge from 'packages/badge'
import Button from 'packages/button'
import Cell from 'packages/cell'
import Checklist from 'packages/checklist'
import ConfirmBox from 'packages/message/confirm-box'
import DatetimePicker from 'packages/datetime-picker'
import Field from 'packages/field'
import Indicator from 'packages/indicator'
import InfiniteScroll from 'packages/infinite-scroll'
import Input from 'packages/input'
import Lazyload from 'packages/lazyload'
import Loading from 'packages/loading'
import LoadingComp from 'packages/loading/loading'
import MessageBox from 'packages/message-box'
import Nav from 'packages/nav'
import Navbar from 'packages/navbar'
import Picker from 'packages/picker'
import PointItem from 'packages/point-item'
import Popup from 'packages/popup'
import Progress from 'packages/progress'
import Radio from 'packages/radio'
import range from 'packages/range'
import RangePicker from 'packages/range-picker'
import SearchBar from 'packages/search-bar'
import Spinner from 'packages/spinner'
import Swipe from 'packages/swipe'
import Switch from 'packages/switch'
import Tag from 'packages/tag'
import Toast from 'packages/toast'
import MToast from 'packages/toast-mint'
import merge from './utils/merge';


const version = '0.1.4'

const components = [
  Actionsheet,
  Article,
  Badge,
  Button,
  Cell,
  Checklist,
  ConfirmBox,
  DatetimePicker,
  Field,
  Input,
  LoadingComp,
  Nav,
  Navbar,
  Picker,
  PointItem,
  Popup,
  Progress,
  Radio,
  range,
  RangePicker,
  SearchBar,
  Spinner,
  Swipe,
  Switch,
  Tag
]

const install = function (Vue, config = {}) {
  if (install.installed) { return }

  components.map(component => {
    Vue.component(component.name, component)
  })

  Vue.use(InfiniteScroll);
  Vue.use(Lazyload, merge({
    loading: require('./assets/loading-spin.svg'),
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
