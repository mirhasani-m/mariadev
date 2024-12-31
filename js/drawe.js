const drawer = document.querySelector('.Drawer')
let drswerStat;
function openDrawer(){
    if (drswerStat){
        drawer.classList.remove("openDrawer")
        drswerStat = 0 ;
    }
    else{
            drawer.classList.add("openDrawer")
            drswerStat = 1 ;
    }
        }
