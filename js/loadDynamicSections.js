const app = Vue.createApp({
    data(){
        return{
            caseStudies:[
                {
                    date: "January 2020",
                    header: "How to Setup an ELK Stack and FileBeat on Kubernetes",
                    image: "./images/homepage/case-studies/img-1.png"
                },
                {
                    date: "March 2020",
                    header: "Password protected EFK Stack on Kubernetes",
                    image: "./images/homepage/case-studies/img-2.png"
                }
            ]
        };
    }
});

app.mount('body');