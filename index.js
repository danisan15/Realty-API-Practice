fetch('https://jsonplaceholder.typicode.com/photos')
	.then(response => data = response.json())
  .then(response => console.log(response))
	.catch(err => console.error(err));

  let data = 0;
  