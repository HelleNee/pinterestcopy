<template>
  <div class="main-page">
    <div
      v-masonry
      transition-duration="0"
      item-selector=".item"
      column-width="100"
      gutter="5"
      fit-width="true"
      class="masonry-container"
    >
      <image-card
        v-masonry-tile
        class="item"
        v-for="(item, index) in filteredImages"
        :key="index"
        :url="item.download_url"
        :author="item.author"
      >
      </image-card>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: 'Main',
    components: { ImageCard: () => import('@/components/main/ImageCard.vue') },
    computed: {
      ...mapState(['images', 'searchText']),
      filteredImages() {
        if (this.searchText) {
          return this.images.filter((image, i) => {
            // return i === Number(this.searchText);
            return String(i).includes(String(this.searchText));
          });
        } else {
          return this.images;
        }
      },
    },
    beforeMount() {
      this.$http.get('https://picsum.photos/v2/list').then((images) => {
        console.log(images);
        let parsedImage = images.data.map((el) => {
          let tmpArr = el.download_url.split('/');
          let deleted = tmpArr.splice(-2, 2);
          tmpArr.push(
            `300/${Math.floor((deleted[1] / deleted[0]) * 300)}.webp`
          );
          el.download_url = tmpArr.join('/');
          return el;
        });
        this.$store.commit('setImages', parsedImage);
      });
    },
  };
</script>

<style lang="scss" scoped>
  .masonry-container {
    margin: 0 auto;
  }
</style>
