webpackJsonp([1,2],{1006:function(n,o){function r(n,o){for(var r=0;r<n.length;r++){var t=n[r],e=c[t.id];if(e){e.refs++;for(var i=0;i<e.parts.length;i++)e.parts[i](t.parts[i]);for(;i<t.parts.length;i++)e.parts.push(l(t.parts[i],o))}else{for(var a=[],i=0;i<t.parts.length;i++)a.push(l(t.parts[i],o));c[t.id]={id:t.id,refs:1,parts:a}}}}function t(n){for(var o=[],r={},t=0;t<n.length;t++){var e=n[t],i=e[0],a=e[1],d=e[2],l=e[3],p={css:a,media:d,sourceMap:l};r[i]?r[i].parts.push(p):o.push(r[i]={id:i,parts:[p]})}return o}function e(n,o){var r=f(),t=h[h.length-1];if("top"===n.insertAt)t?t.nextSibling?r.insertBefore(o,t.nextSibling):r.appendChild(o):r.insertBefore(o,r.firstChild),h.push(o);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(o)}}function i(n){n.parentNode.removeChild(n);var o=h.indexOf(n);o>=0&&h.splice(o,1)}function a(n){var o=document.createElement("style");return o.type="text/css",e(n,o),o}function d(n){var o=document.createElement("link");return o.rel="stylesheet",e(n,o),o}function l(n,o){var r,t,e;if(o.singleton){var l=m++;r=x||(x=a(o)),t=p.bind(null,r,l,!1),e=p.bind(null,r,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=d(o),t=b.bind(null,r),e=function(){i(r),r.href&&URL.revokeObjectURL(r.href)}):(r=a(o),t=s.bind(null,r),e=function(){i(r)});return t(n),function(o){if(o){if(o.css===n.css&&o.media===n.media&&o.sourceMap===n.sourceMap)return;t(n=o)}else e()}}function p(n,o,r,t){var e=r?"":t.css;if(n.styleSheet)n.styleSheet.cssText=v(o,e);else{var i=document.createTextNode(e),a=n.childNodes;a[o]&&n.removeChild(a[o]),a.length?n.insertBefore(i,a[o]):n.appendChild(i)}}function s(n,o){var r=o.css,t=o.media;if(t&&n.setAttribute("media",t),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}function b(n,o){var r=o.css,t=o.sourceMap;t&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */");var e=new Blob([r],{type:"text/css"}),i=n.href;n.href=URL.createObjectURL(e),i&&URL.revokeObjectURL(i)}var c={},g=function(n){var o;return function(){return"undefined"==typeof o&&(o=n.apply(this,arguments)),o}},u=g(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=g(function(){return document.head||document.getElementsByTagName("head")[0]}),x=null,m=0,h=[];n.exports=function(n,o){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");o=o||{},"undefined"==typeof o.singleton&&(o.singleton=u()),"undefined"==typeof o.insertAt&&(o.insertAt="bottom");var e=t(n);return r(e,o),function(n){for(var i=[],a=0;a<e.length;a++){var d=e[a],l=c[d.id];l.refs--,i.push(l)}if(n){var p=t(n);r(p,o)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete c[l.id]}}}};var v=function(){var n=[];return function(o,r){return n[o]=r,n.filter(Boolean).join("\n")}}()},1011:function(n,o,r){n.exports=r(448)},448:function(n,o,r){var t=r(722);"string"==typeof t&&(t=[[n.i,t,""]]);r(1006)(t,{});t.locals&&(n.exports=t.locals)},722:function(n,o,r){o=n.exports=r(723)(),o.push([n.i,"@import url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css);",""]),o.push([n.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700);",""]),o.push([n.i,"@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css);",""]),o.push([n.i,"body,\nhtml{\n  background-color:#F8F8F8;\n  font-family:'Open Sans', sans-serif;\n  margin:0 auto;\n  padding:0;\n}\nbutton:focus{\n  outline:0 !important;\n}\ninput:focus{\n  outline:0 !important;\n}\nselect:focus{\n  outline:0 !important;\n}\ntextarea:focus{\n  outline:0 !important;\n}\n*{\n  outline:0 !important;\n}\n*:hover,\n*:focus,\n*:active{\n  outline:0 !important;\n}\na{\n  text-decoration:none;\n  color:#00CCA3;\n}\na:hover,\na:active,\na:focus{\n  text-decoration:none;\n}\nimg{\n  margin-top:105px;\n  display:block;\n  position:relative;\n  top:100px;\n}\n.login-form{\n  display:block;\n  width:280px;\n  box-sizing:border-box;\n  padding:20px 20px 5px 20px;\n  border-radius:3px;\n  background-color:#fff;\n  border:1px solid #ccc;\n  margin:45px auto;\n}\n.login-form label{\n  display:block;\n  padding:0;\n  margin:0 0 3px 0;\n  font-size:10pt;\n  font-weight:400;\n}\n.login-form input{\n  display:block;\n  width:100%;\n  margin-bottom:10px;\n  box-sizing:border-box;\n  padding:8px;\n  border:1px solid #CCC;\n  border-radius:3px;\n}\n.login-form button{\n  background-color:#00CCA3;\n  box-sizing:border-box;\n  padding:8px;\n  display:block;\n  text-align:center;\n  border:none;\n  width:100%;\n  color:#FFF;\n  font-weight:bolder;\n  font-size:12pt;\n  letter-spacing:1px;\n  border-radius:3px;\n  margin-top:22px;\n}\n.ng-valid[required]{\n  border-left:5px solid #42A948;\n}\n.ng-invalid{\n  border-left:5px solid #a94442;\n}\n#filedrag{\n  font-weight:bold;\n  text-align:center;\n  padding:1em 0;\n  margin:1em 0;\n  color:#555;\n  border:2px dashed #555;\n  border-radius:7px;\n  cursor:default;\n}\n#filedrag.hover{\n  color:#f00;\n  border-color:#f00;\n  border-style:solid;\n  box-shadow:inset 0 3px 4px #888;\n}\nnav{\n  position:fixed;\n  top:0;\n  left:0;\n  box-sizing:border-box;\n  background-color:#2D3146;\n  display:block;\n  width:100%;\n  z-index:5000;\n  box-shadow:0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\nnav a{\n  display:inline-block;\n  box-sizing:border-box;\n  padding:16px 12px;\n  font-size:9pt;\n  color:#FFF;\n  background-color:#2D3146;\n  font-weight:bolder;\n  text-transform:uppercase;\n  letter-spacing:0.75px;\n  vertical-align:middle;\n  transition:0.15s;\n}\nnav a:hover,\nnav a:active,\nnav a:focus{\n  text-decoration:none;\n  cursor:pointer;\n  color:#FFF;\n  background-color:#191b27;\n  transition:0.15s;\n}\nnav h1{\n  vertical-align:middle;\n  display:inline-block;\n  text-align:center;\n  font-family:'Open Sans', sans-serif;\n  text-transform:uppercase;\n  font-weight:300;\n  letter-spacing:1.5px;\n  color:#FFF;\n  font-size:14pt;\n  box-sizing:border-box;\n  margin:0;\n  padding:0 0 0 25px;\n}\nnav b.nav-user{\n  color:#FFF;\n  font-weight:lighter;\n  font-size:smaller;\n}\nspan.app-header{\n  display:block;\n  text-align:center;\n  text-transform:uppercase;\n  font-size:16pt;\n  font-weight:bolder;\n  box-sizing:border-box;\n  padding:25px 0;\n  line-height:0.5em;\n}\nspan.app-header h1{\n  display:block;\n  margin:0 auto;\n  font-size:42pt;\n  font-weight:bolder;\n  letter-spacing:-2px;\n  padding:0;\n  text-align:center;\n  line-height:0.95em;\n}\nspan.app-header h2{\n  display:block;\n  margin:0 auto;\n  font-size:13.5pt;\n  font-weight:bolder;\n  line-height:0.4em;\n  letter-spacing:-0.8px;\n  padding:0;\n  text-align:center;\n  box-sizing:border-box;\n  padding-left:7px;\n}\nspan.app-header h3{\n  display:block;\n  margin:0 auto;\n  font-size:15.5pt;\n  font-weight:bolder;\n  letter-spacing:-0.8px;\n  padding:0;\n  text-align:center;\n  box-sizing:border-box;\n  padding-left:7px;\n}\nh3.subheader{\n  display:block;\n  text-align:center;\n  font-size:14pt;\n  font-weight:bolder;\n  text-transform:uppercase;\n  margin-bottom:45px;\n}\nh3.subheader b{\n  display:inline;\n  border-bottom:4px solid #2D3146;\n  box-sizing:border-box;\n  padding:0px 4px;\n}\nspan.loading-message{\n  display:block;\n  text-align:center;\n  font-size:22pt;\n  box-sizing:border-box;\n  padding:25px;\n  text-transform:lowercase;\n  letter-spacing:-1px;\n  font-weight:bolder;\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  height:100%;\n}\nspan.loading-message i{\n  display:block;\n  margin:0 auto;\n}\nbutton.filter-cases-btn,\nbutton.reports-export-btn{\n  display:block;\n  width:150px;\n  background-color:#FFF;\n  color:#2D3146;\n  box-sizing:border-box;\n  padding:8px 15px;\n  font-weight:700;\n  text-transform:capitalize;\n  border-radius:3px;\n  border:2px solid #f2f2f2;\n  transition:0.15s;\n  margin:0 auto;\n}\nbutton.filter-cases-btn:hover,\nbutton.reports-export-btn:hover{\n  cursor:pointer;\n  transition:0.15s;\n  border:2px solid #d9d9d9;\n}\nbutton.filter-cases-btn:hover i,\nbutton.reports-export-btn:hover i{\n  color:rgba(45, 49, 70, 0.7);\n}\nbutton.filter-cases-btn i,\nbutton.reports-export-btn i{\n  color:rgba(45, 49, 70, 0.3);\n}\nbutton.filter-cases-btn i.fa-filter,\nbutton.reports-export-btn i.fa-filter{\n  position:relative;\n  top:-1px;\n  padding-right:4px;\n}\n.true-false-icon{\n  display:block;\n  margin:0 auto;\n  text-align:center;\n  box-sizing:border-box;\n  font-size:14pt;\n  padding-top:1px;\n}\n.true-false-icon.fa-check{\n  color:#00CCA3;\n}\n.true-false-icon.fa-close{\n  color:#D24B4B;\n}\n.dms-table{\n  display:block;\n  margin:35px auto 55px auto !important;\n  width:90%;\n  margin:0 auto;\n  font-family:'Open Sans', sans-serif;\n  border:0px solid black;\n  border-radius:3px;\n}\n.dms-table thead{\n  background-color:#2D3146;\n}\n.dms-table thead th{\n  border-bottom-width:1px !important;\n}\n.dms-table thead th a{\n  box-sizing:border-box;\n  padding:10px 0;\n  display:block;\n  color:#FFF;\n  font-size:8.5pt;\n  transition:0.15s;\n}\n.dms-table thead th a:hover{\n  transition:0.15s;\n  color:rgba(255, 255, 255, 0.7);\n}\n.dms-table tbody{\n  height:50%;\n  overflow:scroll;\n}\n.dms-table tbody tr{\n  border:0px solid black !important;\n  transition:0.15s;\n  background-color:#FFF;\n}\n.dms-table tbody tr:hover{\n  cursor:pointer;\n  background-color:#F2FDFF;\n  transition:0.15s;\n  border-left:5px solid #00CCA3 !important;\n}\n.dms-table tbody tr:nth-child(even){\n  background-color:#F9FCFD;\n}\n.dms-table tbody tr:nth-child(even):hover{\n  cursor:pointer;\n  background-color:#F2FDFF;\n  transition:0.15s;\n  border-left:5px solid #00CCA3 !important;\n}\n.tags-table{\n  display:block;\n  margin:15px auto 55px auto !important;\n  width:100%;\n  margin:0 auto;\n  font-family:'Open Sans', sans-serif;\n  border:0px solid black;\n  border-radius:3px;\n}\n.tags-table tbody{\n  height:50%;\n  overflow:scroll;\n  display:table;\n  width:100%;\n}\n.tags-table tbody tr{\n  border:0px solid black !important;\n  transition:0.15s;\n  background-color:#FFF;\n}\n.tags-table tbody tr:nth-child(even){\n  background-color:#F9FCFD;\n}\n.tags-table tbody tr:nth-child(even):hover{\n  background-color:#F9FCFD;\n}\n.tags-table tbody tr:nth-child(odd){\n  background-color:#FFF;\n}\n.tags-table tbody tr:nth-child(odd):hover{\n  background-color:#FFF;\n}\n.tags-table tbody tr.head{\n  background-color:#2D3146;\n  text-align:center;\n  vertical-align:middle;\n  color:#FFF;\n}\n.tags-table tbody tr.head td{\n  text-align:center;\n  line-height:1em;\n  font-weight:bolder;\n  font-size:10pt;\n  font-weight:lighter;\n}\n.tags-table tbody tr.head:hover{\n  background-color:#2D3146;\n}\n.tags-table tbody tr td{\n  vertical-align:middle;\n}\n.tags-table tbody tr td .btn-tags{\n  display:block;\n  width:100%;\n  text-align:center;\n  background-color:transparent;\n  border:none;\n  text-transform:uppercase;\n  font-weight:bolder;\n  transition:0.15s;\n}\n.tags-table tbody tr td .btn-tags i{\n  box-sizing:border-box;\n  padding:0 0 0 5px;\n  position:relative;\n  top:-1px;\n}\n.tags-table tbody tr td .btn-tags.delete{\n  color:#D24B4B;\n}\n.tags-table tbody tr td .btn-tags:hover{\n  cursor:pointer;\n  transition:0.15s;\n  color:rgba(45, 49, 70, 0.5);\n}\n.add-tag-form{\n  display:block;\n  width:300px;\n  margin:0 auto 65px auto;\n}\n.add-tag-form div.form-group{\n  display:block;\n  width:100%;\n}\n.add-tag-form div.form-group label{\n  font-size:8pt;\n  text-transform:uppercase;\n  letter-spacing:1px;\n  font-weight:bolder;\n  display:block;\n}\n.add-tag-form div.form-group input{\n  display:block;\n  width:100%;\n  box-sizing:border-box;\n  padding:8px 10px;\n  border:1px solid rgba(45, 49, 70, 0.3);\n}\n.add-tag-form div.form-group input.ng-invalid{\n  border-left:1px solid rgba(45, 49, 70, 0.3);\n}\n.add-tag-form div.form-group button{\n  display:block;\n  width:100%;\n  font-weight:bolder;\n  letter-spacing:1px;\n  box-sizing:border-box;\n  padding:8px 10px;\n  text-align:center;\n  background-color:#00CCA3;\n  color:#FFF;\n  transition:0.15s;\n  border:2px solid #00b38f;\n  text-transform:uppercase;\n}\n.add-tag-form div.form-group button:hover{\n  cursor:pointer;\n  transition:0.15s;\n  background-color:#00c29b;\n}\n.reports-ul{\n  display:block;\n  margin:0 auto;\n  width:300px;\n  box-sizing:border-box;\n  padding:25px 0;\n}\n.cbra-form{\n  box-sizing:border-box;\n  margin:25px auto 55px auto !important;\n  display:block;\n  width:90%;\n}\n.cbra-form .form-main-header{\n  display:block;\n  width:100%;\n  text-align:center;\n  box-sizing:border-box;\n  padding:0 0 15px 0;\n  font-weight:lighter;\n  font-family:'Open Sans', sans-serif;\n}\n.cbra-form label{\n  font-family:'Open Sans', sans-serif;\n  font-weight:bolder;\n  color:#2D3146;\n  text-transform:uppercase;\n  font-size:8.5pt;\n  margin:0;\n}\n.cbra-form input,\n.cbra-form select,\n.cbra-form textarea{\n  border-radius:0px !important;\n  background-color:#FFF;\n  border:none;\n  box-shadow:none;\n  box-sizing:border-box;\n  padding:4px;\n  border-radius:4px;\n  transition:0.15s;\n}\n.cbra-form input:hover,\n.cbra-form select:hover,\n.cbra-form textarea:hover{\n  transition:0.15s;\n  background-color:#FCFCFC;\n}\n.cbra-form select{\n  height:30px;\n}\n.cbra-form select:hover{\n  cursor:pointer;\n}\n.cbra-form input[type='file']{\n  background-color:transparent;\n  border:0px solid black;\n}\n.cbra-form .row{\n  margin-left:0 !important;\n  margin-right:0 !important;\n}\n.cbra-form .dms-group{\n  display:block;\n  width:100%;\n  box-sizing:border-box;\n  background-color:#FFF;\n  border:1px solid #efefef;\n  margin-bottom:25px;\n  box-shadow:0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.14);\n}\n.cbra-form .dms-group .dms-group-header{\n  border-bottom:1px solid #E8E8E8;\n  margin:0 auto;\n  box-sizing:border-box;\n  padding:15px;\n  font-size:14pt;\n  font-weight:bolder;\n  color:#2D3146;\n  text-transform:uppercase;\n}\n.cbra-form .dms-group .col-md-1,\n.cbra-form .dms-group .col-md-2,\n.cbra-form .dms-group .col-md-3,\n.cbra-form .dms-group .col-md-4,\n.cbra-form .dms-group .col-md-5,\n.cbra-form .dms-group .col-md-12,\n.cbra-form .dms-group .col-md-6{\n  padding:0;\n}\n.cbra-form .dms-group .chx-group{\n  display:block;\n  width:100%;\n  margin:0 auto;\n  padding:0;\n  box-sizing:border-box;\n}\n.cbra-form .dms-group .chx-group label{\n  display:inline-block;\n  width:90px;\n  width:calc(100% - 140px);\n  height:33px;\n  vertical-align:top;\n  line-height:33px;\n  margin:0 auto;\n  background-color:#3d4360;\n  border-bottom:1px solid #2D3146;\n  color:#FFF;\n  box-sizing:border-box;\n  padding:0 0 0 6px;\n}\n.cbra-form .dms-group .chx-group .chx{\n  height:33px;\n  width:140px;\n  line-height:33px;\n  vertical-align:top;\n  background-color:#2D3146;\n  display:inline-block;\n  text-align:center;\n  border-bottom:1px solid #191b27;\n}\n.cbra-form .dms-group .chx-group .chx input[type=\"checkbox\"]{\n  position:relative;\n  top:0px;\n}\n.cbra-form .dms-group .chx-group .chx input[type=\"checkbox\"]:hover{\n  cursor:pointer;\n}\n.cbra-form .dms-group .chx-group .slct{\n  height:33px;\n  width:140px;\n  line-height:33px;\n  vertical-align:top;\n  background-color:#2D3146;\n  display:inline-block;\n  text-align:center;\n  border-bottom:1px solid #191b27;\n}\n.cbra-form .dms-group .chx-group .slct input[type=\"select\"]{\n  position:relative;\n  top:0px;\n}\n.cbra-form .dms-group .chx-group .slct input[type=\"select\"]:hover{\n  cursor:pointer;\n}\n.cbra-form .dms-group .file-group{\n  display:block;\n  width:100%;\n  box-sizing:border-box;\n  border-left:1px solid #E8E8E8;\n  height:135px;\n}\n.cbra-form .dms-group .file-group .fileDragLabel{\n  box-sizing:border-box;\n  padding:8px 0 0 8px;\n  font-weight:bolder;\n}\n.cbra-form .dms-group .file-group .fileList{\n  display:block;\n  height:auto;\n  padding:0;\n}\n.cbra-form .dms-group .file-group .fileList li{\n  margin:0 auto;\n  padding:0;\n}\n.cbra-form .dms-group .file-group .fileList li a{\n  font-size:8pt;\n  font-weight:500;\n  letter-spacing:0;\n}\n.cbra-form .dms-group .file-group label{\n  display:inline-block;\n  width:70%;\n  color:#2D3146;\n  margin:0 auto;\n  height:45px;\n  line-height:45px;\n  text-align:center;\n  box-sizing:border-box;\n  vertical-align:middle;\n  background-color:#FFF;\n  border-bottom:1px solid #e8e8e8;\n}\n.cbra-form .dms-group .file-group label.fifty{\n  width:50%;\n  box-sizing:border-box;\n}\n.cbra-form .dms-group .file-group ul{\n  display:block;\n  width:90%;\n  padding:10px 0 0 0;\n  margin:0 5%;\n  list-style-type:bullet;\n}\n.cbra-form .dms-group .file-group ul li{\n  display:block;\n  box-sizing:border-box;\n  padding:0 0 5px 0;\n  text-align:left;\n}\n.cbra-form .dms-group .file-group ul li a{\n  font-size:9pt;\n  font-weight:bolder;\n  color:#2D3146;\n  font-weight:600;\n  letter-spacing:0.5px;\n  font-family:'Open Sans', sans-serif;\n  transition:0.15s;\n}\n.cbra-form .dms-group .file-group ul li a:hover{\n  cursor:pointer;\n  color:#00CCA3;\n  transition:0.15s;\n}\n.cbra-form .dms-group .file-group input[type=\"file\"]{\n  display:none;\n}\n.cbra-form .dms-group .file-group .file-upload-label{\n  float:right;\n  height:45px;\n  vertical-align:middle;\n  line-height:45px;\n  display:inline-block;\n  width:25%;\n  padding:0;\n  background-color:#00CCA3;\n  color:#FFF;\n  text-align:center;\n  margin:0 auto;\n  text-transform:capitalize;\n  font-weight:400;\n  font-size:8pt;\n  letter-spacing:0.25px;\n  box-sizing:border-box;\n  border-right:1px solid #FFF;\n}\n.cbra-form .dms-group .file-group .file-upload-label:hover{\n  cursor:pointer;\n  transition:0.15s;\n  background-color:#00a382;\n}\n.cbra-form .dms-group .dms-form-group{\n  box-sizing:border-box;\n  height:67.5px;\n}\n.cbra-form .dms-group .dms-form-group.bb{\n  border-bottom:1px solid #E8E8E8;\n}\n.cbra-form .dms-group .dms-form-group.br{\n  border-right:1px solid #E8E8E8;\n}\n.cbra-form .dms-group .dms-form-group label{\n  box-sizing:border-box;\n  padding:10px 0 0 14px;\n  display:block;\n}\n.cbra-form .dms-group .dms-form-group input,\n.cbra-form .dms-group .dms-form-group select{\n  display:block;\n  width:86%;\n  margin:0 auto;\n  background-color:#FFF;\n  border-radius:0 !important;\n}\n.cbra-form .dms-group .tag-ul{\n  display:block;\n  width:80%;\n  margin:0 auto;\n  padding:0;\n  list-style-type:none;\n  margin:15px auto 15px auto !important;\n  text-align:center;\n}\n.cbra-form .dms-group .tag-ul li{\n  display:inline-block;\n  box-sizing:border-box;\n  padding:5px 8px;\n  background-color:#FFF;\n  color:#2D3146;\n  border-radius:4px;\n  font-size:10pt;\n  border:1px solid #efefef;\n  margin:0 7px 5px 7px;\n}\n.cbra-form .dms-group .tag-ul li .btn-remove{\n  background-color:transparent;\n  color:#2D3146;\n  border:none;\n  display:inline-block;\n  height:auto;\n  width:auto;\n  vertical-align:middle;\n  margin:0 5px 0 0px;\n  position:relative;\n  left:-2px;\n  width:6px;\n  transition:0.15s;\n}\n.cbra-form .dms-group .tag-ul li .btn-remove:hover{\n  cursor:pointer;\n  color:#E31C3D;\n  transition:0.15s;\n}\n.add-comment-wrap{\n  display:block;\n  width:100%;\n  box-sizing:border-box;\n  padding:15px 35px;\n}\n.add-comment-wrap .new-comment-input{\n  border-top:1px solid #E8E8E8;\n  box-sizing:border-box;\n  padding:10px 15px !important;\n  display:inline-block;\n  width:70%;\n  vertical-align:middle;\n  border:1px solid #ebebeb !important;\n}\n.add-comment-wrap .new-comment-select{\n  height:42px;\n}\n.add-comment-wrap .btn-add-comment{\n  display:inline-block;\n  width:30%;\n  text-align:center;\n  color:#FFF;\n  background-color:#00CCA3;\n  border:1px solid #00b38f;\n  transition:0.15s;\n  height:42px;\n  line-height:36px;\n  font-size:8pt;\n  text-transform:uppercase;\n  font-weight:bolder;\n  letter-spacing:1px;\n  vertical-align:middle;\n}\n.add-comment-wrap .btn-add-comment:hover{\n  transition:0.15s;\n  background-color:#00e6b7;\n  border:1px solid #00CCA3;\n  cursor:pointer;\n}\n.comment-ul{\n  box-sizing:border-box;\n  padding:25px 55px;\n}\n.btn-save-all-inline{\n  display:inline-block;\n  margin:0 auto;\n  height:68px;\n  text-align:center;\n  background-color:#00CCA3;\n  color:#FFF;\n  font-size:10pt;\n  box-sizing:border-box;\n  padding:10px 20px;\n  font-weight:bolder;\n  border-radius:0;\n  border:1px solid #00b38f;\n  transition:0.15s;\n}\n.btn-save-all-inline:hover{\n  background-color:#00b38f;\n  border:1px solid #00997a;\n  transition:0.15s;\n  cursor:pointer;\n  color:#FFF;\n}\n.btn-save-all{\n  display:block;\n  margin:0 auto;\n  height:auto;\n  width:160px;\n  font-weight:bolder;\n  text-align:center;\n  background-color:#00CCA3;\n  color:#FFF;\n  font-size:10pt;\n  box-sizing:border-box;\n  padding:7px 15px;\n  text-transform:uppercase;\n  letter-spacing:1.5px;\n  border-radius:0;\n  border:1px solid #00b38f;\n  transition:0.15s;\n  border-radius:3px;\n}\n.btn-save-all:hover{\n  background-color:#00b38f;\n  border:1px solid #00997a;\n  transition:0.15s;\n  cursor:pointer;\n  color:#FFF;\n}\ndiv.col-md-10{\n  padding:0;\n}\n#filedrag{\n  position:absolute;\n  top:0px;\n  box-sizing:border-box;\n  padding:0px 25px;\n  line-height:82px;\n  width:100%;\n  height:90px;\n  color:rgba(45, 49, 70, 0.25);\n  font-weight:400;\n  border:none;\n  margin:0 auto;\n  display:block;\n  vertical-align:middle;\n}\n",""])},723:function(n,o){n.exports=function(){var n=[];return n.toString=function(){for(var n=[],o=0;o<this.length;o++){var r=this[o];r[2]?n.push("@media "+r[2]+"{"+r[1]+"}"):n.push(r[1])}return n.join("")},n.i=function(o,r){"string"==typeof o&&(o=[[null,o,""]]);for(var t={},e=0;e<this.length;e++){var i=this[e][0];"number"==typeof i&&(t[i]=!0)}for(e=0;e<o.length;e++){var a=o[e];"number"==typeof a[0]&&t[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),n.push(a))}},n}}},[1011]);
//# sourceMappingURL=styles.48b6edd64fac8313ed34.bundle.map