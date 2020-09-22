<template>
    <v-dialog width="800" v-model="showing" persistent @click:outside="close">
        <v-card flat color="black">
            <video-player
                class="vjs-custom-skin"
                ref="videoPlayer"
                :options="options"
            >
            </video-player>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    props: {
        showing: {
            type: Boolean,
            default: false
        },
        item: Object,
    },
    data() {
        return {
            options: {
                controls: true,
                preload: 'auto',
                fluid: true,
                language: 'es',
                playbackRates: [0.7, 1.0, 1.5, 2.0],
            }
        }
    },
    created() {
    },
    mounted() {
    },
    watch: {
        showing(val) {
            this.$nextTick(() => {
                if(val) {
                    this.play()
                }
            })
        },
    },
    computed: {
        player() {
            return this.$refs.videoPlayer.player
        }
    },
    methods: {
        play() {
            this.player.src('/uploads/videos/'+this.item.path)
            this.player.poster('/uploads/images/'+this.item.image_path)
            this.player.load()
            this.player.play()
        },
        close() {
            this.player.pause()
            this.player.load()
            this.$emit('close', true)
        },

    }
}
</script>

<style>
    .vjs-loading-spinner {
        border-color: rgba(229, 57, 53, 0.8) !important;
    }

    .vjs-big-play-button {
        background-color: rgba(229, 57, 53, 0.4) !important;
        border: 0px !important;
        transition: all 0.3s !important;
        border-radius: 200rem !important;
    }

    .vjs-big-play-button:hover,
    .vjs-play-progress,
    .vjs-volume-level
    {
        background-color: #E53935 !important;
    }

    .vjs-control-bar,
    .vjs-menu,
    .vjs-menu-content
    {
        background-color: rgba(0, 0, 0, 0.7) !important;
    }

    .vjs-selected,
    .vjs-selected:hover
    {
        color: #FFFFFF !important;
        background-color: #E53935 !important;
    }

    .vjs-progress-holder,
    .vjs-volume-bar,
    .vjs-menu-item:hover
    {
        background-color:  rgba(229, 57, 53, 0.2) !important;
    }
</style>

