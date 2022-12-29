<template>
    <div class="outer" :style="outer" v-show="true">
        <div class="inner" id="inner" :style="inner" />
    </div>
</template>

<script>
import STATIC_VALUES from "../enums/static.enum";
export default {
    name: "ProgressBar",
    components: {},
    props: {
        height: {
            type: String,
            default: STATIC_VALUES.HEIGHT,
        },
        width: {
            type: String,
            default: STATIC_VALUES.WIDTH,
        },
        backgroundColor: {
            type: String,
            default: STATIC_VALUES.BACKGROUNDCOLOR,
        },
        borderRadius: {
            type: String,
            default: STATIC_VALUES.BORDERADIUS,
        },
        loading: {
            type: Boolean,
            default: STATIC_VALUES.LOADING,
        },
    },
    computed: {
        outer() {
            return {
                width: this.width + "%",
                backgroundColor: "#cccccc",
                height: this.height,
                borderRadius: this.borderRadius,
            };
        },
        inner() {
            return {
                width: "100%",
                backgroundColor: this.backgroundColor,
                height: this.height,
                borderRadius: this.borderRadius,
                animation: "progress 5000ms ease-in 1",
            };
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

@keyframes progress {
    from {
        width: 0;
    }
}
</style>
