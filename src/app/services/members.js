const favoritesKey = "favorites"
const members = [
  {
    id: 1,
    name: "Руслан",
    lastName: "Сколотий",
    about: "about",
    photo: "url",
    social: "text",
    whatDidInThisProject: "Тимлид, архитектура проекта, роутинг, хлебные крошки, главная страница, избранные",
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
    about: "about",
    photo: "url",
    social: "text",
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
    tags: [
      {
        label: "ReadMe",
        color: "success",
      },
    ],
    portfolio: ["url1", "url2"],
    favorite: false,
    location: "",
  },
  {
    id: 3,
    name: "Виталий",
    lastName: "Компаниец",
    about: "about",
    photo: "url",
    social: "text",
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
    location: "",
  },
  {
    id: 4,
    name: "Александр",
    lastName: "Ермолаев",
    about: "about",
    photo: "url",
    social: "text",
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
    location: "",
  },
]

export function getMembers() {
  let favoriteMembers = JSON.parse(localStorage.getItem(favoritesKey)) || []
  return members.map((member) => {
    member.favorite = favoriteMembers.includes(member.id)
    return member
  })
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
  return favoriteMembers.filter((member) => member.id)
}
