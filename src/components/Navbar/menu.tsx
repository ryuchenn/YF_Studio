
export const MENU_ITEMS = [
    {
      title: "Home",
      route: "/",
    },
    {
        title: "Studio",
        route: "/studio",
        subItems: [
          { title: "Studio A", route: "/studio/photoA" },
          { title: "Studio B", route: "/studio/photoB" },
        ],
    },
    {
        title: "Portfolio",
        route: "/portfolio",
        subItems: [
            { title: "Photography", route: "/portfolio/photography" },
            { title: "Videography", route: "/portfolio/videography" },
        ],
    },
    {
        title: "Event",
        route: "/event",
    },
    // {
    //     title: "About",
    //     route: "/about",
    // },
    {
        title: "Book",
        route: "/book",
    },
    {
        title: "Contact",
        route: "/contact",
    },
]
