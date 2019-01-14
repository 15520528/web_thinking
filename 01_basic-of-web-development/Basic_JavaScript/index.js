function handleFiles(files, callback) {
    document.getElementById("loading").style.display = "block";
    
    setTimeout(function(){
        for (let i = 0, numFiles = files.length; i < numFiles; i++) {
            const file = files[i];
    
            if (!file.type.startsWith('image/')){ continue }
    
            var img = document.createElement("img");
            img.classList.add("img");
            img.src = window.URL.createObjectURL(files[i]);
            
            var imageSlider = document.getElementById("image-slider");
            imageSlider.appendChild(img);
        }
        callback();
    } ,5000);
    
}

function doneLoading(){
    var element = document.getElementById("loading");
    element.style.display = "none";
}

function resetSlider(){
    var imageSlider = document.getElementById("image-slider");
    while (imageSlider.firstChild) {
        imageSlider.firstChild.remove();
    }
}