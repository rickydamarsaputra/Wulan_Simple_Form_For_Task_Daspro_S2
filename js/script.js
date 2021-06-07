const form = document.querySelector("form");
const modal = document.querySelector(".backdrop");
const closeModal = document.querySelector(".modal .close");

const gender = document.querySelectorAll("input[name='gender']");
const hobby = document.querySelectorAll("input[name='hobby[]']");
const message = document.querySelector("#message");

const myUsername = document.querySelector("#my-username");
const myPassword = document.querySelector("#my-password");
const myEmail = document.querySelector("#my-email");
const myGender = document.querySelector("#my-gender");
const myHobby = document.querySelector("#my-hobby");
const myEducation = document.querySelector("#my-education");
const myMessage = document.querySelector("#my-message");

// hidden modal
modal.style.display = "none";

form.addEventListener("submit", function (event) {
	event.preventDefault();
	modal.style.display = "flex";

	let currentHobby = "";
	let currentPassword = "";

	for (let i = 0; i < event.target[1].value.length; i++) {
		currentPassword += "*";
	}

	myUsername.innerHTML = event.target[0].value;
	myPassword.innerHTML = currentPassword;
	myEmail.innerHTML = event.target[2].value;

	gender.forEach(function (item) {
		if (item.checked) myGender.innerHTML = item.value;
	});

	hobby.forEach(function (item, index) {
		if (item.checked) currentHobby += `${item.value} | `;
	});

	myHobby.innerHTML = currentHobby.slice(0, currentHobby.length - 2);
	myEducation.innerHTML = event.target[9].value;
	myMessage.innerHTML = message.value;

	event.target.reset();
});

closeModal.addEventListener("click", function (event) {
	modal.style.display = "none";
});
