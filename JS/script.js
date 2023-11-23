let openSidebarMenu = document.querySelector("#opensidebarmenu");
let sidebar = document.querySelector("#sidebarmenu");
let showSearch = document.querySelector(".showsearch");
let searchDiv = document.querySelector(".searchbar");
let searchInput = document.querySelector("#search-input");
let issueitemyes = document.querySelector(".issueitemyes");
let issueitemno = document.querySelector(".issueitemno");
let issueitems = document.querySelector(".issueitems");
let issuebtn = document.querySelector(".f-issue-btn");
let smbtn = document.querySelector(".sm-btn");
let userissuedesktopset = document.querySelector("#userissuedesktopset");
let desktopsetdetails = document.querySelector("#desktopsetdetails");
let userissuecpu = document.querySelector("#userissuecpu");
let cpudetails = document.querySelector("#cpudetails");
let userissuelcd = document.querySelector("#userissuelcd");
let lcddetails = document.querySelector("#lcddetails");
let userissuekeybord = document.querySelector("#userissuekeybord");
let userissuemouse = document.querySelector("#userissuemouse");
let keyboardyes = document.querySelector("#keyboardyes");
let keyboardserialno = document.querySelector(".keyboardserialno");




//todo -->    show menu 

openSidebarMenu.addEventListener('click', function () {
    sidebar.classList.toggle('d-block')
})

//todo -->     Show Searchbar 

showSearch.addEventListener('click', function () {
    searchDiv.classList.toggle('d-block')
})
// aa.addEventListener('click', function () {
    //    console.log("true");
    // })
    
    
    //todo -->     Remove Classes 
    
    document.onclick = function (e) {
    // if (e.target !== openSidebarMenu && e.target !== showSearch ) {
    //     sidebar.classList.remove('d-block');
    // }
    if (e.target !== openSidebarMenu && e.target !== showSearch && e.target !== searchInput) {
        searchDiv.classList.remove('d-block');
    }

}


//todo-->  add-user Item Issue 
issueitemyes.addEventListener('click', function () {
    issueitems.classList.add('show')
})
issueitemno.addEventListener('click', function () {
    issueitems.classList.remove('show')
})



userissuedesktopset.addEventListener('click', function () {
    desktopsetdetails.classList.toggle('show-flex');
    
})
userissuecpu.addEventListener('click', function () {
    cpudetails.classList.toggle('show-flex')
})
userissuelcd.addEventListener('click', function () {
    lcddetails.classList.toggle('show-flex')
})
keyboardyes.addEventListener('click', function () {
    keyboardserialno.classList.add('show')
})


