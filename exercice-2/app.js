fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/users/2").then((response) =>
  console.log(response.status)
);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    let i = 0;
    setInterval(
      () => {
        if (i < 10) {
          console.log(json[i]);
        }
        i = ++i;
      },

      1000
    );
  });
