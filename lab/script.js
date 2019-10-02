var container = document.getElementById('anim_container');

var animData = {
    container: container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json'
};

var anim = bodymovin.loadAnimation(animData);