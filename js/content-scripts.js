'use strict'

var HOSTNAME = 'www.nicovideo.jp';


/**
 * 動画ページにIKEDA画像を表示
 */
if ( is_nicovideo_watch_page() ) {
	add_header_content();
}


/**
 * nicovideoの動画ページかチェック
 */
function is_nicovideo_watch_page() {
	return location.href.indexOf( HOSTNAME + "/watch/" ) != -1;
}


/**
 * HTML5版ページかチェック
 */
function is_html5() {
	return document.querySelector('.html5_message') == null;
}


/**
 * Add IKEDA image
 */
function add_header_content() {

	var ikeda_image_elm           = document.createElement("img");
		ikeda_image_elm.src       = chrome.extension.getURL("img/ikeda.jpg");
		ikeda_image_elm.className = "csi-title-img";
		ikeda_image_elm.width     = '40';

	var header_content     = ikeda_image_elm;
	var header_content_div = document.createElement("div");
		header_content_div.className = "csi-title-img-container";
	var header_container;

	// 表示箇所
	if ( is_html5() ) {
		header_container = document.querySelector('.HeaderContainer-videoTitle');
	} else {
		header_container = document.querySelector('#videoHeaderDetail > .videoDetailExpand');
	}

	// display content
	header_content_div.appendChild( header_content );
	header_container.appendChild( header_content_div );
}
