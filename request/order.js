export default {
	demo()
	{
		return uni.request({
		  url: uni.$http.baseURL+'/demo',
		  method: 'GET',
		 header: { 'Content-Type': 'application/json' }
		})
		
		
	}
}