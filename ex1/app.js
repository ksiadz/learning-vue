new Vue({
    el: '#exercise',
    data: {
        name: 'Wojtek',
        age: '23',
        imgId: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    methods: {
        random_number: function () {
            return Math.floor(Math.random() * (1 - 0 + 1) );
        }
    }
})

// <div id="exercise">
//    <!-- 1) Fill the <p> below with your Name and Age - using Interpolation -->
//     <p>VueJS is pretty cool - YOUR_NAME (AGE)</p>
//     <!-- 2) Output your age, multiplied by 3 -->
//     <p></p>
//     <!-- 3) Call a function to output a random float between 0 and 1 (Math.random()) -->
//     <p></p>
//     <!-- 4) Search any image on Google and output it here by binding the "src" attribute -->
//     <div>
//         <img style="width:100px;height:100px">
//     </div>
//     <!-- 5) Pre-Populate this input with your name (set the "value" attribute) -->
//     <div>
//         <input type="text">
//     </div>
// </div>