<template>
<div class="WelcomePage">
    <h1>Room with a Vue</h1>
    <h2>Welkom</h2>
    <h3>Lijst van de kamers:</h3>
    <ul>
        <li v-bind:key="room" v-for="room in rooms">{{ room.id }}</li>
    </ul>
    <button v-on:click="getRooms">Fetch the rooms</button>
</div>
</template>

<script>
    'use strict';

    export default {
        name: 'WelcomePage',
        data: function() {
            return {
                rooms: Array
            }
        },
        methods: {
            getRooms: function() {
                let url = 'https://my-json-server.typicode.com/janbaerts/groepswerk-vue-db/rooms';
                fetch(url)
                    .then(response => {
                        if (response.status == 200) {
                            console.log("Status is 200.");
                            return response.json();
                        }
                    })
                    .then(data => {
                        console.log("Data acquired.");
                        this.rooms = data;
                    })
            },
            deleteCustomers: function(mail){
                let url = 'https://my-json-server.typicode.com/janbaerts/groepswerk-vue-db/customers';
                var customers = Array;
                fetch(url)
                    .then(response => {
                        if (response.status == 200) {
                            console.log("Status is 200.");
                            return response.json();
                        }
                    })
                    .then(data => {
                        console.log("Data acquired.");
                        this.customers = data;
                    })

                //Hier moet dan de opgehaalde code verwerkt worden en dus die delete-statement plaatsvinden
                //Maar hoe specifieke id scheiden van rest van de code?
                for(var i = 0; i < customers.length; i++){
                    if(customers.mail == mail ){
                        delete.customers[i];
                    }
                }
            }
        }
    }

</script>

<style scoped>

</style>