
const item = document.querySelector('.item')
const placeholder = document.querySelectorAll('.placeholder')
const arrPlaceholder = Array.from(placeholder)

// событие срабатывающие при начале передвижения элемента
item.addEventListener('dragstart', (event) =>{
    event.target.style.border = '3px solid #F5DEB3'    
    // без setTimeout, item будет скрыватся сразу при клике
    setTimeout(() =>{
        event.target.classList.add('hide')
    },0)
})
// событие срабатывающие, когда элемент был передвинут 
item.addEventListener('dragend', (event) =>{
    event.target.style.border = 'none'
    event.target.classList.remove('hide')
})
// ========

// dragover - вызывается тогда, когда элемент, который мы перетаскиваем, находится над элементом, на котором весит событие
// также dragover по умолчанию отменяет поведение которое позволяет перетаскивать елементы. Его нужно отменить
// dragenter - срабатывает тогда, когда заходим на територию элем, на котором весит событие
// dragleave - когда перетащили, и вышли от туда
// drop - когда отпустили
arrPlaceholder.forEach((itemPlaceholder) =>{
    // ====
    itemPlaceholder.addEventListener('dragover', (event) =>{
        event.preventDefault()
    })     
    // ====
    itemPlaceholder.addEventListener('dragenter', (event) =>{
        event.target.style.borderTop = '2px solid #800080'
    })   
    // ====
    itemPlaceholder.addEventListener('dragleave', (event) =>{
        event.target.style.borderTop = 'none'
    })    
    // ====      
    itemPlaceholder.addEventListener('drop', (event) =>{
        event.target.style.borderTop = 'none'        
        event.target.append(item)
    })   
    // ====
    
})