'use strict';

describe('myApp.user_detail module', function() {

  beforeEach(module('myApp.user_detail'));

  describe('user_detail controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var userDetailCtrl = $controller('UserDetailCtrl');
      expect(userDetailCtrl).toBeDefined();
    }));

  });
});