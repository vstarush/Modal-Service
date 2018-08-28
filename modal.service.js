(function() {
	'use strict';
	
	angular.module('appName')
	.service('modalService', function($uibModal) {
		return {
			popupModal: function(modalMessageObject) {
			    $uibModal.open({
			      templateUrl: 'app/popup/popup.html',
			      controller: 'testModalCtrl',
			      backdrop: 'static',
				  keyboard: false,
			      resolve: {
				    popupMessage: function() {
					    return modalMessageObject;
				    }
			      }
			    });   
		    },
            welcomeJobSeeker: function() {
                $uibModal.open({
                    templateUrl:'app/popup/welcomeJobSeeker.html',
                    controller: 'WelcomePopUpController',
                    backdrop: 'static',
                    keyboard: false
                });
            },
            welcomeRecruiter: function() {
                $uibModal.open({
                    templateUrl:'app/popup/welcomeRecruiter.html',
                    controller: 'WelcomePopUpController',
                    backdrop: 'static',
                    keyboard: false
                });
            }
		};
	})
    .controller('welcomeModalController',function($scope, $rootScope, $uibModalInstance) {
        $scope.btnClickOK = function() {
            $rootScope.firstLoginType = null;
            $uibModalInstance.close();
        }
    })
	.controller('modalController',['$scope','$uibModalInstance','popupMessage',function($scope, $uibModalInstance, popupMessage) {
		$scope.config = {
			header:'',
			body:'',
			btnOneName:'',
			btnTwoName:'',
			btnOneClick:'function',
			btnTwoClick:'function'
		}

		$scope.config.header = popupMessage.header;
		$scope.config.body = popupMessage.body;
		$scope.config.btnOneName = popupMessage.btnOneName;

		
		if (popupMessage.btnTwoName === undefined) {
			$scope.secondButton = false;
		}
		else {
			$scope.secondButton = true;
			$scope.config.btnTwoName = popupMessage.btnTwoName;
		}
		
		$scope.btnOneClick = function() {
			if(typeof popupMessage.btnOneClick === 'function') {
				popupMessage.btnOneClick();
			}

			$uibModalInstance.close();
		}
		
		$scope.btnTwoClick = function() {
			if(typeof popupMessage.btnTwoClick === 'function') {
				popupMessage.btnTwoClick();
			}
			
			$uibModalInstance.close();
		}
	}])
})();






