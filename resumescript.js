
var navmenutags=document.querySelectorAll('.nav-menu a');


for(var i=0; i<navmenutags.length; i++)
{
    navmenutags[i].addEventListener('click',function(event)
    {
        event.preventDefault();

        var targetsectionid = this.textContent.trim().toLowerCase();
        var targetsection = document.getElementById(targetsectionid);

        var interval=setInterval(function()
        {
            var targetsectioncoordinates=targetsection.getBoundingClientRect();

            if(targetsectioncoordinates.top <= 0)
            {
                clearInterval(interval);
                return;
            }

            window.scrollBy(0,50);

        },20);


    });
}



var skillcontainer=document.getElementById('skills-container');
var skillprogress=document.querySelectorAll('.skills-progress > div');
var animationdone=false;

window.addEventListener('scroll',checkscroll);

function initializebars()
{
    for(let bar of skillprogress)
    {
        bar.style.width= 0 + '%';
    }
}

initializebars();


function fillbars()
{
    for(let bar of skillprogress)
    {
        let targetwidth=bar.getAttribute('data-bar-width');

        let currentwidth=0;

        let interval=setInterval(function()
        {
            if(currentwidth > targetwidth)
            {
                clearInterval(interval);
                return;
            }
            console.log('print');
            currentwidth++;
            bar.style.width = currentwidth + '%';

        },15);
    }
}



function checkscroll()
{
    var coordinates=skillcontainer.getBoundingClientRect();

    if(!animationdone && coordinates.top < window.innerHeight)
    {
        fillbars();
        animationdone=true;
    }

    else if(coordinates.top  > window.innerHeight)
    {
        initializebars();
        animationdone=false;

    }
}