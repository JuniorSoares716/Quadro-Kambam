angular.module('myApptest', []);
		angular.module('myApptest').controller('myAppCtrl', function($scope) {

			$scope.atividades = [ ];

            $scope.adicionarAtividade = function(novaAtividade) {
                    atividade = {
                        'titulo': novaAtividade,
                        'situacao': 0
                    }
                    $scope.atividades.push(atividade);
                    $scope.novaAtividade = "";
                }

            $scope.FazerAtividade = function(){ 
                var check = document.getElementsByName("itemCheckAtiv"); 
                    for (var i=0;i<check.length;i++){ 
                            if (check[i].checked == true){
                                var item = document.getElementsByName("itemCheckAtiv")[i].value;
                                $scope.atividades.forEach(atividade => {
                                    if (atividade.titulo == item) {
                                        atividade.situacao = 1;
                                    }
                                });                               
                            }    
                    }          
            }
   
            $scope.FazendoAtividade = function(){ 
            var check = document.getElementsByName("itemCheckFazen"); 
                for (var i=0;i<check.length;i++){ 
                        if (check[i].checked == true){  
                            var item = document.getElementsByName("itemCheckFazen")[i].value;
                                $scope.atividades.forEach(atividade => {
                                    if (atividade.titulo == item) {
                                        atividade.situacao = 2;
                                    }
                                });
                        }    
                        
                }               
            }

            $scope.removerItem = function(titulo){
                var index = $scope.atividades.indexOf(titulo);

                if (index > -1) {
                    $scope.atividades.splice(index,1);
                }
            }

            // $scope.Feitos = [];
            // $scope.itemFeito; 
            // $scope.FeitaAtividade = function(){ 
            // var check = document.getElementsByName("itemCheckFeita"); 
            //     for (var i=0;i<check.length;i++){ 
            //             if (check[i].checked == true){  
                            
            //             }    
            //     }               
            // }
		});