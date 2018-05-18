var vueObject = {
    el: '#app',
    data() {
        return {
            searchInput: '',
            users: [
                { name: 'Sirwan', lastName: 'Afifi', avatar: 'no_image.jpg' },
                { name: 'Ali', lastName: 'Ahmadi', avatar: 'no_image.jpg' },
                { name: 'Ahmadi', lastName: 'Mohammadi', avatar: 'no_image.jpg' },
                { name: 'Behzad', lastName: 'Amani', avatar: 'no_image.jpg' },
                { name: 'Omid', lastName: 'Naseri', avatar: 'no_image.jpg' },
                { name: 'Foad', lastName: 'Naseri', avatar: 'no_image.jpg' },
            ]
        }
    },
    methods: {
        sayHello(user) {
            alert(`${user.name} ${user.lastName}`);
        },
        getFullName(user) {
            return `${user.name} ${user.lastName}`;
        }
    },

    computed: {
        filterUsers() {
            let filterPattern = new RegExp(this.searchInput, 'i');
            return this.users.filter(user => user.name.match(filterPattern));
        }
    },
    template: `<div class="row justify-content-around">
                   <div class="row">
                        <div class="col">
                            <users></users>
                            <input type="text" v-model="searchInput" />
                        </div>
                    </div>
                    <div class="col-2" v-for="user in filterUsers">
                        <div class="card" @click="sayHello(user)">
                            <img class="card-img-top" v-bind:src="'./public/img/' + user.avatar" alt="{{user}}">
                            <div class="card-body">
                                <p class="card-text">{{getFullName(user)}}</p>
                            </div>
                        </div>
                    </div>
               </div>`
};

Vue.component('users', {
    template: '<p>Users....</p>'
});

new Vue(vueObject);
