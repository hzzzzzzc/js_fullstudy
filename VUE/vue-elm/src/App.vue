<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-wrapper">
        <router-link to="/">商品</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/comment">评论</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class="page">
      <router-view :data="seller" />
    </div>
  </div>
</template>

<script>
import VHeader from '@/components/v-header/v-header.vue';

import { getSeller } from '@/api';
import qs from 'query-string';

export default {
  data() {
    return {
      seller: {
        // eslint-disable-next-line no-restricted-globals
        id: qs.parse(location.search).id,
      },
    };
  },
  components: {
    VHeader,
  },
  created() {
    // eslint-disable-next-line no-underscore-dangle
    this._getSeller();
  },
  methods: {
    // eslint-disable-next-line no-underscore-dangle
    _getSeller() {
      getSeller({
        id: this.seller.id,
      }).then((seller) => {
        this.seller = { ...this.seller, ...seller };
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
@import './common/stylus/variable.styl'
.page
 position fixed
 top 136px
 bottom 0
 left 0
 right 0
.tab
  width 100%
  display flex
  height 36px
  line-height 36px
  &-wrapper
    flex 1
    text-align center
    color $color-font
    .router-link-exact-active
      color $color-red
      border-bottom 2px solid $color-red
      display block
      width 100%
</style>
