

export function getRedirectPath({type, avatar}){
	// 根据用户信息 返回跳转地址
	let url = (type==='xx')?'/xx': '/yy'
	if (!avatar) {
		url += 'info'
	}
	return url
}
