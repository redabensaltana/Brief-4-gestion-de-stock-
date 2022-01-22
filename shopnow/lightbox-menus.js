var form

///////////////////////////////////////////////////
var add = document.querySelector('.add')
add.addEventListener('click', display_add_form)

function display_add_form(){
    form = document.querySelector('.add-form')
    form.style.display = 'flex';
}   
///////////////////////EDIT////////////////////////////
var edit = document.querySelectorAll('.edit')

edit.forEach(function(element){
    element.addEventListener('click',display_edit_form)
})

function display_edit_form(){
    form = document.querySelector('.edit-form')
    form.style.display = 'flex';
}
///////////////////////////////////////////////////

var view = document.querySelectorAll('.view')

view.forEach(function(element){
    element.addEventListener('click',display_view_form)
});

function display_view_form(){
    form = document.querySelector('.view-form')
    form.style.display = 'flex';
}

///////////////////////////////////////////////////

var close_button = document.querySelectorAll('.close-button')

close_button.forEach(function(element){
    element.addEventListener('click',close_lightbox)
});

function close_lightbox(){
   form.style.display = 'none';
}

//////////////////////////////////////////////

const filter = document.querySelector('.form-filter');
const filter_icon = document.getElementById('filter-icon');
filter_icon.addEventListener('click',function(){
    filter.classList.toggle('show')
})

// const filter_icon = document.getElementById('filter-icon');
// filter_icon.addEventListener('click',function(){
//     const filter = document.querySelector('.form-filter');
//     if(filter.style.display == 'none'){
//         filter.style.display = 'flex';
//     }else{  
//         filter.style.display = 'none'
//     }
        
// })
