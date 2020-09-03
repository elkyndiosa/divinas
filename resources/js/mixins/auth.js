let user = document.head.querySelector('meta[name="user"]')
if(user.content){
    let currentUser = JSON.parse(user.content);
}
console.log(user.content, 'aqui')
let metaToken = document.head.querySelector('meta[name="csrf-token"]');
let token = {"_token": metaToken.content};
module.exports = {
    data() {
        return {
        }
    },
    computed: {
        user() {
            if(user.content == ""){
                return null;
            }else{
                return JSON.parse(user.content);
            }
        },
        check() {
            return !!user.content;
        },
        guest() {
            return ! this.check;
        },
        isScort(){
            if(this.user){
                if(this.user.role_id ==2){
                    return true;
                }else{
                    return false;
                }

            }else{
                return null;
            }
        },
        isAdmin(){
            if(this.user){
                if(this.user.role_id ==1){
                    return true;
                }else{
                    return false;
                }
            }else{
                return null;
            }
        }

    },
    methods: {
        logout() {
            let url =  "/logout"
            axios.post(url, token).then(response => {
                location.href = "/";
               console.log(response)
            }).catch(error =>{
                console.log(error)
            });
        },
        redirect(route){
            this.$router.push({ name: route });
        },
        pagesNavegation(){
            this.$router.go(-1);
        }
    }
}