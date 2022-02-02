

const selectButton = document.getElementById('selectPhoto')

selectButton.onclick = selectPhoto

async function selectPhoto() {
    // this should activate file system manager
    const options = {
        types: [
            {
                accept: {
                    'image/*': ['.png', '.gif', '.jpeg', '.jpg']
                }
            }
        ],
        multiple: false
    }

    const [fileHandle] = await window.showOpenFilePicker(options);
    console.log(fileHandle)
    const file = await fileHandle.getFile();
    console.log(file)
    const reader = new FileReader();
    reader.onload = () => {
        
        chrome.storage.local.set({ 'image': reader.result })

    }

    reader.readAsDataURL(file)


}
