var appShell = window.singleSpaAngularjs.default({
  angular: window.angular,
  domElementGetter: function () {
    // Note that we will need to add a div with this id to our index.html, we will do this in step four
    return document.getElementById('app-shell-container')
  },
  mainAngularModule: 'shell',
  uiRouter: false,
  preserveGlobal: true,
  // We will be building this template in step four
  template: '<shell-app />',
});

var appMain = window.singleSpaAngularjs.default({
  angular: window.angular,
  domElementGetter: function () {
    // Note that we will need to add a div with this id to our index.html, we will do this in step four
    return document.getElementById('app-main-container')
  },
  mainAngularModule: 'main',
  uiRouter: false,
  preserveGlobal: true,
  // We will be building this template in step four
  template: '<main-app />',
  mount: function() {
    console.log('app mounted');
  }
});

var helloWorldApp = {
  bootstrap: function() {
    return Promise.resolve()
  },
  mount: function() {
    return Promise.resolve().then(function() {
      alert('hello world')
    })
  },
  unmount: function() {
    return Promise.resolve()
  },
}

window.singleSpa.registerApplication('shell', appShell, function activityFunction(location) {
  return true;
});

window.singleSpa.registerApplication('main', appMain, function activityFunction(location) {
  // return location.hash.startsWith('#/');
  return location.pathname === '' || location.pathname === '/';
});
window.singleSpa.start();  