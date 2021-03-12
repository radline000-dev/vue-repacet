<template>
	<div>
		<h1>로그인 페이지</h1>
		<login-form></login-form>
	</div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import { validateEmail } from '@/utils/validation'
export default {
	components: { LoginForm },
}
</script>

<style></style>
