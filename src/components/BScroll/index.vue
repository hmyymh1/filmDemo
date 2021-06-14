<template lang="">
    <div ref="wrapper" class="wrapper">
        <slot></slot>
    </div>
</template>

<script>

import BScroll from 'better-scroll';

export default {
    name: 'BScroll',

    props: ['content'],

    data() {
        return {
            scroll: null,
        }
    },
    
    mounted(){       
        this.scroll =  new BScroll( this.$refs.wrapper , {
            tap : 'tap',
        });
    },
    
    watch:{
        content(){
            setTimeout(()=>{
                this.$nextTick(()=>{
                /* dom发生变化后重新计算 */
                    this.scroll.refresh();
                    //console.log(this.content);
                })
            },500)         
        }
    }
}
</script>

<style scoped>
    .wrapper {
        height: 100%;
    }
</style>