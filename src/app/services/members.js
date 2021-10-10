const favoritesKey = "favorites"
const members = [
  {
    id: 1,
    name: "Руслан",
    lastName: "Сколотий",
    birthDay: "10.05.1986",
    about:
      "Занимаюсь программированием уже давно, но в js погрузился совсем недавно. Регулярно занимаюсь спортом. Люблю путешествовать и наблюдать закаты",
    photo: "https://pressa.tv/uploads/posts/2019-06/1559622108_pressa_tv_2.jpg",
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
    photo:
      "https://images.unsplash.com/photo-1482745637430-91c0bbcea3e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    social: [{ name: "Хабр карьера", url: "https://career.habr.com/nionka" }],
    whatDidInThisProject: "Карточка участника, Button",
    technologies: [
      {
        name: "HTML",
        percent: 100,
      },
      {
        name: "JS",
        percent: 100,
      },
      {
        name: "ReactJs",
        percent: 80,
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
    whatDidInThisProject: "",
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
    tags: [],
    portfolio: ["url1", "url2"],
    favorite: false,
    location: "Санкт-Петербург",
  },
  {
    id: 4,
    name: "Александр",
    lastName: "Ермолаев",
    birthDay: "02.02.1986",
    about: "about",
    photo:
      "https://1gew6o3qn6vx9kp3s42ge0y1-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/171/2021/05/MSRTools_1200x630-1-1024x538.jpg",
    social: [],
    whatDidInThisProject: "",
    technologies: [
      {
        name: "HTML",
        percent: 100,
      },
      {
        name: "JS",
        percent: 100,
      },
      {
        name: "ReactJs",
        percent: 80,
      },
    ],
    tags: [],
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
