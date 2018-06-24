/*set up serviceWorker*/
if('serviceWorker' in navigator) {
	navigator.serviceWorker
	.register('/sw.js')
	.then(reg => {
		console.log("Service worker registration successful" + reg.scope);
	})
	.catch(error => {
		console.log("Registration failed" + error);
	});
}

/*
//add service worker 
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../sw.js')
  .then(reg => {
    //registration worker
    if(reg.installing) {
      console.log('Service worker installing');
    } else if (reg.waiting) {
      console.log('Service worker installed');
    } else if (reg.active) {
      console.log('Service worker active');
    }

    console.log('Registration succeeded, Scope is ' + reg.scope);
  }).catch(error => {
    //registration failed
    console.log('Registration failed with ' + error);
  });


}*/
