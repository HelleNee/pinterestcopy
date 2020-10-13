<template>
    <div class="main-page">

    </div>
</template>

<script>
    export default {
        name: 'Main',
        beforeMount () {
            this.$http.get('https://picsum.photos/v2/list').then( images => {
                console.log(images)
                let parsedImage = images.data.map(el => {
                    let tmpArr = el.download_url.split('/')
                    tmpArr.splice(-2, 2, '300/200.webp')
                    el.download_url = tmpArr.join('/')
                    return el
                })
                this.$store.commit('setImages', parsedImage)
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>