import axios from 'axios'

const instance = axios.create({
	baseURL: `${process.env.VUE_APP_API_URL}`,
})

function registerUser(userdata: any) {
	console.log(process.env.VUE_APP_API_URL)
	return instance.post('/signup', userdata)
}

function loginUser(userData: any) {
	return instance.post('/login', userData)
}

export { registerUser, loginUser }
