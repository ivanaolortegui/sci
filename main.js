
const iconMenu = document.getElementById("icon-menu")
const menu =  document.getElementById("menu")
const login = document.getElementById("login")
const signOff = document.getElementById("sign-off")

login.addEventListener("click",()=>{
    if(signOff.classList.contains("hide")){
       signOff.classList.remove("hide");
          signOff.classList.add('show-2')
    } else {
      signOff.classList.remove("show-2");
      signOff.classList.add('hide')
    }
})

iconMenu.addEventListener("click", () => {
    if(menu.classList.contains("hide")){
        menu.classList.remove("hide");
          menu.classList.add('show')
    } else if (menu.classList.contains("show")){
       menu.classList.remove("show");
        menu.classList.add('hide-menu');
    } else if (menu.classList.contains("hide-menu")){
        menu.classList.remove("hide-menu");
        menu.classList.add('show');
    }
    })


const inventario = document.getElementById("inventories")
const subMenuInventario = document.getElementById("inventories_sub_menu")

inventario.addEventListener("click", () => {
if(subMenuInventario.classList.contains("hide")){
    subMenuInventario.classList.remove("hide");
      subMenuInventario.classList.add('show')
} else {
    subMenuInventario.classList.remove("show");
    subMenuInventario.classList.add('hide')
}
}) 


const reporte = document.getElementById("maintenance")
const subMenuReporte = document.getElementById("report_sub_menu")

report.addEventListener("click", () => {
if(subMenuReporte.classList.contains("hide")){
    subMenuReporte.classList.remove("hide");
    subMenuReporte.classList.add('show')
} else {
    subMenuReporte.classList.remove("show");
    subMenuReporte.classList.add('hide')
}
}) 

const mantenimiento = document.getElementById("maintenance")
const subMenuMantenimiento = document.getElementById("maintenance_sub_menu")

mantenimiento.addEventListener("click", () => {
if(subMenuMantenimiento.classList.contains("hide")){
    subMenuMantenimiento.classList.remove("hide");
    subMenuMantenimiento.classList.add('show')
} else {
    subMenuMantenimiento.classList.remove("show");
    subMenuMantenimiento.classList.add('hide')
}
}) 