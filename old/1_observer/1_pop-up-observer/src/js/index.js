import {observer} from './observer.js'

// =========================== v1

const wrapper = document.querySelector('.wrapper')

const openTask = (e) => {
    const target = e.target

    if (!target.closest('.task')) return

    target.classList.add('task-edit')
}

wrapper.addEventListener('click', openTask)

