import '../style/index.css'
import TyhButton from '../packages/button'
import TyhList from '../packages/list'
import TyhCard from '../packages/card'
import TyhTag from '../packages/tag'
import TyhLink from '../packages/link'
import TyhMenu from '../packages/menu'
import TyhMenuItem from '../packages/menu-item'
import TyhDivision from '../packages/division'
import TyhIcon from '../packages/icon'
import TyhCrumbs from '../packages/crumbs'
import TyhCrumbsItem from '../packages/crumbs-item'
import TyhInput from '../packages/input'

const components = [
  TyhButton,
  TyhList,
  TyhCard,
  TyhTag,
  TyhLink,
  TyhMenu,
  TyhMenuItem,
  TyhDivision,
  TyhIcon,
  TyhCrumbs,
  TyhCrumbsItem,
  TyhInput
]

const install = app => {
  components.forEach(component => {
    app.use(component)
  })
}

const tyhUi = {
  version: "1.1.2",
  install
}

export {
  install,
  TyhButton,
  TyhList,
  TyhCard,
  TyhTag,
  TyhLink,
  TyhMenu,
  TyhMenuItem,
  TyhDivision,
  TyhIcon,
  TyhCrumbs,
  TyhCrumbsItem,
  TyhInput
}

export default tyhUi
