var addImages = function(urls, defaultImage){
	
	for(var i = 0; i < urls.length ; i++){
			
			var iv = Ti.UI.createImageView({
				image: urls[i],
				defaultImage: defaultImage
			});
			
			var imgWrapper = Ti.UI.createScrollView({
			    maxZoomScale:4.0,
			    width: Ti.UI.FILL,
			    height: Ti.UI.FILL,
			    scrollType: "vertical",
			    contentWidth: Ti.UI.FILL
			});
			
			imgWrapper.add(iv);
			
			$.galleryView.addView(imgWrapper);
			
		}
		
};
	
if (Ti.Platform.name == "android") {
	
	var zapImageCache = function() { //Remove cache problems in Android
    	      var appDataDir, cacheDir, dir, externalRoot;
    	      if (Ti.Filesystem.isExternalStoragePresent()) {
    	        appDataDir = Ti.Filesystem.getFile('appdata://').nativePath;
    	        externalRoot = appDataDir.substring(0, appDataDir.lastIndexOf('/'));
    	        cacheDir = "" + externalRoot + "/Android/data/" + Ti.App.id + "/cache/_tmp/remote-cache";
    	        dir = Ti.Filesystem.getFile(cacheDir);
    	      } else {
    	        dir = Ti.Filesystem.getFile(Ti.Filesystem.applicationCacheDirectory, '_tmp', 'remote-cache');
    	      }
    	      if (dir.exists()) {
    	        dir.deleteDirectory(true);
    	      }
    	      return dir.createDirectory();
    	 };
    	    
    	zapImageCache();
	   
    addImages = function(urls){
	    var titouchgallery = require('com.gbaldera.titouchgallery');
	
	    var proxy = titouchgallery.createTouchGallery({
	        images: urls
	    });
	    
	    /*

	    proxy.addEventListener("scroll", function(e){
	        Ti.API.debug("Scroll event fired: " + JSON.stringify(e));
	    });
	    
	    proxy.addEventListener("singletap", function(e){
	        alert("Page: " + e.currentPage);
	        Ti.API.debug("SingleTap event fired: " + JSON.stringify(e));
	    });
	    proxy.addEventListener("longpress", function(e){
	        alert("Page: " + e.currentPage);
	        Ti.API.debug("LongPress event fired: " + JSON.stringify(e));
	    });

	    */
	
	    $.galleryView.addView(proxy);
    };
    
}

exports.addImages = addImages;
