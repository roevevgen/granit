const div = document.createElement('div');
div.style.cssText = 'width:calc(10px)';

if (!(div.style.length > 0)) {
    const link = document.createElement('link');
    link.setAttribute('href', 'css/styles-per.css');
    link.setAttribute('rel', 'stylesheet');
    document.body.appendChild(link);
}

function showSideMenu() {
    document.getElementById('side-menu').style.width = '250px';
}
function hideSideMenu() {
    document.getElementById('side-menu').style.width = '0';
}