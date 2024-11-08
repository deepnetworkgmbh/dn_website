const app = Vue.createApp({
    data() {
        return {
            pin1Selected: false,
            pin2Selected: false,
            pin3Selected: true,
            pin4Selected: false,
            pin5Selected: false,
        };
    },
    methods: {
        selectPin(event) {

            let id = event.target.id;
            
            this.pin1Selected = false;
            this.pin2Selected = false;
            this.pin3Selected = false;
            this.pin4Selected = false;
            this.pin5Selected = false;

            switch(id){
                case 'pin1':
                    this.pin1Selected = true;
                    break;
                case 'pin2':
                    this.pin2Selected = true;
                    break;
                case 'pin3':
                    this.pin3Selected = true;
                    break;
                case 'pin4':
                    this.pin4Selected = true;
                    break;
                case 'pin5':
                    this.pin5Selected = true;
                    break;
            }
        }
    }
});

app.mount("#timeline-section");