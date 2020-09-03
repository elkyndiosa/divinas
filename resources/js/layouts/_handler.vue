<template>
    <component :is="layout">
        <router-view>
        </router-view>
    </component>
</template>

<script>
import DefaultLayout from './default.vue';
import DashLayout from './dash.vue';

const layouts = {
    default: DefaultLayout,
    dash: DashLayout,
};

export default {
    /**
     * Register here all your layouts
     */
    layouts: layouts,

    /**
     * Just register layouts components
     */
    components: layouts,

    /**
     * Defines what'll be your default layout
     */
    default: 'default',

    computed: {
        /**
         * Return layout component name for current route
         * @return {string | }
         */
        layout() {
            return this.layouts[this.current];
        },

        layouts() {
            return this.$options.layouts;
        },

        /**
         * @returns {string}
         */
        current() {
            return this.$route.meta.layout
                ? this.$route.meta.layout
                : this.$options.default;
        },
    },

    created() {
        console.log('Using layout --->', this.current);
        this.layoutCurrent = this.current;
    }
};
</script>
