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
            switch(dropdownId){
                case 'dropdown1':
                    this.dropdown1State = !this.dropdown1State;
                    this.dropdown2State = false;
                    this.dropdown3State = false;
                    this.dropdown4State = false;
                    break;
                case 'dropdown2':
                    this.dropdown2State = !this.dropdown2State;
                    this.dropdown1State = false;
                    this.dropdown3State = false;
                    this.dropdown4State = false;
                    break;  
                case  'dropdown3':
                    this.dropdown3State = !this.dropdown3State;
                    this.dropdown1State = false;
                    this.dropdown2State = false;
                    this.dropdown4State = false;
                    break;
                case 'dropdown4':
                    this.dropdown4State = !this.dropdown4State;
                    this.dropdown1State = false;
                    this.dropdown2State = false;
                    this.dropdown3State = false;
                    break;
                default:
                    console.log("Missing dropdown id: " + dropdownId);
            }
        }
    }
});

app.mount('#dropdown-column');
