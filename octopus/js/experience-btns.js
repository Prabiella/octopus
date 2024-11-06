function contentTabs() {
	const initialTab = 0;

	let i;
	const containerActive = document.getElementsByClassName('tabs-wrapper');
	const tabButton = document.querySelectorAll('.tab-item');
	const tabContent = document.querySelectorAll('.item-content');

	if (containerActive.length >= 1) {
		runTabs();
	}

	function runTabs() {
		function clearActive() {
			for (i = 0; i < tabContent.length; i++) {
				tabContent[i].classList.remove('active');
			}
		}

		for (let tabIndex = 0; tabIndex < tabButton.length; tabIndex++) {
			tabButton[tabIndex].addEventListener('click', function() {
				clearActive();
				tabContent[tabIndex].classList.toggle('active');
			});
		}
	}
}
contentTabs();