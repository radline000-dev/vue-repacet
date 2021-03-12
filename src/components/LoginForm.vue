<template>
	<form @submit.prevent="Login">
		<div>
			<label for="username">id:</label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="password">pw:</label>
			<input id="password" type="password" v-model="password" />
		</div>

		<button v-bind:disabled="!isUsernameValid || !password" type="submit">
			로그인
		</button>
	</form>
</template>

<script>
import { validateEmail } from '@/utils/validation'
import { loginUser } from '@/api/index'
export default {
	data() {
		return {
			username: '',
			password: '',
			logMessage: '',
		}
	},
	computed: {
		isUsernameValid() {
			return validateEmail(this.username)
		},
	},
	methods: {
		async Login() {
			try {
				console.log(' 로그인 제출')
				const userLogin = {
					username: this.username,
					password: this.password,
				}
				const { data } = await loginUser(userLogin)
				console.log(data.user.username)
				this.logMessage = `${data.user.username}님 환영합니다.`
				alert(this.logMessage)
			} catch (error) {
				console.log(error.response.data)
				alert('패스워드가 틀렷어')
			} finally {
				this.initForm()
			}
		},
		initForm() {
			this.username = ''
			this.password = ''
		},
	},
}
</script>

<style></style>
