// var projectsDiv;
// var defaultDiv;
// var contentDivs;

// function hide(el) {
//   el.classList.add('hidden');
// }

// function show(el) {
//   el.classList.remove('hidden');
// }

// function showOnly(el) {
//   contentDivs.forEach(div => div !== el ? hide(div) : show(div));
// }

// function showProjects() {
//   showOnly(projectsDiv);
// }

// function filterProjects(tag) {
//   for (let i = 0; i < projectDivs.length; i++) {
//     let div = projectDivs[i];
//     (!tag || div.classList.contains(tag)) ? show(div) : hide(div);
//   }
// }

// function showDefault() {
//   showOnly(defaultDiv);
// }

let showContent = {
  'default': true,
};

window.onload = () => {
  let app = new Vue({
    el: '#app',
    data: {
      showContent: showContent,
    },
    methods: {
      toggleContent: (tag) => {
        Object.keys(showContent).forEach(tag => showContent[tag] = false);
        showContent[tag] = true;
      },
    }
  });

  //   projectsDiv = document.getElementById('content-projects');
  //   defaultDiv = document.getElementById('content-default');
  //   contentDivs = [projectsDiv, defaultDiv];
  //   projectDivs = document.getElementsByClassName('project-card');
}
