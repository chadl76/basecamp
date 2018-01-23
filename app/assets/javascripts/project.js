document.addEventListener('turbolinks:load', function() {
	const projectButton = document.getElementById('new-project-btn');

	projectButton.addEventListener('click', function(){
		projectButton.classList.remove('is-hidden');
	})
});