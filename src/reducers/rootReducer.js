const initState = {
    posts: [
        { id: 1, title: 'This is a post', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui excepturi, iste, quasi reiciendis provident suscipit magni cumque veritatis minus ipsum sit? Iusto earum dicta perspiciatis autem non ipsa, quia eaque.' },
        { id: 2, title: 'This is another post', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus blanditiis excepturi at, voluptatum fugit harum maxime porro repellat eos, labore, eius corporis sint ducimus! Nam sint animi culpa doloremque magnam.' },
        { id: 3, title: 'Test post', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptas laborum nostrum? Consectetur beatae, ipsum ratione perferendis iste impedit voluptas sapiente explicabo ducimus repellat illo ea nemo eos, repudiandae reprehenderit?' },
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;
