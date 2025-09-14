var viewer = new Cesium.Viewer('cesiumContainer', {
    animation: false, 
    baseLayerPicker: false, 
    fullscreenButton: false, 
    geocoder: false, 
    homeButton: false, 
    sceneModePicker: false,
    selectionIndicator: false,
    timeline: false,
    navigationHelpButton: false,
    infoBox: false,    
    navigationInstructionsInitiallyVisible: false,
});
viewer.scene.fxaa = false;
viewer.scene.postProcessStages.fxaa.enabled = true;
viewer.scene.screenSpaceCameraController.minimumZoomDistance = 25;
viewer.scene.screenSpaceCameraController.maximumZoomDistance = 40000000;
viewer.cesiumWidget.creditContainer.style.display = 'none';
viewer.scene.screenSpaceCameraController.zoomFactor = 10.0;
viewer.scene.postProcessStages.fxaa.enabled = true;
if(Cesium.FeatureDetection.supportsImageRenderingPixelated()) {
    viewer.resolutionScale = window.devicePixelRatio;
}
viewer.imageryLayers.removeAll();
viewer.scene.globe.showGroundAtmosphere = false;
// viewer.cesiumWidget.screeSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

// var tr = ''
// const tru = "https://tiles.geovisearth.com/plus/v1/img-sr-all/{z}/{x}/{y}.webp?token=90b18f06e8f15b09fc9e4c877e1a03fb9fef57e12ff1ae0f0500096ccaa0ae10"

let worldth;
async function getWorld() {
    worldth = await Cesium.CesiumTerrainProvider.fromUrl(
        "https://tiles1.geovisearth.com/base/v1/terrain?token=eb2882c682c734c3cf8b617cbb8ec4b756e9d9a8d5bd1d2a80ea3b08b96f478c"
    );
    viewer.terrainProvider = worldth;
}
getWorld();

const geovis = new Cesium.UrlTemplateImageryProvider({
url: 'https://cbk.8ditu.com/maps/vt?lyrs=s@40871&gl=us&x={x}&y={y}&z={z}'

})
viewer.scene.imageryLayers.addImageryProvider(geovis);



  viewer.camera.flyTo({
    duration: 2,
    destination: Cesium.Cartesian3.fromDegrees(104, 30, 10000000)
  })