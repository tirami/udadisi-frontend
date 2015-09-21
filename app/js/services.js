'use strict';

/* Services */
var udadisiServices = angular.module('udadisiServices', ['ngResource']);

udadisiServices.factory('Trends', ['$resource','$log',
  function($resource, $log){
    //http://localhost:8080/v1/trends/samplelocation?limit=10&from=20150826&interval=3
    return $resource('http://localhost:8080/v1/trends/:location', {}, {
      query: {method:'GET', params:{limit:10, from: "20150821", interval: 3}, isArray:true}
    });
  }]);

/*
var d3Services = angular.module('d3Services', []);

d3Services.factory('d3', ['$document', '$q', '$rootScope',
    function($document, $q, $rootScope) {
      var d = $q.defer();
      function onScriptLoad() {
        // Load client in the browser
        $rootScope.$apply(function() { d.resolve(window.d3); });
      }
      // Create a script tag with d3 as the source
      // and call our onScriptLoad callback when it
      // has been loaded
      var scriptTag = $document[0].createElement('script');
      scriptTag.type = 'text/javascript'; 
      scriptTag.async = true;
      scriptTag.src = 'bower_components/d3/d3.js';
      scriptTag.onreadystatechange = function () {
        if (this.readyState == 'complete') onScriptLoad();
      }
      scriptTag.onload = onScriptLoad;

      var s = $document[0].getElementsByTagName('body')[0];
      s.appendChild(scriptTag);

      return {
        d3: function() { return d.promise; }
      };
}]); */