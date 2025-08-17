const viewer = new Cesium.Viewer('cesiumContainer', {
    navigationHelpButton: false,
    fullscreenButton: false,
    geocoder: false,
    homeButton: false,
    sceneModePicker: false,
    baseLayerPicker: false,
    timeline: false,
    animation: false,
    shoulAnimate: true,
    infoBox: false,
});
viewer.cesiumWidget.creditContainer.style.display = 'none';
viewer.scene.screenSpaceCameraController._zoomFactor = 20.0;
viewer.scene.postProcessStages.fxaa.enabled = true;
// viewer.resolitionScale = window.devicePixelRatio;
viewer.resolitionScale = 2;
viewer.scene.globe.showGroundAtmosphere = false;
viewer.cesiumWidget.screeSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
