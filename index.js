let showContent = {
  'default': true,
  'project-details': false,
};

let allProjects = [
  {
    title: 'Triangular world scratch map',
    categories: ['gen-art'],
    thumb: 'images/thumbnails/world-map.png',
    content: `
      <div>
        2018<br/>
        <br/>
        Triangular world scratch map is a computationally generated, laser cut-ready map blueprint. <br/>
        <br/>
        You can keep track of parts of the world you have adventured to by removing countries' interiors.
        Each country is filled with removable triangle bits.<br/>
        <a href="images/world-map-1-hd.png"><img src="images/world-map-1.png"></a><br/>
        <br/>
        The generative algorithm creates shape, name tag and inner triangle division for each country, with additional optimization on vector paths to ensure
        they are laser cuttable and removable. The original map data is based on a geoJSON file from <a href="http://geojson.org/">http://geojson.org/</a>.<br/>
        <br/>
        The whole map is fully auto-generated with minimal hand editing. 
        <a href="images/world-map-2-hd.png"><img src="images/world-map-2.png"></a><br/>
        Laser cutting on birch wood - fire! smoke! laser beam! and all that jazz!
        <a href="images/world-map-3-hd.png"><img src="images/world-map-3.png"></a><br/>
        I designed these supports to hold continents together, following the same triangular / low-poly style.
        <a href="images/world-map-4-hd.png"><img src="images/world-map-4.png"></a>
      </div> `,
  }, {
    title: 'Million shards',
    categories: ['gen-art'],
    thumb: 'images/thumbnails/million-shards.png',
    content: `
      <div>2018<br/>
        <br/>
        Million shards is a series of generative prints I programmed and laser-engraved. The generative algorithm accepts 2D images as input and produces
        vector graphics data as output (ultimately exported as SVG).<br/>
        <br/>
        At the core of the generative rule is Delaunay triangulation, though supporting algorithms (e.g. edge-detection) were adopted to stylize the visual output.<br/>
        I tuned the algorithm to maximally preserve the image source features while introducing tons of intricate triangular details. Thus the name 'million shards'.<br/>
        <br/>
        <a href="images/million-shards-1-hd.png"><img src="images/million-shards-1.png"></a><br/>
        <a href="images/million-shards-2-hd.png"><img src="images/million-shards-2.png"></a><br/>
        Laser engraving details<br/>
        <a href="images/million-shards-3-hd.png"><img src="images/million-shards-3.png"></a><br/>
        Generated digital output<br/>
        <a href="images/million-shards-5-hd.png"><img src="images/million-shards-5.png"></a><br/>
        <a href="images/million-shards-6-hd.png"><img src="images/million-shards-6.png"></a><br/>
        <a href="images/million-shards-7-hd.png"><img src="images/million-shards-7.png"></a><br/>
        Early prototypes featuring triangulated images and cross hatches, drawn using a plotter. <br/>
        <a href="images/million-shards-8-hd.png"><img src="images/million-shards-8.png"></a><br/>
        Yes, yeeeesss... Plotters are addictive to look at.<br/>
        <img src="images/plotter.gif"><br/>
        <br/>
      </div>`,
  }, {
    title: 'Meow stroke',
    categories: ['gen-art'],
    thumb: 'images/thumbnails/meow-stroke.png',
    content: `
      <div>2019<br/>
        <br/>
        Derived from Million shards, Meow stroke explores the fun surprises (and horror) enabled by interactive generative structures.<br/>
        <br/>
        The generative rule is inspired by cat's favorite activity - stretching. Given a user input stroke, a vector art of a cat 
        is stretched along the stroke path, creating an uncanny-looking cat imagery. <br/>
        <br/>
        (I'm thinking about making this a WeChat miniprogram - let me know if you think that should happen!)
        <br/>
        <a href="images/meow-stroke-1-hd.png"><img src="images/meow-stroke-1.png"></a><br/>
        The raw hand drawn stroke input <br/>
        <a href="images/meow-stroke-2-hd.png"><img src="images/meow-stroke-2.png"></a><br/>
        More meow strokes! <br/>
        <a href="images/meow-stroke-4-hd.png"><img src="images/meow-stroke-4.png"></a><br/>
        My name (Chinese character) in meow stroke <br/>
        <a href="images/meow-stroke-5-hd.png"><img src="images/meow-stroke-5.png"></a><br/>
        <br/>
        The traingulate cat 'base vocabulary' <br/>
        <img src="images/meow-stroke-3.png"><br/>
      </div>`,
  }, {
    title: 'Ink trail',
    categories: ['gen-art'],
    thumb: 'images/thumbnails/ink-trail.png',
    content: `
      <div>2019<br/>
        <br/>
        Ink trail is an ongoing generative series derived from an ink simulation algorithm I created. The algorithm
        mimics the effect of Chinese calligraphy with vector graphics. Because vector paths are easier to animate and 
        distort, they introduce exciting potentials to animate & abstract the visuals.<br/>
        <br/>
        The latest, unfinished piece is a short animation sequence brining ink lotus to life. Demo animation as below:<br/>
        <img src="images/ink-trail-anim.gif"><br/>
        <br/>
        Lotus flower pond, generated from a particle system where each particle is a leaf or a pedal, and springs are placed between
        particles to control their adjacency.<br/>
        <a href="images/ink-trail-2-hd.png"><img src="images/ink-trail-2.png"></a><br/>
        <a href="images/ink-trail-4-hd.png"><img src="images/ink-trail-4.png"></a><br/>
        <br/>
        Process screenshot - benchmarking <br/>
        <a href="images/ink-trail-3-hd.png"><img src="images/ink-trail-3.png"></a><br/>
      </div>
    `,
  }, {
    title: 'Laser cut wood sculptures',
    categories: ['gen-art'],
    thumb: 'images/thumbnails/wall-art.png',
    content: `
      <div>2018<br/>
        <br/>
        I created a series of laser cut wood sculptures, whose designs were fully programmatically generated. Triangle clusters
        were generated from 2D images using edge-detection algorithm and Delauney triangulation. From there, I used PaperJS
        to create laser-cuttable vector diagrams, paying additional attention to generating supports & connector
        structures to hold wooden pieces together. <br/>
        <br/>
        A pony wall art generated and laser cut using the generative program. <br/>
        <a href="images/wall-art-1-hd.png"><img src="images/wall-art-1.png"></a><br/>
        The original image input. 'Horse' by Xu Beihong - a famous traditional Chinese ink painter.  <br/>
        <img src="images/wall-art-1-2-hd.png"><br/>
        Size of the wall art is over 1 meter by 1 meter. Using SVG packing tools, I was able to pack it onto 6 pieces of 60cm x 30cm birch wood panels. <br/>
        <a href="images/wall-art-2-hd.png"><img src="images/wall-art-2.png"></a><br/>
        Another wall sculpture inspired by Skyrim. (size: 1.5m x 0.5m) <br/>
        <a href="images/wall-art-3-hd.png"><img src="images/wall-art-3.png"></a><br/>
        Another wall art inspired by a classic Chinese symbol. (size: 1.5m x 1.5m)<br/>
        <a href="images/wall-art-4-hd.png"><img src="images/wall-art-4.png"></a><br/>
        <br/>
      </div>
    `
  }, {
    title: 'Guess My Sketch',
    categories: ['software'],
    thumb: 'images/thumbnails/gms.png',
    content: `
      <div>2018<br/>
        <br/>
        Guess My Sketch (GMS) - an AI doodling game - was Google's first mini-program to launch on WeChat.
        Originally modeled after <a href="https://quickdraw.withgoogle.com/">Quick! Draw</a>, Guess My Sketch expands its game 
        mechanism to include multiplayer and social sharing features. As Google's first move to crack the Chinese market in years, 
        GMS went viral and triggered massive sharing on social media, gaining millions of users within first week of launch. <br/>
        <img src="images/gms-1.png"><br/>
        I had the pleasure to work on the core team of GMS, co-leading product design and engineering execution since project inception.
        Engineering responsibility included delivering a world-class slick game client (using we stack), building scalable backends that
        support high volume traffic, as well as multiplayer networking programming. <br/>
        <br/>
        <p class="bold">Press<br/></p>
        <br/>
        Tech Crunch: <a href="https://techcrunch.com/2018/07/17/google-launches-its-first-wechat-mini-program">
        Google launches its first WeChat mini program as its China experiments continue</a><br/>
        CNN Business: <a href="https://money.cnn.com/2018/07/18/technology/google-in-china-tencent/index.html">
        Google's latest move to crack China: A WeChat game</a><br/>
        The Drum: <a href="https://www.thedrum.com/news/2018/07/19/google-increases-presence-china-with-ai-game-wechat">
        Google increases presence in China with AI game on WeChat</a><br/>
        Qdaily: <a href="http://www.qdaily.com/articles/55368.html">Google Makes A Wechat Mini Program, Using AI to Guess What You Have Drew</a><br/>
        Guokr: <a href="https://mp.weixin.qq.com/s/E2CIQp8nkcI1FGEUtW2jsA">I Already Found The Way To Tess The Popular Google’s Mini Program “Guess My Sketch”</a><br/>
        PingWest: <a href="https://mp.weixin.qq.com/s/jPTtd7OjzE5NCmnDdvVJDg">The Story Behind The Popular Google’s Mini Program</a><br/>
        Huanqiu:<a href="http://tech.huanqiu.com/internet/2018-07/12519599.html">Google Launched its First Mini Program “Guess My Sketch”, Team Up With AI To Play Riddle Game</a><br/>
        Ifanr: <a href="https://www.ifanr.com/minapp/1068407">Going Viral On Wechat within 3hrs, The First Mini Program of Google Is Here </a><br/>
        Mydrivers: <a href="http://news.mydrivers.com/1/585/585055.htm">Google Launched its First Mini Program “Guess My Sketch” </a><br/>
        Xinmin：<a href="http://newsxmwb.xinmin.cn/wentihui/wtsh/2018/07/18/31408436.html">Stop Playing "Tiao Yi Tiao", Who's the Best of Quick Drawing, Google Launches its First Wechat Mini Program "Guess My Sketch"	</a><br/>
        36Kr: <a href="https://36kr.com/p/5143909.html">Widely spread on Wechat in 3hrs, the first mini program of Google is here	</a><br/>
        Tencent: <a href="https://new.qq.com/omn/20180718/20180718A13WSX.html">What Is The Right Way To Play The Mini Program From Google?</a><br/>
        Netease: <a href="http://3g.163.com/tech/18/0719/11/DN2UI8MU00098IEO.html">Google’s AI Version of “Guess My Drawing” Is Prevailing on the Wechat, the Technology behind Is Here </a><br/>
        <img src="images/gms-2.gif" style="width:325px">
        <img src="images/gms-3.gif" style="width:325px"><br/>
        Scan the QR code below to try it out in WeChat!
        <img src="images/gms-4.jpg"><br/>
      </div>
    `
  }, {
    title: 'AR generative art prototype',
    categories: ['software'],
    thumb: 'images/thumbnails/ar-prototype.png',
    content: `
      <div>
        2018<br/>
        <br/>
        I had the pleasure to explore several AR prototypes for work in 2017. They ultimately went unpublished, though 
        ideas remain interesting. All prototypes were developed in Unity with a plugin that enables building to both
        Android and iOS. <br/>
        <br/>
        I wrote a generative algorithm that creates 3D cardboard models (geometry + UV + textures) from photos. <br/>
        <a href="images/ar-prototype-1-hd.png"><img src="images/ar-prototype-1.png"></a><br/>
        <br/>
        <img src="images/ar-prototype-2.gif" style="width:200px">
        <img src="images/ar-prototype-4.gif" style="width:200px">
        <img src="images/ar-prototype-5.gif" style="width:200px"><br/>
        <br/>
        Another generative material explored: bronze. Some bronze frames generated from 2D images: <br/>
        <a href="images/ar-prototype-6-hd.png"><img src="images/ar-prototype-6.png"></a><br/>
        <br/>
      <div/>
    `
  }, {
    title: 'Mr.Jelly',
    categories: ['software'],
    thumb: 'images/thumbnails/mr-jelly.png',
    content: `
      <div>2016<br/>
        <br/>
        Mr. Jelly is a one-tap mobile game where you control a bouncy jelly to roll over infinite platforms. It was developed as
        an indepedent Unity game by a team of six, over evenings and weekends. It's launched in four European countries in iOS app store,
        and will be available worldwide on both iOS and Android soon.<br/>
        <br/>
        I wore the hat of game designer, gameplay engineer, technical artist and environment artist for the game. Besides designing and 
        coding large portion of the gameplay, I owned the graphic stack, ranging from animation, in game effects, as well as  infrastures 
        and tools for asset management. I also designed and produced all 3D assets and half of 2D assets in the game. <br/>
        <br/>
        <a href="images/mr-jelly-1-hd.png"><img src="images/mr-jelly-1.png"></a><br/>
        Game features sets of colorful, minimalist backgrounds and main character models.
        <a href="images/mr-jelly-3-hd.png"><img src="images/mr-jelly-3.png"></a><br/>
        <a href="images/mr-jelly-4-hd.png"><img src="images/mr-jelly-4.png"></a><br/>
        A pipeline for auto-color import from SVG sheet. One can fine-tune color palette across backgrounds and jelly models by directly 
        editing an SVG file in Illustrator.<br/>
        <a href="images/mr-jelly-2-hd.png"><img src="images/mr-jelly-2.png"></a><br/>
      </div>
    `
  }, {
    title: 'Generative cityscape',
    categories: ['gen-art'],
    thumb: 'images/thumbnails/gen-cityscape.png',
    content: `
      <div>2016<br/>
        <br/>
        Generative cityscape originates from an experiment to create 3D fantasy-style cities from 2D real world map.
        I took geo map data from <a href="www.openstreetmap.org">www.openstreetmap.org</a> and applied algorithmic rules 
        to generate different types of buildings (e.g. buildings with pointy roof / platform roof) from base 2D geometries.<br/>
        <br/>
        The below generative cityscape is to commemorate my days spent working on Google AdWords. Look closely and you will find 
        Ad-themed 3D objects (clicks / targeting / ca$h) and texts scattered everywhere :) <br/>
        <a href="images/gen-cityscape-1-hd.png"><img src="images/gen-cityscape-1.png"></a><br/>
        The buildings are generated from a real map of the Google campus, where Ads teams used to locate. <br/>
        <a href="images/gen-cityscape-2-hd.png"><img src="images/gen-cityscape-2.png"></a><br/>
        The source map of Google Mountain View campus, in OpenStreetView.
        <img src="images/gen-cityscape-3-hd.png"><br/>
        Early prototype I did way back in 2014, where I generated castles from Carnegie Mellon University map (thus, 'Carnegie Castles').<br/>
        <a href="images/gen-cityscape-4-hd.png"><img src="images/gen-cityscape-4.png"></a><br/>
        The source map of CMU campus, in OpenStreetView.
        <a href="images/gen-cityscape-5-hd.png"><img src="images/gen-cityscape-5.png"></a><br/>
      </div>
    `,
  }, {
    title: 'Iconic History',
    categories: ['software'],
    thumb: 'images/thumbnails/iconic-history.png',
    content: `
      <div> 2014<br/>
      <br/>
      Iconic history is a chrome extension that visualizes your browser history as a favicon grid. A picture 
      is worth a thousan words. Translate your web surfing history into art, if you dare :) You might find Iconic History's 
      output intriguing, and even a bit shocking.<br/>
      <br/>
      <iframe src="https://player.vimeo.com/video/89219632" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/89219632">Iconic History - a browser history visualization</a> from <a href="https://vimeo.com/user16477340">Shan</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
      <br/>
      <p class="bold">Press</p>
      Times: <a href="http://time.com/28737/translate-your-browsing-history-into-favicon-artwork">Translate Your Browsing History Into Art (If You Dare)</a><br/>
      Daily Mail: <a href="https://www.dailymail.co.uk/sciencetech/article-2588032/The-picture-reveals-entire-history-internet.html">Online tool transforms the sites you've visited into a unique digital pattern</a><br/>
      Gizmodo: <a href="https://gizmodo.com/see-your-entire-browser-history-in-a-somewhat-terrifyi-1547823926">See Your Entire Browser History In a (Somewhat Terrifying) Favicon Grid</a><br/>
      Fast Company: <a href="https://www.fastcompany.com/3027816/this-plugin-visualizes-your-entire-browser-history">Plugin Visualizes Your Entire Browser History</a><br/>
      Laughing Squid: <a href="https://laughingsquid.com/iconic-history-a-google-chrome-extension-that-visualizes-web-browser-history-using-favicons/">Iconic History, A Google Chrome Extension That Visualizes Web Browser History Using Favicons</a><br/>
      <br/>
      <a href="https://chrome.google.com/webstore/detail/iconic-history/hfacpfhgpmaifaanbmgbbjkfgelookom?hl=en">Get the chrome extension</a><br/>
      <br/>
      <a href="https://github.com/yemount/IconicHistory">Source code on Github</a><br/>
      <br/>
      <a href="images/iconic-history-1-hd.png"><img src="images/iconic-history-1.png"></a><br/>
      <br/>
      <br/>
      </div>
    `,
  }, {
    title: 'Low poly modeling',
    categories: ['tech-art'],
    thumb: 'images/thumbnails/low-poly.png',
    content: `
      <div> Ongoing <br/>
      <br/>
      As a hobby 3D artist, I love experimenting the low poly art style on novel subject matters.<br/>
      <br/>
      Capturing just another day in the Google office: <br/>
      <a href="images/low-poly-1-hd.png"><img src="images/low-poly-1.png"></a><br/>
      <br/>
      Commemorating my teammates @ Google Adwords Full Creative Automation: <br/>
      <a href="images/low-poly-2-hd.png"><img src="images/low-poly-2.png"></a><br/>
      <br/>
      Trying out low poly on European buildings:<br/>
      <img src="images/low-poly-3.png"><br/>
      <br/>
      Trying out low poly on gorgeous mountains in China:<br/>
      <a href="images/low-poly-4-hd.png"><img src="images/low-poly-4.png"></a><br/>
      <a href="images/low-poly-4-1-hd.png"><img src="images/low-poly-4-1.png"></a><br/>
      <br/>
      Chinese grocery market vendor can rock low poly too!<br/>
      <a href="images/low-poly-5-hd.png"><img src="images/low-poly-5.png"></a><br/>
      <br/>
      </div>
    `
  }, {
    title: 'Whiteboard drawing @ Google',
    categories: ['drawing'],
    thumb: 'images/thumbnails/whiteboard.png',
    content: `
      <div>Ongoing<br/>
        I do drawings on Google office whiteboards, and I teach whiteboard drawing at Google. <br/>
        <br/>
        2 meter by 1 meter gigantic whiteboard dragon, drawn in Google office, for celeberating Halloween 2014.<br/>
        <a href="images/whiteboard-1-hd.png"><img src="images/whiteboard-1.png"></a><br/>
        <br/>
        A class diagram evolved into a fantasy-style map. 2015.<br/>
        <a href="images/whiteboard-2-hd.png"><img src="images/whiteboard-2.png"></a><br/>
        <br/>
        Death Valley inspired promotion whiteboard drawing for Google month of Serving 2016.<br/>
        <a href="images/whiteboard-3-hd.png"><img src="images/whiteboard-3.png"></a><br/>
        <a href="images/whiteboard-4-hd.png"><img src="images/whiteboard-4.png"></a><br/>
        Another giant dragon on a sliding door, drawn on glass.<br/>
        <a href="images/whiteboard-7-hd.png"><img src="images/whiteboard-7.png"></a><br/>
        <a href="images/whiteboard-8-hd.png"><img src="images/whiteboard-8.png"></a><br/>
        Teaching whiteboard drawing class and making Google engineers draw cats.<br/>
        <a href="images/whiteboard-5-hd.png"><img src="images/whiteboard-5.png"></a><br/>
        <a href="images/whiteboard-6-hd.png"><img src="images/whiteboard-6.png"></a><br/>
      </div>
    `
  }, {
    title: 'Drawings & paintings',
    categories: ['drawing'],
    thumb: 'images/thumbnails/drawing.png',
    content: `
      <div>
        Selection of drawings and paintings in all kinds of medium. <br/>
        <br/>
        Check out my <a href="https://www.instagram.com/yemount/">Instagram</a> for more artwork. <br/>
        <br/>
        Nagano-Izu onsen trip medley, Ipad Pro, 2019. <br/>
        <a href="images/drawing-1-hd.png"><img src="images/drawing-1.png"></a><br/>
        Takayama trip medley, fine point pen, 2017. <br/>
        <a href="images/drawing-2-hd.png"><img src="images/drawing-2-hd.png"></a><br/>
        Lake Shima, Ipad Pro, 2019. <br/>
        <a href="images/drawing-3-hd.png"><img src="images/drawing-3.png"></a><br/>
        Swiss mountains 1, watercolor, 2018. <br/>
        <a href="images/drawing-4-hd.png"><img src="images/drawing-4.png"></a><br/>
        Swiss mountains 2, watercolor, 2018. <br/>
        <a href="images/drawing-5-hd.png"><img src="images/drawing-5.png"></a><br/>
        Beef hotpoting, watercolor, 2017. <br/>
        <a href="images/drawing-6-hd.png"><img src="images/drawing-6.png"></a><br/>
        Takayama mountains, fine point pen, 2017. <br/>
        <a href="images/drawing-7-hd.png"><img src="images/drawing-7.png"></a><br/>
        <br/>
        <br/>
      </div>
    `,
  },
  // {
  //   title: 'Laser cut mountain landscape',
  //   categories: ['gen-art'],
  // }, 
  // {
  //   title: 'Modular ancient buildings',
  //   categories: ['tech-art'],
  // },
  {
    title: 'Reel 2010-2014',
    thumb: 'images/thumbnails/reel.png',
    content: `
      Compilation from work fromm 2010-2014<br/>
      <br/>
      Shoot me an email if you are interested in details of a particular project. <br/>
      <br/>
      <iframe src="https://player.vimeo.com/video/96972669" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      <p><a href="https://vimeo.com/96972669">Portfolio reel</a> from <a href="https://vimeo.com/user16477340">Shan</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
      <br/>
    `
  }
];

Vue.directive('innerhtml', {
  bind: function (el, binding) {
    console.log('bound');
    el.innerHTML = binding.value.content;
  }
});

window.onload = () => {
  new Vue({
    el: '#app',
    data: {
      showContent: showContent,
      projects: allProjects,
      selectedProject: null,
    },
    computed: {
      projectDetailsAsHTML: function () {
        return this.selectedProject.content;
      },
    },
    methods: {
      toggleContent: function (tag) {
        Object.keys(this.showContent).forEach(tag => this.showContent[tag] = false);
        this.showContent[tag] = true;
      },
      filterProjects: function (tag) {
        this.toggleContent('projects');
        if (!tag) {
          this.projects = allProjects;
          return;
        }
        this.projects = allProjects.filter(proj => proj.categories && proj.categories.includes(tag));
      },
      showProject: function (project) {
        this.toggleContent('project-details');
        this.selectedProject = project;
      }
    }
  });
}
