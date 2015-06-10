# Alloy JSR-gallery Widget [![Appcelerator Titanium](http://www-static.appcelerator.com/badges/titanium-git-badge-sq.png)](http://appcelerator.com/titanium/) [![Appcelerator Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://appcelerator.com/alloy/)

A widget for the [Alloy](http://projects.appcelerator.com/alloy/docs/Alloy-bootstrap/index.html) MVC framework of [Appcelerator](http://www.appcelerator.com)'s [Titanium](http://www.appcelerator.com/platform) platform.

A Titanium simple scrollableView gallery for Android and iOS.

## Install
### Manual installation

1. If developing for Android you must install this module: [TiTouchGallery](https://github.com/gbaldera/TiTouchGallery)
2. Download `/com.javiersr.jsr-gallery` folder and place it in the `/app/widgets` folder
3. Add `"com.javiersr.jsr-gallery": "1.0"` in dependencies into your project's `config.json` file


### Usage
#### 1. Declare in view

    <Require type="widget" src="com.javiersr.jsrgallery" id="gallery"></Require>
    
#### 2. Usage in controller

    var imgs = args.images; // declare a variable for storing our images and initialize it to passed arg images, you should customize this
    
    var imagesUrls = [];
    
    imgs.forEach(function(image,i){
    	imagesUrls.push(image);
    });
   
        
    $.gallery.addImages(imagesUrls, '/images/myDefaultImage.png'); //send Image URLs Array as first argument and your default image to show while loading or in error (not in Android)
 

## License

<pre>
Copyright 2015 Javier Sánchez Riquelme

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
</pre>
