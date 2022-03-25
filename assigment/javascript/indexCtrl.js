app.controller('subjectsCtrl',function($scope,$http){
    $scope.list_subject=[];
    
    $http.get('/db/Subjects.js').then(function(res){
        $scope.list_subject=res.data;
        console.log( $scope.list_subject.length)
        $scope.cout = 0;
        $scope.pageCount = Math.ceil($scope.list_subject.length/4);
        console.log($scope.pageCount)
        $scope.prev = function() {
            if ($scope.cout > 0) {
                $scope.cout -= 4;
            }
        }
        $scope.next = function() {
            if ($scope.cout < ($scope.pageCount - 1) * 4) {
                $scope.cout += 4;
            }
        }
    })
})