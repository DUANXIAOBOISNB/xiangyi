export default
{
	namespaced:true,
	state:{
		loginstatus:false
	},
	mutations:{
		changeloginstates(state,loginflag)
		{
			state.loginstatus=loginflag
		}
	}
}