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
    beforeRouteEnter (to, from, next) {
        let uuid = to.params.uuid
        if(uuid) {
            next(vm => vm.getPublication(uuid))
        } else {
            next({name: 'home'})
        }
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
            publication: {},
            from_menu: false,
            to_menu: false,
            dataAdd: {},
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
        this.getCitiesList()
        this.getServices()
        this.getImages()
        this.getVideos()
    },

    computed: {
        barrios() {
            let index = _.findIndex(this.cities.list, {'id': this.publication.city_id})
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
    },

    methods: {
        async getPublication(uuid){
            this.busy = true
            let url = "/api/publication/"+uuid;
            try {
                let response = await axios.get(url)
                this.publication= response.data.publication;
                this.servicesSelect = _.map(services, 'id')
                this.dataAdd = response.data.times
                this.imagesSelect = JSON.parse(response.data.publication.imgages_path)
                this.videosSelect = JSON.parse(response.data.publication.videos_path)
                let name = response.data.publication.name
                this.$nextTick(() => {
                    document.title = 'Divinas Prepagos | Editar '+name
                })
            } catch(error) {
                ErrorHandler.render(error)
            }
            this.busy = false
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

        async update() {
            this.busy = true
            let data = this.publication
            data.dataAdd = this.dataAdd;
            data.services = this.servicesSelect;
            data.images = this.imagesSelect
            data.videos = this.videosSelect
            let url = '/api/publication/'+this.publication.uuid
            try {
                let response = await axios.put(url, data)
                let msj = response.data.message
                NotificationHandler.simpleSuccess(msj)
                this.step = 1
            } catch (error) {
                ErrorHandler.render(error)
            }
            this.busy = false
        },

        removeService(id) {
            let index = _.findIndex(this.servicesSelect, ['id', id])
            this.servicesSelect.splice(index, 1)
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
