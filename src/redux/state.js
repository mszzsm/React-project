let state =  {

    navbarLinks: [
        { name: 'Profile', link: 'profile' },
        { name: 'Chat', link: 'dialogs' },
        { name: 'News', link: 'news' },
        { name: 'Music', link: 'music' },
        { name: 'Settings', link: 'settings' },
    ], 

    dialogItems: [
        { user: "Michał Sztefanica", status: "", id: "1", msg: "Witam od Michała" },
        { user: "Michał Sztefanica", status: "", id: "2", msg: "Witam od Daniela" },
    ],

    msgData: [
        { id: '1', user: 'User1', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto molestias modi alias dolorem', likes: 22 },
        { id: '2', user: 'User2', msg: 'quaerat reprehenderit porro. Facilis veniam delectus inventore itaque nemo reiciendis reprehenderit ve', likes: 12 },
    ]
}

export default state