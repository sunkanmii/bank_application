let my_Header = document.getElementById('myHeader');
let bars = document.getElementById('myBars');
let close_button = document.getElementById('closeButton');
let login_button = document.getElementById('loginButton');
let form_close_button = document.getElementById('formCloseButton');
let modal_cancel_button = document.getElementById('modalCancelButton');

bars.addEventListener('click', function(){
    my_Header.style.display = 'inline-block';
    bars.style.display = 'none';
    close_button.style.display = 'inline';
});

close_button.addEventListener('click', function(){
    my_Header.style.display = 'none';
    bars.style.display = 'inline';
    close_button.style.display = 'none';
});

login_button.addEventListener('click', function(){
    modal_image.style.display = 'inline-block';
});

form_close_button.addEventListener('click', function(){
    modal_image.style.display = 'none';
});

modal_cancel_button.addEventListener('click', function(){
    modal_image.style.display = 'none';
});