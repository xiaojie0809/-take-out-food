<template>
  <section class="msite">
    <!--首页头部-->
    <Top-Header title="昌平区北七家宏福科技园(337省道北)">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </Top-Header>
    <!--首页导航-->
    <nav class="msite_nav">
      <swiper :options="swiperOptions" ref="mySwiper">
        <swiper-slide>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/1.jpg" />
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/2.jpg" />
            </div>
            <span>商超便利</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/3.jpg" />
            </div>
            <span>美食</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/4.jpg" />
            </div>
            <span>简餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/5.jpg" />
            </div>
            <span>新店特惠</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/6.jpg" />
            </div>
            <span>准时达</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/7.jpg" />
            </div>
            <span>预订早餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/8.jpg" />
            </div>
            <span>土豪推荐</span>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/9.jpg" />
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/10.jpg" />
            </div>
            <span>商超便利</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/11.jpg" />
            </div>
            <span>美食</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/12.jpg" />
            </div>
            <span>简餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/13.jpg" />
            </div>
            <span>新店特惠</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/14.jpg" />
            </div>
            <span>准时达</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/1.jpg" />
            </div>
            <span>预订早餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/2.jpg" />
            </div>
            <span>土豪推荐</span>
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </nav>
    <!--首页附近商家-->
    <Shop-List></Shop-List>
  </section>
</template>

<script>
import TopHeader from "@/components/TopHeader/TopHeader.vue";
import ShopList from "@/components/ShopList/ShopList.vue"
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    TopHeader,
    Swiper,
    SwiperSlide,
    ShopList
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
      },
    };
  },
};
</script>

<style lang="stylus" >
@import '../../common/stylus/mixins.styl';

.msite {
  width: 100%;

  .msite_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;

    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: #02a774;
        }
      }
    }
  }
}
</style>