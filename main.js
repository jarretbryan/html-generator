document.addEventListener('DOMContentLoaded', () => {

    
    console.log('connected')
    const theInput = document.getElementById('theinput')
    const theButton = document.getElementById('thebutton')
    const theLink = document.getElementById('thelink')



    const makeBlob = (string) => {
        let blob = new Blob([string], { type: "text/plain;charset=utf-8" });
        let file = new File([blob], "document.html", {
            type: "text/plain",
        });
        return file
    }

    theButton.addEventListener('click', () => {
        console.log(theInput.value)
        let myBlob = makeBlob(theInput.value)

        let downloadFile = window.URL.createObjectURL(myBlob)
        theLink.href = downloadFile

    })

})