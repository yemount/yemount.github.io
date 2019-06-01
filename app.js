const navCategories = ['All', 'Generative art', 'Product design', 'Visual art', 'Digital fabrication', 'Game dev', 'Technical art'];
const About = { template: '#about-template' };
const Experiments = {
  template: '#experiments-template',
  computed: {
    experiments: () => allExperiments,
  },
};
const Projects = {
  template: '#projects-template',
  props: ['category'],
  computed: {
    projects: function () {
      if (!this.category || this.category === 'All') {
        return allProjects;
      } else {
        return allProjects.filter(proj => (proj.categories || []).includes(this.category));
      }
    }
  }
};
const ProjectDetails = {
  template: '#project-details-template',
  props: ['id'],
  computed: {
    project: function () {
      return allProjects.find(proj => proj.id === this.id);
    },
  }
}
const routes = [
  {
    path: '/', component: Projects, props: {
      projects: allProjects,
    }
  },
  { path: '/about', component: About },
  {
    path: '/projects', component: Projects, props: {
      projects: allProjects,
    }
  },
  {
    path: '/experiments', component: Experiments, props: {
      experiments: allExperiments,
    },
  },
  {
    path: '/projects/:category', component: Projects, props: true,
  },
  {
    path: '/project-details/:id', component: ProjectDetails, props: true
  },
];
const router = new VueRouter({
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (to && to.path && to.path.startsWith('/project-details')) {
      return { x: 0, y: 0 };
    }
    return savedPosition;
  }
});

Vue.component('left-navbar', {
  template: '#left-navbar-template',
  props: ['projects', 'activecategory'],
  computed: {
    categories: function () {
      let categories = { 'All': allProjects.length };
      allProjects.forEach(proj => (proj.categories || []).forEach(cat => {
        if (!categories[cat]) {
          categories[cat] = 1;
        } else {
          categories[cat]++;
        }
      }));
      return Object.keys(categories).filter(key => {
        return navCategories.includes(key) || this.activecategory === key;
      }).map(key => ({
        category: key,
        count: categories[key],
        isActive: key === this.activecategory,
      })).sort((cat1, cat2) => {
        return cat2.count - cat1.count;
      });
    }
  }
});

window.onload = () => {
  new Vue({
    el: '#app',
    router: router,
    data: {
      projects: allProjects,
      selectedProject: null,
    },
    methods: {
      filterProjects: function (tag) {
        this.toggleContent('projects');
        if (!tag) {
          this.projects = allProjects;
          return;
        }
        this.projects = allProjects.filter(proj => proj.categories && proj.categories.includes(tag));
      },
      showProject: function (project) {
        this.toggleContent('project-details');
        this.selectedProject = project;
      }
    }
  });
}
