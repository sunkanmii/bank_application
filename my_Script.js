let my_Header = document.getElementById('myHeader');
let bars = document.getElementById('myBars');

bars.addEventListener('click', function(){
    my_Header.style.display = 'inline-block';
    bars.style.display = 'none';
});
