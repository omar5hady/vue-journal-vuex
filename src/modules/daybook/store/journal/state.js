export default () => ({
    isLoading : true, 
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            picture: null, //https://
        },
        {
            id: new Date().getTime()+1000,
            date: new Date().toDateString(),
            text: 'Datataddd ipsum dolor sit am dfadfsadf fadsfet consectetur adipisicing elit.',
            picture: null, //https://
        },
        {
            id: new Date().getTime()+2000,
            date: new Date().toDateString(),
            text: 'Proident excepteur anim laboris labore anim velit esse anim duis nisi adipisicing.',
            picture: null, //https://
        }
    ]
})