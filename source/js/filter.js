const list = document.querySelector('.filter-menu'),
	items = document.querySelectorAll('.catalog__card'),
	listItems = document.querySelectorAll('.filter-menu__button')

function filter() {
	list.addEventListener('click', (event) => {
		const targetId = event.target.dataset.id
		const target = event.target

		switch (targetId) {
			case 'all':
				getItem('catalog__card')
				break
			case 'sites':
				getItem(targetId)
				break
			case 'applications':
				getItem(targetId)
				break
			case 'design':
				getItem(targetId)
				break
			case 'marketing':
				getItem(targetId)
				break
		}

		toggleFilterClass(target)
	})
}

filter()

function toggleFilterClass(selectedButton) {
	listItems.forEach((btn) => {
		if (btn === selectedButton) {
			btn.classList.add('filter-selected')
		} else {
			btn.classList.remove('filter-selected')
		}
	})
}

function getItem(className) {
	items.forEach((item) => {
		if (item.classList.contains(className)) {
			item.style.display = 'block'
		} else item.style.display = 'none'
	})
}
