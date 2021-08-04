import Feature from 'ol/Feature'
import {getParent, mapReady} from 'utils/util'

export default {
  methods: {
    /**
     * 在地图上画图形
     */
    draw() {
      // createGeometry 方法由父类实现
      const geometry = this.createGeometry()
      this.feature = new Feature(geometry)
      this.setStyle()
      // 在图形实例记录当前vue组件的实例引用，方便从事件中取会vue组件实例
      this.feature._vm = this
      // 在图层上画图形
      if (this.parent) {
        this.parent.addFeature(this.feature)
        this.parent.bindEvents(this)
      }
      // 绘制完成事件
      this.$emit('draw', this.feature)
    },
    /**
     * 更新图形对象，不包括图形样式
     */
    update() {
      if (!this.feature) return
      
      const geometry = this.createGeometry()
      // 更新图形
      this.feature.setGeometry(geometry)
      
      // 更新完成事件
      this.$emit('update', this.feature)
    },
    /**
     * 更新图形样式
     */
    setStyle() {
      // createStyle 方法由父类实现
      const style = this.createStyle()
      this.feature && this.feature.setStyle(style)
    },
    /**
     * 重画图形，包括图形对象和样式
     */
    redraw() {
      this.update()
      this.setStyle()
    }
  },
  created() {
    // 获取地图组件实例
    this.parent = getParent.call(this)
  },
  mounted() {
    mapReady.call(this, this.draw)
  },
  beforeDestroy() {
    if (this.parent && this.feature) {
      this.feature._vm = null
      this.feature.disposeInternal()
      this.parent.removeFeature(this.feature)
      this.parent.unbindEvents(this)
    }
  }
  
}
