<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
  <v-card
    class="mx-auto"
    width="80%"
  >
    <v-card-text>
      <div>by Mr. Alferd</div>
      <p class="display-1 text--primary">
        Team · 5th in Easten Conference
      </p>
      <div class="text--primary">
        Games: Tomorrow 8:30 am<br>
        Toronto Raptors vs Brooklyn Nets<br>

        The Toronto Raptors are a Canadian professional basketball team based in Toronto. The Raptors compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Atlantic Division. They play their home games at the Scotiabank Arena, which they share with the Toronto Maple Leafs of the National Hockey League (NHL). <br>
      </div>
    </v-card-text>
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-img
            height="200"
            width="300"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Toronto_Raptors_logo.svg/200px-Toronto_Raptors_logo.svg.png"
          ></v-img>
        </v-col>
        <!-- <v-col
          cols="auto"
          class="text-center pl-0">
          <v-row
            class="flex-column ma-0 fill-height"
            justify="center"
          >
            <v-col class="px-0">
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-col>

            <v-col class="px-0">
              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>
            </v-col>

            <v-col class="px-0">
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col> -->
        <video  
          id="myVideo" 
          class="video-js" 
          height="200"
          max-width="100% !important">
          <source src="../assets/raptors.mp4" type="video/mp4">
        </video>
      </v-row>
      
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Learn More
      </v-btn>
    </v-card-actions>
  </v-card>
      
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Raptors',

  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer',
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/layout/pre-defined',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
  mounted() { 
    this.initVideo();
  },
  methods: {
    
    initVideo() {
      //初始化视频方法
      this.$video(document.getElementById('myVideo'), {
          //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          controls: true,
          //自动播放属性,muted:静音播放
          autoplay: "muted",
          //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          preload: "auto",
          //设置视频播放器的显示宽度（以像素为单位）
          width: "800px",
          //设置视频播放器的显示高度（以像素为单位）
          height: "400px"
      });
    }
  }
};
</script>
