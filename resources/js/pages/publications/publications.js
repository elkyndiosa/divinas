import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
    components: {
        FeedCard: () => import("../../components/FeedCard.vue"),
        vueDropzone: vue2Dropzone,
    },
    data() {
        return {
            dropzoneOptions: {
                url: "/api/upload/image",
                thumbnailHeight: 150,
                maxFilesize: 2,
                headers: {
                  "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content,
                },
                dictDefaultMessage: "Click para buscar una imagen o arrastre aqui",
            },
            busy: false,
            success: false,
            message: null,
            publications: {
                busy: false,
                list: []
            },
            step: 1,
            valid_step_1: false,
            valid_step_2: false,
            dataUser: {},
            price: 0,
            from_menu: false,
            to_menu: false,
            dataAdd: {
                input: null,
                output: null,
                every_single_day: false,
                input_day: "Lunes",
                output_day: "Lunes",
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
        this.dataUser = this.user
        this.getCitiesList()
        this.getServices()
        this.getImages()
    },

    computed: {
        barrios() {
            let index = _.findIndex(this.cities.list, {'id': this.dataUser.city_id})
            let city = this.cities.list[index]
            if(city)
                return city.barrios
            return []
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
                console.log(error);
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
                console.log(error);
            }
            this.images.busy = false
        },
        async getCitiesList() {
            this.cities.busy = true
            let url = "/api/cities"
            try {
                let response = await axios.get(url)
                this.cities.list = response.data.cities
            } catch (error) {
                console.log(error)
            }
            this.cities.busy = false
        },

        async getServices() {
            this.services.busy = true
            let url = '/api/services'
            try {
                let response = await axios.get(url)
                this.services.list = response.data.services
                this.servicesSelect = response.data.servicesUser
            } catch (error) {
                console
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
            let url = 'api/publication'
            try {
                let response = await axios.post(url, data)
                this.message = response.data.message
                this.success = true
                this.$nextTick(() => {
                    this.getPublications()
                })
            } catch (error) {
                console.log(error)
            }
            this.busy = false
        },

        removeService(id) {
            let index = _.findIndex(this.servicesSelect, ['id', id])
            this.servicesSelect.splice(index, 1)
        },

        cleanFiles() {
            this.$refs.myVueDropzone.removeAllFiles();
            this.getImages()
        },

    }
}
