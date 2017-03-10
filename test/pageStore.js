import StoreClass from './../src/storeClass';

class PageStore extends StoreClass {
	constructor(){
		super({page: 'loadScreen'});
	}

	update(state, action){
		switch(action.type){
			case 'CHANGE_PAGE': return Object.assign(state, {page: action.page}); break;
			default: return state; break;
		}
	}

	changePage(page){
		this._store.dispatch({type: 'CHANGE_PAGE', page: page})
	}

}

export default PageStore;