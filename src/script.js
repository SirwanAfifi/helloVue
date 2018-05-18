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
    }/*,
    template: `<div class="row justify-content-around">
                   <div class="row">
                        <div class="col">
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
               </div>`*/
};

/*Vue.component('user', {
    props: {
        user: {
            type: Object,
            required: false,
            default: { name: 'Sana', lastName: 'Afifi' }
        }
    },
    template: `<p>{{ user.name }} - {{ user.lastName }}</p>`
});*/

//new Vue(vueObject);

/*new Vue({
    el: '#app',
    data() {
        return {
            blogTitle: 'DNT'
        }
    },
    render: function (createElement) {
        return createElement('h1', this.blogTitle)
    }
});*/
Vue.config.devtools = true;
Vue.component('blogPost', {
    data: function () {
        return {
            stars: 5,
            hover: 5
        };
    },
    props: {
        post: {
            type: Object,
            validator: obj => {
                const titleIsValid = typeof obj.title === 'string';
                const bodyIsValid = typeof obj.body === 'string';
                const isValid = titleIsValid && bodyIsValid;
                if (!isValid) {
                    console.warn("prop is not valid");
                    return false;
                }
                return true;
            },
            default: function () {
                return {
                    title: 'Vue is fun!',
                    body: 'Vue is fun..................'
                }
            }
        }
    },
    template: `<div class="blog-post">
                    <h1>{{ post.title }}</h1>
                    <p>{{ post.body }}</p>
                    <div class="star-wrap">
                        <span v-for="n in 5"
                            class="star"
                            :class="{ full: hover >= n+1 }"
                            @click="stars = n+1"
                            @mouseover="hover = n+1"
                            @mouseout="hover = stars"
                        ></span>
                    </div>
               </div>`
});

new Vue({
    el: '#app',
    data() {
        return {
            posts: [
                { title: 'Introduction to Vue.js', body: 'This is an introduction to vue.js .....' },
                { title: 'Vue is fun!', body: 'This is an introduction to vue.js .....' }
            ],
            name: 'DNT!'
        }
    }
});