app.controller('questionCtrl',function($scope,$http){
$scope.tab1=function(){
    $scope.adavs=[];
    var editeApi;
    const api="https://621605707428a1d2a3581c4b.mockapi.io/apt/students/ADAV";
    $http.get(api)
    .then(function(response){
        $scope.adavs=response.data;
       console.log($scope.adavs)
    })
    $scope.onSubmitForm=function(event){
        console.log('vào onsumit')
        event.preventDefault();
        console.log($scope.adav1);
        $http.post(api,$scope.adav1).then(function(response){
            const sv=response.data;
            $scope.adavs.push(sv);
            console.log(response);
            $scope.clear();
            alert('thêm dữ liệu thành công!')
        });
    }
    $scope.clear=function(){
        $scope.adav={};
    }
   
    $scope.hienThi = function(Id){
         editeApi = api + '/' + Id;
        console.log(editeApi);
        $http.get(editeApi) // Gửi 1 request dạng GET tới API
        .then(function (response) {
            // Nhận dữ liệu trả về
            $scope.adav = response.data;
            // console.log($scope.ad);
            // console.log($scope.ad.Answers[0].Id)
        })
       
    }

    $scope.onEdit = function(){
        // const editeApi = api + '/' + id;
        console.log(editeApi);
        $http.put(editeApi,$scope.adav)
        .then(function (response) {
            console.log('vào onedit')
            console.log(response);
            const sv = $scope.adav;
            alert("Sửa thành công,vui lòng load lại trang")      
        });
    }


    $scope.onDelete = function (Id) {
        const deleteApi = api + '/' + Id;
        $http.delete(deleteApi)
            .then(function (response) {
                const sv=response.data;
                console.log("dữ liệu xoá"+response);
                $scope.adavs.splice(sv.id,1);
                alert('xoá thành công!');  
            });
    }
}

$scope.tab2=function(){
    $scope.adbss=[];
    var editeApi;
    const api="https://621605707428a1d2a3581c4b.mockapi.io/apt/students/ADBS";
    $http.get(api)
    .then(function(response){
        $scope.adbss=response.data;
    })
    $scope.onSubmitForm=function(event){
        console.log('vào onsumit')
        event.preventDefault();
        console.log($scope.adbs1);
        $http.post(api,$scope.adbs1).then(function(response){
            const sv=response.data;
            $scope.adbss.push(sv);
            console.log(response);
            alert('thêm dữ liệu thành công!')
        });
    }
   
    $scope.hienThi = function(Id){
        editeApi = api + '/' + Id;
        console.log(editeApi);
        $http.get(editeApi) // Gửi 1 request dạng GET tới API
        .then(function (response) {
            // Nhận dữ liệu trả về
            $scope.adbs = response.data;
            // console.log($scope.ad);
            // console.log($scope.ad.Answers[0].Id)
        })
       
    }

    $scope.onEdit = function(Id){
        // const editeApi = api + '/' + Id;
        console.log(editeApi);
        $http.put(editeApi,$scope.adbs)
        .then(function (response) {
            console.log('vào onedit')
            console.log(response);
            const sv = $scope.adbs;
            alert("Sửa thành công,vui lòng load lại trang")      
        });
    }


    $scope.onDelete = function (Id) {
        const deleteApi = api + '/' + Id;
        $http.delete(deleteApi)
            .then(function (response) {
                const sv=response.data;
                console.log("dữ liệu xoá"+response);
                $scope.adbss.splice(sv.id,1);
                alert('xoá thành công!');  
            });
    }
}

$scope.tab3=function(){
    $scope.adtes=[];
    var editeApi;
    const api="https://6220714bce99a7de19599eb3.mockapi.io/ADTE";
    $http.get(api)
    .then(function(response){
        $scope.adtes=response.data;
    })
    $scope.onSubmitForm=function(event){
        console.log('vào onsumit')
        event.preventDefault();
        console.log($scope.adte1);
        $http.post(api,$scope.adte1).then(function(response){
            const sv=response.data;
            $scope.adtes.push(sv);
            console.log(response);
            alert('thêm dữ liệu thành công!')
        });
    }
   
    $scope.hienThi = function(Id){
        editeApi = api + '/' + Id;
        console.log(editeApi);
        $http.get(editeApi) // Gửi 1 request dạng GET tới API
        .then(function (response) {
            // Nhận dữ liệu trả về
            $scope.adte = response.data;
            // console.log($scope.ad);
            // console.log($scope.ad.Answers[0].Id)
        })
       
    }

    $scope.onEdit = function(Id){
        // const editeApi = api + '/' + Id;
        console.log(editeApi);
        $http.put(editeApi,$scope.adte)
        .then(function (response) {
            console.log('vào onedit')
            console.log(response);
            const sv = $scope.adte;
            alert("Sửa thành công,vui lòng load lại trang")      
        });
    }


    $scope.onDelete = function (Id) {
        const deleteApi = api + '/' + Id;
        $http.delete(deleteApi)
            .then(function (response) {
                const sv=response.data;
                console.log("dữ liệu xoá"+response);
                $scope.adtes.splice(sv.id,1);
                alert('xoá thành công!');  
            });
    }
}


$scope.tab4=function(){
    $scope.aduis=[];
    var editeApi;
    const api="https://6220714bce99a7de19599eb3.mockapi.io/ADUI";
    $http.get(api)
    .then(function(response){
        $scope.aduis=response.data;
    })
    $scope.onSubmitForm=function(event){
        console.log('vào onsumit')
        event.preventDefault();
        console.log($scope.adui1);
        $http.post(api,$scope.adui1).then(function(response){
            const sv=response.data;
            $scope.aduis.push(sv);
            console.log(response);
            alert('thêm dữ liệu thành công!')
        });
    }
   
    $scope.hienThi = function(Id){
        editeApi = api + '/' + Id;
        console.log(editeApi);
        $http.get(editeApi) // Gửi 1 request dạng GET tới API
        .then(function (response) {
            // Nhận dữ liệu trả về
            $scope.adui = response.data;
            // console.log($scope.ad);
            // console.log($scope.ad.Answers[0].Id)
        })
       
    }

    $scope.onEdit = function(){
        // const editeApi = api + '/' + Id;
        console.log(editeApi);
        $http.put(editeApi,$scope.adui)
        .then(function (response) {
            console.log('vào onedit')
            console.log(response);
            const sv = $scope.adte;
            alert("Sửa thành công,vui lòng load lại trang")      
        });
    }


    $scope.onDelete = function (Id) {
        const deleteApi = api + '/' + Id;
        $http.delete(deleteApi)
            .then(function (response) {
                const sv=response.data;
                console.log("dữ liệu xoá"+response);
                $scope.aduis.splice(sv.id,1);
                alert('xoá thành công!');  
            });
    }
}


$scope.tab5=function(){
    $scope.asnes=[];
    var editeApi;
    const api="https://6220714bce99a7de19599eb3.mockapi.io/ASNE";
    $http.get(api)
    .then(function(response){
        $scope.asnes=response.data;
    })
    $scope.onSubmitForm=function(event){
        console.log('vào onsumit')
        event.preventDefault();
        console.log($scope.asne1);
        $http.post(api,$scope.asne1).then(function(response){
            const sv=response.data;
            $scope.asnes.push(sv);
            console.log(response);
            alert('thêm dữ liệu thành công!')
        });
    }
   
    $scope.hienThi = function(Id){
        editeApi = api + '/' + Id;
        console.log(editeApi);
        $http.get(editeApi) // Gửi 1 request dạng GET tới API
        .then(function (response) {
            // Nhận dữ liệu trả về
            $scope.asne = response.data;
            // console.log($scope.ad);
            // console.log($scope.ad.Answers[0].Id)
        })
       
    }

    $scope.onEdit = function(Id){
        // const editeApi = api + '/' + Id;
        console.log(editeApi);
        $http.put(editeApi,$scope.asne)
        .then(function (response) {
            console.log('vào onedit')
            console.log(response);
            const sv = $scope.asne;
            alert("Sửa thành công,vui lòng load lại trang")      
        });
    }


    $scope.onDelete = function (Id) {
        const deleteApi = api + '/' + Id;
        $http.delete(deleteApi)
            .then(function (response) {
                const sv=response.data;
                console.log("dữ liệu xoá"+response);
                $scope.aduis.splice(sv.id,1);
                alert('xoá thành công!');  
            });
    }
}
   


});