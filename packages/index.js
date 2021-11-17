import Map from './map'
import Text from './text'
import Rectangle from './rectangle'
import Polygon from './polygon'
import Circle from './circle'
import Line from './line'
import Placement from './placement'
import Pointer from './pointer'
import Image from './image'
import Overview from './overview'
import Zoom from './zoom'
import Scale from './scale'
import Html from './html'
import Icon from './icon'
import Popup from './popup'
import Heat from './heat'
import Echarts from './echarts'
import Track from './track'
import Type from './type'
import Draw from './draw'

import '../theme/index.scss'

const components = [
  Map,
  Text,
  Rectangle,
  Polygon,
  Circle,
  Line,
  Placement,
  Pointer,
  Image,
  Overview,
  Zoom,
  Scale,
  Html,
  Icon,
  Popup,
  Heat,
  Echarts,
  Track,
  Type,
  Draw
]

const install = function (Vue) {
  if (install.installed) return
  
  components.forEach(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}


export const XdhMap = Map
export const XdhMapText = Text
export const XdhMapRectangle = Rectangle
export const XdhMapPolygon = Polygon
export const XdhMapCircle = Circle
export const XdhMapLine = Line
export const XdhMapPlacement = Placement
export const XdhMapPointer = Pointer
export const XdhMapOverview = Overview
export const XdhMapZoom = Zoom
export const XdhMapScale = Scale
export const XdhMapImage = Image
export const XdhMapHtml = Html
export const XdhMapIcon = Icon
export const XdhMapPopup = Popup
export const XdhMapHeat = Heat
export const XdhMapEcharts = Echarts
export const XdhMapTrack = Track
export const XdhMapType = Type
export const XdhMapDraw = Draw

export default {
  version: '1.0.0',
  install,
  Map,
  Text,
  Rectangle,
  Polygon,
  Circle,
  Line,
  Placement,
  Pointer,
  Overview,
  Zoom,
  Scale,
  Image,
  Html,
  Icon,
  Popup,
  Heat,
  Echarts,
  Track,
  Type,
  Draw
}


