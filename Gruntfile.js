module.exports = function(grunt) {
  grunt.initConfig({
    dir:{
      webapp: 'OfflineTest' // App Name
    },
    clean: {
      preload: ["Component-preload.js"]
    },
    openui5_preload: {
      component: {
      options: {
        compress: false,
        resources: {
           cwd: "webapp", 
           prefix: "com/offline/test/service/worker/ServiceWorkerExample",
           src: [
             "Component.js",
             "**/*.js",
             "**/*.fragment.xml",
             "**/*.view.xml",
             "**/*.properties",
			 "manifest.json",
             "!Component-preload.js",
             "!test/**"
           ]
 	   },
 	   dest: "webapp"
       },
 components: "com/offline/test/service/worker/ServiceWorkerExample"
     }
   }
  });
    
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-openui5");
    
  grunt.registerTask('build', ['clean', 'openui5_preload']);
  grunt.registerTask('default', ['build']);
};
