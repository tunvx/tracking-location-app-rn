// validate email
export const isValidateEmail = (email) => {
	if (
		email.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)
	) {
		return true;
	}
	return false;
};

//validate password
export const isValidatePassword = (password) => {
	if (password.length > 3) {
		return true;
	}
	return false;
};
