let projectsInfo = document.querySelectorAll(".projects__content");

projectsInfo.forEach(project => {
    project.addEventListener ('mousedown', function(event) {
        event.stopPropagation();
        let projectsDetails = document.createElement('div');
        //this div will contain details for project
        project.appendChild(projectsDetails);
    })
})

//projectsInfo.addEventListener('onclick',console.log('test'));
//projectsInfo.onclick = function() {console.log('test')};
