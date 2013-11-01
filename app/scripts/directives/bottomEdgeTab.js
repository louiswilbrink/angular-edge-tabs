'use strict';

angular.module('tabMenuApp')
  .directive('bottomEdgeTab', function () {
    return {
      templateUrl: 'views/bottomEdgeTab.html',
      restrict: 'E',
      link: function preLink(scope, element, attrs) {
        element.style = {
          left: '200px'
        };

        console.log(element);
      },
      controller: function ($scope) {

      }
    };
  });
