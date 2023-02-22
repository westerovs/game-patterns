import { observer } from './utils/observer.js'
import { tasksData } from './modal.js'
import { CreateCardTemplate } from './view.js'
import { render } from './utils/render.js'

const wrapper = document.querySelector('.wrapper')

// -------------- render
tasksData.forEach((item, index) => {
    render(wrapper, CreateCardTemplate(item, index + 1))
})

const tasks = document.querySelectorAll('.task');

const openTask = (e) => {
    const target = e.target

    if (!target.closest('.task')) return
    if (target.classList.contains('task-edit')) return
    observer.notify(closeCard)
    
    target.classList.add('task-edit')
    console.log('open task')
}

// вызывает цикл по всем картам и проверяет на наличие открытой
const closeCard = () => {
    console.log('close card')
    
    tasks.forEach(task => {
        if (task.classList.contains('task-edit')) task.classList.remove('task-edit')
    })
}

wrapper.addEventListener('click', openTask)
observer.addObserver(closeCard)
