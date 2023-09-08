export default {
	namespaced:true,
	state:{
		   cart: JSON.parse(uni.getStorageSync('cart') || '[]')
	},
	mutations:{ 
		addToCart(state,goods)
		{
			const findResult=state.cart.find(x=>x.goods_id===goods.goods_id);
			if(findResult)
			{
				findResult.goods_count++;
			}
			else{
				state.cart.push(goods)
			};
			   uni.setStorageSync('cart', JSON.stringify(state.cart))
		},
		updateGoodsState(state,goods)
		{
			 const findResult = state.cart.find(x => x.goods_id === goods.goods_id)
			 if(findResult)
			 {
				     findResult.goods_state = goods.goods_state;
					    uni.setStorageSync('cart', JSON.stringify(state.cart))
			 }
		},
		updateGoodsCount(state, goods) {
		  // 根据 goods_id 查询购物车中对应商品的信息对象
		  const findResult = state.cart.find(x => x.goods_id === goods.goods_id)
		
		  if(findResult) {
		    // 更新对应商品的数量
		    findResult.goods_count = goods.goods_count
		    // 持久化存储到本地
		    uni.setStorageSync('cart', JSON.stringify(state.cart))
		  }
		},
		removeGoodsById(state, goods_id) {
		  // 调用数组的 filter 方法进行过滤
		  state.cart = state.cart.filter(x => x.goods_id !== goods_id)
		  // 持久化存储到本地
		   uni.setStorageSync('cart', JSON.stringify(state.cart))
		}
	
		
		
	},
	getters:{
		   total(state) {	
		       let c = 0
		       // 循环统计商品的数量，累加到变量 c 中
		       state.cart.forEach(goods => c += goods.goods_count)
		       return c
		    },
		 checkedCount(state) {
		   // 先使用 filter 方法，从购物车中过滤器已勾选的商品
		   // 再使用 reduce 方法，将已勾选的商品总数量进行累加
		   // reduce() 的返回值就是已勾选的商品的总数量
		    return state.cart.filter(x => x.goods_state).reduce((total, item) => total += item.goods_count, 0)
		 }
	}
}