const favoritesKey = "favorites"
const members = [
  {
    id: 1,
    name: "Руслан",
    lastName: "Сколотий",
    birthDay: "10.05.1986",
    about:
      "Занимаюсь программированием уже давно, но в js погрузился совсем недавно. Регулярно занимаюсь спортом. Люблю путешествовать и наблюдать закаты",
    photo: "https://avatars.githubusercontent.com/u/77191756?s=400&u=45b6ebe7bc9db1f08aa3ac1e8632dd27f73c8350&v=4",
    social: [
      { name: "Instagram", url: "https://www.instagram.com/dpruslan/" },
      { name: "Vk", url: "https://vk.com/dp_master" },
    ],
    whatDidInThisProject:
      "Тимлид, архитектура проекта, роутинг, хлебные крошки, главная страница, избранные, карта, кастомный хук",
    technologies: [
      {
        name: "HTML",
        percent: 100,
      },
      {
        name: "JS",
        percent: 100,
        color: "danger",
      },
      {
        name: "ReactJs",
        percent: 90,
        color: "warning",
      },
      {
        name: "VueJs",
        percent: 40,
        color: "info",
      },
    ],
    tags: [
      {
        label: "TeamLead",
        color: "danger",
      },
    ],
    portfolio: ["url1", "url2"],
    favorite: false,
    location: "Белгород",
  },
  {
    id: 2,
    name: "Ольга",
    lastName: "Рунова",
    birthDay: "01.01.1988",
    about:
      "Активно изучаю JS и все, что связано с веб-разработкой. Участвую во всевозможных проектах. Люблю книги, писать код и кофе",
    photo: "https://avatars.githubusercontent.com/u/50372965?v=4",
    social: [{ name: "gitHub", url: "https://github.com/nionka" }],
    whatDidInThisProject: "Карточка участника, Button",
    technologies: [
      {
        name: "HTML",
        percent: 70,
      },
      {
        name: "CSS",
        percent: 60,
        color: "danger",
      },
      {
        name: "JS",
        percent: 50,
        color: "warning",
      },
      {
        name: "TS",
        percent: 10,
        color: "info",
      },
      {
        name: "ReactJs",
        percent: 60,
        color: "secondary",
      },
    ],
    tags: [
      {
        label: "HTML",
      },
      {
        label: "CSS",
      },
      {
        label: "JavaScript",
      },
      {
        label: "Scss",
      },
      {
        label: "ReactJS",
      },
      {
        label: "Redux",
      },
      {
        label: "Webpack",
      },
      {
        label: "Git",
      },
    ],
    portfolio: ["url1", "url2"],
    favorite: false,
    location: "Александров, Владимирская область",
  },
  {
    id: 3,
    name: "Виталий",
    lastName: "Компаниец",
    birthDay: "02.12.1986",
    about:
      "Мне 34 года. На данный момент работаю врачом-офтальмологом в Санкт-Петербурге. Планирую кардинально поменять сферу деятельности - заниматься web-разработкой. Уже прошёл курсы по вёрстке (HTML5, CSS3, JS, частично jQuery). На данный момент в процессе изучения React JS.",
    photo: "https://avatars.githubusercontent.com/u/59345404?v=4",
    social: [
      { name: "Telegram", url: "https://t.me/VitalKom" },
      { name: "Vk", url: "https://vk.com/and_1" },
    ],
    whatDidInThisProject: "Navbar, Progress",
    technologies: [
      {
        name: "HTML",
        percent: 40,
      },
      {
        name: "JS",
        percent: 20,
        color: "danger",
      },
      {
        name: "CSS",
        percent: 30,
        color: "warning",
      },
      {
        name: "jQuery",
        percent: 10,
        color: "info",
      },
    ],
    tags: [{ label: "Врач-офтальмолог" }, { label: "Санкт-Петербург" }],
    portfolio: ["url1", "url2"],
    favorite: false,
    location: "Санкт-Петербург",
  },
  {
    id: 4,
    name: "Александр",
    lastName: "Ермолаев",
    birthDay: "02.02.1983",
    about: "О себе: 37 лет на данны момент работаю преподавателем в Кванториуме по направлению IT и VR.",
    photo: "https://avatars.githubusercontent.com/u/62185823?v=4",
    social: [],
    whatDidInThisProject: "Badge, Slider",
    technologies: [
      {
        name: "HTML",
        percent: 50,
      },
      {
        name: "CSS",
        percent: 50,
        color: "danger",
      },
      {
        name: "CSS",
        percent: 40,
        color: "info",
      },
      {
        name: "ReactJs",
        percent: 10,
        color: "warning",
      },
    ],
    tags: [{ label: "JS" }],
    portfolio: ["url1", "url2"],
    favorite: false,
    location: "Армавир",
  },
]

export function getMembers() {
  let favoriteMembers = JSON.parse(localStorage.getItem(favoritesKey)) || []
  return members.map((member) => {
    member.favorite = favoriteMembers.includes(member.id)
    return member
  })
}

export function getMember(id) {
  let favoriteMembers = JSON.parse(localStorage.getItem(favoritesKey)) || []
  const member = members.find((member) => member.id === Number(id))
  if (member) {
    member.favorite = favoriteMembers.includes(member.id)
    return member
  }
  return false
}

export function toggleFavorite(id) {
  let favoriteMembers = JSON.parse(localStorage.getItem(favoritesKey)) || []
  if (favoriteMembers.includes(id)) {
    favoriteMembers = favoriteMembers.filter((_id) => _id !== id)
  } else {
    favoriteMembers.push(id)
  }
  localStorage.setItem(favoritesKey, JSON.stringify(favoriteMembers))
  return favoriteMembers
}

export function getFavoriteMembers() {
  const favoriteMembers = JSON.parse(localStorage.getItem(favoritesKey)) || []
  return members
    .filter((member) => favoriteMembers.includes(member.id))
    .map((member) => {
      member.favorite = favoriteMembers.includes(member.id)
      return member
    })
}
