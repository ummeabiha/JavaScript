/*
properties and methods are similar to local storage.
Session storage exists in current browser tab only.
if we change the tabs, the session storage will be cleared. 

The data survives the page refresh, but not closing/opening the tab.

STORAGE EVENT
When the data is updated in local or session storage, storage event must be triggered with the following properties:
1- key
2- old value
3- new value
4- url
5- storageArea
*/

// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name", "harry")
// sessionStorage.removeItem("name")


window.onstorage = (e) => {
        alert("changed")
        console.log(e)
}

