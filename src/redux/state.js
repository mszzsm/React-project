const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const ADD_FRIEND = 'ADD-FRIEND'
const UPDATE_NEW_FRIEND_TEXT = 'UPDATE-NEW-FRIEND-TEXT'

    const store = {
        _state: {
            navBar: {
                navbarLinks: [
                    { name: 'Profile', link: 'profile' },
                    { name: 'Chat', link: 'dialogs' },
                    { name: 'News', link: 'news' },
                    { name: 'Music', link: 'music' },
                    { name: 'Settings', link: 'settings' },
                ],
 
            

                Friends: [
                    { id: 1, name: 'Daniel',    img: 'https://picsum.photos/id/10/50/50' },
                    { id: 2, name: 'Michał',    img: 'https://picsum.photos/id/20/50/50' },
                    { id: 3, name: 'Wojtek',    img: 'https://picsum.photos/id/30/50/50' },
                    { id: 4, name: 'Tomasz',    img: 'https://picsum.photos/id/40/50/50' },
                    { id: 5, name: 'Karolina',  img: 'https://picsum.photos/id/50/50/50' }
                ],
                friendText: 'asd',
            },

                dialogItems: [
                    { user: "Michał Sztefanica", status: "", id: "1", msg: "Witam od Michała" },
                    { user: "Michał Sztefanica", status: "", id: "2", msg: "Witam od Daniela" },
                ],

                ProfilePage: {
                    msgData:[
                        { id: '1', user: 'User1', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto molestias modi alias dolorem', likes: 22 },
                        { id: '2', user: 'User2', msg: 'quaerat reprehenderit porro. Facilis veniam delectus inventore itaque nemo reiciendis reprehenderit ve', likes: 12 },
                        { id: '3', user: 'User3', msg: 'quaerat reprehenderit porro. Facilis veniam delectus inventore itaque nemo reiciendis reprehenderit ve', likes: 12 },
                ], 

                postText:  'this is post text'
            },
        },

        _callSubsriber() {
            console.log('something changed')
        },

        getState(){
            return this._state;
        },

        getAddPost(){
            return this.AddPost
        },

        subscribe(observer) {
            this._callSubsriber = observer
        },

        dispatch(action){
            if (action.type === ADD_POST) 
                {
                    let newPost = {
                        id: 4, 
                        user: 'Admin', 
                        msg: this._state.ProfilePage.postText, 
                        likes: 0
                    }
                    this._state.ProfilePage.msgData.push(newPost);
                    this._state.ProfilePage.postText = ''
                    this._callSubsriber(this._state);
                } 
            else if (action.type === UPDATE_NEW_POST_TEXT) 
                {
                    this._state.ProfilePage.postText = action.text;
                    this._callSubsriber(this._state);
                }
            else if (action.type === ADD_FRIEND)
                {
                    let newFriend = {
                        id: 1, 
                        name: this._state.navBar.friendText, 
                        img: 'https://picsum.photos/id/100/50/50' ,
                    }
                    this._state.navBar.Friends.push(newFriend);
                    this._callSubsriber(this._state);
                }
            else if (action.type === UPDATE_NEW_FRIEND_TEXT) 
                {
                    this._state.friendText = action.text
                }
            
        },

       
       
    }

        export const AddPostActionCreator = () => {
            return { type: "ADD-POST" }
        }

        export const UpdateNewPostTextActionCreator = (text) => {
            return { type: "UPDATE-NEW-POST-TEXT", text: text }
        }

        export const AddFriendActionCreator = () => {
            return { type: "ADD-FRIEND"}
        }

        export const UpdateNewFriendActionCreator = (text) => {
            return { type: "UPDATE-NEW-FRIEND-TEXT" }
        }

export default store
window.store = store