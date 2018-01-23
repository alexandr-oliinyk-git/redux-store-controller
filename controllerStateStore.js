"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _map=require("lodash/map"),_map2=_interopRequireDefault(_map),_each=require("lodash/each"),_each2=_interopRequireDefault(_each),_storeClass=require("./storeClass"),_storeClass2=_interopRequireDefault(_storeClass);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}class ControllerStateStore{constructor(a){this.state={},this.unsubscribe=[],this.checkOptions(a),this.stores=a.stores,this.subscribe(a.rules)}stateDidUpdate(){}checkOptions(a){if(a.stores instanceof _storeClass2.default)this.stores=a.stores;else{const b=`You are tried subscribe on not exist store: ${a.stores} \r\n Check options for super() call in component: '${this.constructor.name}'`;throw global.console.error(b),new Error(b)}}subscribe(a){this.unsubscribe=(0,_map2.default)(a,(a)=>this.subscribeField(a.field))}subscribeField(a){return this.initStateField(a),this.stores.watch(a,(b)=>{this.updateField(a,b)})}updateField(a,b){this.state[a]=b,this.stateDidUpdate()}initStateField(a){this.state[a]=this.stores.getField(a)||null}unsubscribe(){(0,_each2.default)(this.unsubscribe,(a)=>{a()})}}exports.default=ControllerStateStore;