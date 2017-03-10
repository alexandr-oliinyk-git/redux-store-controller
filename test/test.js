import {StoreController} from './../index';
import Stores from './storeList';

let store = new StoreController({stores: Stores})
console.log(store.page);