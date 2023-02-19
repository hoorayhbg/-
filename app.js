function number(){ 
    let zp = document.getElementById('chasi').value;
    let days = document.getElementById('days').value;
    document.getElementById('sum').innerText = +zp + +days;
}