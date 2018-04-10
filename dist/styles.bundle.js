webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');\r\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700');\r\n@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css');\r\nbody,\r\nhtml {\r\n  background-color: #F8F8F8;\r\n  font-family: 'Open Sans', sans-serif;\r\n  margin: 0 auto;\r\n  padding: 0;\r\n}\r\nbutton:focus {\r\n  outline: 0 !important;\r\n}\r\ninput:focus {\r\n  outline: 0 !important;\r\n}\r\nselect:focus {\r\n  outline: 0 !important;\r\n}\r\ntextarea:focus {\r\n  outline: 0 !important;\r\n}\r\n* {\r\n  outline: 0 !important;\r\n}\r\n*:hover,\r\n*:focus,\r\n*:active {\r\n  outline: 0 !important;\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: #00CCA3;\r\n}\r\na:hover,\r\na:active,\r\na:focus {\r\n  text-decoration: none;\r\n}\r\nimg {\r\n  margin-top: 105px;\r\n  display: block;\r\n  position: relative;\r\n  top: 100px;\r\n}\r\n.login-form {\r\n  display: block;\r\n  width: 280px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 20px 20px 5px 20px;\r\n  border-radius: 3px;\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n  margin: 45px auto;\r\n}\r\n.login-form label {\r\n  display: block;\r\n  padding: 0;\r\n  margin: 0 0 3px 0;\r\n  font-size: 10pt;\r\n  font-weight: 400;\r\n}\r\n.login-form input {\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 8px;\r\n  border: 1px solid #CCC;\r\n  border-radius: 3px;\r\n}\r\n.login-form button {\r\n  background-color: #00CCA3;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 8px;\r\n  display: block;\r\n  text-align: center;\r\n  border: none;\r\n  width: 100%;\r\n  color: #FFF;\r\n  font-weight: bolder;\r\n  font-size: 12pt;\r\n  letter-spacing: 1px;\r\n  border-radius: 3px;\r\n  margin-top: 22px;\r\n}\r\n.ng-valid[required] {\r\n  border-left: 5px solid #42A948;\r\n  /* green */\r\n}\r\n.ng-invalid {\r\n  border-left: 5px solid #a94442;\r\n  /* red */\r\n}\r\n#filedrag {\r\n  font-weight: bold;\r\n  text-align: center;\r\n  padding: 1em 0;\r\n  margin: 1em 0;\r\n  color: #555;\r\n  border: 2px dashed #555;\r\n  border-radius: 7px;\r\n  cursor: default;\r\n}\r\n#filedrag.hover {\r\n  color: #f00;\r\n  border-color: #f00;\r\n  border-style: solid;\r\n  -webkit-box-shadow: inset 0 3px 4px #888;\r\n          box-shadow: inset 0 3px 4px #888;\r\n}\r\nnav {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  background-color: #2D3146;\r\n  display: block;\r\n  width: 100%;\r\n  z-index: 5000;\r\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n}\r\nnav a {\r\n  display: inline-block;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 16px 12px;\r\n  font-size: 9pt;\r\n  color: #FFF;\r\n  background-color: #2D3146;\r\n  font-weight: bolder;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.75px;\r\n  vertical-align: middle;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n}\r\nnav a:hover,\r\nnav a:active,\r\nnav a:focus {\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  color: #FFF;\r\n  background-color: #191b27;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n}\r\nnav h1 {\r\n  vertical-align: middle;\r\n  display: inline-block;\r\n  text-align: center;\r\n  font-family: 'Open Sans', sans-serif;\r\n  text-transform: uppercase;\r\n  font-weight: 300;\r\n  letter-spacing: 1.5px;\r\n  color: #FFF;\r\n  font-size: 14pt;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0 0 0 25px;\r\n}\r\nnav b.nav-user {\r\n  color: #FFF;\r\n  font-weight: lighter;\r\n  font-size: smaller;\r\n}\r\nspan.app-header {\r\n  display: block;\r\n  text-align: center;\r\n  text-transform: none;\r\n  font-weight: bolder;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 95px 0 25px 0;\r\n  font-size: 20px;\r\n  letter-spacing: -0.25px;\r\n  font-weight: 400;\r\n  color: #2D3146;\r\n  line-height: 24px;\r\n}\r\nh3.subheader {\r\n  display: block;\r\n  text-align: center;\r\n  font-size: 14pt;\r\n  font-weight: bolder;\r\n  text-transform: uppercase;\r\n  margin-bottom: 45px;\r\n}\r\nh3.subheader b {\r\n  display: inline;\r\n  border-bottom: 4px solid #2D3146;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 0px 4px;\r\n}\r\nspan.loading-message {\r\n  display: block;\r\n  text-align: center;\r\n  font-size: 22pt;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 25px;\r\n  text-transform: lowercase;\r\n  letter-spacing: -1px;\r\n  font-weight: bolder;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  height: 100%;\r\n}\r\nspan.loading-message i {\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\nbutton.filter-cases-btn,\r\nbutton.reports-export-btn {\r\n  display: block;\r\n  width: 150px;\r\n  background-color: #FFF;\r\n  color: #2D3146;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 8px 15px;\r\n  font-weight: 700;\r\n  text-transform: capitalize;\r\n  border-radius: 3px;\r\n  border: 2px solid #f2f2f2;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n  margin: 0 auto;\r\n}\r\nbutton.filter-cases-btn:hover,\r\nbutton.reports-export-btn:hover {\r\n  cursor: pointer;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n  border: 2px solid #d9d9d9;\r\n}\r\nbutton.filter-cases-btn:hover i,\r\nbutton.reports-export-btn:hover i {\r\n  color: rgba(45, 49, 70, 0.7);\r\n}\r\nbutton.filter-cases-btn i,\r\nbutton.reports-export-btn i {\r\n  color: rgba(45, 49, 70, 0.3);\r\n}\r\nbutton.filter-cases-btn i.fa-filter,\r\nbutton.reports-export-btn i.fa-filter {\r\n  position: relative;\r\n  top: -1px;\r\n  padding-right: 4px;\r\n}\r\n.true-false-icon {\r\n  display: block;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  font-size: 14pt;\r\n  padding-top: 1px;\r\n}\r\n.true-false-icon.fa-check {\r\n  color: #00CCA3;\r\n}\r\n.true-false-icon.fa-close {\r\n  color: #D24B4B;\r\n}\r\n.dms-table {\r\n  display: block;\r\n  margin: 35px auto 55px auto !important;\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  font-family: 'Open Sans', sans-serif;\r\n  border: 0px solid black;\r\n  border-radius: 3px;\r\n}\r\n.dms-table thead {\r\n  background-color: #2D3146;\r\n}\r\n.dms-table thead th {\r\n  border-bottom-width: 1px !important;\r\n}\r\n.dms-table thead th a {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 10px 0;\r\n  display: block;\r\n  color: #FFF;\r\n  font-size: 8.5pt;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n}\r\n.dms-table thead th a:hover {\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n  color: rgba(255, 255, 255, 0.7);\r\n}\r\n.dms-table tbody {\r\n  height: 50%;\r\n  overflow: scroll;\r\n}\r\n.dms-table tbody tr {\r\n  border: 0px solid black !important;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n  background-color: #FFF;\r\n}\r\n.dms-table tbody tr:hover {\r\n  cursor: pointer;\r\n  background-color: #F2FDFF;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n  border-left: 5px solid #00CCA3 !important;\r\n}\r\n.dms-table tbody tr:nth-child(even) {\r\n  background-color: #F9FCFD;\r\n}\r\n.dms-table tbody tr:nth-child(even):hover {\r\n  cursor: pointer;\r\n  background-color: #F2FDFF;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n  border-left: 5px solid #00CCA3 !important;\r\n}\r\n.tags-table {\r\n  display: block;\r\n  margin: 15px auto 55px auto !important;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  font-family: 'Open Sans', sans-serif;\r\n  border: 0px solid black;\r\n  border-radius: 3px;\r\n}\r\n.tags-table tbody {\r\n  height: 50%;\r\n  overflow: scroll;\r\n  display: table;\r\n  width: 100%;\r\n}\r\n.tags-table tbody tr {\r\n  border: 0px solid black !important;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n  background-color: #FFF;\r\n}\r\n.tags-table tbody tr:nth-child(even) {\r\n  background-color: #F9FCFD;\r\n}\r\n.tags-table tbody tr:nth-child(even):hover {\r\n  background-color: #F9FCFD;\r\n}\r\n.tags-table tbody tr:nth-child(odd) {\r\n  background-color: #FFF;\r\n}\r\n.tags-table tbody tr:nth-child(odd):hover {\r\n  background-color: #FFF;\r\n}\r\n.tags-table tbody tr.head {\r\n  background-color: #2D3146;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  color: #FFF;\r\n}\r\n.tags-table tbody tr.head td {\r\n  text-align: center;\r\n  line-height: 1em;\r\n  font-weight: bolder;\r\n  font-size: 10pt;\r\n  font-weight: lighter;\r\n}\r\n.tags-table tbody tr.head:hover {\r\n  background-color: #2D3146;\r\n}\r\n.tags-table tbody tr td {\r\n  vertical-align: middle;\r\n}\r\n.tags-table tbody tr td .btn-tags {\r\n  display: block;\r\n  width: 100%;\r\n  text-align: center;\r\n  background-color: transparent;\r\n  border: none;\r\n  text-transform: uppercase;\r\n  font-weight: bolder;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n}\r\n.tags-table tbody tr td .btn-tags i {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 0 0 0 5px;\r\n  position: relative;\r\n  top: -1px;\r\n}\r\n.tags-table tbody tr td .btn-tags.delete {\r\n  color: #D24B4B;\r\n}\r\n.tags-table tbody tr td .btn-tags:hover {\r\n  cursor: pointer;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n  color: rgba(45, 49, 70, 0.5);\r\n}\r\n.add-tag-form {\r\n  display: block;\r\n  width: 300px;\r\n  margin: 0 auto 65px auto;\r\n}\r\n.add-tag-form div.form-group {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n.add-tag-form div.form-group label {\r\n  font-size: 8pt;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n  font-weight: bolder;\r\n  display: block;\r\n}\r\n.add-tag-form div.form-group input {\r\n  display: block;\r\n  width: 100%;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 8px 10px;\r\n  border: 1px solid rgba(45, 49, 70, 0.3);\r\n}\r\n.add-tag-form div.form-group input.ng-invalid {\r\n  border-left: 1px solid rgba(45, 49, 70, 0.3);\r\n}\r\n.add-tag-form div.form-group button {\r\n  display: block;\r\n  width: 100%;\r\n  font-weight: bolder;\r\n  letter-spacing: 1px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 8px 10px;\r\n  text-align: center;\r\n  background-color: #00CCA3;\r\n  color: #FFF;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n  border: 2px solid #00b38f;\r\n  text-transform: uppercase;\r\n}\r\n.add-tag-form div.form-group button:hover {\r\n  cursor: pointer;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n  background-color: #00c29b;\r\n}\r\n.reports-ul {\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 300px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 25px 0;\r\n}\r\n.cbrs-form {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  margin: 25px auto 55px auto !important;\r\n  display: block;\r\n  width: 90%;\r\n}\r\n.cbrs-form .form-main-header {\r\n  display: block;\r\n  width: 100%;\r\n  text-align: center;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 0 0 15px 0;\r\n  font-weight: lighter;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n.cbrs-form label {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: bolder;\r\n  color: #2D3146;\r\n  text-transform: uppercase;\r\n  font-size: 8.5pt;\r\n  margin: 0;\r\n}\r\n.cbrs-form input,\r\n.cbrs-form select,\r\n.cbrs-form textarea {\r\n  border-radius: 0px !important;\r\n  background-color: #FFF;\r\n  border: none;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 4px;\r\n  border-radius: 4px;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n}\r\n.cbrs-form input:hover,\r\n.cbrs-form select:hover,\r\n.cbrs-form textarea:hover {\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n  background-color: #FCFCFC;\r\n}\r\n.cbrs-form select {\r\n  height: 30px;\r\n}\r\n.cbrs-form select:hover {\r\n  cursor: pointer;\r\n}\r\n.cbrs-form input[type='file'] {\r\n  background-color: transparent;\r\n  border: 0px solid black;\r\n}\r\n.cbrs-form .row {\r\n  margin-left: 0 !important;\r\n  margin-right: 0 !important;\r\n}\r\n.cbrs-form .dms-group {\r\n  display: block;\r\n  width: 100%;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  background-color: #FFF;\r\n  border: 1px solid #efefef;\r\n  margin-bottom: 25px;\r\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.14);\r\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.14);\r\n}\r\n.cbrs-form .dms-group .dms-group-header {\r\n  border-bottom: 1px solid #E8E8E8;\r\n  margin: 0 auto;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 15px;\r\n  font-size: 14pt;\r\n  font-weight: bolder;\r\n  color: #2D3146;\r\n  text-transform: uppercase;\r\n}\r\n.cbrs-form .dms-group .col-md-1,\r\n.cbrs-form .dms-group .col-md-2,\r\n.cbrs-form .dms-group .col-md-3,\r\n.cbrs-form .dms-group .col-md-4,\r\n.cbrs-form .dms-group .col-md-5,\r\n.cbrs-form .dms-group .col-md-12,\r\n.cbrs-form .dms-group .col-md-6 {\r\n  padding: 0;\r\n}\r\n.cbrs-form .dms-group .chx-group {\r\n  display: inline;\r\n  margin: 0 auto;\r\n  padding: 0;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  border-top: 8px solid #2D3146;\r\n  border-bottom: 8px solid #2D3146;\r\n}\r\n.cbrs-form .dms-group .chx-group label {\r\n  display: inline-block;\r\n  width: 90px;\r\n  width: calc(100% - 140px);\r\n  height: 33px;\r\n  vertical-align: top;\r\n  line-height: 33px;\r\n  margin: 0 auto;\r\n  background-color: #2D3146;\r\n  color: #FFF;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  text-align: right;\r\n  padding: 0 8px 0 0;\r\n}\r\n.cbrs-form .dms-group .chx-group .chx {\r\n  height: 33px;\r\n  width: 140px;\r\n  line-height: 33px;\r\n  vertical-align: top;\r\n  background-color: #2D3146;\r\n  display: inline-block;\r\n  text-align: left;\r\n}\r\n.cbrs-form .dms-group .chx-group .chx input[type=\"checkbox\"] {\r\n  position: relative;\r\n  top: -2px;\r\n}\r\n.cbrs-form .dms-group .chx-group .chx input[type=\"checkbox\"]:hover {\r\n  cursor: pointer;\r\n}\r\n.cbrs-form .dms-group .chx-group .slct {\r\n  height: 33px;\r\n  width: 140px;\r\n  line-height: 33px;\r\n  vertical-align: top;\r\n  background-color: #2D3146;\r\n  display: inline-block;\r\n  text-align: center;\r\n  border-bottom: 1px solid #191b27;\r\n}\r\n.cbrs-form .dms-group .chx-group .slct input[type=\"select\"] {\r\n  position: relative;\r\n  top: 0px;\r\n}\r\n.cbrs-form .dms-group .chx-group .slct input[type=\"select\"]:hover {\r\n  cursor: pointer;\r\n}\r\n.cbrs-form .dms-group .file-group {\r\n  display: block;\r\n  width: 100%;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  border-left: 1px solid #E8E8E8;\r\n  height: 135px;\r\n}\r\n.cbrs-form .dms-group .file-group .fileDragLabel {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 8px 0 0 8px;\r\n  font-weight: bolder;\r\n}\r\n.cbrs-form .dms-group .file-group .fileList {\r\n  display: block;\r\n  height: auto;\r\n  padding: 0;\r\n}\r\n.cbrs-form .dms-group .file-group .fileList li {\r\n  margin: 0 auto;\r\n  padding: 0;\r\n}\r\n.cbrs-form .dms-group .file-group .fileList li a {\r\n  font-size: 8pt;\r\n  font-weight: 500;\r\n  letter-spacing: 0;\r\n}\r\n.cbrs-form .dms-group .file-group label {\r\n  display: inline-block;\r\n  width: 70%;\r\n  color: #2D3146;\r\n  margin: 0 auto;\r\n  height: 45px;\r\n  line-height: 45px;\r\n  text-align: center;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  vertical-align: middle;\r\n  background-color: #FFF;\r\n  border-bottom: 1px solid #e8e8e8;\r\n}\r\n.cbrs-form .dms-group .file-group label.fifty {\r\n  width: 50%;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n.cbrs-form .dms-group .file-group ul {\r\n  display: block;\r\n  width: 90%;\r\n  padding: 10px 0 0 0;\r\n  margin: 0 5%;\r\n  list-style-type: bullet;\r\n}\r\n.cbrs-form .dms-group .file-group ul li {\r\n  display: block;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 0 0 5px 0;\r\n  text-align: left;\r\n}\r\n.cbrs-form .dms-group .file-group ul li a {\r\n  font-size: 9pt;\r\n  font-weight: bolder;\r\n  color: #2D3146;\r\n  font-weight: 600;\r\n  letter-spacing: 0.5px;\r\n  font-family: 'Open Sans', sans-serif;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n}\r\n.cbrs-form .dms-group .file-group ul li a:hover {\r\n  cursor: pointer;\r\n  color: #00CCA3;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n}\r\n.cbrs-form .dms-group .file-group input[type=\"file\"] {\r\n  display: none;\r\n}\r\n.cbrs-form .dms-group .file-group .file-upload-label {\r\n  float: right;\r\n  height: 45px;\r\n  vertical-align: middle;\r\n  line-height: 45px;\r\n  display: inline-block;\r\n  width: 25%;\r\n  padding: 0;\r\n  background-color: #00CCA3;\r\n  color: #FFF;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n  text-transform: capitalize;\r\n  font-weight: 400;\r\n  font-size: 8pt;\r\n  letter-spacing: 0.25px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  border-right: 1px solid #FFF;\r\n}\r\n.cbrs-form .dms-group .file-group .file-upload-label:hover {\r\n  cursor: pointer;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n  background-color: #00a382;\r\n}\r\n.cbrs-form .dms-group .dms-form-group {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  height: 67.5px;\r\n}\r\n.cbrs-form .dms-group .dms-form-group.bb {\r\n  border-bottom: 1px solid #E8E8E8;\r\n}\r\n.cbrs-form .dms-group .dms-form-group.br {\r\n  border-right: 1px solid #E8E8E8;\r\n}\r\n.cbrs-form .dms-group .dms-form-group label {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 10px 0 0 14px;\r\n  display: block;\r\n}\r\n.cbrs-form .dms-group .dms-form-group input,\r\n.cbrs-form .dms-group .dms-form-group select {\r\n  display: block;\r\n  width: 86%;\r\n  margin: 0 auto;\r\n  background-color: #FFF;\r\n  border-radius: 0 !important;\r\n}\r\n.cbrs-form .dms-group .tag-ul {\r\n  display: block;\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  padding: 0;\r\n  list-style-type: none;\r\n  margin: 15px auto 15px auto !important;\r\n  text-align: center;\r\n}\r\n.cbrs-form .dms-group .tag-ul li {\r\n  display: inline-block;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 5px 8px;\r\n  background-color: #FFF;\r\n  color: #2D3146;\r\n  border-radius: 4px;\r\n  font-size: 10pt;\r\n  border: 1px solid #efefef;\r\n  margin: 0 7px 5px 7px;\r\n}\r\n.cbrs-form .dms-group .tag-ul li .btn-remove {\r\n  background-color: transparent;\r\n  color: #2D3146;\r\n  border: none;\r\n  display: inline-block;\r\n  height: auto;\r\n  width: auto;\r\n  vertical-align: middle;\r\n  margin: 0 5px 0 0px;\r\n  position: relative;\r\n  left: -2px;\r\n  width: 6px;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n}\r\n.cbrs-form .dms-group .tag-ul li .btn-remove:hover {\r\n  cursor: pointer;\r\n  color: #E31C3D;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n}\r\n.add-comment-wrap {\r\n  display: block;\r\n  width: 100%;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 15px 35px;\r\n}\r\n.add-comment-wrap .new-comment-input {\r\n  border-top: 1px solid #E8E8E8;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 10px 15px !important;\r\n  display: inline-block;\r\n  width: 70%;\r\n  vertical-align: middle;\r\n  border: 1px solid #ebebeb !important;\r\n}\r\n.add-comment-wrap .new-comment-select {\r\n  height: 42px;\r\n}\r\n.add-comment-wrap .btn-add-comment {\r\n  display: inline-block;\r\n  width: 30%;\r\n  text-align: center;\r\n  color: #FFF;\r\n  background-color: #00CCA3;\r\n  border: 1px solid #00b38f;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n  height: 42px;\r\n  line-height: 36px;\r\n  font-size: 8pt;\r\n  text-transform: uppercase;\r\n  font-weight: bolder;\r\n  letter-spacing: 1px;\r\n  vertical-align: middle;\r\n}\r\n.add-comment-wrap .btn-add-comment:hover {\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n  background-color: #00e6b7;\r\n  border: 1px solid #00CCA3;\r\n  cursor: pointer;\r\n}\r\n.comment-ul {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 25px 55px;\r\n}\r\n.btn-save-all-inline {\r\n  display: inline-block;\r\n  margin: 0 auto;\r\n  height: 68px;\r\n  text-align: center;\r\n  background-color: #00CCA3;\r\n  color: #FFF;\r\n  font-size: 10pt;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 10px 20px;\r\n  font-weight: bolder;\r\n  border-radius: 0;\r\n  border: 1px solid #00b38f;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n}\r\n.btn-save-all-inline:hover {\r\n  background-color: #00b38f;\r\n  border: 1px solid #00997a;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n  cursor: pointer;\r\n  color: #FFF;\r\n}\r\n.btn-save-all {\r\n  display: block;\r\n  margin: 0 auto;\r\n  height: auto;\r\n  width: 160px;\r\n  font-weight: bolder;\r\n  text-align: center;\r\n  background-color: #00CCA3;\r\n  color: #FFF;\r\n  font-size: 10pt;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 7px 15px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1.5px;\r\n  border-radius: 0;\r\n  border: 1px solid #00b38f;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n  border-radius: 3px;\r\n}\r\n.btn-save-all:hover {\r\n  background-color: #00b38f;\r\n  border: 1px solid #00997a;\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n  cursor: pointer;\r\n  color: #FFF;\r\n}\r\ndiv.col-md-10 {\r\n  padding: 0;\r\n}\r\n#filedrag {\r\n  position: absolute;\r\n  top: 0px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 0px 25px;\r\n  line-height: 82px;\r\n  width: 100%;\r\n  height: 90px;\r\n  color: rgba(45, 49, 70, 0.25);\r\n  font-weight: 400;\r\n  border: none;\r\n  margin: 0 auto;\r\n  display: block;\r\n  vertical-align: middle;\r\n}\r\n.cbrsToast {\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  text-align: center;\r\n  background-color: #FF0B40;\r\n  color: #FFF;\r\n  border-radius: 4px;\r\n  font-size: 12.5px;\r\n  font-weight: 400;\r\n  position: fixed;\r\n  bottom: 15px;\r\n  right: 15px;\r\n  width: 300px;\r\n  letter-spacing: 0.75px;\r\n  min-height: 49px;\r\n  line-height: 20px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 12px 15px;\r\n  -webkit-box-shadow: 0 -1px -3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n          box-shadow: 0 -1px -3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  display: none;\r\n  z-index: 100000;\r\n}\r\n.cbrsToast.toastVisible {\r\n  display: -webkit-box !important;\r\n  display: -ms-flexbox !important;\r\n  display: flex !important;\r\n}\r\n.nopadd {\r\n  padding: 0;\r\n}\r\n.removeCaseFileButton {\r\n  background-color: transparent;\r\n  border: none;\r\n  width: 15px;\r\n  height: 15px;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  text-align: center;\r\n  background-color: rgb(202, 24, 24);\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n  color: #FFFFFF;\r\n  margin-left: 2px;\r\n  padding-right: 11px;\r\n  border-radius: 3px;\r\n}\r\n.removeCaseFileButton:hover {\r\n  cursor: pointer;\r\n  background-color: rgba(45, 49, 70, 0.8);\r\n  -webkit-transition: 0.15s;\r\n  transition: 0.15s;\r\n}\r\n.filepad {\r\n  padding: 10px 15px 25px 15px !important;\r\n  display: block;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n.filedropzone {\r\n  color: lightgray;\r\n  text-align: center;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  -webkit-transition: 0.1s;\r\n  transition: 0.1s;\r\n  padding: 30px 25px 0px 25px;\r\n  text-transform: capitalize;\r\n}\r\n.fullScreenFileDrag {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  margin: 25px 3%;\r\n  padding: 60px 25px 40px 25px;\r\n  width: 94% !important;\r\n  -webkit-transition: 0.1s;\r\n  transition: 0.1s;\r\n  border: 8px dashed rgba(0, 0, 0, 0.15);\r\n}\r\n/*\r\n  Map Data Page Fixes\r\n  Map Data Page Fixes\r\n  Map Data Page Fixes\r\n*/\r\n.multi-table{\r\n  margin-top: 15px !important;\r\n  display: block;\r\n}\r\n.multi-table .container{\r\n  width: 100% !important;\r\n  padding: 0 10px 0 0 !important;\r\n}\r\n.multi-table .container table{\r\n  margin: 0 !important;\r\n  width: 100% !important;\r\n\r\n}\r\n.multi-table .container table td,\r\n.multi-table .container table th{\r\n    width: auto;\r\n    max-width: 210px !important;\r\n}\r\n.mapData-filter{\r\n\r\n}\r\n.mapData-filter label{\r\n  display: block;\r\n  margin-top: 10px;\r\n  margin-bottom: 5px;\r\n}\r\n.mapData-filter input{\r\n  display: block;\r\n  width: 170px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 5px 10px;\r\n}\r\n/* MODAL STYLES\r\n-------------------------------*/\r\nmodal {\r\n  /* modals are hidden by default */\r\n  display: none;\r\n}\r\nmodal .modal {\r\n  display: block;\r\n  /* modal container fixed across whole screen */\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  /* z-index must be higher than .modal-background */\r\n  z-index: 1000;\r\n  /* enables scrolling for tall modals */\r\n  overflow: auto;\r\n}\r\nmodal .modal .modal-body {\r\n  padding: 20px;\r\n  background: #fff;\r\n  /* margin exposes part of the modal background */\r\n  margin-top: 10%;\r\n  margin-right: 40%;\r\n  margin-bottom: 60%;\r\n  margin-left: 40%;\r\n}\r\nmodal .modal-background {\r\n  /* modal background fixed across whole screen */\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  /* semi-transparent black  */\r\n  background-color: #000;\r\n  opacity: 0.75;\r\n  /* z-index must be below .modal and above everything else  */\r\n  z-index: 900;\r\n}\r\nbody.modal-open {\r\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\r\n  overflow: hidden;\r\n}\r\n.margin-bottom {margin-bottom:10px;}\r\n.margin-top {margin-top:10px;}\r\n.mydp, .mydp .headertodaybtn {border:none !important;padding: 4px;}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map