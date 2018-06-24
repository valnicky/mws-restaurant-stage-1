let cacheID = "mws-restaurant-001";
let urlToCache = [
				  '/',
				  '/index.html',
				  '/restaurant.html',
				  '/css/styles.css',
				  '/data/restaurants.json',
				  '/img/1.jpg',
				  '/img/2.jpg',
				  '/img/3.jpg',
				  '/img/4.jpg',
				  '/img/5.jpg',
				  '/img/6.jpg',
				  '/img/7.jpg',
				  '/img/8.jpg',
				  '/img/9.jpg',
				  '/js/',
				  '/js/dbhelper.js',
				  '/js/main.js',
				  '/js/restaurant_info.js',
				  '/img/na.png',
				  '/js/register.js'
				];


self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(cacheID).then(cache => {
			console.log(cache);
			return cache.addAll(urlToCache);
		
		}).catch(error => {
				console.log('Caches open failed: '+ error);
			})
	);	
});

self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys().then(cacheNames => {
		Promise.all(
			cacheName.filter(cacheName => {
				cacheName.startsWith('mws-restaurant-') &&
				 cacheName != staticCacheName;
			}).map(cacheName => {
				caches.delete(cacheName);
				})
			);
		})
	);
});		


self.addEventListener('fetch', event => {
	/*let cacheRequest = event.request;
	let cacheUrlObj = new Url(event.request.url);
	if(event.request.url.indexOf('restaurant.html') < -1 ) {
		const cacheURL = 'restaurant.html';
		cacheRequest = new Request(cacheURL);
	}

	if(cacheUrlObj.hostname !== 'localhost') {
		cacheRequest.mode ="no-cors";
	}*/

event.respondWith(
	caches.match(event.request).then(response =>
	{
		return (
			response ||
			fetch(event.request)

			/*.then(fetchResponse =>
			{
				return caches.open(cacheID).then(cache =>
				{
					cache.put(event.request.fetchResponse.clone());
					return fetchResponse;
				});
			})
			.catch(error =>
				{
					if (event.request.url.indexOf('.jpg') < -1)
					{
						return caches.match('/img/na.png');
					}
					return new Response('Application is not connected to the internet',
						{
							status: 404,
						statusText: 'Application is not connected to the internet'
					});*/
				)})
		);
});

