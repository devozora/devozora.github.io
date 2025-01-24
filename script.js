(function(){
    var script = {
 "start": "this.playAudioList([this.audio_28D1D7AE_3E9D_68AC_41B1_5C2779DA2D5A]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_678DC097_41FF_5D74_41A1_C08277BF88BC], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist,this.mainPlayList]); this.playList_7B392684_551F_C6AC_41D2_95F669EF82E9.set('selectedIndex', 0); this.playList_7B39F684_551F_C6AC_41B6_D5823D2EB67E.set('selectedIndex', 0); this.playList_7B39B684_551F_C6AC_41C5_3C3C7CADEE2A.set('selectedIndex', 0); this.playList_7B384685_551F_C6AC_41C6_EB7F17B84BBA.set('selectedIndex', 0); this.playList_7B381685_551F_C6AC_41B1_D2247B6C4870.set('selectedIndex', 0); this.playList_7B383685_551F_C6AC_41D3_CFD6EC461938.set('selectedIndex', 0); this.playList_7B38E685_551F_C6AC_41B3_D17D66077371.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_678C1097_41FF_5D74_41A8_7419C68DC379].forEach(function(component) { component.set('visible', false); }) }",
 "height": "100%",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 1,
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.MainViewer",
  "this.Container_678DB097_41FF_5D74_41C4_ABEF2DFF4A0A",
  "this.Container_68CDF88E_411D_2D55_41B6_012E7416CC84",
  "this.Container_690CC74B_411D_23D3_41CF_C7F7E49528A6",
  "this.Container_6A3A7F1A_4135_637C_41B4_D19F14693F2D",
  "this.Container_6DABEA65_411F_EDD4_41B8_B9B28C7C92FF",
  "this.Container_5E3311B9_4EA7_7BEE_41C9_431614B54ACD",
  "this.Container_5C0DF08D_4EE8_D9A6_41BD_A1D4C4024042",
  "this.Container_403E6DBF_50DD_02F8_41AB_A9C9A236DF2E",
  "this.Container_4496DF1F_50EF_1FB8_41C9_3A945DA59A0D",
  "this.Container_41696761_50F5_0F88_41B2_84BA5BF67443",
  "this.Container_42DC0CFE_50D3_0278_4183_E277C28FB874",
  "this.Container_45D28F2A_531A_C7E5_41CA_A57AB2E0998C",
  "this.Container_4891BFA3_5307_46E4_41CB_C5AF77B17DCF",
  "this.Container_452A805E_530D_5A5C_41B3_E29CEA949412",
  "this.Container_4F1F5CCD_531E_CABC_41BD_D6C3386554A4",
  "this.Container_4B22EBA8_530F_CEE4_41D3_3D92564E4854",
  "this.Container_4A228319_52FA_DFA4_41D4_083CECE89EFB",
  "this.Container_4D2C0093_5505_3AA4_41BA_A7B03341D2EA",
  "this.Container_4D41BCA1_5507_4AE7_41D3_EB1C9C0B37CB",
  "this.Container_4EB7E3E3_5507_7E64_41B4_7E7928E27B07"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "desktopMipmappingEnabled": false,
 "paddingLeft": 0,
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "buttonToggleFullscreen": "this.IconButton_678C1097_41FF_5D74_41A8_7419C68DC379",
 "scripts": {
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "existsKey": function(key){  return key in window; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "registerKey": function(key, value){  window[key] = value; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "borderSize": 0,
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "minWidth": 20,
 "downloadEnabled": true,
 "borderRadius": 0,
 "class": "Player",
 "buttonToggleMute": "this.IconButton_678DF097_41FF_5D74_41C2_09029508E074",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "width": "100%",
 "propagateClick": false,
 "shadow": false,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "data": {
  "name": "Player435"
 },
 "paddingTop": 0,
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "definitions": [{
 "initialPosition": {
  "yaw": 5.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_648F2780_551F_C6A5_41A5_F3C2DF0AC8B4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 114.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7E4DD903_551F_CBAB_41C0_B9E9ECA4127A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Halaman Belakang",
 "id": "panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 166.35,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -3.12,
   "panorama": "this.panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD"
  },
  {
   "yaw": -16.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -179.86,
   "panorama": "this.panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4"
  },
  {
   "yaw": 84.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -26.88,
   "panorama": "this.panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5"
  },
  {
   "yaw": 33.24,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -151.5,
   "panorama": "this.panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6"
  },
  {
   "yaw": -60.51,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 44.1,
   "panorama": "this.panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_t.jpg",
 "overlays": [
  "this.overlay_E111D1D3_FC6A_9A1A_41EC_E426BD16E7EA",
  "this.overlay_E1840782_FC6A_86FA_41E4_EAA5029A82FC",
  "this.overlay_DFA709E5_FC7E_8A3E_41D5_64D9EDD28D52",
  "this.overlay_DCEA5FD0_FC7E_8616_41D0_28C848390C57",
  "this.overlay_C0C139F6_FC1A_8A1A_41EC_CC2F958AEB27",
  "this.panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "thumbnailUrl": "media/map_69E7A675_4113_E5B7_41C3_7F5E85423A90_t.jpg",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "label": "Lantai 2",
 "id": "map_69E7A675_4113_E5B7_41C3_7F5E85423A90",
 "initialZoomFactor": 1,
 "width": 843,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_69E7A675_4113_E5B7_41C3_7F5E85423A90.jpeg",
    "width": 843,
    "class": "ImageResourceLevel",
    "height": 596
   },
   {
    "url": "media/map_69E7A675_4113_E5B7_41C3_7F5E85423A90_lq.jpeg",
    "width": 304,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 215
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "class": "Map",
 "height": 596
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Jalan Pintu Masuk",
 "id": "panorama_F7CA529B_FB54_31BF_41E6_37373892FB42",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -0.95,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 178.23,
   "panorama": "this.panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6"
  },
  {
   "yaw": -179.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 0.93,
   "panorama": "this.panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_t.jpg",
 "overlays": [
  "this.overlay_E3D9A7F2_FC1A_861A_41E2_EBEA8AFAB331",
  "this.overlay_CB74B1F7_FC35_BA1A_41E3_05A93B635351",
  "this.overlay_2C6BD136_3F32_DFB4_41AD_4814A49BB9D3",
  "this.overlay_2B26DADC_3F32_E2F4_41C6_AF6D8BDB6FF8",
  "this.panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "items": [
  {
   "begin": "this.ViewerAreaLabeled_4A22C319_52FA_DFA4_41B3_5649A9961700MapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_4A8E5150_52FB_DBA4_41C1_9941298C2F2C",
   "class": "MapPlayListItem",
   "player": "this.ViewerAreaLabeled_4A22C319_52FA_DFA4_41B3_5649A9961700MapPlayer"
  }
 ],
 "id": "playList_7B38E685_551F_C6AC_41B3_D17D66077371",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -73.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_653077C2_551F_C6A5_41D4_C668B82053E8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "begin": "this.ViewerAreaLabeled_690C874B_411D_23D3_41BD_3353BCE022C4MapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_69E7A675_4113_E5B7_41C3_7F5E85423A90",
   "class": "MapPlayListItem",
   "player": "this.ViewerAreaLabeled_690C874B_411D_23D3_41BD_3353BCE022C4MapPlayer"
  }
 ],
 "id": "playList_7B39F684_551F_C6AC_41B6_D5823D2EB67E",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -177.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7BA256C3_551F_C6A4_41D4_03A11303CAD2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -179.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7E25993E_551F_CBDD_41D4_9CA45BBE843D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 400,
 "id": "effect_4CD06BFB_5705_AD47_41BD_DD626E481855",
 "class": "SlideInEffect",
 "easing": "quad_in",
 "from": "left"
},
{
 "initialPosition": {
  "yaw": 31.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_640E4735_551F_C7EF_41D2_B9103AD94A11",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 175,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_643A272D_551F_C7FF_41C7_E7257DE8464E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 130.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7E9D49ED_551F_CA7C_41C9_B0CC81B0B697",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Jalan Gedung Kanan 3",
 "id": "panorama_F7C99160_FB54_5089_41E1_979CAE3AA726",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 1.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -179.52,
   "panorama": "this.panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C"
  },
  {
   "yaw": -178.96,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 0.84,
   "panorama": "this.panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_t.jpg",
 "overlays": [
  "this.overlay_E3C2D975_FC16_8A1E_41B5_AA25769ED2A7",
  "this.overlay_CCAB9CB5_FC2D_8A1E_41BC_BAC704CE8A96",
  "this.panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": 5.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_64FBF757_551F_C7AB_41C6_F1C50AC89B66",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Ruang Monitoring",
 "id": "panorama_F7C21C78_FB54_7179_419E_28D7493848F4",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -133.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -0.05,
   "panorama": "this.panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7C21C78_FB54_7179_419E_28D7493848F4_t.jpg",
 "overlays": [
  "this.overlay_D99F0B05_FC3A_8FFF_4168_C9F0DC6E4F3E",
  "this.panorama_F7C21C78_FB54_7179_419E_28D7493848F4_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C21C78_FB54_7179_419E_28D7493848F4_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C21C78_FB54_7179_419E_28D7493848F4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C21C78_FB54_7179_419E_28D7493848F4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C21C78_FB54_7179_419E_28D7493848F4_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C21C78_FB54_7179_419E_28D7493848F4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C21C78_FB54_7179_419E_28D7493848F4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7C21C78_FB54_7179_419E_28D7493848F4_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C21C78_FB54_7179_419E_28D7493848F4_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C21C78_FB54_7179_419E_28D7493848F4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C21C78_FB54_7179_419E_28D7493848F4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C21C78_FB54_7179_419E_28D7493848F4_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C21C78_FB54_7179_419E_28D7493848F4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C21C78_FB54_7179_419E_28D7493848F4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C21C78_FB54_7179_419E_28D7493848F4_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C21C78_FB54_7179_419E_28D7493848F4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C21C78_FB54_7179_419E_28D7493848F4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C21C78_FB54_7179_419E_28D7493848F4_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C21C78_FB54_7179_419E_28D7493848F4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C21C78_FB54_7179_419E_28D7493848F4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Parkiran Di Samping Kiri Gedung 2",
 "id": "panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 179.33,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 5.2,
   "panorama": "this.panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23"
  },
  {
   "yaw": -4.95,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 140.27,
   "panorama": "this.panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_t.jpg",
 "overlays": [
  "this.overlay_E3C9F445_FC1B_BA7F_41EA_1B2FA4BEF51C",
  "this.overlay_2ED93521_3F33_274F_41B5_0E90436E8801",
  "this.panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "vfov": 180,
 "label": "Jalan Ke Ruang Rapat",
 "id": "panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -179.86,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -16.11,
   "panorama": "this.panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841"
  },
  {
   "yaw": -2.51,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -83.67,
   "panorama": "this.panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_t.jpg",
 "overlays": [
  "this.overlay_D8E43DB5_FC3B_8A1E_41D4_37C57ADF2CF1",
  "this.overlay_C308983B_FC1A_8A0A_417A_13AAA96BB506",
  "this.panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": 166.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7ECA59AF_551F_CAFC_41D1_1F859B8087E0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -11.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7E121985_551F_CAAC_41C7_6034CEFE79DA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_28D1D7AE_3E9D_68AC_41B1_5C2779DA2D5A.mp3",
  "oggUrl": "media/audio_28D1D7AE_3E9D_68AC_41B1_5C2779DA2D5A.ogg",
  "class": "AudioResource"
 },
 "id": "audio_28D1D7AE_3E9D_68AC_41B1_5C2779DA2D5A",
 "class": "MediaAudio",
 "data": {
  "label": "Motivational Inspirational Commercial Music  Royalty Free Download"
 }
},
{
 "buttonCardboardView": "this.IconButton_678C0096_41FF_5D74_41CA_8BA4D3BE1BAB",
 "buttonToggleHotspots": "this.IconButton_678DE097_41FF_5D74_41B1_A2D9CAA76248",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeEnabled": true,
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_678DC097_41FF_5D74_41A1_C08277BF88BC",
 "mouseControlMode": "drag_acceleration"
},
{
 "vfov": 180,
 "label": "Tangga Ke Lantai 2",
 "id": "panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -5,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -120.19,
   "panorama": "this.panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F"
  },
  {
   "yaw": -49.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 11.94,
   "panorama": "this.panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_t.jpg",
 "overlays": [
  "this.overlay_E07FED8A_FC6A_8AF5_41C6_3DDF05BA1C6D",
  "this.overlay_C7F8A6F9_FC3A_8616_41B4_0E3445ECF139",
  "this.panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_t.jpg"
  }
 ]
},
{
 "items": [
  {
   "begin": "this.ViewerAreaLabeled_4A22C319_52FA_DFA4_41B3_5649A9961700MapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_4A8E5150_52FB_DBA4_41C1_9941298C2F2C",
   "class": "MapPlayListItem",
   "player": "this.ViewerAreaLabeled_4A22C319_52FA_DFA4_41B3_5649A9961700MapPlayer"
  }
 ],
 "id": "playList_7B3BB68A_551F_C6A4_41D3_569EEEB808AE",
 "class": "PlayList"
},
{
 "rollOverBackgroundColor": "#000000",
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "children": [
  {
   "label": "Jalan Masuk",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "label": "Gerbang Masuk",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "label": "Halaman parkir 1 KPID Bali",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "label": "Halaman parkir 2 KPID Bali",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "label": "Jalan Gedung Kanan 1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "label": "Jalan Gedung Kanan 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "label": "Jalan Gedung Kanan 3",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "label": "Jalan Gedung Kanan 4",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "label": "Jalan Gedung Kanan Belakang",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  },
  {
   "label": "Jalan Gedung Kiri 1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  },
  {
   "label": "Jalan Gedung Kiri 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  },
  {
   "label": "Parkiran Di Samping Kiri Gedung 1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  },
  {
   "label": "Parkiran Di Samping Kiri Gedung 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  },
  {
   "label": "Halaman Belakang Kiri",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  },
  {
   "label": "Halaman Belakang",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  },
  {
   "label": "Bagian Depan Gedung",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  },
  {
   "label": "Jalan Pintu Masuk",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  },
  {
   "label": "Pintu Masuk",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  },
  {
   "label": "Lobby",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  },
  {
   "label": "Ruang Tunggu ",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  },
  {
   "label": "Bagian Dalam Gedung Lantai 1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  },
  {
   "label": "Menuju Tangga Lantai 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  },
  {
   "label": "Tangga Ke Lantai 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  },
  {
   "label": "Bagian Dalam Gedung di Lantai 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 23)"
  },
  {
   "label": "Jalan Ke Ruangan Komisioner dan Toilet",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 24)"
  },
  {
   "label": "Pintu Masuk Ruang Monitoring",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  },
  {
   "label": "Monitoring 1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  },
  {
   "label": "Monitoring 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 27)"
  },
  {
   "label": "Bagian Dalam Gedung Lantai 1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 28)"
  },
  {
   "label": "Jalan ke Halaman Belakang",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 29)"
  },
  {
   "label": "Pintu Belakang",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 30)"
  },
  {
   "label": "Halaman Belakang",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 31)"
  },
  {
   "label": "Jalan Ke Ruang Rapat",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 32)"
  },
  {
   "label": "Depan Ruang Rapat",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 33)"
  },
  {
   "label": "Halaman Belakang",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 34)"
  },
  {
   "label": "Parkiran Halaman Belakang",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 35)"
  },
  {
   "label": "Bagian Depan Ruang Rapat",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 36)"
  },
  {
   "label": "Pintu Masuk Ruang Rapat",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 37)"
  },
  {
   "label": "Ruang Monitoring",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 38)"
  },
  {
   "label": "Jalan Menuju Padmasana 1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 39)"
  },
  {
   "label": "Jalan Menuju Padmasana 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 40)"
  },
  {
   "label": "Bagian Belakang KPID Bali dan Padmasana",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 41)"
  }
 ],
 "label": "Media",
 "id": "Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "fontColor": "#FFFFFF",
 "rollOverFontColor": "#FFFFFF",
 "opacity": 0.4,
 "rollOverOpacity": 0.8,
 "class": "Menu",
 "backgroundColor": "#404040",
 "selectedBackgroundColor": "#202020"
},
{
 "items": [
  {
   "begin": "this.ViewerAreaLabeled_4D414CA1_5507_4AE7_41BA_10AE3A3FFD8EMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_4B160C55_52FB_C9AC_41C9_7EA5B9EB6F65",
   "class": "MapPlayListItem",
   "player": "this.ViewerAreaLabeled_4D414CA1_5507_4AE7_41BA_10AE3A3FFD8EMapPlayer"
  }
 ],
 "id": "playList_7B3B2685_551F_C6AC_41B2_FA1C82235238",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -95.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_645F3713_551F_C7AB_41A7_B58EBD1A5738",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -178.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_6450F71C_551F_C7DD_41BE_15B7C7AB19E0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -148.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_66032856_551F_C9AD_41D2_67805D5708D6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -168.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_6543E7A9_551F_C6E7_41D2_300B71DE294C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 31.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_6553C7B2_551F_C6E5_41D3_B90F56A8F9C5",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 165.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7E50392D_551F_CBFF_41C9_F20A015E149E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -135.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7E1A797C_551F_CA5C_41B9_570C57C6C078",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -173.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_6588980C_551F_C9BD_41CA_30C9E71E9B71",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Pintu Masuk",
 "id": "panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 63.85,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -98.58,
   "panorama": "this.panorama_F7C72060_FB55_D088_41DA_72DD45FD8518"
  },
  {
   "yaw": -3.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 151.44,
   "panorama": "this.panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF"
  },
  {
   "yaw": 178.23,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -0.95,
   "panorama": "this.panorama_F7CA529B_FB54_31BF_41E6_37373892FB42"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_t.jpg",
 "overlays": [
  "this.overlay_E3D8E5C1_FC1A_FA77_41CC_00A28B930286",
  "this.overlay_E3CD423C_FC15_FE0D_41E5_D3CF2FF0C0E4",
  "this.overlay_CBAD2BBC_FC3A_8E0D_41A0_49A5D211F19B",
  "this.panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "vfov": 180,
 "label": "Jalan Gedung Kanan 4",
 "id": "panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -179.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 1.53,
   "panorama": "this.panorama_F7C99160_FB54_5089_41E1_979CAE3AA726"
  },
  {
   "yaw": 1.15,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -135.17,
   "panorama": "this.panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_t.jpg",
 "overlays": [
  "this.overlay_E3F99FFD_FC1D_860E_41AE_01F5E488B721",
  "this.overlay_CCADD184_FC2E_BAFD_41DB_911FC84C760A",
  "this.panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": -174.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7EFB099E_551F_CADC_41CD_049964F401A5",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 163.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_65E607DB_551F_C65B_41CC_8E1A4F7D78BB",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Halaman parkir 1 KPID Bali",
 "id": "panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -3.1,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -165.9,
   "panorama": "this.panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0"
  },
  {
   "yaw": 168.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -1.15,
   "panorama": "this.panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_t.jpg",
 "overlays": [
  "this.overlay_E3FBFEED_FC16_860E_41D0_69392A879276",
  "this.overlay_D1949838_FC6A_8A16_41E9_315F615742C4",
  "this.panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Jalan Menuju Padmasana 1",
 "id": "panorama_F7C230CD_FB54_519B_41E9_16510D868321",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -148.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 19.74,
   "panorama": "this.panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9"
  },
  {
   "yaw": 2.12,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -93.93,
   "panorama": "this.panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_t.jpg",
 "overlays": [
  "this.overlay_D5331044_FC2A_BA7E_41E5_60A7637AD385",
  "this.overlay_D0AE6896_FC15_8A1A_41E8_0124B6A368DF",
  "this.panorama_F7C230CD_FB54_519B_41E9_16510D868321_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": 31.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7E7C18E8_551F_CA65_41C0_2C5D64C091A7",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "thumbnailUrl": "media/map_4A5CC024_52FB_D9EC_41C6_4D680BD84666_t.jpg",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "label": "Visi dan Misi",
 "id": "map_4A5CC024_52FB_D9EC_41C6_4D680BD84666",
 "initialZoomFactor": 1,
 "width": 708,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_4A5CC024_52FB_D9EC_41C6_4D680BD84666.jpeg",
    "width": 708,
    "class": "ImageResourceLevel",
    "height": 1070
   },
   {
    "url": "media/map_4A5CC024_52FB_D9EC_41C6_4D680BD84666_lq.jpeg",
    "width": 208,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 315
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "class": "Map",
 "height": 1070
},
{
 "vfov": 180,
 "label": "Monitoring 1",
 "id": "panorama_F7C5F04C_FB55_D099_41DE_B3054555586B",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 5.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -93.61,
   "panorama": "this.panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411"
  },
  {
   "yaw": 106.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 11.4,
   "panorama": "this.panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_t.jpg",
 "overlays": [
  "this.overlay_E0D91F38_FC6F_8616_4195_D4E5A2BC35FD",
  "this.overlay_C7EA0253_FC15_9E1B_41EF_05CE093C33B3",
  "this.panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "items": [
  {
   "begin": "this.ViewerAreaLabeled_4D2C5093_5505_3AA4_41A2_86FED9DCD0A9MapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_4A5CC024_52FB_D9EC_41C6_4D680BD84666",
   "class": "MapPlayListItem",
   "player": "this.ViewerAreaLabeled_4D2C5093_5505_3AA4_41A2_86FED9DCD0A9MapPlayer"
  }
 ],
 "id": "playList_7B383685_551F_C6AC_41D3_CFD6EC461938",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 400,
 "id": "effect_4DE9D19D_5705_5DFD_41C8_A84F2FF661E6",
 "class": "SlideOutEffect",
 "easing": "quad_in",
 "to": "left"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -1.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0.01
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Depan Ruang Rapat",
 "id": "panorama_F7CF34FD_FB54_517B_41EE_90965E36488D",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_t.jpg",
 "overlays": [
  "this.panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": -15.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_64161746_551F_C7AD_41D3_1EC5FF4E0C00",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 400,
 "id": "effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E",
 "class": "SlideOutEffect",
 "easing": "quad_in",
 "to": "left"
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "thumbnailUrl": "media/map_41C20AB8_4EB9_C9EE_41B8_A0B3BB5557B6_t.jpg",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "label": "Panduan Pengguna",
 "id": "map_41C20AB8_4EB9_C9EE_41B8_A0B3BB5557B6",
 "initialZoomFactor": 1,
 "width": 597,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_41C20AB8_4EB9_C9EE_41B8_A0B3BB5557B6.jpeg",
    "width": 597,
    "class": "ImageResourceLevel",
    "height": 535
   },
   {
    "url": "media/map_41C20AB8_4EB9_C9EE_41B8_A0B3BB5557B6_lq.jpeg",
    "width": 270,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 242
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "class": "Map",
 "height": 535
},
{
 "initialPosition": {
  "yaw": 32.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_6402873D_551F_C7DF_41C1_4693C49F1DC0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Jalan Gedung Kanan Belakang",
 "id": "panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -26.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 84.4,
   "panorama": "this.panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841"
  },
  {
   "yaw": -135.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 1.15,
   "panorama": "this.panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C"
  },
  {
   "yaw": 14.67,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 109.66,
   "panorama": "this.panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_t.jpg",
 "overlays": [
  "this.overlay_E3C8A056_FC1A_9A1A_41EB_36C5F67D423A",
  "this.overlay_D1BD606E_FC15_7A0A_41ED_F2244BC1054C",
  "this.overlay_CAE526D1_FC2F_8617_41E7_6DC4BD252946",
  "this.panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "viewerArea": "this.ViewerAreaLabeled_4A22C319_52FA_DFA4_41B3_5649A9961700",
 "id": "ViewerAreaLabeled_4A22C319_52FA_DFA4_41B3_5649A9961700MapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -1.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7E553925_551F_CBEF_41C2_0682EA325CF4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 176.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7E36C959_551F_CBA4_419B_6AB88C6DD272",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "thumbnailUrl": "media/map_4A8E5150_52FB_DBA4_41C1_9941298C2F2C_t.jpg",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "label": "Komisioner",
 "id": "map_4A8E5150_52FB_DBA4_41C1_9941298C2F2C",
 "initialZoomFactor": 1,
 "width": 3364,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_4A8E5150_52FB_DBA4_41C1_9941298C2F2C.jpeg",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 1145
   },
   {
    "url": "media/map_4A8E5150_52FB_DBA4_41C1_9941298C2F2C_lq.jpeg",
    "width": 427,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 153
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "class": "Map",
 "height": 1204
},
{
 "initialPosition": {
  "yaw": 153.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7E04296B_551F_CA64_41C1_17DB4AFF47D0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 119.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_663D7846_551F_C9AD_4175_6E98943DED3B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 10.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7ED6F9BF_551F_CADC_41A0_C50CAC89AE94",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 28.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7E1C7973_551F_CA64_41D1_2DB14C3FCBD5",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Halaman Belakang Kiri",
 "id": "panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -14.85,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -132.24,
   "panorama": "this.panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32"
  },
  {
   "yaw": 140.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -4.95,
   "panorama": "this.panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_t.jpg",
 "overlays": [
  "this.overlay_E3D1A6D3_FC1B_861B_41E2_63CD584C671A",
  "this.overlay_2E1B99DC_3F35_6EF5_41A3_BFDB3385C15F",
  "this.panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "duration": 400,
 "id": "effect_4E3E2032_5705_DAC6_41CE_6A6E562AB368",
 "class": "SlideInEffect",
 "easing": "quad_in",
 "from": "left"
},
{
 "vfov": 180,
 "label": "Monitoring 2",
 "id": "panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -93.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 5.3,
   "panorama": "this.panorama_F7C5F04C_FB55_D099_41DE_B3054555586B"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_t.jpg",
 "overlays": [
  "this.overlay_E0D2ACF2_FC6F_8A1A_41EE_E8BD2AB0D1E5",
  "this.panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "items": [
  {
   "begin": "this.ViewerAreaLabeled_4EB7A3E3_5507_7E64_41C9_0B94553665C1MapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_4DCBDF1B_52FB_C7A4_41C3_14E520E59201",
   "class": "MapPlayListItem",
   "player": "this.ViewerAreaLabeled_4EB7A3E3_5507_7E64_41C9_0B94553665C1MapPlayer"
  }
 ],
 "id": "playList_7B381685_551F_C6AC_41B1_D2247B6C4870",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 46.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7E7698FB_551F_CA64_41A8_2EAA5BB0A733",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -144.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7E8859E4_551F_CA6C_41B1_015CF26A4CA7",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Bagian Dalam Gedung di Lantai 2",
 "id": "panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -120.19,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -5,
   "panorama": "this.panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53"
  },
  {
   "yaw": 81.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -148.27,
   "panorama": "this.panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0"
  },
  {
   "yaw": -2.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -147.86,
   "panorama": "this.panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_t.jpg",
 "overlays": [
  "this.overlay_E43E176A_FC36_860A_41CB_51106CD65D17",
  "this.overlay_E41233F7_FC37_BE1A_41D5_DC6EBD83B0C5",
  "this.overlay_E04CEB20_FC6D_8E35_41E8_D79D1A94FEF5",
  "this.overlay_E0514C66_FC6E_8A3A_41E2_64889437119E",
  "this.overlay_C44ECA7D_FC2E_8E0F_41D4_00B89D504049",
  "this.panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_t.jpg"
  }
 ]
},
{
 "viewerArea": "this.ViewerAreaLabeled_4D2C5093_5505_3AA4_41A2_86FED9DCD0A9",
 "id": "ViewerAreaLabeled_4D2C5093_5505_3AA4_41A2_86FED9DCD0A9MapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "vfov": 180,
 "label": "Jalan Menuju Padmasana 2",
 "id": "panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -93.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 2.12,
   "panorama": "this.panorama_F7C230CD_FB54_519B_41E9_16510D868321"
  },
  {
   "yaw": -2.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 44.28,
   "panorama": "this.panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_t.jpg",
 "overlays": [
  "this.overlay_D2E2C701_FC17_87F6_41A2_DF7F0548BA08",
  "this.overlay_D39A28C3_FC17_8A7A_41D4_5F0D36149354",
  "this.panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Lobby",
 "id": "panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_t.jpg",
 "overlays": [
  "this.panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 86.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_664CA82D_551F_C9FF_41C2_368A3A9C2C14",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Halaman Belakang",
 "id": "panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -151.5,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 33.24,
   "panorama": "this.panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841"
  },
  {
   "yaw": 109.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 14.67,
   "panorama": "this.panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5"
  },
  {
   "yaw": 11.97,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 167.59,
   "panorama": "this.panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_t.jpg",
 "overlays": [
  "this.overlay_D978ABC7_FC35_8E7A_41C6_7D2E9FB7696E",
  "this.overlay_D6A0BE7D_FC36_860E_41DC_1E4B7BC2EC10",
  "this.overlay_C18B2899_FC15_8A17_41A9_DB20852F4D6B",
  "this.panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": 59.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_665F5835_551F_C9EF_41C5_BCE583199C54",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.ViewerAreaLabeled_68CDA88E_411D_2D55_41B7_28641BD0B315",
 "id": "ViewerAreaLabeled_68CDA88E_411D_2D55_41B7_28641BD0B315MapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "items": [
  {
   "begin": "this.ViewerAreaLabeled_4D2C5093_5505_3AA4_41A2_86FED9DCD0A9MapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_4A5CC024_52FB_D9EC_41C6_4D680BD84666",
   "class": "MapPlayListItem",
   "player": "this.ViewerAreaLabeled_4D2C5093_5505_3AA4_41A2_86FED9DCD0A9MapPlayer"
  }
 ],
 "id": "playList_7B3B968A_551F_C6A4_41C3_324D5E1DE1FC",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -0.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7E46F915_551F_CBAF_41C5_58B056C60FC9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Halaman parkir 2 KPID Bali",
 "id": "panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -41.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 164.01,
   "panorama": "this.panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452"
  },
  {
   "yaw": -165.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -3.1,
   "panorama": "this.panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416"
  },
  {
   "yaw": -4.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -174.92,
   "panorama": "this.panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF"
  },
  {
   "yaw": 31.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -163.17,
   "panorama": "this.panorama_F7C8A092_FB54_3188_41DD_974B860C46BC"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_t.jpg",
 "overlays": [
  "this.overlay_E3EBCD2F_FC17_8A0B_41D0_FEC1954DB537",
  "this.overlay_E103732D_FC17_BE0E_41DC_0303644798A5",
  "this.overlay_E3C298A7_FC17_8A3A_41EB_1E0A338BA4A7",
  "this.overlay_CED1D509_FC76_BBF7_41EE_C26D56ECE5C3",
  "this.panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "vfov": 180,
 "label": "Jalan Gedung Kiri 1",
 "id": "panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -14.31,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 157.6,
   "panorama": "this.panorama_F7CF3547_FB54_7097_41EA_96DFFE806949"
  },
  {
   "yaw": 164.01,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -41.17,
   "panorama": "this.panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_t.jpg",
 "overlays": [
  "this.overlay_E3F21FCF_FC1A_860A_41E8_6173105B766F",
  "this.overlay_CADDDE20_FC2A_8635_41EE_3B601E444BB6",
  "this.overlay_CAD745DE_FC2B_BA0D_41EB_40C561483A0E",
  "this.panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "items": [
  {
   "media": "this.panorama_F7F34017_FB54_F0B7_41ED_309E451028DF",
   "camera": "this.panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305",
   "camera": "this.panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416",
   "camera": "this.panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0",
   "camera": "this.panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C8A092_FB54_3188_41DD_974B860C46BC",
   "camera": "this.panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5",
   "camera": "this.panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C99160_FB54_5089_41E1_979CAE3AA726",
   "camera": "this.panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C",
   "camera": "this.panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5",
   "camera": "this.panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452",
   "camera": "this.panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7CF3547_FB54_7097_41EA_96DFFE806949",
   "camera": "this.panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23",
   "camera": "this.panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071",
   "camera": "this.panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359",
   "camera": "this.panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32",
   "camera": "this.panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF",
   "camera": "this.panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7CA529B_FB54_31BF_41E6_37373892FB42",
   "camera": "this.panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6",
   "camera": "this.panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE",
   "camera": "this.panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C72060_FB55_D088_41DA_72DD45FD8518",
   "camera": "this.panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF",
   "camera": "this.panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408",
   "camera": "this.panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53",
   "camera": "this.panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F",
   "camera": "this.panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0",
   "camera": "this.panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3",
   "camera": "this.panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C5F04C_FB55_D099_41DE_B3054555586B",
   "camera": "this.panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411",
   "camera": "this.panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F",
   "camera": "this.panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C59E53_FB55_D08F_41E8_A9C120712446",
   "camera": "this.panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD",
   "camera": "this.panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841",
   "camera": "this.panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4",
   "camera": "this.panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7CF34FD_FB54_517B_41EE_90965E36488D",
   "camera": "this.panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6",
   "camera": "this.panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9",
   "camera": "this.panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24",
   "camera": "this.panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC",
   "camera": "this.panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C21C78_FB54_7179_419E_28D7493848F4",
   "camera": "this.panorama_F7C21C78_FB54_7179_419E_28D7493848F4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C230CD_FB54_519B_41E9_16510D868321",
   "camera": "this.panorama_F7C230CD_FB54_519B_41E9_16510D868321_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919",
   "camera": "this.panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5",
   "camera": "this.panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -14.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_649FC788_551F_C6A5_41BA_6D9AA61F1A5E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "begin": "this.ViewerAreaLabeled_690C874B_411D_23D3_41BD_3353BCE022C4MapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_69E7A675_4113_E5B7_41C3_7F5E85423A90",
   "class": "MapPlayListItem",
   "player": "this.ViewerAreaLabeled_690C874B_411D_23D3_41BD_3353BCE022C4MapPlayer"
  }
 ],
 "id": "playList_7B3B4685_551F_C6AC_41D4_9A3252DA8F3E",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 178.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_654DD7A1_551F_C6E7_41D1_80A517CF5D1F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7EA8C9C8_551F_CAA4_4199_2131BBFABB1F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Ruang Tunggu ",
 "id": "panorama_F7C72060_FB55_D088_41DA_72DD45FD8518",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -98.58,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 63.85,
   "panorama": "this.panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_t.jpg",
 "overlays": [
  "this.overlay_E0E1475C_FC16_860E_41E7_12ACC06F3611",
  "this.panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_tcap0",
  "this.overlay_499F4C66_551D_4A6C_41D4_54A887B1C9B2",
  "this.overlay_4ED5D59B_551D_3ADB_41A3_775797792604",
  "this.overlay_49B0A062_551F_3A64_41C8_DB32647754E0",
  "this.overlay_4A9DFCB8_551F_4AE4_41BD_03F07AC56FDF"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": 176.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_656DA790_551F_C6A5_4195_ED9679E71234",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -22.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_646FD6EE_551F_C67C_4197_A0CB798753EA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Bagian Dalam Gedung Lantai 1",
 "id": "panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 165.21,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -13.61,
   "panorama": "this.panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF"
  },
  {
   "yaw": 105.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -128.69,
   "panorama": "this.panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408"
  },
  {
   "yaw": -5.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -169.02,
   "panorama": "this.panorama_F7C59E53_FB55_D08F_41E8_A9C120712446"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_t.jpg",
 "overlays": [
  "this.overlay_E289C4AF_FC35_9A0B_4185_05F27B927EAA",
  "this.overlay_E13F1A06_FC6F_89FA_41D9_E2703B3587AA",
  "this.overlay_DE596FD0_FC6E_8615_41D9_39224D746327",
  "this.overlay_E117B4ED_FC6E_BA0E_41C2_182A07187980",
  "this.panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": -12.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7B9596E6_551F_C66C_41BD_5CBE8F93FC3F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Bagian Belakang KPID Bali dan Padmasana",
 "id": "panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 44.28,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -2.03,
   "panorama": "this.panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_t.jpg",
 "overlays": [
  "this.overlay_D2071C62_FC1A_8A3A_41E3_F86E831CFAE6",
  "this.panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "items": [
  {
   "begin": "this.ViewerAreaLabeled_68CDA88E_411D_2D55_41B7_28641BD0B315MapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_69C31553_4113_E7F3_41AA_78D1F71B34CB",
   "class": "MapPlayListItem",
   "player": "this.ViewerAreaLabeled_68CDA88E_411D_2D55_41B7_28641BD0B315MapPlayer"
  }
 ],
 "id": "playList_7B392684_551F_C6AC_41D2_95F669EF82E9",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -116.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7E4BA90C_551F_CBBD_41C3_4E0A6318759D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "begin": "this.ViewerAreaLabeled_4EB7A3E3_5507_7E64_41C9_0B94553665C1MapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_4DCBDF1B_52FB_C7A4_41C3_14E520E59201",
   "class": "MapPlayListItem",
   "player": "this.ViewerAreaLabeled_4EB7A3E3_5507_7E64_41C9_0B94553665C1MapPlayer"
  }
 ],
 "id": "playList_7B3BC685_551F_C6AB_41A3_AD283C7CC51A",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.panorama_F7F34017_FB54_F0B7_41ED_309E451028DF",
   "camera": "this.panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305",
   "camera": "this.panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416",
   "camera": "this.panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0",
   "camera": "this.panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C8A092_FB54_3188_41DD_974B860C46BC",
   "camera": "this.panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5",
   "camera": "this.panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C99160_FB54_5089_41E1_979CAE3AA726",
   "camera": "this.panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C",
   "camera": "this.panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5",
   "camera": "this.panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452",
   "camera": "this.panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7CF3547_FB54_7097_41EA_96DFFE806949",
   "camera": "this.panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23",
   "camera": "this.panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071",
   "camera": "this.panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359",
   "camera": "this.panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32",
   "camera": "this.panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF",
   "camera": "this.panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7CA529B_FB54_31BF_41E6_37373892FB42",
   "camera": "this.panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6",
   "camera": "this.panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE",
   "camera": "this.panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C72060_FB55_D088_41DA_72DD45FD8518",
   "camera": "this.panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF",
   "camera": "this.panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408",
   "camera": "this.panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53",
   "camera": "this.panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F",
   "camera": "this.panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0",
   "camera": "this.panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3",
   "camera": "this.panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C5F04C_FB55_D099_41DE_B3054555586B",
   "camera": "this.panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411",
   "camera": "this.panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F",
   "camera": "this.panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C59E53_FB55_D08F_41E8_A9C120712446",
   "camera": "this.panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD",
   "camera": "this.panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841",
   "camera": "this.panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4",
   "camera": "this.panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7CF34FD_FB54_517B_41EE_90965E36488D",
   "camera": "this.panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6",
   "camera": "this.panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9",
   "camera": "this.panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24",
   "camera": "this.panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC",
   "camera": "this.panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C21C78_FB54_7179_419E_28D7493848F4",
   "camera": "this.panorama_F7C21C78_FB54_7179_419E_28D7493848F4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C230CD_FB54_519B_41E9_16510D868321",
   "camera": "this.panorama_F7C230CD_FB54_519B_41E9_16510D868321_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919",
   "camera": "this.panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5",
   "camera": "this.panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist, 41, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist",
 "class": "PlayList"
},
{
 "viewerArea": "this.ViewerAreaLabeled_4D414CA1_5507_4AE7_41BA_10AE3A3FFD8E",
 "id": "ViewerAreaLabeled_4D414CA1_5507_4AE7_41BA_10AE3A3FFD8EMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "initialPosition": {
  "yaw": 176.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_64E5774E_551F_C7BD_41AC_3B356358D26B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 175.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_6477B702_551F_C7A5_4198_B82C2174A5BE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -13.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7BD426B1_551F_C6E4_41D3_1175D8313A78",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "begin": "this.ViewerAreaLabeled_5C0D808D_4EE8_D9A6_41C0_1C3BEDE14709MapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_41C20AB8_4EB9_C9EE_41B8_A0B3BB5557B6",
   "class": "MapPlayListItem",
   "player": "this.ViewerAreaLabeled_5C0D808D_4EE8_D9A6_41C0_1C3BEDE14709MapPlayer"
  }
 ],
 "id": "playList_7B3B1685_551F_C6AC_4184_DC8A92DFFAB6",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -39.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7EF1A9A6_551F_CAEC_41C5_BB999C6FB528",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 16.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_64CB275F_551F_C65B_41B2_3273526CAE69",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Parkiran Halaman Belakang",
 "id": "panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841"
  },
  {
   "yaw": 167.59,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 11.97,
   "panorama": "this.panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6"
  },
  {
   "yaw": 19.74,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -148.72,
   "panorama": "this.panorama_F7C230CD_FB54_519B_41E9_16510D868321"
  },
  {
   "yaw": -65.56,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -177.07,
   "panorama": "this.panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_t.jpg",
 "overlays": [
  "this.overlay_D7DFD252_FC36_9E15_41E4_460E857BBFC3",
  "this.overlay_D5EA73D4_FC2D_FE1D_41EB_9B1EE1F5BE24",
  "this.overlay_C1EDF509_FDEA_FBF7_41EC_EF8A5F11991B",
  "this.overlay_B8FDC8A2_FDEA_8A3A_41E4_7485C38665B3",
  "this.panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": 174.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7E5CB91D_551F_CBDF_41D4_6867A09C71B2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Jalan Gedung Kiri 2",
 "id": "panorama_F7CF3547_FB54_7097_41EA_96DFFE806949",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -4.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 178.51,
   "panorama": "this.panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23"
  },
  {
   "yaw": 157.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -14.31,
   "panorama": "this.panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_t.jpg",
 "overlays": [
  "this.overlay_E3D4A5F6_FC1A_BA1A_41E3_DE1C9333BE3E",
  "this.overlay_30B23661_3F15_65CC_41C1_F9B87026FB2C",
  "this.panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_21E8BE92_3F33_654C_41B0_CCAE5C5C0980_t.jpg",
 "label": "Artboard 2-100",
 "id": "photo_21E8BE92_3F33_654C_41B0_CCAE5C5C0980",
 "width": 843,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_21E8BE92_3F33_654C_41B0_CCAE5C5C0980.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 596
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Jalan Masuk",
 "id": "panorama_F7F34017_FB54_F0B7_41ED_309E451028DF",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -0.56,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 167,
   "panorama": "this.panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_t.jpg",
 "overlays": [
  "this.overlay_E3B47028_FC15_7A36_41E2_DD1C40767B82",
  "this.panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_t.jpg"
  }
 ]
},
{
 "initialPosition": {
  "yaw": 0.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7E0E2962_551F_CA64_41C6_F889E0640961",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "begin": "this.ViewerAreaLabeled_4D414CA1_5507_4AE7_41BA_10AE3A3FFD8EMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_4B160C55_52FB_C9AC_41C9_7EA5B9EB6F65",
   "class": "MapPlayListItem",
   "player": "this.ViewerAreaLabeled_4D414CA1_5507_4AE7_41BA_10AE3A3FFD8EMapPlayer"
  }
 ],
 "id": "playList_7B384685_551F_C6AC_41C6_EB7F17B84BBA",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "begin": "this.ViewerAreaLabeled_68CDA88E_411D_2D55_41B7_28641BD0B315MapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_69C31553_4113_E7F3_41AA_78D1F71B34CB",
   "class": "MapPlayListItem",
   "player": "this.ViewerAreaLabeled_68CDA88E_411D_2D55_41B7_28641BD0B315MapPlayer"
  }
 ],
 "id": "playList_7B388685_551F_C6AC_41CF_EE11D29B843A",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7C230CD_FB54_519B_41E9_16510D868321_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 165.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_660D684E_551F_C9BD_41C0_84D8A645EDF8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7C21C78_FB54_7179_419E_28D7493848F4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Jalan ke Halaman Belakang",
 "id": "panorama_F7C59E53_FB55_D08F_41E8_A9C120712446",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 4.62,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 179.85,
   "panorama": "this.panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD"
  },
  {
   "yaw": -169.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -5.2,
   "panorama": "this.panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_t.jpg",
 "overlays": [
  "this.overlay_E2B21E1A_FC3A_860A_41E2_C3BDEE06AAFC",
  "this.overlay_E1120FE6_FC6E_863A_41EC_183634326B96",
  "this.overlay_C471E7A5_FC1D_863F_41A2_8B66AB959102",
  "this.panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "vfov": 180,
 "label": "Halaman Belakang",
 "id": "panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 44.1,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -60.51,
   "panorama": "this.panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6"
  },
  {
   "yaw": -132.24,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -14.85,
   "panorama": "this.panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_t.jpg",
 "overlays": [
  "this.overlay_DE3F41B2_FC76_BA1A_41B1_3783BBEF3982",
  "this.overlay_E1A10D61_FC76_8A37_41DF_B54A6E21725B",
  "this.overlay_DD7D8E30_FC75_8616_41EC_D98B447F4424",
  "this.overlay_DBE29AA8_FC6F_8E36_41DD_6904AAC36EFF",
  "this.panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "items": [
  {
   "begin": "this.ViewerAreaLabeled_5C0D808D_4EE8_D9A6_41C0_1C3BEDE14709MapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_41C20AB8_4EB9_C9EE_41B8_A0B3BB5557B6",
   "class": "MapPlayListItem",
   "player": "this.ViewerAreaLabeled_5C0D808D_4EE8_D9A6_41C0_1C3BEDE14709MapPlayer"
  }
 ],
 "id": "playList_7B39B684_551F_C6AC_41C5_3C3C7CADEE2A",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 177.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_6506D7CB_551F_C6BB_4197_604F6149B84F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -0.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_644B770B_551F_C7BB_41C8_800222BDE565",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Jalan Ke Ruangan Komisioner dan Toilet",
 "id": "panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -148.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 81.61,
   "panorama": "this.panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_t.jpg",
 "overlays": [
  "this.overlay_DAEC804F_FC35_9A0B_41EA_5F0E7861E1FE",
  "this.panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_tcap0",
  "this.overlay_7546F735_551B_47EF_41CC_6C399CA79FAA"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -74.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7E94E9F6_551F_CA6C_41C9_33995600F5AF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 2.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_652017BA_551F_C6E5_41D0_5BA13C67C49C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Jalan Gedung Kanan 1",
 "id": "panorama_F7C8A092_FB54_3188_41DD_974B860C46BC",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -163.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 31.53,
   "panorama": "this.panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0"
  },
  {
   "yaw": 6.38,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -148.91,
   "panorama": "this.panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_t.jpg",
 "overlays": [
  "this.overlay_E023D86E_FC16_8A0D_41EB_431839739508",
  "this.overlay_CF054963_FC15_8A3A_41EE_1BB66913D56C",
  "this.panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": 44.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_666E981C_551F_C9DD_41A8_921B2F7006DA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Bagian Dalam Gedung Lantai 1",
 "id": "panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 35.05,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -174.56,
   "panorama": "this.panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408"
  },
  {
   "yaw": -13.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 165.21,
   "panorama": "this.panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F"
  },
  {
   "yaw": 151.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -3.06,
   "panorama": "this.panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_t.jpg",
 "overlays": [
  "this.overlay_E215A2E0_FC3E_9E35_41E3_85A21E1A1F19",
  "this.overlay_E00F0758_FC6B_8616_41C6_F7AA4ABCD5C1",
  "this.overlay_E13DB509_FC6B_BBF7_41EA_236A87E09153",
  "this.overlay_2D269570_3F3F_27CC_41BC_8476AB234836",
  "this.panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": -146.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7B8EE6D5_551F_C6AC_41B3_C3CAB78ED1BB",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 14.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_657C4799_551F_C6A7_41C0_65B38DD6149B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -70.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_64272724_551F_C7ED_41C5_04C2DB49F5B8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 179.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_64BEA778_551F_C665_41D0_324301021BD6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -179.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7EBDD9D1_551F_CAA4_41B6_A67C95A79C73",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -174.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_6516C7D3_551F_C6AB_41C3_B73EB94B7146",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 175.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_65AA87FC_551F_C65D_41C1_9C41B580648E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "thumbnailUrl": "media/map_69C31553_4113_E7F3_41AA_78D1F71B34CB_t.jpg",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "label": "Lantai 1",
 "id": "map_69C31553_4113_E7F3_41AA_78D1F71B34CB",
 "initialZoomFactor": 1,
 "width": 842,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_69C31553_4113_E7F3_41AA_78D1F71B34CB.jpeg",
    "width": 842,
    "class": "ImageResourceLevel",
    "height": 596
   },
   {
    "url": "media/map_69C31553_4113_E7F3_41AA_78D1F71B34CB_lq.jpeg",
    "width": 304,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 216
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "class": "Map",
 "height": 596
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "thumbnailUrl": "media/map_4DCBDF1B_52FB_C7A4_41C3_14E520E59201_t.jpg",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "label": "Moto Pelayanan",
 "id": "map_4DCBDF1B_52FB_C7A4_41C3_14E520E59201",
 "initialZoomFactor": 1,
 "width": 728,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_4DCBDF1B_52FB_C7A4_41C3_14E520E59201.jpeg",
    "width": 728,
    "class": "ImageResourceLevel",
    "height": 1124
   },
   {
    "url": "media/map_4DCBDF1B_52FB_C7A4_41C3_14E520E59201_lq.jpeg",
    "width": 206,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 319
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "class": "Map",
 "height": 1124
},
{
 "initialPosition": {
  "yaw": 138.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_646396F7_551F_C66B_41A8_300487152033",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Bagian Depan Gedung",
 "id": "panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F7CF3547_FB54_7097_41EA_96DFFE806949"
  },
  {
   "yaw": -174.92,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -4.42,
   "panorama": "this.panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0"
  },
  {
   "yaw": 0.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -179.52,
   "panorama": "this.panorama_F7CA529B_FB54_31BF_41E6_37373892FB42"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_t.jpg",
 "overlays": [
  "this.overlay_E3DBBA8A_FC1A_8E0A_41C9_EE50CDAF76D0",
  "this.overlay_CAF6362B_FC35_860B_41DF_037F65AF85B2",
  "this.overlay_CA9CD105_FC35_9BFE_41E4_F8DDDE53E258",
  "this.overlay_CA8A1AB6_FC36_8E1D_41E0_B13301EA07F7",
  "this.panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": 0.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7F628A07_551F_C9AC_41C8_915FB65280B3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Pintu Belakang",
 "id": "panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -3.12,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 166.35,
   "panorama": "this.panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841"
  },
  {
   "yaw": 179.85,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 4.62,
   "panorama": "this.panorama_F7C59E53_FB55_D08F_41E8_A9C120712446"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_t.jpg",
 "overlays": [
  "this.overlay_E365FABC_FC2A_8E0D_41E7_1C83229F8464",
  "this.overlay_C516F6F5_FC1E_861E_41A6_E3D2169F27F6",
  "this.panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": 47.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_65DAE7F4_551F_C66D_41C2_E24672297DB4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Bagian Depan Ruang Rapat",
 "id": "panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "pitch": 0,
 "hfovMin": "150%",
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_t.jpg",
 "overlays": [
  "this.panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": -135.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7BB586CC_551F_C6BC_4186_1E961A422944",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.ViewerAreaLabeled_5C0D808D_4EE8_D9A6_41C0_1C3BEDE14709",
 "id": "ViewerAreaLabeled_5C0D808D_4EE8_D9A6_41C0_1C3BEDE14709MapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "viewerArea": "this.ViewerAreaLabeled_690C874B_411D_23D3_41BD_3353BCE022C4",
 "id": "ViewerAreaLabeled_690C874B_411D_23D3_41BD_3353BCE022C4MapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "initialPosition": {
  "yaw": -178.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_6598F814_551F_C9AD_41B1_54D0C99E3752",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -160.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_667E2825_551F_C9EF_41C8_004A9B4AA00F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 177.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7E7B68F2_551F_CA65_4192_C35BDB03BA1D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 51.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7EDDC9B7_551F_CAEC_41D2_480965CFD1E7",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "duration": 3000,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out"
  }
 ],
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "stereographicFactor": 1,
  "yaw": 0,
  "class": "RotationalCameraDisplayPosition",
  "hfov": 165,
  "pitch": -90
 }
},
{
 "initialPosition": {
  "yaw": 179.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7EEB798D_551F_CABC_41BC_BC1BDC958DDD",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -168.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_662C883E_551F_C9DD_41D2_73CFE8BF0D22",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -175.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7BA946BA_551F_C6E4_41CB_D83A175FF822",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 179.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7EB6C9DB_551F_CAA4_41B6_40D7AFE3C052",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -1.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7E2E8935_551F_CBEF_41C8_8D1B20B57036",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 96.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_65F4E7E3_551F_C66B_41B8_753D9E7DA3E4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "thumbnailUrl": "media/map_4B160C55_52FB_C9AC_41C9_7EA5B9EB6F65_t.jpg",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "label": "Alur Kerja",
 "id": "map_4B160C55_52FB_C9AC_41C9_7EA5B9EB6F65",
 "initialZoomFactor": 1,
 "width": 2932,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_4B160C55_52FB_C9AC_41C9_7EA5B9EB6F65.jpeg",
    "width": 2932,
    "class": "ImageResourceLevel",
    "height": 1784
   },
   {
    "url": "media/map_4B160C55_52FB_C9AC_41C9_7EA5B9EB6F65_lq.jpeg",
    "width": 328,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 200
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "class": "Map",
 "height": 1784
},
{
 "viewerArea": "this.ViewerAreaLabeled_4EB7A3E3_5507_7E64_41C9_0B94553665C1",
 "id": "ViewerAreaLabeled_4EB7A3E3_5507_7E64_41C9_0B94553665C1MapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "vfov": 180,
 "label": "Parkiran Di Samping Kiri Gedung 1",
 "id": "panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 178.51,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -4.71,
   "panorama": "this.panorama_F7CF3547_FB54_7097_41EA_96DFFE806949"
  },
  {
   "yaw": 5.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 179.33,
   "panorama": "this.panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_t.jpg",
 "overlays": [
  "this.overlay_E3D634F2_FC1B_7A15_41ED_3D753FF0CFE5",
  "this.overlay_2F2F259D_3F17_2777_41C4_429577A7BA77",
  "this.panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": 175.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7F6999FF_551F_CA5C_41AD_10A3C57D25EE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 81.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_64DB1767_551F_C66B_41C2_4E57431C901A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Gerbang Masuk",
 "id": "panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -1.15,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 168.89,
   "panorama": "this.panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416"
  },
  {
   "yaw": 167,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -0.56,
   "panorama": "this.panorama_F7F34017_FB54_F0B7_41ED_309E451028DF"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_t.jpg",
 "overlays": [
  "this.overlay_E02FCA6C_FC16_8E0E_41EC_88166FA92ADD",
  "this.overlay_D39F7006_FC1A_F9FD_41CD_EA50077D7FDA",
  "this.panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "vfov": 180,
 "label": "Pintu Masuk Ruang Monitoring",
 "id": "panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 11.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 106.44,
   "panorama": "this.panorama_F7C5F04C_FB55_D099_41DE_B3054555586B"
  },
  {
   "yaw": -147.86,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -2.9,
   "panorama": "this.panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "153%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_t.jpg",
 "overlays": [
  "this.overlay_E401CDB7_FC35_8A1A_41E6_F5E7654D64DC",
  "this.overlay_E7CC7BD1_FC3A_8E17_41DD_5BC4F4B18A80",
  "this.overlay_E7E7CFAD_FC3A_860F_41D7_9D5EAB3F94B4",
  "this.overlay_DA4ADB09_FC37_8FF6_41EB_024DA5E81BBD",
  "this.overlay_DA7EF3CA_FC35_9E0A_41E3_517B684B8179",
  "this.panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "vfov": 180,
 "label": "Jalan Gedung Kanan 2",
 "id": "panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 0.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -178.96,
   "panorama": "this.panorama_F7C99160_FB54_5089_41E1_979CAE3AA726"
  },
  {
   "yaw": -148.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 6.38,
   "panorama": "this.panorama_F7C8A092_FB54_3188_41DD_974B860C46BC"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_t.jpg",
 "overlays": [
  "this.overlay_E3D70D69_FC16_8A37_41E9_538722E45B9C",
  "this.overlay_CC7D62A2_FC2B_7E3A_41B9_05A096266CA7",
  "this.panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": 1.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_65BB4804_551F_C9AD_41A6_448B4E88B9E8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Pintu Masuk Ruang Rapat",
 "id": "panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -83.67,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -2.51,
   "panorama": "this.panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4"
  },
  {
   "yaw": -0.05,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -133.63,
   "panorama": "this.panorama_F7C21C78_FB54_7179_419E_28D7493848F4"
  },
  {
   "yaw": -177.07,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -65.56,
   "panorama": "this.panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_t.jpg",
 "overlays": [
  "this.overlay_D83B4366_FC3E_9E3A_41BC_C46FE14677A9",
  "this.overlay_D40C4E6E_FC2A_860A_41E6_824AF06B37FD",
  "this.overlay_D4C7ED75_FC2B_8A1F_41C7_A145974F9964",
  "this.panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": -165.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7B80E6DD_551F_C65C_41B5_5CAE14AE5F66",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_65C4F7EB_551F_C67B_41CA_2C0355D35E38",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 177.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7EE34995_551F_CAAC_41BD_BE3D39F1E9AE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -98.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7F74EA0F_551F_C9BC_41B9_2C7B0CFECC72",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 86.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7E222947_551F_CBAC_41C5_058CAD0C0622",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "vfov": 180,
 "label": "Menuju Tangga Lantai 2",
 "id": "panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408",
 "cardboardMenu": "this.Menu_7BE95697_551F_C6AC_41B1_430984E1AAD1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -174.56,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 35.05,
   "panorama": "this.panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF"
  },
  {
   "yaw": 11.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -49.71,
   "panorama": "this.panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53"
  },
  {
   "yaw": -128.69,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 105.79,
   "panorama": "this.panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F"
  }
 ],
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMin": "150%",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_t.jpg",
 "overlays": [
  "this.overlay_C9BA4071_FC35_9A16_41D4_523E8936D830",
  "this.overlay_C407B665_FC37_863F_41C8_2BD61DC26921",
  "this.overlay_C7B81195_FC37_9A1F_41CA_4539A5663E97",
  "this.panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_tcap0"
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "yaw": -168.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_7E39D950_551F_CBA4_41A4_79970E0E6081",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -28.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_64A9276F_551F_C67B_4194_A60E10309C19",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "left": 0,
 "toolTipFontSize": "1.11vmin",
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "MainViewer",
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "minWidth": 100,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "class": "ViewerArea",
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "shadow": false,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "paddingRight": 0,
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "top": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 7,
 "borderSize": 0,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "progressBorderColor": "#000000",
 "data": {
  "name": "Main Viewer"
 },
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#000000",
 "transitionDuration": 500
},
{
 "id": "Container_678DB097_41FF_5D74_41C4_ABEF2DFF4A0A",
 "left": "0.01%",
 "width": 330,
 "scrollBarColor": "#000000",
 "children": [
  "this.Container_678FB096_41FF_5D74_41CF_E229D5A1D3EB",
  "this.Container_678F6096_41FF_5D74_41C7_B4FD8D0F3B42"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "height": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "class": "Container",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "--- LEFT PANEL 2"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left"
},
{
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "id": "Container_68CDF88E_411D_2D55_41B6_012E7416CC84",
 "scrollBarColor": "#000000",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_68CDB88E_411D_2D55_41CA_9A6DCEF278C4"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "backgroundOpacity": 0.6,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_68CDF88E_411D_2D55_41B6_012E7416CC84, false, 0, null, null, false)",
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Lantai 1"
 },
 "paddingTop": 0,
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "left"
},
{
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "id": "Container_690CC74B_411D_23D3_41CF_C7F7E49528A6",
 "scrollBarColor": "#000000",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_690C974B_411D_23D3_41C8_501E7343F22B"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "backgroundOpacity": 0.6,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_690CC74B_411D_23D3_41CF_C7F7E49528A6, false, 0, null, null, false)",
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Lantai 2"
 },
 "paddingTop": 0,
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "left"
},
{
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "id": "Container_6A3A7F1A_4135_637C_41B4_D19F14693F2D",
 "scrollBarColor": "#000000",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_6A3ABF19_4135_637F_41C0_0279D03E8D55"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "backgroundOpacity": 0.6,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_6A3A7F1A_4135_637C_41B4_D19F14693F2D, false, 0, null, null, false)",
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "paddingTop": 0,
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "left"
},
{
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "id": "Container_6DABEA65_411F_EDD4_41B8_B9B28C7C92FF",
 "scrollBarColor": "#000000",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_6DABAA65_411F_EDD4_41C0_6D518A534DFF"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "backgroundOpacity": 0.6,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_6DABEA65_411F_EDD4_41B8_B9B28C7C92FF, false, 0, null, null, false)",
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Video"
 },
 "paddingTop": 0,
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "left"
},
{
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "id": "Container_5E3311B9_4EA7_7BEE_41C9_431614B54ACD",
 "scrollBarColor": "#000000",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_5E3371B9_4EA7_7BEE_41C3_941A435A1C0C"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "backgroundOpacity": 0.6,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_5E3311B9_4EA7_7BEE_41C9_431614B54ACD, false, 0, null, null, false)",
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Informasi Pengguna"
 },
 "paddingTop": 0,
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "left"
},
{
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "id": "Container_5C0DF08D_4EE8_D9A6_41BD_A1D4C4024042",
 "scrollBarColor": "#000000",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_5C0D608D_4EE8_D9A6_41CB_C3D60EA5CFEA"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "1.36%",
 "contentOpaque": false,
 "bottom": "0.11%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "backgroundOpacity": 0.6,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_5C0DF08D_4EE8_D9A6_41BD_A1D4C4024042, false, 0, null, null, false)",
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "--FLOORPLAN"
 },
 "paddingTop": 0,
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "left"
},
{
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "id": "Container_403E6DBF_50DD_02F8_41AB_A9C9A236DF2E",
 "right": "17.32%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.HTMLText_403E4DBF_50DD_02F8_41A1_B0DB5D60B7F7",
  "this.IconButton_41F9EE4A_50D3_0198_41CE_C452E175C345"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "63.345%",
 "top": "29.26%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "Container",
 "height": "34.163%",
 "propagateClick": false,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Ruang Ketua"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left"
},
{
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "id": "Container_4496DF1F_50EF_1FB8_41C9_3A945DA59A0D",
 "right": "17.58%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.HTMLText_44991F1F_50EF_1FB8_41A4_684C60CC3B59",
  "this.IconButton_484CC462_533D_3A65_41AB_06F45C171462"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "63.344%",
 "top": "29.33%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "Container",
 "height": "34.192%",
 "propagateClick": false,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Pak Adi"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left"
},
{
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "id": "Container_41696761_50F5_0F88_41B2_84BA5BF67443",
 "right": "17.22%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.HTMLText_41693761_50F5_0F88_41BD_6F42C977019D",
  "this.IconButton_4A821355_533D_7FAC_41BF_59E8637F8F4B"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "63.579%",
 "top": "29.18%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "Container",
 "height": "34.306%",
 "propagateClick": false,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Pak Kis"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left"
},
{
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "id": "Container_42DC0CFE_50D3_0278_4183_E277C28FB874",
 "right": "17.8%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.HTMLText_42DC7CFE_50D3_0278_41C5_FD0BF5351AB1",
  "this.IconButton_44F851AF_533D_5AFC_41D4_12286252830B"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "63.187%",
 "top": "29.5%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "Container",
 "height": "34.764%",
 "propagateClick": false,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Pak Gus Yogi"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left"
},
{
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "id": "Container_45D28F2A_531A_C7E5_41CA_A57AB2E0998C",
 "right": "17.69%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.HTMLText_45D2AF2A_531A_C7E5_41AD_ABD6BDA9B49F",
  "this.IconButton_44D10EBF_533D_46DC_41B9_E782E59CD38D"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "63.392%",
 "top": "29.93%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "Container",
 "height": "34.335%",
 "propagateClick": false,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Pak yan"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left"
},
{
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "id": "Container_4891BFA3_5307_46E4_41CB_C5AF77B17DCF",
 "right": "17.84%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.HTMLText_456E7EF4_5305_466C_41D0_DCB82EE08203",
  "this.IconButton_49FB6823_533A_C9E4_41B4_043F8C05D12F"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "63.329%",
 "top": "30.04%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "Container",
 "height": "34.049%",
 "propagateClick": false,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Bu Yudi"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left"
},
{
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "id": "Container_452A805E_530D_5A5C_41B3_E29CEA949412",
 "right": "17.93%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.HTMLText_452A605E_530D_5A5C_41D2_0BF20CDFD938",
  "this.IconButton_4BCAA023_533A_D9E4_41D1_BCC8EBA99069"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "63.265%",
 "top": "29.41%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "Container",
 "height": "34.735%",
 "propagateClick": false,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Wakil Ketua"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left"
},
{
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "id": "Container_4F1F5CCD_531E_CABC_41BD_D6C3386554A4",
 "right": "17.96%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.HTMLText_4F1F6CCD_531E_CABC_41BA_E2D3D2774052",
  "this.IconButton_44238FCA_530D_46A5_41B3_D8FBEFC0B4DA"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "62.968%",
 "top": "29.06%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "Container",
 "height": "35.05%",
 "propagateClick": false,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Ruang Monitoring"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left"
},
{
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "id": "Container_4B22EBA8_530F_CEE4_41D3_3D92564E4854",
 "right": "18.09%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.HTMLText_4B223BA8_530F_CEE4_41A7_18EB5C9490E8",
  "this.IconButton_777DBE64_551F_466C_41CE_D32810F368BA"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "62.953%",
 "top": "28.81%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "Container",
 "height": "35.451%",
 "propagateClick": false,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Ruang Admin"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left"
},
{
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "id": "Container_4A228319_52FA_DFA4_41D4_083CECE89EFB",
 "scrollBarColor": "#000000",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_4A22D319_52FA_DFA4_41D0_0DFD871973ED"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "backgroundOpacity": 0.6,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_4A228319_52FA_DFA4_41D4_083CECE89EFB, false, 0, null, null, false)",
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Komisioner"
 },
 "paddingTop": 0,
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "left"
},
{
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "id": "Container_4D2C0093_5505_3AA4_41BA_A7B03341D2EA",
 "scrollBarColor": "#000000",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_4D2C4093_5505_3AA4_41C3_BB7605C2B061"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "backgroundOpacity": 0.6,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_4D2C0093_5505_3AA4_41BA_A7B03341D2EA, false, 0, null, null, false)",
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Visi dan Misi"
 },
 "paddingTop": 0,
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "left"
},
{
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "id": "Container_4D41BCA1_5507_4AE7_41D3_EB1C9C0B37CB",
 "scrollBarColor": "#000000",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_4D417CA1_5507_4AE7_41D2_3234D656BC5F"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "backgroundOpacity": 0.6,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_4D41BCA1_5507_4AE7_41D3_EB1C9C0B37CB, false, 0, null, null, false)",
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Alur Kerja"
 },
 "paddingTop": 0,
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "left"
},
{
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "id": "Container_4EB7E3E3_5507_7E64_41B4_7E7928E27B07",
 "scrollBarColor": "#000000",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_4EB453E3_5507_7E64_41D4_59051E24DB3D"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "backgroundOpacity": 0.6,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_4EB7E3E3_5507_7E64_41B4_7E7928E27B07, false, 0, null, null, false)",
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Moto"
 },
 "paddingTop": 0,
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "left"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_678C1097_41FF_5D74_41A8_7419C68DC379",
 "transparencyActive": true,
 "width": 30,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_678C1097_41FF_5D74_41A8_7419C68DC379.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "height": 30,
 "paddingBottom": 0,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "minWidth": 1,
 "pressedIconURL": "skin/IconButton_678C1097_41FF_5D74_41A8_7419C68DC379_pressed.png",
 "borderRadius": 0,
 "class": "IconButton",
 "propagateClick": false,
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton Fullscreen"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_678DF097_41FF_5D74_41C2_09029508E074",
 "transparencyActive": true,
 "width": 30,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_678DF097_41FF_5D74_41C2_09029508E074.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "height": 30,
 "paddingBottom": 0,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "minWidth": 1,
 "pressedIconURL": "skin/IconButton_678DF097_41FF_5D74_41C2_09029508E074_pressed.png",
 "borderRadius": 0,
 "class": "IconButton",
 "propagateClick": false,
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton Sound"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4, this.camera_7E0E2962_551F_CA64_41C6_F889E0640961); this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5241275_FC6B_9E1E_41DD_BA93FFA8E3F7",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.47,
   "yaw": -16.11,
   "hfov": 9.79,
   "distance": 100
  }
 ],
 "id": "overlay_E111D1D3_FC6A_9A1A_41EC_E426BD16E7EA",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -16.11,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.79,
   "pitch": -31.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6, this.camera_7E1C7973_551F_CA64_41D1_2DB14C3FCBD5); this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D526C275_FC6B_9E1E_41E9_635D5138FF51",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -28.16,
   "yaw": 33.24,
   "hfov": 10.12,
   "distance": 100
  }
 ],
 "id": "overlay_E1840782_FC6A_86FA_41E4_EAA5029A82FC",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 33.24,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.12,
   "pitch": -28.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD, this.camera_7E36C959_551F_CBA4_419B_6AB88C6DD272); this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5252275_FC6B_9E1E_41E5_25B929F34B0A",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -43.94,
   "yaw": 166.35,
   "hfov": 9.71,
   "distance": 100
  }
 ],
 "id": "overlay_DFA709E5_FC7E_8A3E_41D5_64D9EDD28D52",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 166.35,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.71,
   "pitch": -43.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32, this.camera_7E1A797C_551F_CA5C_41B9_570C57C6C078); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5258275_FC6B_9E1E_41E8_DF3F565E3349",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -36.28,
   "yaw": -60.51,
   "hfov": 10.64,
   "distance": 50
  }
 ],
 "id": "overlay_DCEA5FD0_FC7E_8616_41D0_28C848390C57",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_1_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -60.51,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.64,
   "pitch": -36.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5, this.camera_7E04296B_551F_CA64_41C1_17DB4AFF47D0); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFD12D22_FEF1_85BF_41D5_65CC36263652",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -27.72,
   "yaw": 84.4,
   "hfov": 8.76,
   "distance": 100
  }
 ],
 "id": "overlay_C0C139F6_FC1A_8A1A_41EC_CC2F958AEB27",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_0_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 84.4,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.76,
   "pitch": -27.72
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6, this.camera_7E2E8935_551F_CBEF_41C8_8D1B20B57036); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_24A55744_3F15_23D4_41A2_8551AE760B8B",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -27.93,
   "yaw": -0.95,
   "hfov": 8.75,
   "distance": 100
  }
 ],
 "id": "overlay_E3D9A7F2_FC1A_861A_41E2_EBEA8AFAB331",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -0.95,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.75,
   "pitch": -27.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF, this.camera_7E25993E_551F_CBDD_41D4_9CA45BBE843D); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFEFFD22_FEF1_85BF_41EF_111E0D04B7AE",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.95,
   "yaw": -179.52,
   "hfov": 8.4,
   "distance": 100
  }
 ],
 "id": "overlay_CB74B1F7_FC35_BA1A_41E3_05A93B635351",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -179.52,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.4,
   "pitch": -31.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_24A4A744_3F15_23D4_41C7_480356254D7D",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -28.96,
   "yaw": 79.35,
   "hfov": 8.66,
   "distance": 100
  }
 ],
 "id": "overlay_2C6BD136_3F32_DFB4_41AD_4814A49BB9D3",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 79.35,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.66,
   "pitch": -28.96
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6, this.camera_2E936788_3F05_A1D0_41A0_C675B45C2DC4)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_24A43744_3F15_23D4_41CE_65A12F009656",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -33.76,
   "yaw": -81.26,
   "hfov": 8.23,
   "distance": 100
  }
 ],
 "id": "overlay_2B26DADC_3F32_E2F4_41C6_AF6D8BDB6FF8",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -81.26,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.23,
   "pitch": -33.76
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C, this.camera_7EA8C9C8_551F_CAA4_4199_2131BBFABB1F); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C7DA0C42_FC6F_8A7A_41DF_61FCF68E71C0",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -15.2,
   "yaw": 1.53,
   "hfov": 5.65,
   "distance": 100
  }
 ],
 "id": "overlay_E3C2D975_FC16_8A1E_41B5_AA25769ED2A7",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 1.53,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.65,
   "pitch": -15.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5, this.camera_7EBDD9D1_551F_CAA4_41B6_A67C95A79C73); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFE7CD22_FEF1_85BF_41D8_E9E31568B1CA",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -25.9,
   "yaw": -178.96,
   "hfov": 8.91,
   "distance": 100
  }
 ],
 "id": "overlay_CCAB9CB5_FC2D_8A1E_41BC_BAC704CE8A96",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -178.96,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.91,
   "pitch": -25.9
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC, this.camera_7EB6C9DB_551F_CAA4_41B6_40D7AFE3C052); this.mainPlayList.set('selectedIndex', 37)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C21C78_FB54_7179_419E_28D7493848F4_0_HS_0_0.png",
      "width": 186,
      "class": "ImageResourceLevel",
      "height": 172
     }
    ]
   },
   "pitch": -24.68,
   "yaw": -133.63,
   "hfov": 15.28
  }
 ],
 "id": "overlay_D99F0B05_FC3A_8FFF_4168_C9F0DC6E4F3E",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C21C78_FB54_7179_419E_28D7493848F4_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -133.63,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.28,
   "pitch": -24.68
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7C21C78_FB54_7179_419E_28D7493848F4_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359, this.camera_7EF1A9A6_551F_CAEC_41C5_BB999C6FB528); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D52FC26C_FC6B_9E0E_41E5_1BDE3AFDEECA",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -32.59,
   "yaw": -4.95,
   "hfov": 20.82,
   "distance": 100
  }
 ],
 "id": "overlay_E3C9F445_FC1B_BA7F_41EA_1B2FA4BEF51C",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -4.95,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.82,
   "pitch": -32.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23, this.camera_7EFB099E_551F_CADC_41CD_049964F401A5); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_24A15744_3F15_23D4_41B6_888E823269C8",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -46.32,
   "yaw": 179.33,
   "hfov": 17.07,
   "distance": 100
  }
 ],
 "id": "overlay_2ED93521_3F33_274F_41B5_0E90436E8801",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 179.33,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.07,
   "pitch": -46.32
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC, this.camera_65F4E7E3_551F_C66B_41B8_753D9E7DA3E4); this.mainPlayList.set('selectedIndex', 37)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D658D055_FC2A_9A1E_41D4_989DC25824E3",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -33.25,
   "yaw": -2.51,
   "hfov": 11.63,
   "distance": 100
  }
 ],
 "id": "overlay_D8E43DB5_FC3B_8A1E_41D4_37C57ADF2CF1",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -2.51,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.63,
   "pitch": -33.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841, this.camera_65E607DB_551F_C65B_41CC_8E1A4F7D78BB); this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFDE2D31_FEF1_859D_41C3_7B973E4A64B5",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -36.72,
   "yaw": -179.86,
   "hfov": 7.94,
   "distance": 100
  }
 ],
 "id": "overlay_C308983B_FC1A_8A0A_417A_13AAA96BB506",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -179.86,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.94,
   "pitch": -36.72
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_678C0096_41FF_5D74_41CA_8BA4D3BE1BAB",
 "transparencyActive": true,
 "width": 30,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_678C0096_41FF_5D74_41CA_8BA4D3BE1BAB.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "height": 30,
 "paddingBottom": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "class": "IconButton",
 "propagateClick": false,
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton VR"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_678DE097_41FF_5D74_41B1_A2D9CAA76248",
 "transparencyActive": true,
 "width": 30,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_678DE097_41FF_5D74_41B1_A2D9CAA76248.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "height": 30,
 "paddingBottom": 0,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "minWidth": 1,
 "pressedIconURL": "skin/IconButton_678DE097_41FF_5D74_41B1_A2D9CAA76248_pressed.png",
 "borderRadius": 0,
 "class": "IconButton",
 "propagateClick": false,
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton Hs visibility"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_678DC097_41FF_5D74_41A1_C08277BF88BC",
 "transparencyActive": true,
 "width": 34,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_678DC097_41FF_5D74_41A1_C08277BF88BC.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "height": 34,
 "paddingBottom": 0,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "minWidth": 1,
 "pressedIconURL": "skin/IconButton_678DC097_41FF_5D74_41A1_C08277BF88BC_pressed.png",
 "borderRadius": 0,
 "class": "IconButton",
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "IconButton Gyroscopic"
 },
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F, this.camera_665F5835_551F_C9EF_41C5_BCE583199C54); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D52A1274_FC6B_9E1E_41E6_BC4EECCDA613",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -27.58,
   "yaw": -5,
   "hfov": 14.92,
   "distance": 50
  }
 ],
 "id": "overlay_E07FED8A_FC6A_8AF5_41C6_3DDF05BA1C6D",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -5,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.92,
   "pitch": -27.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408, this.camera_662C883E_551F_C9DD_41D2_73CFE8BF0D22); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFEBCD22_FEF1_85BF_41BB_ACA58389406A",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -53.6,
   "yaw": -49.71,
   "hfov": 5.88,
   "distance": 100
  }
 ],
 "id": "overlay_C7F8A6F9_FC3A_8616_41B4_0E3445ECF139",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -49.71,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.88,
   "pitch": -53.6
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF, this.camera_64A9276F_551F_C67B_4194_A60E10309C19); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFEF6D22_FEF1_85BF_41A3_9BD461955ADA",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -27.63,
   "yaw": -3.06,
   "hfov": 8.77,
   "distance": 100
  }
 ],
 "id": "overlay_E3D8E5C1_FC1A_FA77_41CC_00A28B930286",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -3.06,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.77,
   "pitch": -27.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C72060_FB55_D088_41DA_72DD45FD8518, this.camera_64DB1767_551F_C66B_41C2_4E57431C901A); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFECDD22_FEF1_85BF_41D4_038A385B2A2F",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -30.31,
   "yaw": 63.85,
   "hfov": 8.55,
   "distance": 100
  }
 ],
 "id": "overlay_E3CD423C_FC15_FE0D_41E5_D3CF2FF0C0E4",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 63.85,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.55,
   "pitch": -30.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7CA529B_FB54_31BF_41E6_37373892FB42, this.camera_64BEA778_551F_C665_41D0_324301021BD6); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFEC6D22_FEF1_85BF_41BB_08F2681D4AFB",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -39.93,
   "yaw": 178.23,
   "hfov": 7.98,
   "distance": 100
  }
 ],
 "id": "overlay_CBAD2BBC_FC3A_8E0D_41A0_49A5D211F19B",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 178.23,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.98,
   "pitch": -39.93
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5, this.camera_666E981C_551F_C9DD_41A8_921B2F7006DA); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C7DA8C42_FC6F_8A7A_41EC_0274D0BE3472",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -15.64,
   "yaw": 1.15,
   "hfov": 8.92,
   "distance": 100
  }
 ],
 "id": "overlay_E3F99FFD_FC1D_860E_41AE_01F5E488B721",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 1.15,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.92,
   "pitch": -15.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C99160_FB54_5089_41E1_979CAE3AA726, this.camera_6598F814_551F_C9AD_41B1_54D0C99E3752); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFE49D22_FEF1_85BF_41DC_994196DFC984",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -22.75,
   "yaw": -179.52,
   "hfov": 9.13,
   "distance": 100
  }
 ],
 "id": "overlay_CCADD184_FC2E_BAFD_41DB_911FC84C760A",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -179.52,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.13,
   "pitch": -22.75
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0, this.camera_657C4799_551F_C6A7_41C0_65B38DD6149B); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C7D99C42_FC6F_8A7A_41D5_FB047A564A63",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.81,
   "yaw": -3.1,
   "hfov": 8.41,
   "distance": 100
  }
 ],
 "id": "overlay_E3FBFEED_FC16_860E_41D0_69392A879276",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -3.1,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.41,
   "pitch": -16.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305, this.camera_654DD7A1_551F_C6E7_41D1_80A517CF5D1F); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C7D82C42_FC6F_8A7A_41E6_F58D39F1540A",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -18.81,
   "yaw": 168.89,
   "hfov": 8.24,
   "distance": 100
  }
 ],
 "id": "overlay_D1949838_FC6A_8A16_41E9_315F615742C4",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 168.89,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.24,
   "pitch": -18.81
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919, this.camera_664CA82D_551F_C9FF_41C2_368A3A9C2C14); this.mainPlayList.set('selectedIndex', 40)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_73F77068_5505_7A64_41D3_FE73578FB13D",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -13.98,
   "yaw": 2.12,
   "hfov": 9.61,
   "distance": 100
  }
 ],
 "id": "overlay_D5331044_FC2A_BA7E_41E5_60A7637AD385",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 2.12,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.61,
   "pitch": -13.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9, this.camera_667E2825_551F_C9EF_41C8_004A9B4AA00F); this.mainPlayList.set('selectedIndex', 35)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C725BC52_FC6F_8A15_41E0_2623580D465D",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -24.7,
   "yaw": -148.72,
   "hfov": 8.99,
   "distance": 100
  }
 ],
 "id": "overlay_D0AE6896_FC15_8A1A_41E8_0124B6A368DF",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -148.72,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.99,
   "pitch": -24.7
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7C230CD_FB54_519B_41E9_16510D868321_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411, this.camera_7E222947_551F_CBAC_41C5_058CAD0C0622); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFD7AD22_FEF1_85BF_419F_3EF55B95DF4C",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -38.11,
   "yaw": 5.3,
   "hfov": 7.79,
   "distance": 100
  }
 ],
 "id": "overlay_E0D91F38_FC6F_8616_4195_D4E5A2BC35FD",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 5.3,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.79,
   "pitch": -38.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3, this.camera_7E39D950_551F_CBA4_41A4_79970E0E6081); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_0_HS_1_0.png",
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 151
     }
    ]
   },
   "pitch": -16.68,
   "yaw": 106.44,
   "hfov": 13.02
  }
 ],
 "id": "overlay_C7EA0253_FC15_9E1B_41EF_05CE093C33B3",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 106.44,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.02,
   "pitch": -16.68
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7CF34FD_FB54_517B_41EE_90965E36488D_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6, this.camera_64272724_551F_C7ED_41C5_04C2DB49F5B8); this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C7D55C42_FC6F_8A7A_41C5_9204A5D39D98",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.34,
   "yaw": 14.67,
   "hfov": 8.16,
   "distance": 100
  }
 ],
 "id": "overlay_E3C8A056_FC1A_9A1A_41EB_36C5F67D423A",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 14.67,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.16,
   "pitch": -19.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841, this.camera_645F3713_551F_C7AB_41A7_B58EBD1A5738); this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C7D5CC42_FC6F_8A7A_41C4_7BA5D2213D48",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -17.68,
   "yaw": -26.88,
   "hfov": 8.24,
   "distance": 50
  }
 ],
 "id": "overlay_D1BD606E_FC15_7A0A_41ED_F2244BC1054C",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -26.88,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.24,
   "pitch": -17.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C, this.camera_6450F71C_551F_C7DD_41BE_15B7C7AB19E0); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFE5BD22_FEF1_85BF_41B1_09673AD06EC8",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -20.98,
   "yaw": -135.17,
   "hfov": 7.48,
   "distance": 100
  }
 ],
 "id": "overlay_CAE526D1_FC2F_8617_41E7_6DC4BD252946",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -135.17,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.48,
   "pitch": -20.98
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "left": 0,
 "toolTipFontSize": 12,
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "ViewerAreaLabeled_4A22C319_52FA_DFA4_41B3_5649A9961700",
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "height": "99.975%",
 "playbackBarBorderRadius": 0,
 "minWidth": 1,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "class": "ViewerArea",
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "shadow": false,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "paddingRight": 0,
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "top": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "borderSize": 0,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBorderColor": "#FFFFFF",
 "data": {
  "name": "Komisioner"
 },
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "transitionDuration": 500
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32, this.camera_65DAE7F4_551F_C66D_41C2_E24672297DB4); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_24A0F744_3F15_23D4_41C8_8F1CBDC3D417",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -36.73,
   "yaw": -14.85,
   "hfov": 7.93,
   "distance": 100
  }
 ],
 "id": "overlay_E3D1A6D3_FC1B_861B_41E2_63CD584C671A",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -14.85,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.93,
   "pitch": -36.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071, this.camera_65AA87FC_551F_C65D_41C1_9C41B580648E); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_24A07744_3F15_23D4_41C4_0670B922810E",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -46.34,
   "yaw": 140.27,
   "hfov": 6.83,
   "distance": 100
  }
 ],
 "id": "overlay_2E1B99DC_3F35_6EF5_41A3_BFDB3385C15F",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 140.27,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.83,
   "pitch": -46.34
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C5F04C_FB55_D099_41DE_B3054555586B, this.camera_6516C7D3_551F_C6AB_41C3_B73EB94B7146); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFD49D22_FEF1_85BF_41ED_9D652FF766A1",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -46.09,
   "yaw": -93.61,
   "hfov": 6.87,
   "distance": 100
  }
 ],
 "id": "overlay_E0D2ACF2_FC6F_8A1A_41EE_E8BD2AB0D1E5",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -93.61,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.87,
   "pitch": -46.09
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(!this.Container_403E6DBF_50DD_02F8_41AB_A9C9A236DF2E.get('visible')){ this.setComponentVisibility(this.Container_403E6DBF_50DD_02F8_41AB_A9C9A236DF2E, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_403E6DBF_50DD_02F8_41AB_A9C9A236DF2E, false, 0, null, null, false) }"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0_HS_0_0.png",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 59
     }
    ]
   },
   "pitch": -9.49,
   "yaw": 137.25,
   "hfov": 5.71
  }
 ],
 "id": "overlay_E43E176A_FC36_860A_41CB_51106CD65D17",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Informasi Ruangan Ketua"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 137.25,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.71,
   "pitch": -9.49
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(!this.Container_4496DF1F_50EF_1FB8_41C9_3A945DA59A0D.get('visible')){ this.setComponentVisibility(this.Container_4496DF1F_50EF_1FB8_41C9_3A945DA59A0D, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_4496DF1F_50EF_1FB8_41C9_3A945DA59A0D, false, 0, null, null, false) }"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0_HS_1_0.png",
      "width": 71,
      "class": "ImageResourceLevel",
      "height": 51
     }
    ]
   },
   "pitch": -8.59,
   "yaw": 111.87,
   "hfov": 6.32
  }
 ],
 "id": "overlay_E41233F7_FC37_BE1A_41D5_DC6EBD83B0C5",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Informasi Ruangan Pak Adi"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0_HS_1_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 111.87,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.32,
   "pitch": -8.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0, this.camera_640E4735_551F_C7EF_41D2_B9103AD94A11); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFE89D22_FEF1_85BF_41E4_9EFEFB69BC62",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -38.33,
   "yaw": 81.61,
   "hfov": 7.77,
   "distance": 100
  }
 ],
 "id": "overlay_E04CEB20_FC6D_8E35_41E8_D79D1A94FEF5",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 81.61,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.77,
   "pitch": -38.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3, this.camera_6402873D_551F_C7DF_41C1_4693C49F1DC0); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFE8ED22_FEF1_85BF_41C7_9EF04C010509",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -39.51,
   "yaw": -2.9,
   "hfov": 7.64,
   "distance": 100
  }
 ],
 "id": "overlay_E0514C66_FC6E_8A3A_41E2_64889437119E",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -2.9,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.64,
   "pitch": -39.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53, this.camera_643A272D_551F_C7FF_41C7_E7257DE8464E); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_73F96063_5505_7A64_41C5_BA6D65ECF7C4",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -57.12,
   "yaw": -120.19,
   "hfov": 5.37,
   "distance": 100
  }
 ],
 "id": "overlay_C44ECA7D_FC2E_8E0F_41D4_00B89D504049",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -120.19,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.37,
   "pitch": -57.12
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "left": 0,
 "toolTipFontSize": 12,
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "ViewerAreaLabeled_4D2C5093_5505_3AA4_41A2_86FED9DCD0A9",
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "height": "99.975%",
 "playbackBarBorderRadius": 0,
 "minWidth": 1,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "class": "ViewerArea",
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "shadow": false,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "paddingRight": 0,
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "top": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "borderSize": 0,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBorderColor": "#FFFFFF",
 "data": {
  "name": "Visi dan Misi"
 },
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "transitionDuration": 500
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C230CD_FB54_519B_41E9_16510D868321, this.camera_7BA256C3_551F_C6A4_41D4_03A11303CAD2); this.mainPlayList.set('selectedIndex', 39)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C7241C52_FC6F_8A15_41EA_DAF7724C1A1F",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -25.5,
   "yaw": -93.93,
   "hfov": 5.69,
   "distance": 100
  }
 ],
 "id": "overlay_D2E2C701_FC17_87F6_41A2_DF7F0548BA08",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -93.93,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.69,
   "pitch": -25.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5, this.camera_7BB586CC_551F_C6BC_4186_1E961A422944); this.mainPlayList.set('selectedIndex', 41)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_73E9E069_5505_7A64_41AD_EEEC5FEC9437",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -24.74,
   "yaw": -2.03,
   "hfov": 8.99,
   "distance": 100
  }
 ],
 "id": "overlay_D39A28C3_FC17_8A7A_41D4_5F0D36149354",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -2.03,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.99,
   "pitch": -24.74
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7C3FBE7_FB54_3797_41E9_E841F348F5AE_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9, this.camera_7B9596E6_551F_C66C_41BD_5CBE8F93FC3F); this.mainPlayList.set('selectedIndex', 35)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D658B055_FC2A_9A1E_41E9_396E984DA6BA",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -28.64,
   "yaw": 11.97,
   "hfov": 11.19,
   "distance": 100
  }
 ],
 "id": "overlay_D978ABC7_FC35_8E7A_41C6_7D2E9FB7696E",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 11.97,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.19,
   "pitch": -28.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841, this.camera_7B8EE6D5_551F_C6AC_41B3_C3CAB78ED1BB); this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D6589055_FC2A_9A1E_41DE_DF6F0FF66041",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -29.9,
   "yaw": -151.5,
   "hfov": 8.58,
   "distance": 100
  }
 ],
 "id": "overlay_D6A0BE7D_FC36_860E_41DC_1E4B7BC2EC10",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -151.5,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.58,
   "pitch": -29.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5, this.camera_7B80E6DD_551F_C65C_41B5_5CAE14AE5F66); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFDC9D31_FEF1_859D_41E3_B11A0F1C23C3",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -27.99,
   "yaw": 109.66,
   "hfov": 8.74,
   "distance": 100
  }
 ],
 "id": "overlay_C18B2899_FC15_8A17_41A9_DB20852F4D6B",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 109.66,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.74,
   "pitch": -27.99
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "left": 0,
 "toolTipFontSize": 12,
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "ViewerAreaLabeled_68CDA88E_411D_2D55_41B7_28641BD0B315",
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "height": "99.975%",
 "playbackBarBorderRadius": 0,
 "minWidth": 1,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "class": "ViewerArea",
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "shadow": false,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "paddingRight": 0,
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "top": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "borderSize": 0,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBorderColor": "#FFFFFF",
 "data": {
  "name": "Floor Plan"
 },
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "transitionDuration": 500
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF, this.camera_64FBF757_551F_C7AB_41C6_F1C50AC89B66); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_70D93FA2_557D_C6E4_41CB_5D02096A43AE",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -14.84,
   "yaw": -4.42,
   "hfov": 6.86,
   "distance": 100
  }
 ],
 "id": "overlay_E3EBCD2F_FC17_8A0B_41D0_FEC1954DB537",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -4.42,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.86,
   "pitch": -14.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C8A092_FB54_3188_41DD_974B860C46BC, this.camera_64CB275F_551F_C65B_41B2_3273526CAE69); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_70D99FA2_557D_C6E4_418A_2BFDE0ACC48B",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -11.73,
   "yaw": 31.53,
   "hfov": 6.71,
   "distance": 100
  }
 ],
 "id": "overlay_E103732D_FC17_BE0E_41DC_0303644798A5",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 31.53,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.71,
   "pitch": -11.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452, this.camera_64161746_551F_C7AD_41D3_1EC5FF4E0C00); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_70D60FA2_557D_C6E4_41C4_F73A1586B56A",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -12.97,
   "yaw": -41.17,
   "hfov": 6.84,
   "distance": 100
  }
 ],
 "id": "overlay_E3C298A7_FC17_8A3A_41EB_1E0A338BA4A7",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -41.17,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.84,
   "pitch": -12.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416, this.camera_64E5774E_551F_C7BD_41AC_3B356358D26B); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFF9ED22_FEF1_85BF_41DC_0B321DFE9BF2",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -17.78,
   "yaw": -165.9,
   "hfov": 5.2,
   "distance": 100
  }
 ],
 "id": "overlay_CED1D509_FC76_BBF7_41EE_C26D56ECE5C3",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -165.9,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.2,
   "pitch": -17.78
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7CF3547_FB54_7097_41EA_96DFFE806949, this.camera_646FD6EE_551F_C67C_4197_A0CB798753EA); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D530D26C_FC6B_9E0E_41E3_50A5849A7E49",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -32.04,
   "yaw": -14.31,
   "hfov": 20.94,
   "distance": 100
  }
 ],
 "id": "overlay_E3F21FCF_FC1A_860A_41E8_6173105B766F",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -14.31,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.94,
   "pitch": -32.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0, this.camera_646396F7_551F_C66B_41A8_300487152033); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFE56D22_FEF1_85BF_41C6_CF2A0CC0A41D",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -26.17,
   "yaw": 164.01,
   "hfov": 6.08,
   "distance": 100
  }
 ],
 "id": "overlay_CADDDE20_FC2A_8635_41EE_3B601E444BB6",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 164.01,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.08,
   "pitch": -26.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFE2BD22_FEF1_85BF_41E2_EB3D69BB98B8",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -26.12,
   "yaw": 68.53,
   "hfov": 5.69,
   "distance": 100
  }
 ],
 "id": "overlay_CAD745DE_FC2B_BA0D_41EB_40C561483A0E",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 68.53,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.69,
   "pitch": -26.12
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6, this.camera_7E4BA90C_551F_CBBD_41C3_4E0A6318759D); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFEDDD22_FEF1_85BF_41D9_9B472C33F1F0",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -40.79,
   "yaw": -98.58,
   "hfov": 7.5,
   "distance": 100
  }
 ],
 "id": "overlay_E0E1475C_FC16_860E_41E7_12ACC06F3611",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -98.58,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.5,
   "pitch": -40.79
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(!this.Container_4A228319_52FA_DFA4_41D4_083CECE89EFB.get('visible')){ this.setComponentVisibility(this.Container_4A228319_52FA_DFA4_41D4_083CECE89EFB, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_4A228319_52FA_DFA4_41D4_083CECE89EFB, false, 0, null, null, false) }"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0_HS_1_0.png",
      "width": 66,
      "class": "ImageResourceLevel",
      "height": 85
     }
    ]
   },
   "pitch": 15.44,
   "yaw": -7.41,
   "hfov": 5.8
  }
 ],
 "id": "overlay_499F4C66_551D_4A6C_41D4_54A887B1C9B2",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "yaw": -7.41,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.8,
   "pitch": 15.44
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(!this.Container_4D41BCA1_5507_4AE7_41D3_EB1C9C0B37CB.get('visible')){ this.setComponentVisibility(this.Container_4D41BCA1_5507_4AE7_41D3_EB1C9C0B37CB, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_4D41BCA1_5507_4AE7_41D3_EB1C9C0B37CB, false, 0, null, null, false) }"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0_HS_2_0.png",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 61
     }
    ]
   },
   "pitch": 4.89,
   "yaw": 108.34,
   "hfov": 5.17
  }
 ],
 "id": "overlay_4ED5D59B_551D_3ADB_41A3_775797792604",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "yaw": 108.34,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.17,
   "pitch": 4.89
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(!this.Container_4EB7E3E3_5507_7E64_41B4_7E7928E27B07.get('visible')){ this.setComponentVisibility(this.Container_4EB7E3E3_5507_7E64_41B4_7E7928E27B07, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_4EB7E3E3_5507_7E64_41B4_7E7928E27B07, false, 0, null, null, false) }"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0_HS_3_0.png",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 68
     }
    ]
   },
   "pitch": 4.46,
   "yaw": 125.57,
   "hfov": 5.17
  }
 ],
 "id": "overlay_49B0A062_551F_3A64_41C8_DB32647754E0",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "yaw": 125.57,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.17,
   "pitch": 4.46
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_4D2C0093_5505_3AA4_41BA_A7B03341D2EA, true, 0, null, null, false)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0_HS_4_0.png",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 70
     }
    ]
   },
   "pitch": 5.1,
   "yaw": -163.42,
   "hfov": 5.16
  }
 ],
 "id": "overlay_4A9DFCB8_551F_4AE4_41BD_03F07AC56FDF",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "yaw": -163.42,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.16,
   "pitch": 5.1
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(!this.Container_4B22EBA8_530F_CEE4_41D3_3D92564E4854.get('visible')){ this.setComponentVisibility(this.Container_4B22EBA8_530F_CEE4_41D3_3D92564E4854, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_4B22EBA8_530F_CEE4_41D3_3D92564E4854, false, 0, null, null, false) }"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_0_HS_0_0.png",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 54
     }
    ]
   },
   "pitch": -6.83,
   "yaw": 41.9,
   "hfov": 5.15
  }
 ],
 "id": "overlay_E289C4AF_FC35_9A0B_4185_05F27B927EAA",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 41.9,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.15,
   "pitch": -6.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408, this.camera_7EDDC9B7_551F_CAEC_41D2_480965CFD1E7); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D527A275_FC6B_9E1E_41ED_40BE7920B5DA",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -36.26,
   "yaw": 105.79,
   "hfov": 14.3,
   "distance": 100
  }
 ],
 "id": "overlay_E13F1A06_FC6F_89FA_41D9_E2703B3587AA",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 105.79,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.3,
   "pitch": -36.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF, this.camera_7ECA59AF_551F_CAFC_41D1_1F859B8087E0); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5263275_FC6B_9E1E_4177_00BE21225F0C",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -47.23,
   "yaw": 165.21,
   "hfov": 12.5,
   "distance": 100
  }
 ],
 "id": "overlay_DE596FD0_FC6E_8615_41D9_39224D746327",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 165.21,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.5,
   "pitch": -47.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C59E53_FB55_D08F_41E8_A9C120712446, this.camera_7ED6F9BF_551F_CADC_41A0_C50CAC89AE94); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5267275_FC6B_9E1E_41D5_F55341D506E1",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -43.57,
   "yaw": -5.2,
   "hfov": 13.69,
   "distance": 100
  }
 ],
 "id": "overlay_E117B4ED_FC6E_BA0E_41C2_182A07187980",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -5.2,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.69,
   "pitch": -43.57
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919, this.camera_7EE34995_551F_CAAC_41BD_BE3D39F1E9AE); this.mainPlayList.set('selectedIndex', 40)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C7271C52_FC6F_8A15_41D5_63F59A1B872F",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -20.37,
   "yaw": 44.28,
   "hfov": 9.28,
   "distance": 100
  }
 ],
 "id": "overlay_D2071C62_FC1A_8A3A_41E3_F86E831CFAE6",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 44.28,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.28,
   "pitch": -20.37
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "left": 0,
 "toolTipFontSize": 12,
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "ViewerAreaLabeled_4D414CA1_5507_4AE7_41BA_10AE3A3FFD8E",
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "height": "99.975%",
 "playbackBarBorderRadius": 0,
 "minWidth": 1,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "class": "ViewerArea",
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "shadow": false,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "paddingRight": 0,
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "top": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "borderSize": 0,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBorderColor": "#FFFFFF",
 "data": {
  "name": "Alur Kerja"
 },
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "transitionDuration": 500
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C230CD_FB54_519B_41E9_16510D868321, this.camera_6553C7B2_551F_C6E5_41D3_B90F56A8F9C5); this.mainPlayList.set('selectedIndex', 39)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C728CC52_FC6F_8A15_41DA_CD6C9E37A307",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.7,
   "yaw": 19.74,
   "hfov": 5.93,
   "distance": 100
  }
 ],
 "id": "overlay_D7DFD252_FC36_9E15_41E4_460E857BBFC3",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 19.74,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.93,
   "pitch": -19.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC, this.camera_652017BA_551F_C6E5_41D0_5BA13C67C49C); this.mainPlayList.set('selectedIndex', 37)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C72B6C52_FC6F_8A15_41E4_91E017557148",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -17.67,
   "yaw": -65.56,
   "hfov": 5.88,
   "distance": 100
  }
 ],
 "id": "overlay_D5EA73D4_FC2D_FE1D_41EB_9B1EE1F5BE24",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -65.56,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.88,
   "pitch": -17.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFDDAD31_FEF1_859D_41EC_2253A11DC2C0",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -22.22,
   "yaw": -139.32,
   "hfov": 9.17,
   "distance": 100
  }
 ],
 "id": "overlay_C1EDF509_FDEA_FBF7_41EC_EF8A5F11991B",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -139.32,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.17,
   "pitch": -22.22
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6, this.camera_6543E7A9_551F_C6E7_41D2_300B71DE294C); this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFDD2D31_FEF1_859D_41D0_A58E310EFF00",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -21.51,
   "yaw": 167.59,
   "hfov": 9.21,
   "distance": 100
  }
 ],
 "id": "overlay_B8FDC8A2_FDEA_8A3A_41E4_7485C38665B3",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 167.59,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.21,
   "pitch": -21.51
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23, this.camera_7E553925_551F_CBEF_41C2_0682EA325CF4); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D52F226C_FC6B_9E0E_41EA_34B49263E534",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -30.29,
   "yaw": -4.71,
   "hfov": 16.71,
   "distance": 100
  }
 ],
 "id": "overlay_E3D4A5F6_FC1A_BA1A_41E3_DE1C9333BE3E",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -4.71,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.71,
   "pitch": -30.29
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452, this.camera_7E50392D_551F_CBFF_41C9_F20A015E149E); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_24BEC73C_3F15_23B4_41C5_250A82348778",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -37.15,
   "yaw": 157.6,
   "hfov": 15.42,
   "distance": 100
  }
 ],
 "id": "overlay_30B23661_3F15_65CC_41C1_F9B87026FB2C",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 157.6,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.42,
   "pitch": -37.15
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305, this.camera_65C4F7EB_551F_C67B_41CA_2C0355D35E38); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_32BE5211_3F07_62F3_41C4_7EE2CD164BCB",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -29.99,
   "yaw": -0.56,
   "hfov": 8.57,
   "distance": 100
  }
 ],
 "id": "overlay_E3B47028_FC15_7A36_41E2_DD1C40767B82",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -0.56,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.57,
   "pitch": -29.99
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(!this.Container_4891BFA3_5307_46E4_41CB_C5AF77B17DCF.get('visible')){ this.setComponentVisibility(this.Container_4891BFA3_5307_46E4_41CB_C5AF77B17DCF, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_4891BFA3_5307_46E4_41CB_C5AF77B17DCF, false, 0, null, null, false) }"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_1_HS_0_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ]
   },
   "pitch": -9.53,
   "yaw": -45.33,
   "hfov": 10.56
  }
 ],
 "id": "overlay_E2B21E1A_FC3A_860A_41E2_C3BDEE06AAFC",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -45.33,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.56,
   "pitch": -9.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD, this.camera_7E46F915_551F_CBAF_41C5_58B056C60FC9); this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_78EF54C5_5505_3AAC_41D2_3358A861BD99",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -30.86,
   "yaw": 4.62,
   "hfov": 10.94,
   "distance": 100
  }
 ],
 "id": "overlay_E1120FE6_FC6E_863A_41EC_183634326B96",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 4.62,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.94,
   "pitch": -30.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F, this.camera_7E5CB91D_551F_CBDF_41D4_6867A09C71B2); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_78EFB4C6_5505_3AAC_41B6_6C172B1B9AEA",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -34.62,
   "yaw": -169.02,
   "hfov": 11.02,
   "distance": 100
  }
 ],
 "id": "overlay_C471E7A5_FC1D_863F_41A2_8B66AB959102",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -169.02,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.02,
   "pitch": -34.62
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D52F526C_FC6B_9E0E_4195_6ED38C530BF5",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -25.39,
   "yaw": 7.39,
   "hfov": 10.51,
   "distance": 100
  }
 ],
 "id": "overlay_DE3F41B2_FC76_BA1A_41B1_3783BBEF3982",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 7.39,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.51,
   "pitch": -25.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841, this.camera_663D7846_551F_C9AD_4175_6E98943DED3B); this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D52FA26C_FC6B_9E0E_41C9_0B28E10F8085",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -51.01,
   "yaw": 44.1,
   "hfov": 9.65,
   "distance": 50
  }
 ],
 "id": "overlay_E1A10D61_FC76_8A37_41DF_B54A6E21725B",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 44.1,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.65,
   "pitch": -51.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D52E326C_FC6B_9E0E_41EA_D8C16A33F780",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -34.89,
   "yaw": -30.38,
   "hfov": 11.25,
   "distance": 50
  }
 ],
 "id": "overlay_DD7D8E30_FC75_8616_41EC_D98B447F4424",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -30.38,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.25,
   "pitch": -34.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359, this.camera_660D684E_551F_C9BD_41C0_84D8A645EDF8); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D52E826C_FC6B_9E0E_41E2_41FBCD9FCCFA",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -45.8,
   "yaw": -132.24,
   "hfov": 11.02,
   "distance": 50
  }
 ],
 "id": "overlay_DBE29AA8_FC6F_8E36_41DD_6904AAC36EFF",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_1_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -132.24,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.02,
   "pitch": -45.8
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F, this.camera_7F74EA0F_551F_C9BC_41B9_2C7B0CFECC72); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D65AB055_FC2A_9A1E_41B1_405DA683262D",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -48.31,
   "yaw": -148.27,
   "hfov": 8.81,
   "distance": 100
  }
 ],
 "id": "overlay_DAEC804F_FC35_9A0B_41EA_5F0E7861E1FE",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -148.27,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.81,
   "pitch": -48.31
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setComponentVisibility(this.Container_41696761_50F5_0F88_41B2_84BA5BF67443, true, 0, null, null, false)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_0_HS_1_0.png",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 55
     }
    ]
   },
   "pitch": -7.17,
   "yaw": 13.94,
   "hfov": 4.3
  }
 ],
 "id": "overlay_7546F735_551B_47EF_41CC_6C399CA79FAA",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "yaw": 13.94,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.3,
   "pitch": -7.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5, this.camera_7E7C18E8_551F_CA65_41C0_2C5D64C091A7); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C7DBBC42_FC6F_8A7A_41E6_227A00C3DB2B",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.17,
   "yaw": 6.38,
   "hfov": 9.91,
   "distance": 100
  }
 ],
 "id": "overlay_E023D86E_FC16_8A0D_41EB_431839739508",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 6.38,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.91,
   "pitch": -16.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0, this.camera_66032856_551F_C9AD_41D2_67805D5708D6); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFE68D22_FEF1_85BF_41E2_E16BFD064665",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -25.18,
   "yaw": -163.17,
   "hfov": 5.02,
   "distance": 100
  }
 ],
 "id": "overlay_CF054963_FC15_8A3A_41EE_1BB66913D56C",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -163.17,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.02,
   "pitch": -25.18
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(!this.Container_452A805E_530D_5A5C_41B3_E29CEA949412.get('visible')){ this.setComponentVisibility(this.Container_452A805E_530D_5A5C_41B3_E29CEA949412, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_452A805E_530D_5A5C_41B3_E29CEA949412, false, 0, null, null, false) }"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_1_HS_0_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ]
   },
   "pitch": -13.1,
   "yaw": -97.36,
   "hfov": 10.43
  }
 ],
 "id": "overlay_E215A2E0_FC3E_9E35_41E3_85A21E1A1F19",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -97.36,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.43,
   "pitch": -13.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F, this.camera_649FC788_551F_C6A5_41BA_6D9AA61F1A5E); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFEC0D22_FEF1_85BF_41DC_CD8D9AC37D1D",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -28.49,
   "yaw": -13.61,
   "hfov": 8.08,
   "distance": 100
  }
 ],
 "id": "overlay_E00F0758_FC6B_8616_41C6_F7AA4ABCD5C1",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -13.61,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.08,
   "pitch": -28.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408, this.camera_648F2780_551F_C6A5_41A5_F3C2DF0AC8B4); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_24A9D744_3F15_23D4_41CA_444BF4C8BC77",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.4,
   "yaw": 35.05,
   "hfov": 8.45,
   "distance": 50
  }
 ],
 "id": "overlay_E13DB509_FC6B_BBF7_41EA_236A87E09153",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 35.05,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.45,
   "pitch": -31.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6, this.camera_656DA790_551F_C6A5_4195_ED9679E71234); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_24A95744_3F15_23D4_41B3_819FF552CAD8",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -46.33,
   "yaw": 151.44,
   "hfov": 6.35,
   "distance": 100
  }
 ],
 "id": "overlay_2D269570_3F3F_27CC_41BC_8476AB234836",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 151.44,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.35,
   "pitch": -46.33
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7CA529B_FB54_31BF_41E6_37373892FB42, this.camera_7F628A07_551F_C9AC_41C8_915FB65280B3); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D52D126C_FC6B_9E0E_41E1_8A5604D3E340",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -23.57,
   "yaw": 0.93,
   "hfov": 16.6,
   "distance": 100
  }
 ],
 "id": "overlay_E3DBBA8A_FC1A_8E0A_41C9_EE50CDAF76D0",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 0.93,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.6,
   "pitch": -23.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFEE9D22_FEF1_85BF_41DD_FD349DD291C3",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -21.85,
   "yaw": 63.4,
   "hfov": 10.39,
   "distance": 100
  }
 ],
 "id": "overlay_CAF6362B_FC35_860B_41DF_037F65AF85B2",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 63.4,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.39,
   "pitch": -21.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFEEDD22_FEF1_85BF_41E6_2651E0501BED",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -22.66,
   "yaw": -62.01,
   "hfov": 10.33,
   "distance": 100
  }
 ],
 "id": "overlay_CA9CD105_FC35_9BFE_41E4_F8DDDE53E258",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -62.01,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.33,
   "pitch": -22.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0, this.camera_7F6999FF_551F_CA5C_41AD_10A3C57D25EE); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFEE3D22_FEF1_85BF_41D5_4E91E5832823",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -25.95,
   "yaw": -174.92,
   "hfov": 5.96,
   "distance": 100
  }
 ],
 "id": "overlay_CA8A1AB6_FC36_8E1D_41E0_B13301EA07F7",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -174.92,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.96,
   "pitch": -25.95
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841, this.camera_7BD426B1_551F_C6E4_41D3_1175D8313A78); this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFD3BD22_FEF1_85BF_41E9_E2DB5AABDC4C",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.16,
   "yaw": -3.12,
   "hfov": 8.15,
   "distance": 100
  }
 ],
 "id": "overlay_E365FABC_FC2A_8E0D_41E7_1C83229F8464",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_0_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -3.12,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.15,
   "pitch": -31.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C59E53_FB55_D08F_41E8_A9C120712446, this.camera_7BA946BA_551F_C6E4_41CB_D83A175FF822); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7EC91CAA_5505_4AE4_41D0_886543A66882",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -35.36,
   "yaw": 179.85,
   "hfov": 7.77,
   "distance": 100
  }
 ],
 "id": "overlay_C516F6F5_FC1E_861E_41A6_E3D2169F27F6",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 179.85,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.77,
   "pitch": -35.36
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7CD2384_FB54_7788_41E9_A16CDE578F24_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "ViewerAreaLabeled_5C0D808D_4EE8_D9A6_41C0_1C3BEDE14709",
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "minWidth": 1,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "class": "ViewerArea",
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "shadow": false,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "paddingRight": 0,
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "borderSize": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBorderColor": "#FFFFFF",
 "data": {
  "name": "Panduan Pengguna "
 },
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "transitionDuration": 500
},
{
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "left": 0,
 "toolTipFontSize": 12,
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "ViewerAreaLabeled_690C874B_411D_23D3_41BD_3353BCE022C4",
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "height": "99.975%",
 "playbackBarBorderRadius": 0,
 "minWidth": 1,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "class": "ViewerArea",
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "shadow": false,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "paddingRight": 0,
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "top": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "borderSize": 0,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBorderColor": "#FFFFFF",
 "data": {
  "name": "Floor Plan"
 },
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "transitionDuration": 500
},
{
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "left": 0,
 "toolTipFontSize": 12,
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "ViewerAreaLabeled_4EB7A3E3_5507_7E64_41C9_0B94553665C1",
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "height": "99.975%",
 "playbackBarBorderRadius": 0,
 "minWidth": 1,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "class": "ViewerArea",
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "shadow": false,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "paddingRight": 0,
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "top": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "borderSize": 0,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBorderColor": "#FFFFFF",
 "data": {
  "name": "Moto"
 },
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "transitionDuration": 500
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071, this.camera_644B770B_551F_C7BB_41C8_800222BDE565); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D52F926C_FC6B_9E0E_41DD_61B1ED6E2F12",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.59,
   "yaw": 5.2,
   "hfov": 21.05,
   "distance": 100
  }
 ],
 "id": "overlay_E3D634F2_FC1B_7A15_41ED_3D753FF0CFE5",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 5.2,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.05,
   "pitch": -31.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7CF3547_FB54_7097_41EA_96DFFE806949, this.camera_6477B702_551F_C7A5_4198_B82C2174A5BE); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_24BE173C_3F15_23B4_41B8_2908020B066E",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -50.8,
   "yaw": 178.51,
   "hfov": 15.62,
   "distance": 100
  }
 ],
 "id": "overlay_2F2F259D_3F17_2777_41C4_429577A7BA77",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 178.51,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.62,
   "pitch": -50.8
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416, this.camera_7E121985_551F_CAAC_41C7_6034CEFE79DA); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C7D94C42_FC6F_8A7A_41D0_BCB57EECC817",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -15.15,
   "yaw": -1.15,
   "hfov": 8.76,
   "distance": 100
  }
 ],
 "id": "overlay_E02FCA6C_FC16_8E0E_41EC_88166FA92ADD",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -1.15,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.76,
   "pitch": -15.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7F34017_FB54_F0B7_41ED_309E451028DF, this.camera_7EEB798D_551F_CABC_41BC_BC1BDC958DDD); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C7D9DC42_FC6F_8A7A_41CA_EC4B348C4470",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -27.07,
   "yaw": 167,
   "hfov": 8.09,
   "distance": 100
  }
 ],
 "id": "overlay_D39F7006_FC1A_F9FD_41CD_EA50077D7FDA",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 167,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.09,
   "pitch": -27.07
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(!this.Container_42DC0CFE_50D3_0278_4183_E277C28FB874.get('visible')){ this.setComponentVisibility(this.Container_42DC0CFE_50D3_0278_4183_E277C28FB874, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_42DC0CFE_50D3_0278_4183_E277C28FB874, false, 0, null, null, false) }"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0_HS_0_0.png",
      "width": 75,
      "class": "ImageResourceLevel",
      "height": 73
     }
    ]
   },
   "pitch": -12.39,
   "yaw": -58.61,
   "hfov": 6.66
  }
 ],
 "id": "overlay_E401CDB7_FC35_8A1A_41E6_F5E7654D64DC",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -58.61,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.66,
   "pitch": -12.39
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(!this.Container_4F1F5CCD_531E_CABC_41BD_D6C3386554A4.get('visible')){ this.setComponentVisibility(this.Container_4F1F5CCD_531E_CABC_41BD_D6C3386554A4, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_4F1F5CCD_531E_CABC_41BD_D6C3386554A4, false, 0, null, null, false) }"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0_HS_1_0.png",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 83
     }
    ]
   },
   "pitch": -13.97,
   "yaw": -17.73,
   "hfov": 7.27
  }
 ],
 "id": "overlay_E7CC7BD1_FC3A_8E17_41DD_5BC4F4B18A80",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -17.73,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.27,
   "pitch": -13.97
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(!this.Container_45D28F2A_531A_C7E5_41CA_A57AB2E0998C.get('visible')){ this.setComponentVisibility(this.Container_45D28F2A_531A_C7E5_41CA_A57AB2E0998C, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_45D28F2A_531A_C7E5_41CA_A57AB2E0998C, false, 0, null, null, false) }"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0_HS_2_0.png",
      "width": 81,
      "class": "ImageResourceLevel",
      "height": 81
     }
    ]
   },
   "pitch": -10.7,
   "yaw": 48.6,
   "hfov": 7.22
  }
 ],
 "id": "overlay_E7E7CFAD_FC3A_860F_41D7_9D5EAB3F94B4",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 48.6,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.22,
   "pitch": -10.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C5F04C_FB55_D099_41DE_B3054555586B, this.camera_653077C2_551F_C6A5_41D4_C668B82053E8); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0_HS_4_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ]
   },
   "pitch": -14.04,
   "yaw": 11.4,
   "hfov": 10.48
  }
 ],
 "id": "overlay_DA4ADB09_FC37_8FF6_41EB_024DA5E81BBD",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 11.4,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.48,
   "pitch": -14.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F, this.camera_6506D7CB_551F_C6BB_4197_604F6149B84F); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_70C09FAB_557D_C6E4_41D3_A94AAED4CE3D",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -51.45,
   "yaw": -147.86,
   "hfov": 11.89,
   "distance": 100
  }
 ],
 "id": "overlay_DA7EF3CA_FC35_9E0A_41E3_517B684B8179",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0_HS_5_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -147.86,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.89,
   "pitch": -51.45
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C99160_FB54_5089_41E1_979CAE3AA726, this.camera_65BB4804_551F_C9AD_41A6_448B4E88B9E8); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C7DA7C42_FC6F_8A7A_41B5_38B92E017820",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -20.08,
   "yaw": 0.84,
   "hfov": 7.22,
   "distance": 100
  }
 ],
 "id": "overlay_E3D70D69_FC16_8A37_41E9_538722E45B9C",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 0.84,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.22,
   "pitch": -20.08
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C8A092_FB54_3188_41DD_974B860C46BC, this.camera_6588980C_551F_C9BD_41CA_30C9E71E9B71); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFE62D22_FEF1_85BF_41C1_254C500C12B0",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -23.09,
   "yaw": -148.91,
   "hfov": 5.8,
   "distance": 100
  }
 ],
 "id": "overlay_CC7D62A2_FC2B_7E3A_41B9_05A096266CA7",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -148.91,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.8,
   "pitch": -23.09
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C21C78_FB54_7179_419E_28D7493848F4, this.camera_7E7698FB_551F_CA64_41A8_2EAA5BB0A733); this.mainPlayList.set('selectedIndex', 38)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0_HS_0_0.png",
      "width": 175,
      "class": "ImageResourceLevel",
      "height": 160
     }
    ]
   },
   "pitch": -15.36,
   "yaw": -0.05,
   "hfov": 15.22
  }
 ],
 "id": "overlay_D83B4366_FC3E_9E3A_41BC_C46FE14677A9",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -0.05,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.22,
   "pitch": -15.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4, this.camera_7E7B68F2_551F_CA65_4192_C35BDB03BA1D); this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C72A7C52_FC6F_8A15_41EA_77FDB7A3A4F2",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -38.89,
   "yaw": -83.67,
   "hfov": 7.71,
   "distance": 100
  }
 ],
 "id": "overlay_D40C4E6E_FC2A_860A_41E6_824AF06B37FD",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -83.67,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.71,
   "pitch": -38.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9, this.camera_7E4DD903_551F_CBAB_41C0_B9E9ECA4127A); this.mainPlayList.set('selectedIndex', 35)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFDB8D31_FEF1_859D_41CC_288D82AFC64B",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.1,
   "yaw": -177.07,
   "hfov": 8.48,
   "distance": 100
  }
 ],
 "id": "overlay_D4C7ED75_FC2B_8A1F_41C7_A145974F9964",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -177.07,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.48,
   "pitch": -31.1
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53, this.camera_7E9D49ED_551F_CA7C_41C9_B0CC81B0B697); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFED1D22_FEF1_85BF_41D6_544436FC8F9D",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -8.59,
   "yaw": 11.94,
   "hfov": 9.12,
   "distance": 100
  }
 ],
 "id": "overlay_C9BA4071_FC35_9A16_41D4_523E8936D830",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 11.94,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.12,
   "pitch": -8.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F, this.camera_7E94E9F6_551F_CA6C_41C9_33995600F5AF); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFED7D22_FEF1_85BF_41D2_10B2F30CCB37",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -42.63,
   "yaw": -128.69,
   "hfov": 6.62,
   "distance": 50
  }
 ],
 "id": "overlay_C407B665_FC37_863F_41C8_2BD61DC26921",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -128.69,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.62,
   "pitch": -42.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF, this.camera_7E8859E4_551F_CA6C_41B1_015CF26A4CA7); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EFEA0D22_FEF1_85BF_41E5_DB3EF560AB61",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -47.99,
   "yaw": -174.56,
   "hfov": 6.02,
   "distance": 50
  }
 ],
 "id": "overlay_C7B81195_FC37_9A1F_41CA_4539A5663E97",
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -174.56,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.02,
   "pitch": -47.99
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_tcap0.png",
    "width": 311,
    "class": "ImageResourceLevel",
    "height": 311
   }
  ]
 },
 "rotate": false,
 "inertia": false,
 "id": "panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "hfov": 37.5
},
{
 "id": "Container_678FB096_41FF_5D74_41CF_E229D5A1D3EB",
 "left": "0%",
 "width": 66,
 "scrollBarColor": "#000000",
 "children": [
  "this.Container_678F8096_41FF_5D74_41BC_7366FF86E317",
  "this.IconButton_678F9096_41FF_5D74_41C1_58C832A88B98"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "height": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "class": "Container",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "- COLLAPSE"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left"
},
{
 "id": "Container_678F6096_41FF_5D74_41C7_B4FD8D0F3B42",
 "left": "0%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_678F7096_41FF_5D74_41CF_21E2B071DB65",
  "this.IconButton_678DA097_41FF_5D74_41BD_384E45CA286B"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "100%",
 "top": "0%",
 "contentOpaque": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "height": "100%",
 "borderRadius": 0,
 "class": "Container",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "- EXPANDED"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left"
},
{
 "id": "Container_68CDB88E_411D_2D55_41CA_9A6DCEF278C4",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.ViewerAreaLabeled_68CDA88E_411D_2D55_41B7_28641BD0B315",
  "this.Container_68CD988E_411D_2D55_4197_D9A6D70477A6"
 ],
 "layout": "absolute",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "Container",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadow": true,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "center",
 "verticalAlign": "top"
},
{
 "id": "Container_690C974B_411D_23D3_41C8_501E7343F22B",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.ViewerAreaLabeled_690C874B_411D_23D3_41BD_3353BCE022C4",
  "this.Container_690CF74B_411D_23D3_41A3_BAA600598736"
 ],
 "layout": "absolute",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "Container",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadow": true,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "center",
 "verticalAlign": "top"
},
{
 "id": "Container_6A3ABF19_4135_637F_41C0_0279D03E8D55",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_6A3AAF1A_4135_637C_41C8_0109EB3842B0",
  "this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D"
 ],
 "layout": "absolute",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "Container",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadow": true,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "center",
 "verticalAlign": "top"
},
{
 "id": "Container_6DABAA65_411F_EDD4_41C0_6D518A534DFF",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.ViewerAreaLabeled_6DABDA65_411F_EDD4_41A5_28322A5D6B51",
  "this.Container_6DABCA65_411F_EDD4_41C2_4CCB4FA29C45"
 ],
 "layout": "absolute",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "Container",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadow": true,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "center",
 "verticalAlign": "top"
},
{
 "id": "Container_5E3371B9_4EA7_7BEE_41C3_941A435A1C0C",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.ViewerAreaLabeled_5E3351B9_4EA7_7BEE_41C0_F23FF434AE0B",
  "this.Container_5E3331B9_4EA7_7BEE_41BF_417A85E3F696"
 ],
 "layout": "absolute",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "Container",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadow": true,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "center",
 "verticalAlign": "top"
},
{
 "id": "Container_5C0D608D_4EE8_D9A6_41CB_C3D60EA5CFEA",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_5C0D508D_4EE8_D9A6_41D1_B78CAA4F4608",
  "this.ViewerAreaLabeled_5C0D808D_4EE8_D9A6_41C0_1C3BEDE14709"
 ],
 "layout": "vertical",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "7%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "Container",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadow": true,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "center",
 "verticalAlign": "top"
},
{
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_403E4DBF_50DD_02F8_41A1_B0DB5D60B7F7",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 20,
 "width": "91.574%",
 "paddingLeft": 33,
 "minHeight": 1,
 "borderSize": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 10,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.91,
 "minWidth": 1,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:37px;\"><B>Ruang Ketua</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:22px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:20px;\">Ruangan Ketua </SPAN><SPAN STYLE=\"font-size:20px;\">ditempati oleh </SPAN><SPAN STYLE=\"color:#333333;font-size:20px;\">I Gede Agus Astapa,S.Sos., S.I.Kom., M.M, yang bertugas sebagai ketua Komisi Penyiaran Indonesia Daerah Bali dan bertanggung jawab untuk mengkoordinasikan struktur KPID Bali</SPAN></SPAN></DIV></div>",
 "height": "99.582%",
 "data": {
  "name": "HTMLTeKxt53815sdketua"
 },
 "propagateClick": false,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingTop": 20,
 "backgroundColorRatios": [
  0.73
 ]
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_41F9EE4A_50D3_0198_41CE_C452E175C345",
 "transparencyActive": false,
 "right": "0.89%",
 "iconURL": "skin/IconButton_41F9EE4A_50D3_0198_41CE_C452E175C345.jpg",
 "paddingRight": 0,
 "width": "6.196%",
 "paddingLeft": 0,
 "pressedRollOverIconURL": "skin/IconButton_41F9EE4A_50D3_0198_41CE_C452E175C345_pressed_rollover.jpg",
 "minHeight": 50,
 "top": "1.65%",
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_41F9EE4A_50D3_0198_41CE_C452E175C345_pressed.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_403E6DBF_50DD_02F8_41AB_A9C9A236DF2E, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_41F9EE4A_50D3_0198_41CE_C452E175C345_rollover.jpg",
 "class": "IconButton",
 "height": "11.547%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_44991F1F_50EF_1FB8_41A4_684C60CC3B59",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 20,
 "width": "99.727%",
 "paddingLeft": 33,
 "minHeight": 1,
 "top": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 10,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:33px;\"><B>Ruang Bidang Kelembagaan</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:22px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:20px;\">Ruangan Bidang Kelembagaan ditempati oleh Nyoman Adi Sukerno, S.H., M.M sebagai koordinator kelembagaan di KPID Bali, yang bertugas mengatur kelembagaan seperti kepegawaian, uang kas masuk dan keluar, serta anggaran.</SPAN></SPAN></DIV></div>",
 "height": "100%",
 "data": {
  "name": "HTMLText53815"
 },
 "propagateClick": false,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingTop": 20,
 "backgroundColorRatios": [
  0.73
 ]
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_484CC462_533D_3A65_41AB_06F45C171462",
 "transparencyActive": false,
 "right": "1.01%",
 "iconURL": "skin/IconButton_484CC462_533D_3A65_41AB_06F45C171462.jpg",
 "paddingRight": 0,
 "width": "6.196%",
 "paddingLeft": 0,
 "pressedRollOverIconURL": "skin/IconButton_484CC462_533D_3A65_41AB_06F45C171462_pressed_rollover.jpg",
 "minHeight": 50,
 "top": "4.18%",
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_484CC462_533D_3A65_41AB_06F45C171462_pressed.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_4496DF1F_50EF_1FB8_41C9_3A945DA59A0D, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_484CC462_533D_3A65_41AB_06F45C171462_rollover.jpg",
 "class": "IconButton",
 "height": "11.547%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_41693761_50F5_0F88_41BD_6F42C977019D",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 20,
 "width": "99.383%",
 "paddingLeft": 33,
 "minHeight": 1,
 "top": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 10,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:33px;\"><B>Ruang Bidang Pengawasan Isi Siaran</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:22px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:20px;\">Ruangan Bidang Pengawasan Isi Siaran ditempati oleh I Gusti Agung Gede Agung Widiana Kepakisan, S.Sn., M.Ars yang menjabat sebagai Koordinator Pengawasan Isi Siaran di KPID Bali. Beliau bertugas memimpin tim monitoring dalam melakukan pengawasan terhadap konten siaran televisi dan radio.</SPAN><SPAN STYLE=\"color:#333333;\"> </SPAN></SPAN></DIV></div>",
 "height": "100%",
 "data": {
  "name": "HTMLText53815"
 },
 "propagateClick": false,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingTop": 20,
 "backgroundColorRatios": [
  0.73
 ]
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_4A821355_533D_7FAC_41BF_59E8637F8F4B",
 "transparencyActive": false,
 "right": "0.99%",
 "iconURL": "skin/IconButton_4A821355_533D_7FAC_41BF_59E8637F8F4B.jpg",
 "paddingRight": 0,
 "width": "6.173%",
 "paddingLeft": 0,
 "pressedRollOverIconURL": "skin/IconButton_4A821355_533D_7FAC_41BF_59E8637F8F4B_pressed_rollover.jpg",
 "minHeight": 50,
 "top": "4.58%",
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_4A821355_533D_7FAC_41BF_59E8637F8F4B_pressed.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_41696761_50F5_0F88_41B2_84BA5BF67443, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_4A821355_533D_7FAC_41BF_59E8637F8F4B_rollover.jpg",
 "class": "IconButton",
 "height": "20.833%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_42DC7CFE_50D3_0278_41C5_FD0BF5351AB1",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 20,
 "width": "99.776%",
 "paddingLeft": 33,
 "minHeight": 1,
 "top": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 10,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:37px;\"><B>Ruang Bidang PKSP</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:22px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:17px;\">Ruangan Bidang PKSP ditempati oleh Ida Bagus Gde Yogi Jenana Putra, S.E., yang menjabat sebagai Koordinator Pengelolaan Kebijakan Struktur Penyiaran di KPID Bali. Beliau bertugas menyusun dan melaksanakan kebijakan pengawasan isi siaran, evaluasi program siaran, serta perpanjangan izin penyelenggaraan penyiaran. Selain itu, beliau juga bertanggung jawab memastikan kepatuhan lembaga penyiaran terhadap standar dan pedoman yang berlaku, serta menerapkan sistem evaluasi tahunan dan post-audit perizinan</SPAN><SPAN STYLE=\"color:#333333;\">. </SPAN></SPAN></DIV></div>",
 "height": "100%",
 "data": {
  "name": "HTMLText53815"
 },
 "propagateClick": false,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingTop": 20,
 "backgroundColorRatios": [
  0.73
 ]
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_44F851AF_533D_5AFC_41D4_12286252830B",
 "transparencyActive": false,
 "right": "1.14%",
 "iconURL": "skin/IconButton_44F851AF_533D_5AFC_41D4_12286252830B.jpg",
 "paddingRight": 0,
 "width": "6.196%",
 "paddingLeft": 0,
 "pressedRollOverIconURL": "skin/IconButton_44F851AF_533D_5AFC_41D4_12286252830B_pressed_rollover.jpg",
 "minHeight": 50,
 "top": "3.7%",
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_44F851AF_533D_5AFC_41D4_12286252830B_pressed.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_42DC0CFE_50D3_0278_4183_E277C28FB874, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_44F851AF_533D_5AFC_41D4_12286252830B_rollover.jpg",
 "class": "IconButton",
 "height": "11.547%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_45D2AF2A_531A_C7E5_41AD_ABD6BDA9B49F",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 20,
 "width": "99.678%",
 "paddingLeft": 33,
 "minHeight": 1,
 "top": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 10,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:33px;\"><B>Ruang Bidang Pengawasan Isi Siaran</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:22px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:20px;\">Ruangan Bidang Pengawasan Isi Siaran ditempati oleh Drs. I Wayan Suyadnya yang menjabat sebagai Anggota Pengawasan isi siaran di KPID Bali. Beliau bertugas memimpin tim monitoring dalam melakukan pengawasan terhadap konten siaran televisi dan radio. Tetapi koordinasi tetap berada di bawah I Gusti Agung Gede Agung Widiana Kepakisan sebagai Koordinator Utama Pengawasan Isi Siaran.</SPAN></SPAN></DIV></div>",
 "height": "100%",
 "data": {
  "name": "HTMLText53815"
 },
 "propagateClick": false,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingTop": 20,
 "backgroundColorRatios": [
  0.73
 ]
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_44D10EBF_533D_46DC_41B9_E782E59CD38D",
 "transparencyActive": false,
 "right": "0.89%",
 "iconURL": "skin/IconButton_44D10EBF_533D_46DC_41B9_E782E59CD38D.jpg",
 "paddingRight": 0,
 "width": "6.188%",
 "paddingLeft": 0,
 "pressedRollOverIconURL": "skin/IconButton_44D10EBF_533D_46DC_41B9_E782E59CD38D_pressed_rollover.jpg",
 "minHeight": 50,
 "top": "5.42%",
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_44D10EBF_533D_46DC_41B9_E782E59CD38D_pressed.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_45D28F2A_531A_C7E5_41CA_A57AB2E0998C, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_44D10EBF_533D_46DC_41B9_E782E59CD38D_rollover.jpg",
 "class": "IconButton",
 "height": "20.833%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_456E7EF4_5305_466C_41D0_DCB82EE08203",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 20,
 "width": "99.678%",
 "paddingLeft": 33,
 "minHeight": 1,
 "top": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 10,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:33px;\"><B>Ruang Bidang Pengawasan Isi Siaran</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:22px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:20px;\">Ruangan Bidang Pengawasan Isi Siaran ditempati oleh </SPAN><SPAN STYLE=\"color:#333333;font-size:20px;\">Ni Wayan Yudiartini, S.E</SPAN><SPAN STYLE=\"font-size:20px;\"> yang menjabat sebagai Anggota Pengawasan isi siaran di KPID Bali. Beliau bertugas memimpin tim monitoring dalam melakukan pengawasan terhadap konten siaran televisi dan radio. Tetapi koordinasi tetap berada di bawah I Gusti Agung Gede Agung Widiana Kepakisan sebagai Koordinator Utama Pengawasan Isi Siaran.</SPAN></SPAN></DIV></div>",
 "height": "100%",
 "data": {
  "name": "HTMLText53815"
 },
 "propagateClick": false,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingTop": 20,
 "backgroundColorRatios": [
  0.73
 ]
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_49FB6823_533A_C9E4_41B4_043F8C05D12F",
 "transparencyActive": false,
 "right": "0.89%",
 "iconURL": "skin/IconButton_49FB6823_533A_C9E4_41B4_043F8C05D12F.jpg",
 "paddingRight": 0,
 "width": "6.196%",
 "paddingLeft": 0,
 "pressedRollOverIconURL": "skin/IconButton_49FB6823_533A_C9E4_41B4_043F8C05D12F_pressed_rollover.jpg",
 "minHeight": 50,
 "top": "2.1%",
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_49FB6823_533A_C9E4_41B4_043F8C05D12F_pressed.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_4891BFA3_5307_46E4_41CB_C5AF77B17DCF, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_49FB6823_533A_C9E4_41B4_043F8C05D12F_rollover.jpg",
 "class": "IconButton",
 "height": "21.008%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_452A605E_530D_5A5C_41D2_0BF20CDFD938",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 20,
 "width": "100%",
 "paddingLeft": 33,
 "minHeight": 1,
 "top": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 10,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:33px;\"><B>Ruang Wakil Ketua</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:22px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:19px;\">Ruangan Wakil Ketua ditempati oleh Drs. Ida Bagus Ketut Agung Ludra yang menjabat sebagai Wakil Ketua di KPID Bali sekaligus komisioner di bidang kelembagaan tetapi koordinatornya tetap Nyoman Adi Sukerno. Beliau bertugas mengawasi dan memastikan fungsi kelembagaan KPID berjalan sesuai dengan peraturan yang berlaku, mengkoordinasi antarbidang,  serta memperkuat struktur kelembagaan</SPAN><SPAN STYLE=\"font-size:20px;\">.</SPAN></SPAN></DIV></div>",
 "height": "100%",
 "data": {
  "name": "HTMLText53815"
 },
 "propagateClick": false,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingTop": 20,
 "backgroundColorRatios": [
  0.73
 ]
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_4BCAA023_533A_D9E4_41D1_BCC8EBA99069",
 "transparencyActive": false,
 "right": "2.25%",
 "iconURL": "skin/IconButton_4BCAA023_533A_D9E4_41D1_BCC8EBA99069.jpg",
 "paddingRight": 0,
 "width": "6.196%",
 "paddingLeft": 0,
 "pressedRollOverIconURL": "skin/IconButton_4BCAA023_533A_D9E4_41D1_BCC8EBA99069_pressed_rollover.jpg",
 "minHeight": 50,
 "top": "3.29%",
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_4BCAA023_533A_D9E4_41D1_BCC8EBA99069_pressed.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_452A805E_530D_5A5C_41B3_E29CEA949412, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_4BCAA023_533A_D9E4_41D1_BCC8EBA99069_rollover.jpg",
 "class": "IconButton",
 "height": "11.547%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_4F1F6CCD_531E_CABC_41BA_E2D3D2774052",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 20,
 "width": "100%",
 "paddingLeft": 33,
 "minHeight": 1,
 "top": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 10,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:33px;\"><B>Ruang Monitoring</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:22px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:20px;\">Ruangan monitoring dilengkapi dengan beberapa televisi dan radio yang berfungsi sebagai penunjang kegiatan pemantauan siaran televisi dan radio setelah tayang. Selain itu, ruangan ini juga dilengkapi dengan komputer editing yang digunakan untuk mengedit video kegiatan KPID Bali.</SPAN></SPAN></DIV></div>",
 "height": "100%",
 "data": {
  "name": "HTMLText53815"
 },
 "propagateClick": false,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingTop": 20,
 "backgroundColorRatios": [
  0.73
 ]
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_44238FCA_530D_46A5_41B3_D8FBEFC0B4DA",
 "transparencyActive": false,
 "right": "1.5%",
 "iconURL": "skin/IconButton_44238FCA_530D_46A5_41B3_D8FBEFC0B4DA.jpg",
 "paddingRight": 0,
 "width": "6.196%",
 "paddingLeft": 0,
 "pressedRollOverIconURL": "skin/IconButton_44238FCA_530D_46A5_41B3_D8FBEFC0B4DA_pressed_rollover.jpg",
 "minHeight": 50,
 "top": "3.27%",
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_44238FCA_530D_46A5_41B3_D8FBEFC0B4DA_pressed.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_4F1F5CCD_531E_CABC_41BD_D6C3386554A4, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_44238FCA_530D_46A5_41B3_D8FBEFC0B4DA_rollover.jpg",
 "class": "IconButton",
 "height": "11.547%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "id": "HTMLText_4B223BA8_530F_CEE4_41A7_18EB5C9490E8",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 20,
 "width": "99.85%",
 "paddingLeft": 33,
 "minHeight": 1,
 "top": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 10,
 "borderSize": 0,
 "backgroundOpacity": 0.91,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:37px;\"><B>Ruang Administrasi</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:22px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:19px;\">Ruangan Admin bertugas mengelola administrasi, termasuk keuangan dan berbagai kegiatan baik di dalam maupun luar daerah, seperti perjalanan dinas, literasi media ke sekolah, kampus, dan lembaga penyiaran seperti radio dan televisi. Selain itu, ruangan ini juga menangani surat-menyurat dengan organisasi perangkat daerah lain sebagai bentuk sinergitas, serta menerima aduan dari masyarakat terkait tayangan televisi atau radio yang melanggar Undang-Undang No. 32 tentang Penyiaran, maupun Pedoman Perilaku Penyiaran dan Standar Program Siaran.</SPAN></SPAN></DIV></div>",
 "height": "100%",
 "data": {
  "name": "HTMLText53815"
 },
 "propagateClick": false,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingTop": 20,
 "backgroundColorRatios": [
  0.73
 ]
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_777DBE64_551F_466C_41CE_D32810F368BA",
 "transparencyActive": false,
 "right": "3%",
 "iconURL": "skin/IconButton_777DBE64_551F_466C_41CE_D32810F368BA.jpg",
 "paddingRight": 0,
 "width": "6.196%",
 "paddingLeft": 0,
 "pressedRollOverIconURL": "skin/IconButton_777DBE64_551F_466C_41CE_D32810F368BA_pressed_rollover.jpg",
 "minHeight": 50,
 "top": "5.65%",
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_777DBE64_551F_466C_41CE_D32810F368BA_pressed.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_4B22EBA8_530F_CEE4_41D3_3D92564E4854, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_777DBE64_551F_466C_41CE_D32810F368BA_rollover.jpg",
 "class": "IconButton",
 "height": "11.547%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "id": "Container_4A22D319_52FA_DFA4_41D0_0DFD871973ED",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.ViewerAreaLabeled_4A22C319_52FA_DFA4_41B3_5649A9961700",
  "this.Container_4A22A319_52FA_DFA4_41D2_ADFC552A607A"
 ],
 "layout": "absolute",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "Container",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadow": true,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "center",
 "verticalAlign": "top"
},
{
 "id": "Container_4D2C4093_5505_3AA4_41C3_BB7605C2B061",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.ViewerAreaLabeled_4D2C5093_5505_3AA4_41A2_86FED9DCD0A9",
  "this.Container_4D2C6093_5505_3AA4_41B4_FEF0797B2B19"
 ],
 "layout": "absolute",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "Container",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadow": true,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "center",
 "verticalAlign": "top"
},
{
 "id": "Container_4D417CA1_5507_4AE7_41D2_3234D656BC5F",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.ViewerAreaLabeled_4D414CA1_5507_4AE7_41BA_10AE3A3FFD8E",
  "this.Container_4D415CA1_5507_4AE7_41AF_40DD168A0306"
 ],
 "layout": "absolute",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "Container",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadow": true,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "center",
 "verticalAlign": "top"
},
{
 "id": "Container_4EB453E3_5507_7E64_41D4_59051E24DB3D",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.ViewerAreaLabeled_4EB7A3E3_5507_7E64_41C9_0B94553665C1",
  "this.Container_4EB7B3E3_5507_7E64_41C5_3EEF54841AAB"
 ],
 "layout": "absolute",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "Container",
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadow": true,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "center",
 "verticalAlign": "top"
},
{
 "levels": [
  {
   "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_D5241275_FC6B_9E1E_41DD_BA93FFA8E3F7",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_D526C275_FC6B_9E1E_41E9_635D5138FF51",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_D5252275_FC6B_9E1E_41E5_25B929F34B0A",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_D5258275_FC6B_9E1E_41E8_DF3F565E3349",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_F7C5D74E_FB54_3099_41E3_23EDA034E841_0_HS_4_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFD12D22_FEF1_85BF_41D5_65CC36263652",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_24A55744_3F15_23D4_41A2_8551AE760B8B",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFEFFD22_FEF1_85BF_41EF_111E0D04B7AE",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_24A4A744_3F15_23D4_41C7_480356254D7D",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7CA529B_FB54_31BF_41E6_37373892FB42_0_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_24A43744_3F15_23D4_41CE_65A12F009656",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_C7DA0C42_FC6F_8A7A_41DF_61FCF68E71C0",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C99160_FB54_5089_41E1_979CAE3AA726_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFE7CD22_FEF1_85BF_41D8_E9E31568B1CA",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_D52FC26C_FC6B_9E0E_41E5_1BDE3AFDEECA",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7CD6EFE_FB54_7179_41CA_9DF8635BB071_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_24A15744_3F15_23D4_41B6_888E823269C8",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_D658D055_FC2A_9A1E_41D4_989DC25824E3",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7CF2078_FB54_5179_41D8_F480D0E35FD4_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFDE2D31_FEF1_859D_41C3_7B973E4A64B5",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_D52A1274_FC6B_9E1E_41E6_BC4EECCDA613",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_F7C7ED81_FB55_D38B_41E9_A86BC397FB53_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFEBCD22_FEF1_85BF_41BB_ACA58389406A",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFEF6D22_FEF1_85BF_41A3_9BD461955ADA",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFECDD22_FEF1_85BF_41D4_038A385B2A2F",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7CAE727_FB54_3097_41C8_429BCC29E0A6_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFEC6D22_FEF1_85BF_41BB_08F2681D4AFB",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_C7DA8C42_FC6F_8A7A_41EC_0274D0BE3472",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F73635F4_FB54_5389_41CA_DBF0CDA3C67C_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFE49D22_FEF1_85BF_41DC_994196DFC984",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_C7D99C42_FC6F_8A7A_41D5_FB047A564A63",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F73642D3_FB54_D18F_41EE_A3E50BC44416_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_C7D82C42_FC6F_8A7A_41E6_F58D39F1540A",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_73F77068_5505_7A64_41D3_FE73578FB13D",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C230CD_FB54_519B_41E9_16510D868321_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_C725BC52_FC6F_8A15_41E0_2623580D465D",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C5F04C_FB55_D099_41DE_B3054555586B_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFD7AD22_FEF1_85BF_419F_3EF55B95DF4C",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_C7D55C42_FC6F_8A7A_41C5_9204A5D39D98",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_C7D5CC42_FC6F_8A7A_41C4_7BA5D2213D48",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_F7C06AD3_FB54_518F_41D5_1D3A40E47ED5_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFE5BD22_FEF1_85BF_41B1_09673AD06EC8",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_24A0F744_3F15_23D4_41C8_8F1CBDC3D417",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7CA73A2_FB54_5788_41C4_98FE5B9AC359_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_24A07744_3F15_23D4_41C4_0670B922810E",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C52586_FB55_D389_41BD_A99BAC3AF411_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFD49D22_FEF1_85BF_41ED_9D652FF766A1",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFE89D22_FEF1_85BF_41E4_9EFEFB69BC62",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFE8ED22_FEF1_85BF_41C7_9EF04C010509",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C702F1_FB55_F188_41E7_8394E9D2A73F_0_HS_4_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_73F96063_5505_7A64_41C5_BA6D65ECF7C4",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_C7241C52_FC6F_8A15_41EA_DAF7724C1A1F",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C0D54A_FB54_5099_41E3_E4A0087EA919_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_73E9E069_5505_7A64_41AD_EEEC5FEC9437",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_D658B055_FC2A_9A1E_41E9_396E984DA6BA",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_D6589055_FC2A_9A1E_41DE_DF6F0FF66041",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C18976_FB54_5089_41D1_F9333FE8A9C6_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFDC9D31_FEF1_859D_41E3_B11A0F1C23C3",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_70D93FA2_557D_C6E4_41CB_5D02096A43AE",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_70D99FA2_557D_C6E4_418A_2BFDE0ACC48B",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_70D60FA2_557D_C6E4_41C4_F73A1586B56A",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7360C11_FB54_D08B_41C9_EE0CE40F5BF0_0_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFF9ED22_FEF1_85BF_41DC_0B321DFE9BF2",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_D530D26C_FC6B_9E0E_41E3_50A5849A7E49",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFE56D22_FEF1_85BF_41C6_CF2A0CC0A41D",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7CC5063_FB54_708F_41E5_12D5CBE4D452_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFE2BD22_FEF1_85BF_41E2_EB3D69BB98B8",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C72060_FB55_D088_41DA_72DD45FD8518_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFEDDD22_FEF1_85BF_41D9_9B472C33F1F0",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_D527A275_FC6B_9E1E_41ED_40BE7920B5DA",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_1_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_D5263275_FC6B_9E1E_4177_00BE21225F0C",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C3E9DA_FB55_D3B9_41E8_6E281D46B50F_1_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_D5267275_FC6B_9E1E_41D5_F55341D506E1",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7CA29CB_FB54_539F_41BD_AE712D184BA5_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_C7271C52_FC6F_8A15_41D5_63F59A1B872F",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_C728CC52_FC6F_8A15_41DA_CD6C9E37A307",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_C72B6C52_FC6F_8A15_41E4_91E017557148",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFDDAD31_FEF1_859D_41EC_2253A11DC2C0",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C81E8D_FB54_519B_41DB_ADA9516C2EE9_0_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFDD2D31_FEF1_859D_41D0_A58E310EFF00",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_D52F226C_FC6B_9E0E_41EA_34B49263E534",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7CF3547_FB54_7097_41EA_96DFFE806949_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_24BEC73C_3F15_23B4_41C5_250A82348778",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7F34017_FB54_F0B7_41ED_309E451028DF_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_32BE5211_3F07_62F3_41C4_7EE2CD164BCB",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_78EF54C5_5505_3AAC_41D2_3358A861BD99",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C59E53_FB55_D08F_41E8_A9C120712446_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_78EFB4C6_5505_3AAC_41B6_6C172B1B9AEA",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_D52F526C_FC6B_9E0E_4195_6ED38C530BF5",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_D52FA26C_FC6B_9E0E_41C9_0B28E10F8085",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_D52E326C_FC6B_9E0E_41EA_D8C16A33F780",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_F7D15858_FB54_50B9_41E6_459FAB5A7E32_1_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_D52E826C_FC6B_9E0E_41E2_41FBCD9FCCFA",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_F7C57777_FB55_FF77_41BF_EA6B8B98A8B0_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_D65AB055_FC2A_9A1E_41B1_405DA683262D",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_C7DBBC42_FC6F_8A7A_41E6_227A00C3DB2B",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C8A092_FB54_3188_41DD_974B860C46BC_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFE68D22_FEF1_85BF_41E2_E16BFD064665",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFEC0D22_FEF1_85BF_41DC_CD8D9AC37D1D",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_24A9D744_3F15_23D4_41CA_444BF4C8BC77",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_F7C5B4E8_FB55_D198_41D6_F40D91A501EF_0_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_24A95744_3F15_23D4_41B3_819FF552CAD8",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_D52D126C_FC6B_9E0E_41E1_8A5604D3E340",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFEE9D22_FEF1_85BF_41DD_FD349DD291C3",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFEEDD22_FEF1_85BF_41E6_2651E0501BED",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C09D4C_FB54_5099_41D9_C79A4601F3DF_0_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFEE3D22_FEF1_85BF_41D5_4E91E5832823",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_0_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_EFD3BD22_FEF1_85BF_41E9_E2DB5AABDC4C",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_F7C402D8_FB54_31B9_41E8_E3409BFC66DD_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_7EC91CAA_5505_4AE4_41D0_886543A66882",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_D52F926C_FC6B_9E0E_41DD_61B1ED6E2F12",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7D00A0C_FB54_7099_41DB_DECE7B922C23_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_24BE173C_3F15_23B4_41B8_2908020B066E",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_C7D94C42_FC6F_8A7A_41D0_BCB57EECC817",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F733CE5D_FB54_F0BB_41C5_5B8073AC3305_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_C7D9DC42_FC6F_8A7A_41CA_EC4B348C4470",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C5FBF4_FB55_F788_41E2_AAFFAB097ED3_0_HS_5_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_70C09FAB_557D_C6E4_41D3_A94AAED4CE3D",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_C7DA7C42_FC6F_8A7A_41B5_38B92E017820",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F736ECCA_FB54_3199_41EA_5EDE3DB9E1A5_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFE62D22_FEF1_85BF_41C1_254C500C12B0",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_C72A7C52_FC6F_8A15_41EA_77FDB7A3A4F2",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7CC27FE_FB54_7F79_41DE_55331E2436AC_0_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFDB8D31_FEF1_859D_41CC_288D82AFC64B",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "frameCount": 9,
 "rowCount": 3,
 "id": "AnimatedImageResource_EFED1D22_FEF1_85BF_41D6_544436FC8F9D",
 "class": "AnimatedImageResource",
 "colCount": 3
},
{
 "levels": [
  {
   "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_EFED7D22_FEF1_85BF_41D2_10B2F30CCB37",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_F7C7992F_FB55_D097_41E0_9EE0A9F0C408_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_EFEA0D22_FEF1_85BF_41E5_DB3EF560AB61",
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "width": 36,
 "id": "Container_678F8096_41FF_5D74_41BC_7366FF86E317",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "height": "100%",
 "borderSize": 0,
 "backgroundOpacity": 0.4,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Container black"
 },
 "paddingTop": 0,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "horizontalAlign": "left"
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_678F9096_41FF_5D74_41C1_58C832A88B98",
 "left": 10,
 "transparencyActive": true,
 "width": 44,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_678F9096_41FF_5D74_41C1_58C832A88B98.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "40%",
 "bottom": "40%",
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_678F6096_41FF_5D74_41C7_B4FD8D0F3B42, true, 0, this.effect_4CD06BFB_5705_AD47_41BD_DD626E481855, 'showEffect', false); this.setComponentVisibility(this.Container_678FB096_41FF_5D74_41CF_E229D5A1D3EB, false, 0, this.effect_4DE9D19D_5705_5DFD_41C8_A84F2FF661E6, 'hideEffect', false)",
 "rollOverIconURL": "skin/IconButton_678F9096_41FF_5D74_41C1_58C832A88B98_rollover.png",
 "class": "IconButton",
 "propagateClick": true,
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton arrow"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "width": 300,
 "id": "Container_678F7096_41FF_5D74_41CF_21E2B071DB65",
 "scrollBarColor": "#000000",
 "children": [
  "this.Image_678F5096_41FF_5D74_419B_179234217523",
  "this.Container_678F2096_41FF_5D74_41CB_4988D783A98C",
  "this.Container_678C5096_41FF_5D74_41A4_FD37BA808918",
  "this.HTMLText_68906EDF_41F3_22F4_41BE_B120C0250953"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 40,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 40,
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 40,
 "height": "100%",
 "borderSize": 0,
 "backgroundOpacity": 0.7,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "Container"
 },
 "paddingTop": 40,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "horizontalAlign": "left"
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_678DA097_41FF_5D74_41BD_384E45CA286B",
 "transparencyActive": true,
 "width": 44,
 "right": 9,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_678DA097_41FF_5D74_41BD_384E45CA286B.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "40%",
 "bottom": "40%",
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_678F6096_41FF_5D74_41C7_B4FD8D0F3B42, false, 0, this.effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E, 'hideEffect', false); this.setComponentVisibility(this.Container_678FB096_41FF_5D74_41CF_E229D5A1D3EB, true, 0, this.effect_4E3E2032_5705_DAC6_41CE_6A6E562AB368, 'showEffect', false)",
 "rollOverIconURL": "skin/IconButton_678DA097_41FF_5D74_41BD_384E45CA286B_rollover.png",
 "class": "IconButton",
 "propagateClick": true,
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton collapse"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "id": "Container_68CD988E_411D_2D55_4197_D9A6D70477A6",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.IconButton_68CD888E_411D_2D55_41C6_8965AF810917"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "height": 140,
 "borderRadius": 0,
 "class": "Container",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "header"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left"
},
{
 "id": "Container_690CF74B_411D_23D3_41A3_BAA600598736",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.IconButton_690CE74B_411D_23D3_41C5_F012C794F8CF"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "height": 140,
 "borderRadius": 0,
 "class": "Container",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "header"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left"
},
{
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "id": "Container_6A3AAF1A_4135_637C_41C8_0109EB3842B0",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.IconButton_6A3A5F1A_4135_637C_41BD_4083BE185595"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "contentOpaque": false,
 "height": 140,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "class": "Container",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "header"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "itemMaxWidth": 1000,
 "left": 0,
 "itemLabelHorizontalAlign": "center",
 "id": "ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D",
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "itemMode": "normal",
 "itemLabelFontStyle": "normal",
 "itemPaddingRight": 3,
 "paddingLeft": 70,
 "scrollBarOpacity": 0.5,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemThumbnailOpacity": 1,
 "minHeight": 1,
 "itemBorderRadius": 0,
 "itemLabelFontFamily": "Oswald",
 "height": "92%",
 "itemMaxHeight": 1000,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "paddingBottom": 70,
 "itemOpacity": 1,
 "itemPaddingLeft": 3,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemHorizontalAlign": "center",
 "class": "ThumbnailGrid",
 "width": "100%",
 "itemThumbnailBorderRadius": 0,
 "propagateClick": false,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "shadow": false,
 "horizontalAlign": "center",
 "itemBackgroundColorRatios": [],
 "itemWidth": 220,
 "selectedItemThumbnailShadow": true,
 "itemMinHeight": 50,
 "paddingRight": 70,
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailGrid_6A3A4F1A_4135_637C_41CC_7DFFE946C73D_playlist",
 "borderSize": 0,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "bottom": -0.2,
 "scrollBarMargin": 2,
 "itemVerticalAlign": "top",
 "itemLabelFontSize": 16,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailScaleMode": "fit_outside",
 "itemThumbnailHeight": 125,
 "itemLabelFontColor": "#666666",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "borderRadius": 5,
 "itemMinWidth": 50,
 "itemHeight": 160,
 "itemLabelGap": 7,
 "gap": 26,
 "itemThumbnailShadow": false,
 "itemBackgroundColorDirection": "vertical",
 "data": {
  "name": "ThumbnailList"
 },
 "paddingTop": 10,
 "itemPaddingBottom": 3,
 "scrollBarWidth": 10,
 "itemThumbnailWidth": 220
},
{
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "left": 0,
 "toolTipFontSize": 12,
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "ViewerAreaLabeled_6DABDA65_411F_EDD4_41A5_28322A5D6B51",
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "height": "99.975%",
 "playbackBarBorderRadius": 0,
 "minWidth": 1,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "class": "ViewerArea",
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "shadow": false,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "paddingRight": 0,
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "top": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "borderSize": 0,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBorderColor": "#FFFFFF",
 "data": {
  "name": "Video"
 },
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "transitionDuration": 500
},
{
 "id": "Container_6DABCA65_411F_EDD4_41C2_4CCB4FA29C45",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.IconButton_6DABFA65_411F_EDD4_41C4_43D2632A5DB1"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "height": 140,
 "borderRadius": 0,
 "class": "Container",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "header"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left"
},
{
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "left": 0,
 "toolTipFontSize": 12,
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "ViewerAreaLabeled_5E3351B9_4EA7_7BEE_41C0_F23FF434AE0B",
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "height": "99.975%",
 "playbackBarBorderRadius": 0,
 "minWidth": 1,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "class": "ViewerArea",
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "shadow": false,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "paddingRight": 0,
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "top": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "borderSize": 0,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBorderColor": "#FFFFFF",
 "data": {
  "name": "Informasi"
 },
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "transitionDuration": 500
},
{
 "id": "Container_5E3331B9_4EA7_7BEE_41BF_417A85E3F696",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.IconButton_5E3301B9_4EA7_7BEE_418C_B1CFB4145594"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "height": 140,
 "borderRadius": 0,
 "class": "Container",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "header"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left"
},
{
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "id": "Container_5C0D508D_4EE8_D9A6_41D1_B78CAA4F4608",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.HTMLText_5C0D408D_4EE8_D9A6_41AF_264A39C472C4",
  "this.IconButton_5C0DA08D_4EE8_D9A6_41A2_51EC3F0AC7F4",
  "this.HTMLText_5C97982F_4EE9_C8E2_41CE_0838157CB4C2"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "contentOpaque": false,
 "height": 262.4,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "class": "Container",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "header"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_4A22A319_52FA_DFA4_41D2_ADFC552A607A",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.IconButton_4A229319_52FA_DFA4_41C6_F5261AFB4689"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "height": 140,
 "borderRadius": 0,
 "class": "Container",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "header"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left"
},
{
 "id": "Container_4D2C6093_5505_3AA4_41B4_FEF0797B2B19",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.IconButton_4D2C7093_5505_3AA4_41D0_DBEDF2179385"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "height": 140,
 "borderRadius": 0,
 "class": "Container",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "header"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left"
},
{
 "id": "Container_4D415CA1_5507_4AE7_41AF_40DD168A0306",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.IconButton_4D41ACA1_5507_4AE7_41CA_C6FF9EC6FFF2"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "height": 140,
 "borderRadius": 0,
 "class": "Container",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "header"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left"
},
{
 "id": "Container_4EB7B3E3_5507_7E64_41C5_3EEF54841AAB",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.IconButton_4EB793E3_5507_7E64_41B8_37D7656B7A97"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "height": 140,
 "borderRadius": 0,
 "class": "Container",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "header"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left"
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_678F5096_41FF_5D74_419B_179234217523",
 "left": "0%",
 "width": "32.455%",
 "paddingRight": 0,
 "url": "skin/Image_678F5096_41FF_5D74_419B_179234217523.png",
 "paddingLeft": 0,
 "minHeight": 30,
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "minWidth": 40,
 "height": "12.342%",
 "borderRadius": 0,
 "class": "Image",
 "verticalAlign": "top",
 "data": {
  "name": "Image Company"
 },
 "propagateClick": true,
 "shadow": false,
 "scaleMode": "fit_inside",
 "paddingTop": 0,
 "horizontalAlign": "left"
},
{
 "id": "Container_678F2096_41FF_5D74_41CB_4988D783A98C",
 "scrollBarColor": "#000000",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_678F3096_41FF_5D74_41C1_74FBE5E3417A",
  "this.Button_678F0096_41FF_5D74_41B3_91C47850D8C2",
  "this.Container_678F1096_41FF_5D74_41C6_7F55F8A07CFF",
  "this.Button_678CE096_41FF_5D74_41C9_F79F63FB0C96",
  "this.Container_678CF096_41FF_5D74_41C0_57B4AB191BBE",
  "this.Button_678CC096_41FF_5D74_41C5_136988E60418",
  "this.Container_678CD096_41FF_5D74_41CF_93A59FA9C874",
  "this.Button_678CB096_41FF_5D74_4178_4262DABA92DC",
  "this.Container_678C8096_41FF_5D74_41C5_F12150CA22C1",
  "this.Container_678C6096_41FF_5D74_41A5_3A69FCE73F16",
  "this.Container_678C4096_41FF_5D74_41A0_A288187BAAD4"
 ],
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "width": "100%",
 "minHeight": 1,
 "top": "25%",
 "bottom": "25%",
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "class": "Container",
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "gap": 0,
 "data": {
  "name": "-Container buttons"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left"
},
{
 "id": "Container_678C5096_41FF_5D74_41A4_FD37BA808918",
 "scrollBarColor": "#000000",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.IconButton_68BC9C55_4115_25F7_41C3_EDA1A3475FA7",
  "this.Container_678C2096_41FF_5D74_4199_4E29ED9F3897",
  "this.Container_678C3096_41FF_5D74_41CC_BF9EC8497B51",
  "this.HTMLText_678DD097_41FF_5D74_4150_C307127B9AB1"
 ],
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "width": "100%",
 "minHeight": 1,
 "borderSize": 0,
 "contentOpaque": false,
 "bottom": "0%",
 "height": 120,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "bottom",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "-Container footer"
 },
 "paddingTop": 0,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "horizontalAlign": "left"
},
{
 "id": "HTMLText_68906EDF_41F3_22F4_41BE_B120C0250953",
 "scrollBarColor": "#000000",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "width": "71.364%",
 "paddingLeft": 10,
 "minHeight": 1,
 "top": "0.9%",
 "borderColor": "#000000",
 "borderSize": 3,
 "paddingBottom": 10,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "height": "25.784%",
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:24px;\"><B>KPID BALI</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:13px;\"><B>VIRTUAL TOUR</B></SPAN></SPAN></DIV></div>",
 "propagateClick": false,
 "data": {
  "name": "HTMLText1580"
 },
 "paddingTop": 10,
 "shadow": false,
 "scrollBarWidth": 10
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_68CD888E_411D_2D55_41C6_8965AF810917",
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_68CD888E_411D_2D55_41C6_8965AF810917.jpg",
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": 20,
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_68CD888E_411D_2D55_41C6_8965AF810917_pressed.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_68CDF88E_411D_2D55_41B6_012E7416CC84, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_68CD888E_411D_2D55_41C6_8965AF810917_rollover.jpg",
 "class": "IconButton",
 "height": "36.14%",
 "propagateClick": false,
 "verticalAlign": "top",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "right",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_690CE74B_411D_23D3_41C5_F012C794F8CF",
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_690CE74B_411D_23D3_41C5_F012C794F8CF.jpg",
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": 20,
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_690CE74B_411D_23D3_41C5_F012C794F8CF_pressed.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_690CC74B_411D_23D3_41CF_C7F7E49528A6, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_690CE74B_411D_23D3_41C5_F012C794F8CF_rollover.jpg",
 "class": "IconButton",
 "height": "36.14%",
 "propagateClick": false,
 "verticalAlign": "top",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "right",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_6A3A5F1A_4135_637C_41BD_4083BE185595",
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_6A3A5F1A_4135_637C_41BD_4083BE185595.jpg",
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "pressedRollOverIconURL": "skin/IconButton_6A3A5F1A_4135_637C_41BD_4083BE185595_pressed_rollover.jpg",
 "minHeight": 50,
 "top": 20,
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_6A3A5F1A_4135_637C_41BD_4083BE185595_pressed.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_6A3A7F1A_4135_637C_41B4_D19F14693F2D, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_6A3A5F1A_4135_637C_41BD_4083BE185595_rollover.jpg",
 "class": "IconButton",
 "height": "36.14%",
 "propagateClick": false,
 "verticalAlign": "top",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "right",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_6DABFA65_411F_EDD4_41C4_43D2632A5DB1",
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_6DABFA65_411F_EDD4_41C4_43D2632A5DB1.jpg",
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": 20,
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_6DABFA65_411F_EDD4_41C4_43D2632A5DB1_pressed.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_6DABEA65_411F_EDD4_41B8_B9B28C7C92FF, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_6DABFA65_411F_EDD4_41C4_43D2632A5DB1_rollover.jpg",
 "class": "IconButton",
 "height": "36.14%",
 "propagateClick": false,
 "verticalAlign": "top",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "right",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_5E3301B9_4EA7_7BEE_418C_B1CFB4145594",
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_5E3301B9_4EA7_7BEE_418C_B1CFB4145594.jpg",
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": 20,
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_5E3301B9_4EA7_7BEE_418C_B1CFB4145594_pressed.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_5E3311B9_4EA7_7BEE_41C9_431614B54ACD, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_5E3301B9_4EA7_7BEE_418C_B1CFB4145594_rollover.jpg",
 "class": "IconButton",
 "height": "36.14%",
 "propagateClick": false,
 "verticalAlign": "top",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "right",
 "cursor": "hand"
},
{
 "id": "HTMLText_5C0D408D_4EE8_D9A6_41AF_264A39C472C4",
 "left": "0%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "width": "87.912%",
 "paddingLeft": 80,
 "minHeight": 100,
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "height": "99.848%",
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:5.01vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.01vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.58vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.86vh;font-family:'Bebas Neue Bold';\">Website ini dirancang untuk memberikan pengalaman interaktif dalam mengenal Kantor Komisi Penyiaran Indonesia Daerah Bali melaluli Teknologi Virtual Tour. Dengan Virtual Tour ini, Anda dapat menjelajahi seluruh area Kantor KPID Bali, seolah-olah anda berada di sana. Setiap area penting telah diabadikan dalam tampilan 360 derajat yang memungkinkan Anda melihat dan memahami lebih banyak dari layar perangkat Anda.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.86vh;font-family:'Bebas Neue Bold';\">Virtual Tour 360 ini juga dilengkapi dengan informasi tambahan yang dapat diakses melalui titik-titik interaktif di sepanjang tur. Dengan demikian, Anda tidak hanya melihat, tetapi juga mempelajari pelayanan, peran, dan fungsi dari setiap bagian Kantor Komisi Penyiaran Indonesia Daerah Bali. Kami berharap melalui website ini, Anda dapat merasakan kedekatan dan pemahaman tentang tugas dan kegiatan KPI Daerah Bali dengan cara yang modern dan mudah diakses.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "propagateClick": false,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingTop": 0
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_5C0DA08D_4EE8_D9A6_41A2_51EC3F0AC7F4",
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_5C0DA08D_4EE8_D9A6_41A2_51EC3F0AC7F4.jpg",
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "pressedRollOverIconURL": "skin/IconButton_5C0DA08D_4EE8_D9A6_41A2_51EC3F0AC7F4_pressed_rollover.jpg",
 "minHeight": 50,
 "top": 20,
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_5C0DA08D_4EE8_D9A6_41A2_51EC3F0AC7F4_pressed.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_5C0DF08D_4EE8_D9A6_41BD_A1D4C4024042, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_5C0DA08D_4EE8_D9A6_41A2_51EC3F0AC7F4_rollover.jpg",
 "class": "IconButton",
 "height": "36.14%",
 "propagateClick": false,
 "verticalAlign": "top",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "right",
 "cursor": "hand"
},
{
 "id": "HTMLText_5C97982F_4EE9_C8E2_41CE_0838157CB4C2",
 "left": "0.11%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "width": "80.287%",
 "paddingLeft": 80,
 "minHeight": 100,
 "top": "4.95%",
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "height": "49.848%",
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.15vh;font-family:'Bebas Neue Bold';\">Media Pengenalan Komisi Penyiaran Indonesia Bali Berbasis Virtual Tour 360</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "propagateClick": false,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingTop": 0
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_4A229319_52FA_DFA4_41C6_F5261AFB4689",
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_4A229319_52FA_DFA4_41C6_F5261AFB4689.jpg",
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": 20,
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_4A229319_52FA_DFA4_41C6_F5261AFB4689_pressed.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_4A228319_52FA_DFA4_41D4_083CECE89EFB, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_4A229319_52FA_DFA4_41C6_F5261AFB4689_rollover.jpg",
 "class": "IconButton",
 "height": "36.14%",
 "propagateClick": false,
 "verticalAlign": "top",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "right",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_4D2C7093_5505_3AA4_41D0_DBEDF2179385",
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_4D2C7093_5505_3AA4_41D0_DBEDF2179385.jpg",
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": 20,
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_4D2C7093_5505_3AA4_41D0_DBEDF2179385_pressed.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_4D2C0093_5505_3AA4_41BA_A7B03341D2EA, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_4D2C7093_5505_3AA4_41D0_DBEDF2179385_rollover.jpg",
 "class": "IconButton",
 "height": "36.14%",
 "propagateClick": false,
 "verticalAlign": "top",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "right",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_4D41ACA1_5507_4AE7_41CA_C6FF9EC6FFF2",
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_4D41ACA1_5507_4AE7_41CA_C6FF9EC6FFF2.jpg",
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": 20,
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_4D41ACA1_5507_4AE7_41CA_C6FF9EC6FFF2_pressed.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_4D41BCA1_5507_4AE7_41D3_EB1C9C0B37CB, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_4D41ACA1_5507_4AE7_41CA_C6FF9EC6FFF2_rollover.jpg",
 "class": "IconButton",
 "height": "36.14%",
 "propagateClick": false,
 "verticalAlign": "top",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "right",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_4EB793E3_5507_7E64_41B8_37D7656B7A97",
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_4EB793E3_5507_7E64_41B8_37D7656B7A97.jpg",
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 50,
 "top": 20,
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_4EB793E3_5507_7E64_41B8_37D7656B7A97_pressed.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_4EB7E3E3_5507_7E64_41B4_7E7928E27B07, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_4EB793E3_5507_7E64_41B8_37D7656B7A97_rollover.jpg",
 "class": "IconButton",
 "height": "36.14%",
 "propagateClick": false,
 "verticalAlign": "top",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "right",
 "cursor": "hand"
},
{
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "id": "Container_678F3096_41FF_5D74_41C1_74FBE5E3417A",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "contentOpaque": false,
 "height": 1,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "class": "Container",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "iconWidth": 32,
 "iconBeforeLabel": true,
 "id": "Button_678F0096_41FF_5D74_41B3_91C47850D8C2",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "layout": "horizontal",
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 10,
 "iconHeight": 32,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "shadowSpread": 1,
 "height": 50,
 "paddingBottom": 0,
 "mode": "push",
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "label": "Denah Lantai 1",
 "fontStyle": "normal",
 "class": "Button",
 "click": "if(!this.Container_68CDF88E_411D_2D55_41B6_012E7416CC84.get('visible')){ this.setComponentVisibility(this.Container_68CDF88E_411D_2D55_41B6_012E7416CC84, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_68CDF88E_411D_2D55_41B6_012E7416CC84, false, 0, null, null, false) }",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Tour Info"
 },
 "paddingTop": 0,
 "horizontalAlign": "left",
 "cursor": "hand",
 "fontWeight": "normal",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "id": "Container_678F1096_41FF_5D74_41C6_7F55F8A07CFF",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "contentOpaque": false,
 "height": 1,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "class": "Container",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "iconWidth": 32,
 "iconBeforeLabel": true,
 "id": "Button_678CE096_41FF_5D74_41C9_F79F63FB0C96",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "layout": "horizontal",
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 10,
 "iconHeight": 32,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "shadowSpread": 1,
 "height": 50,
 "paddingBottom": 0,
 "mode": "push",
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "label": "Denah Lantai 2",
 "fontStyle": "normal",
 "class": "Button",
 "click": "this.setComponentVisibility(this.Container_690CC74B_411D_23D3_41CF_C7F7E49528A6, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 23,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Panorama List"
 },
 "paddingTop": 0,
 "horizontalAlign": "left",
 "cursor": "hand",
 "fontWeight": "normal",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "id": "Container_678CF096_41FF_5D74_41C0_57B4AB191BBE",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "contentOpaque": false,
 "height": 1,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "class": "Container",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "iconWidth": 32,
 "data": {
  "name": "Button Location"
 },
 "iconBeforeLabel": true,
 "id": "Button_678CC096_41FF_5D74_41C5_136988E60418",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "layout": "horizontal",
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 10,
 "iconHeight": 32,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "shadowSpread": 1,
 "height": 50,
 "paddingBottom": 0,
 "mode": "push",
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "label": "Daftar Panorama",
 "fontStyle": "normal",
 "class": "Button",
 "click": "if(!this.Container_6A3A7F1A_4135_637C_41B4_D19F14693F2D.get('visible')){ this.setComponentVisibility(this.Container_6A3A7F1A_4135_637C_41B4_D19F14693F2D, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_6A3A7F1A_4135_637C_41B4_D19F14693F2D, false, 0, null, null, false) }",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "pressedLabel": "Location",
 "paddingTop": 0,
 "horizontalAlign": "left",
 "cursor": "hand",
 "fontWeight": "normal",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "id": "Container_678CD096_41FF_5D74_41CF_93A59FA9C874",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "contentOpaque": false,
 "height": 1,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "class": "Container",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "iconWidth": 32,
 "iconBeforeLabel": true,
 "id": "Button_678CB096_41FF_5D74_4178_4262DABA92DC",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "layout": "horizontal",
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 10,
 "iconHeight": 32,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "shadowSpread": 1,
 "height": 50,
 "paddingBottom": 0,
 "mode": "push",
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "label": "Informasi Virtual Tour",
 "fontStyle": "normal",
 "class": "Button",
 "click": "if(!this.Container_5C0DF08D_4EE8_D9A6_41BD_A1D4C4024042.get('visible')){ this.setComponentVisibility(this.Container_5C0DF08D_4EE8_D9A6_41BD_A1D4C4024042, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5C0DF08D_4EE8_D9A6_41BD_A1D4C4024042, false, 0, null, null, false) }",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Floorplan"
 },
 "paddingTop": 0,
 "horizontalAlign": "left",
 "cursor": "hand",
 "fontWeight": "normal",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "id": "Container_678C8096_41FF_5D74_41C5_F12150CA22C1",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "contentOpaque": false,
 "height": 1,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "class": "Container",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "id": "Container_678C6096_41FF_5D74_41A5_3A69FCE73F16",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "contentOpaque": false,
 "height": 1,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "class": "Container",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "id": "Container_678C4096_41FF_5D74_41A0_A288187BAAD4",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "contentOpaque": false,
 "height": 1,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "class": "Container",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "IconButton_68BC9C55_4115_25F7_41C3_EDA1A3475FA7",
 "transparencyActive": true,
 "width": 36,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_68BC9C55_4115_25F7_41C3_EDA1A3475FA7.png",
 "paddingLeft": 0,
 "minHeight": 0,
 "borderSize": 0,
 "height": 26.4,
 "paddingBottom": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "minWidth": 0,
 "pressedIconURL": "skin/IconButton_68BC9C55_4115_25F7_41C3_EDA1A3475FA7_pressed.png",
 "borderRadius": 0,
 "click": "this.openLink('https://youtu.be/0hKr1Z5hnvI?si=umnLcVH98iDajKnr', '_blank')",
 "rollOverIconURL": "skin/IconButton_68BC9C55_4115_25F7_41C3_EDA1A3475FA7_rollover.png",
 "class": "IconButton",
 "propagateClick": false,
 "verticalAlign": "middle",
 "data": {
  "name": "Button53068"
 },
 "paddingTop": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "width": 40,
 "id": "Container_678C2096_41FF_5D74_4199_4E29ED9F3897",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "contentOpaque": false,
 "height": 2,
 "paddingBottom": 0,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "minWidth": 1,
 "borderRadius": 0,
 "class": "Container",
 "propagateClick": true,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "data": {
  "name": "blue line"
 },
 "paddingTop": 0,
 "shadow": false,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "horizontalAlign": "left"
},
{
 "id": "Container_678C3096_41FF_5D74_41CC_BF9EC8497B51",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "children": [
  "this.IconButton_678C0096_41FF_5D74_41CA_8BA4D3BE1BAB",
  "this.IconButton_678C1097_41FF_5D74_41A8_7419C68DC379",
  "this.IconButton_678DE097_41FF_5D74_41B1_A2D9CAA76248",
  "this.IconButton_678DF097_41FF_5D74_41C2_09029508E074",
  "this.IconButton_678DC097_41FF_5D74_41A1_C08277BF88BC"
 ],
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "height": 40,
 "borderRadius": 0,
 "class": "Container",
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "gap": 16,
 "data": {
  "name": "-Container settings"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "horizontalAlign": "left"
},
{
 "id": "HTMLText_678DD097_41FF_5D74_4150_C307127B9AB1",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "height": 78,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText47602"
 },
 "propagateClick": true,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "paddingTop": 0
}]
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
