'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /user when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/user");
  });


  describe('user', function() {

    beforeEach(function() {
      browser.get('index.html#!/user');
    });


    it('should render view1 when user navigates to /user', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for user/);
    });

  });


  describe('user_detail', function() {

    beforeEach(function() {
      browser.get('index.html#!/user_detail');
    });


    it('should render user_detail when user navigates to /user_detail', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for user_detail/);
    });

  });
});
