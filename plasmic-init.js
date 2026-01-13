import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import VerticalAccordion from "./components/VerticalAccordion";
import SwiperSlider from "./components/SwiperSlider";
import ScrollerComp from "./components/ScrollerComp";
import SeoHead from "./components/SeoHead";


export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "4g6fpYuN44XBz7aJffWv9R",
      token: "9nwFLPAww1xTaJiCfIjETOM0agPumAGHt4vwr5TX1oHZd3cc8CDCyt3CAipfQx3MTCynKV71aSj3Ase3CyCCw",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);

PLASMIC.registerComponent(VerticalAccordion, {
  name: 'VerticalAccordion',
  props: {
    accordionData:'object'
  },
});
PLASMIC.registerComponent(SwiperSlider, {
  name: 'SwiperSlider',
  props: {
    children: 'slot',
    pagination: 'boolean',
    centeredSlides: 'boolean',
    autoplay: 'boolean',
    mobileSlides: 'number',
    desktopSlides: 'number',
    marquee: 'boolean',
  },
});

PLASMIC.registerComponent(SeoHead, {
  name: 'SeoHead',
  props:{
    
  }
});

PLASMIC.registerComponent(ScrollerComp, {
  name: 'ScrollerComp',
  props: {
    children: 'slot',
    speed: 'number',
    style: 'object',
  },
});