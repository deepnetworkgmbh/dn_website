const app = Vue.createApp({
    data(){
        return{
            dropdown1State: false,
            dropdown2State: false,
            dropdown3State: false,
            dropdown4State: false,
        };
    },
    methods: {
        update(dropdownId){

            console.log(dropdownId);

            switch(dropdownId){
                case 'dropdown1':
                    this.dropdown1State = !this.dropdown1State;
                    break;
                case 'dropdown2':
                    this.dropdown2State = !this.dropdown2State;
                    break;  
                case  'dropdown3':
                    this.dropdown3State = !this.dropdown3State;
                    break;
                case 'dropdown4':
                    this.dropdown4State = !this.dropdown4State;
                    break;
                default:
                    console.log("Missing dropdown id: " + dropdownId);
            }
        }
    }
});

app.mount('#dropdown-column');
