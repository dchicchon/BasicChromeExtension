
function setBackground() {
    chrome.storage.local.get('image', (res) => {

        if (res.image) {
            let htmlPage = document.getElementsByTagName('html')
            htmlPage[0].style.background = `url(${res.image})`
        }
    })
}
setBackground()