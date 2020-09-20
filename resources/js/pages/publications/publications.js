import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
    components: {
        FeedCard: () => import("../../components/FeedCard.vue"),
        vueDropzone: vue2Dropzone,
        VideoPlayer: () => import(
            /*webpackChunckName: "VideoPlayerComponent"*/
            '../../components/VideoPlayer.vue'
        )
    },
    data() {
        return {
            imagesOption: {
                url: "/api/upload/image",
                thumbnailHeight: 150,
                maxFilesize: 2,
                headers: {
                  "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content,
                },
                dictDefaultMessage: "Click para buscar una imagen o arrastre aqui",
            },
            videosOptions: {
                url: '/api/upload/video',
                thumbnailHeight: 150,
                maxFilesize: 5,
                headers: { "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content},
                dictDefaultMessage: "Click para buscar un video o arrastre aqui"
            },
            busy: false,
            publications: {
                busy: false,
                list: []
            },
            step: 1,
            valid_step_1: false,
            valid_step_2: false,
            dataUser: {
                name: null,
                years: null,
                nikc: null,
                weight: null,
                height: null,
                email: null,
                phone: null,
                whatsapp: null,
                city_id: null,
                barrio_id: null,
                delivery: false,
                have_site: false,
                description: null,
            },
            price: 0,
            from_menu: false,
            to_menu: false,
            dataAdd: {
                input: null,
                output: null,
                every_single_day: false,
                input_day: null,
                output_day: null,
                every_day: false,
            },
            servicesSelect: [],
            services: {
                busy: false,
                list: [],
            },
            imagesSelect: [],
            images: {
                busy: false,
                list: []
            },
            videosSelect: [],
            videos: {
                busy: false,
                list: [],
                playing: false,
                selected: {},
            },
            cities: {
                busy: false,
                list: [],
            },
            days: [
                "Lunes",
                "Martes",
                "Miercoles",
                "Jueves",
                "Vienes",
                "Sabado",
                "Domingo",
            ],
            rules: [
                v => !!v || 'Este campo es requerido.'
            ]
        }
    },

    created() {
        this.getPublications()
        //this.dataUser = this.user
        this.getCitiesList()
        this.getServices()
        this.getImages()
        this.getVideos()
    },

    computed: {
        barrios() {
            let index = _.findIndex(this.cities.list, {'id': this.dataUser.city_id})
            let city = this.cities.list[index]
            if(city)
                return city.barrios
            return []
        },
        valid_step_3() {
            if(this.imagesSelect.length >= 2)
                return true
            return false
        },
        valid_step_4() {
            if(this.videosSelect.length >0)
                return true
            return false
        }
    },

    watch: {
        success(val) {
            if(!val)
                this.message = null
        }
    },

    methods: {
        async getPublications() {
            this.publications.busy = true
            let url = "/api/publications/" + this.user.uuid;
            try {
                let response = await axios.get(url)
                this.publications.list = response.data;
            } catch (error) {
                ErrorHandler.render(error)
            }
            this.publications.busy = false
        },
        async getImages() {
            this.images.busy = true
            let url = "/api/images";
            try {
                let response = await axios.get(url)
                this.images.list = response.data;
            } catch (error) {
                ErrorHandler.render(error)
            }
            this.images.busy = false
        },
        async getVideos() {
            this.videos.busy = true
            let url = '/api/user-videos'
            try {
                let response = await axios.get(url)
                this.videos.list = response.data.list
            } catch (error) {
                ErrorHandler.render(error)
            }
            this.videos.busy = false
        },

        async getCitiesList() {
            this.cities.busy = true
            let url = "/api/cities"
            try {
                let response = await axios.get(url)
                this.cities.list = response.data.cities
            } catch (error) {
                ErrorHandler.render(error)
            }
            this.cities.busy = false
        },

        async getServices() {
            this.services.busy = true
            let url = '/api/services'
            try {
                let response = await axios.get(url)
                this.services.list = response.data.services
            } catch (error) {
                ErrorHandler.render(error)
            }
            this.services.busy = false
        },

        async store() {
            this.busy = true
            let data = this.dataUser
            data.dataAdd = this.dataAdd;
            data.services = this.servicesSelect;
            data.price = this.price
            data.images = this.imagesSelect
            data.videos = this.videosSelect
            let url = '/api/publication'
            try {
                let response = await axios.post(url, data)
                let msj = response.data.message
                NotificationHandler.simpleSuccess(msj)
                this.reset()
                this.$nextTick(() => {
                    this.step = 1
                    this.getPublications()
                })
            } catch (error) {
                ErrorHandler.render(error)
            }
            this.busy = false
        },

        removeService(id) {
            let index = _.findIndex(this.servicesSelect, ['id', id])
            this.servicesSelect.splice(index, 1)
        },

        reset() {
            this.$refs.form_personal.reset()
            this.$refs.form_personal.resetValidation()
            this.$refs.form_services.reset()
            this.$refs.form_services.resetValidation()
            this.videosSelect = []
            this.imagesSelect = []
        },

        imagesCleanFiles() {
            this.$refs.imagesDropzone.removeAllFiles();
            this.getImages()
        },
        videosCleanFiles() {
            this.$refs.videosDropzone.removeAllFiles();
            this.getVideos()
        },
        selectVideo(v) {
            this.videos.selected = v
            this.$nextTick(() => {
                this.videos.playing = true
            })
        }

    }
}
