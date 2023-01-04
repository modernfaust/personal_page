let projectsInfo = document.querySelectorAll(".projects__content");

projectsInfo.forEach(project => {
    project.addEventListener ('mousedown', function() {
        console.log('test');
    })
})

//projectsInfo.addEventListener('onclick',console.log('test'));
//projectsInfo.onclick = function() {console.log('test')};
