export default {
	namespaced:true,
	state:{
		address:{},
	},
	mutations:{
		updateAddress(state,address)
		{
			state.address=address;
			uni.setStorageSync('address', JSON.stringify(state.address))
		}
	},
	getters:{
			addstr(state)
				  {
					 
						 return state.address.address+state.address.name;
					  
				  }
	}
}