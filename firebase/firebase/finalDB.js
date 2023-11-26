/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./firebase/setup.js":
/*!***************************!*\
  !*** ./firebase/setup.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var https_www_gstatic_com_firebasejs_10_6_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js */ \"https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js\");\n/* harmony import */ var https_www_gstatic_com_firebasejs_10_6_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js */ \"https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js\");\n/* harmony import */ var https_www_gstatic_com_firebasejs_10_6_0_firebase_auth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js */ \"https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_www_gstatic_com_firebasejs_10_6_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_10_6_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__, https_www_gstatic_com_firebasejs_10_6_0_firebase_auth_js__WEBPACK_IMPORTED_MODULE_2__]);\n([https_www_gstatic_com_firebasejs_10_6_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_10_6_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__, https_www_gstatic_com_firebasejs_10_6_0_firebase_auth_js__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\r\n// import {initializeApp} from \"firebase/app\" ;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  const firebaseConfig = {\r\n    apiKey: \"AIzaSyAzcU3kufMN0gf-vjuU6aTbnnG29hkMMk4\",\r\n    authDomain: \"music-player-app-69.firebaseapp.com\",\r\n    projectId: \"music-player-app-69\",\r\n    storageBucket: \"music-player-app-69.appspot.com\",\r\n    messagingSenderId: \"388016496321\",\r\n    appId: \"1:388016496321:web:a616a637db481c559dbe40\"\r\n  };\r\n\r\n//this below written code initialized the firebase app\r\n(0,https_www_gstatic_com_firebasejs_10_6_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\n\r\n\r\n//creating a new database using the firestore method\r\nconst db = (0,https_www_gstatic_com_firebasejs_10_6_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();\r\n\r\n//initialises authentication services\r\nconst auth = (0,https_www_gstatic_com_firebasejs_10_6_0_firebase_auth_js__WEBPACK_IMPORTED_MODULE_2__.getAuth)()\r\n\r\n//collecting reference to a collection made in firebase\r\nconst colRef = (0,https_www_gstatic_com_firebasejs_10_6_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__.collection)(db, 'User Details');\r\n\r\n//getting the documents from the collection\r\n(0,https_www_gstatic_com_firebasejs_10_6_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__.getDocs)(colRef)\r\n  .then( (snapshot) => {\r\n        // console.log(snapshot.docs);\r\n\r\n        //this array is created to show all the docs in a better manner in the console\r\n        let userDetails = []\r\n\r\n        //this loop will make sure that the array is shown in a well presented manner in the console\r\n        snapshot.docs.forEach((doc) => {\r\n            userDetails.push( { ...doc.data(), id: doc.id } )\r\n        } )\r\n\r\n        //console to show (not necessary)\r\n        console.log(userDetails);\r\n  } )\r\n  .catch( err => {\r\n        //catch method to catch any kind of error if present in the code\r\n        console.error(\" There is some error in your code \");\r\n  } )\r\n\r\n\r\n  \r\n\r\n  //SIGN UP FUNCTION\r\n\r\n  let reg = document.getElementsByClassName('btn-2');\r\n\r\n  function registerUser(){\r\n\r\n    const mail = document.getElementById('email').value;\r\n    const password = document.getElementById('password').value;\r\n\r\n    (0,https_www_gstatic_com_firebasejs_10_6_0_firebase_auth_js__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(auth, mail, password)\r\n      .then( () => {\r\n\r\n        alert(\"Welcome \" + mail);\r\n\r\n      })\r\n      .catch( () => {\r\n        alert(\"ERROR SIGNING UP: The email may already exists\");\r\n      })\r\n\r\n  \r\n  }\r\n\r\n  for (var i = 0; i < reg.length; i++) {\r\n    reg[i].addEventListener('click', registerUser);\r\n  }\r\n\r\n  //SIGN UP FUNCTION IS DONE HERE \r\n\r\n\r\n\r\n\r\n  // LOG IN FUNCTION STARTS HERE\r\n\r\n  let loginBtn = document.getElementsByClassName('btn');\r\n\r\n  function loginUser(){\r\n\r\n    const mail = document.getElementById('email').value;\r\n    const password = document.getElementById('password').value;\r\n\r\n    (0,https_www_gstatic_com_firebasejs_10_6_0_firebase_auth_js__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(auth, mail, password)\r\n      .then( () => {\r\n        // alert(\"login successful\");\r\n        window.location.href = \"MusicLibrary.html\";\r\n      })\r\n      .catch( () => {\r\n        alert(\"EMAIL/PASSWORD ENTERED IS NOT CORRECT\");\r\n      })\r\n\r\n  }\r\n\r\n  for (var i = 0; i < loginBtn.length; i++) {\r\n    loginBtn[i].addEventListener('click', loginUser);\r\n  }\r\n\r\n  //LOGIN FUNCTION ENDS HERE\r\n  \r\n  \r\n\r\n\r\n  // LOGOUT FUNCTION STARTS HERE\r\n  \r\n\r\n//  const logOutBtn = document.getElementById('userIcon');\r\n\r\n//  function logOutUser(){\r\n\r\n//   alert(\"button is working\");\r\n//   // window.location.href = 'login.html';\r\n\r\n//  }\r\n\r\n//  for (var i = 0; i < logOutBtn.length; i++) {\r\n//   logOutBtn[i].addEventListener('click', logOutUser);\r\n\r\n// }\r\n\r\nfunction logOut(){\r\n  alert(\"fdfd\");\r\n}\r\n\r\n//  logOutBtn.addEventListener('click', logOutUser);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n \r\n\r\n\r\n\r\n  \r\n\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://spotifyclone/./firebase/setup.js?");

/***/ }),

/***/ "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js":
false,

/***/ "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js":
false,

/***/ "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js":
false

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./firebase/setup.js");
/******/ 	
/******/ })()
;