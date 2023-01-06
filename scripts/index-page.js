let projectsInfo = document.querySelectorAll(".projects__content");

projectsInfo.forEach(project => {
    project.addEventListener ('mousedown', function(event) {
        event.stopPropagation();
        let projectsDetails = document.createElement('div');
        //this div will contain details for project
        projectsDetails.innerHTML = 'Testing information. Does this render correct?';
        projectsDetails.classList.add('projects__details');
        project.appendChild(projectsDetails);
    })
})

//projectsInfo.addEventListener('onclick',console.log('test'));
//projectsInfo.onclick = function() {console.log('test')};
