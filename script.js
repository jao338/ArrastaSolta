let areas = {
    a: null,
    b: null,
    c: null
}

document.querySelectorAll('.item').forEach(item => {

    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)

});

document.querySelectorAll('.area').forEach(item => {

    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragleave', dragLeave);
    item.addEventListener('drop', drop);

});

document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);

//Functions Item

function dragStart(e){

    e.currentTarget.classList.add('dragging');

}

function dragEnd(e){

    e.currentTarget.classList.remove('dragging');

}

//Functions Area

function dragOver(e){

    if(e.currentTarget.querySelector('.item') === null){

        e.preventDefault();
        e.currentTarget.classList.add('hover');

    }

}

function dragLeave(e){

    e.currentTarget.classList.remove('hover');

}

function drop(e){
    
    e.currentTarget.classList.remove('hover');

    let dragItem = document.querySelector('.item.dragging');

    if(e.currentTarget.querySelector('.item') === null){

        e.currentTarget.appendChild(dragItem);
        updateAreas();

    }

}

// Functions Neutral Area

function dragOverNeutral(e){

    e.preventDefault();
    e.currentTarget.classList.add('hover')

}

function dragLeaveNeutral(e){

    e.currentTarget.classList.remove('hover')

}

function dropNeutral(e){
    
    e.currentTarget.classList.remove('hover')

    let dragItem = document.querySelector('.item.dragging');

    e.currentTarget.appendChild(dragItem);

    updateAreas();
}

// Logic Functions

function updateAreas(){

    document.querySelectorAll('.area').forEach(item => {

        let name = item.getAttribute('data-name')

        if(item.querySelector(".item") !== null){
            areas[name] = item.querySelector('.item').innerHTML;
        }else{
            areas[name] = null;
        }
    });

    if(areas.a === '1' && areas.b === '2' && areas.c === '3'){

        document.querySelector('.areas').classList.remove('incorrect');
        document.querySelector('.areas').classList.add('correct');

    }else if(areas.a === null && areas.b === null && areas.c === null){

        document.querySelector('.areas').classList.remove('incorrect');
        document.querySelector('.areas').classList.remove('correct');

    }else{
        document.querySelector('.areas').classList.add('incorrect');
    }
}
