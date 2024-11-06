const app = Vue.createApp({
    methods: {
        update(event){
            const contentDiv = event.target.parentElement.nextSibling;

            if(event.target.checked){
                contentDiv.style.display = "block";
            }
            else{
                contentDiv.style.display = "none";
            }
        }
    }
});

app.mount('#dropdown-column');
