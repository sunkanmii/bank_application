let my_Header = document.getElementById('myHeader');
let bars = document.getElementById('myBars');
let close_button = document.getElementById('closeButton');

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
