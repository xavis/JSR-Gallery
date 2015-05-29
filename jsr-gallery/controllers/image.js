var args = arguments[0] || {};

if(Ti.Platform.osname == "android"){
	$.imageView.image= args.imageURL || "";
	$.imageView.defaultImage= args.dImage || "";
}

