import qs from 'qs'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import XYZ from 'ol/source/XYZ'
import TileGrid from 'ol/tilegrid/TileGrid'
import WMTSGrid from 'ol/tilegrid/WMTS'
import WMTS from 'ol/source/WMTS'
import TileImage from 'ol/source/TileImage'
import {get as getProj} from 'ol/proj'
import {getWidth, getTopLeft} from 'ol/extent'
import TileSuperMapRest from './plugins/TileSuperMapRest'
import {validate, get as getConfig} from './setting'


function getWMTSGrid() {
  const tileSizePixels = 256
  const projection = getProj('EPSG:4326')
  const projectionExtent = projection.getExtent();
  const size = getWidth(projectionExtent) / tileSizePixels
  let matrixIds = [];
  let resolutions = [];
  for (let i = 0; i <= 20; i++) {
    matrixIds[i] = i;
    resolutions[i] = size / Math.pow(2, i);
  }
  return new WMTSGrid({
    origin: getTopLeft(projectionExtent),
    resolutions: resolutions,
    matrixIds: matrixIds
  });
}

function getFcOrigins() {
  let origins = []
  for (let i = 0; i < 20; i++) {
    const item = i < 7 ? [64, 64] : [107.5, 28]
    origins.push(item)
  }
  return origins
}

function getFcResolutions() {
  const result = []
  const first = 2.0000081722216954
  for (let i = 0; i < 20; i++) {
    const item = first / Math.pow(2, i)
    result.push(item)
  }
  return result
}

// 创建百度地图图层
function createBaiduLayer(config) {
  const projection = getProj('EPSG:3857')
  
  const tileGrid = new TileGrid({
    origin: [0, 0],
    resolutions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
      .map(function (x) {
        return Math.pow(2, 18 - x)
      })
  });
  // https://github.com/openlayers/openlayers/releases/tag/v6.0.0
  // New internal tile coordinates
  let source = new TileImage({
    projection: projection,
    tileGrid: tileGrid,
    tileUrlFunction: function (tileCoord) {
      const z = tileCoord[0];
      const x = tileCoord[1];
      const y = -tileCoord[2] - 1;
      const index = Math.ceil(Math.random() * 5)
      return config.server.replace(/{x}/g, x)
        .replace(/{y}/g, y)
        .replace(/{z}/g, z)
        .replace(/{index}/g, index)
    }
  });
  
  return new TileLayer({
    source: source
  })
  
}

// 创建方正地图图层
function createFounderLayer(config) {
  const tileGrid = getWMTSGrid()
  const basePath = config.server
  return new TileLayer({
    source: new WMTS({
      url: basePath,
      tileGrid: tileGrid
    }),
    wrapX: false
  })
}

// 山海经纬 PGIS
function createEzMapLayer(config) {
  // const basePath = 'http://10.8.6.103/PGIS_S_TileMapServer/Maps/BJSL/EzMap?Service=getImage&Type=RGB&ZoomOffset=0'
  const basePath = config.server
  const tileGrid = getWMTSGrid()
  
  return new TileLayer({
    source: new WMTS({
      url: '',
      crossOrigin: 'Anonymous',
      tileGrid: tileGrid,
      tileLoadFunction(imageTile, src) {
        const query = qs.parse(src)
        const params = {
          Row: query.TileRow,
          Col: query.TileCol,
          Zoom: query.TileMatrix,
          V: '1.0.0'
        }
        imageTile.getImage().src = `${basePath}&${qs.stringify(params)}`;
      }
    }),
    wrapX: false
  })
}

// 航天长峰、航天精一 PGIS
function createFcMapLayer(config) {
  // http://68.26.21.71/images/GetImage.do?method=showImageRedisBytable&jinyi_admin:MA_PGISSLDT&version=v1
  const basePath = config.server
  
  return new TileLayer({
    projection: 'EPSG:4326',
    url: `${basePath}&l={z}&x={y}&y={x}`,
    tileGrid: new TileGrid({
      origin: config.origins || getFcOrigins(),
      resolutions: config.resolutions || getFcResolutions()
    })
  })
}

/**
 * 天地图
 * @param {string} t
 *
 * vec_w: 矢量底图
 * cva_w: 矢量注记
 * img_w: 卫星影像底图
 * cia_w: 影像注记
 * ter_w: 地形底图
 * cta_w: 地形注记
 * ibo_w: 境界（省级以上）
 */
function createTdtLayer(t = 'vec_c') {
  return new TileLayer({
    source: new XYZ({
      url: 'http://t{0-7}.tianditu.com/DataServer?T=' + t + '&x={x}&y={y}&l={z}&tk=464554f64aa4f4e90e0321c17a57a331'
    })
  })
}


/**
 * 创建地图图层
 * @param {String} key 地图图层配置名称
 * @return {TileLayer} TileLayer
 *
 * @example
 *
 * new Map({
 *           layers: [createLayer('Baidu')],
 *           target: this.$refs.map,
 *           view: new View({
 *              projection: 'EPSG:4326',
 *              center: [120, 30],
 *              zoom: 4
 *           })
 *       })
 */
export function createLayer(key = 'OSM') {
  
  if (!validate(key)) return null
  
  const config = getConfig(key)
  let layer = null
  switch (key) {
    case 'OSM':
      layer = new TileLayer({
        source: new OSM()
      })
      break
    // Google和高德的方式相同
    case 'Google':
    case 'Amap':
      layer = new TileLayer({
        source: new XYZ({
          url: config.server
        })
      })
      break
    case 'Baidu':
      layer = createBaiduLayer(config)
      break
    case 'SuperMap':
      layer = new TileLayer({
        source: new TileSuperMapRest({
          url: config.server
        }),
        projection: 'EPSG:4326'
      })
      break
    case 'Founder':
      layer = createFounderLayer(config)
      break
    case 'TDT':
      layer = (config.server || []).map(type => createTdtLayer(type))
      break
    case 'EzMap':
      layer = createEzMapLayer(config)
      break;
    case 'FcMap':
      layer = createFcMapLayer(config)
      break
    case 'Custom':
      if (typeof config.handler === 'function') {
        layer = config.handler({
          TileLayer,
          XYZ,
          TileGrid,
          WMTSGrid,
          WMTS,
          TileImage,
          getProj,
          getWidth,
          getTopLeft
        }, config)
      }
      break
  }
  // console.log(layer.length)
  if (layer.length) {
    layer.forEach((l) => {
      l.setProperties({'layerType': 'tile-layer'})
    })
  } else {
    layer.setProperties({'layerType': 'tile-layer'})
  }
  

  return layer
}
