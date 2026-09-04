
 const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
          ];



for (const robot of robots) {
    const div = document.createElement("div");
    
    const image = document.createElement("img");
      div.innerText = `${robot.name} - ${robot.email}`;
    const container = document.querySelector("#robot-grid")
    container.appendChild(div);
    image.src = robot.image
    image.alt = robot.name
    div.append(image)
    div.classList.add("robot-card");
    ///this is finally!
    // div.name = robot.name.toLowerCase();
    div.dataset = robot.name.toLowerCase();
    
    
    
}


const searchBox = document.querySelector("#search-box");
const cards = document.querySelectorAll(".robot-card");

searchBox.addEventListener("change", (e) => {
    const searchText = e.target.value.toLowerCase();
    robots.filter(robot => robot.name.includes("searchText"))
});

 const robotsarray = Object.fromEntries(robots);
   for (const robot of robots)
    robotsarray.forEach(i => {
        const matches = robot.name.includes(searchText);

        if (matches) {
            i.classList.remove("hidden");
        } else {
            i.classList.add("hidden");
        }
    });

  