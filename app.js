


function ifClick() {
    var x = document.getElementById('attention');
    var y = document.html;
    
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
        x.style.position = 'fixed';
        y.style.overflow = 'hidden';
    }
    
}