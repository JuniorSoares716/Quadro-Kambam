describe("Tar array",function(){
	var $scope;

	beforeEach(function(){
		angular.mock.module("myApp");

		angular.mock.inject(function($controller, $rootScope){
			$scope = $rootScope.$new();

			ctrl = $controller("myAppCtrl",{
				$scope : $scope
			});
		});
	});

	it('1. adicionado', function(){
		var atividade = {
			titulo: 'Testar telas',
			adicionado: false
		};

		$scope.adicionarAtividade(atividade); 
		expect($scope.atividades.length).toBe(3);
	});	

	it('2. Removendo', function(){
		var atividade = {
			titulo: 'Levantamento de Req.'
		};
		$scope.removerItem(atividade); 
		expect($scope.atividades.length).toBe(2);
	});	

})