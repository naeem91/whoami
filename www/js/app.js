angular.module('whoami', ['ionic'])

.controller('ObjectsControl', function($scope, $ionicModal){ 
    $scope.objects = [
        {name: 'Cow'},
        {name: 'Cat'}
    ];

    $ionicModal.fromTemplateUrl('new-object.html', function(modal){
            $scope.taskModal = modal;
        }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $scope.createObject = function(thing) {
        $scope.objects.push({
            name: thing.name
        });

        $scope.taskModal.hide();
        thing.name = "";
    };

    $scope.newObject = function() {
        $scope.taskModal.show();
    };

    $scope.closeNewObject = function() {
        $scope.taskModal.hide();
    };
});
