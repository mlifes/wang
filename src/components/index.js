
export default {
  'kt-app': () => import('./layout/kt-app.component.vue'),
  'kt-header': () => import('./layout/header/kt-header.component.vue'),
  'kt-content': () => import('./layout/content/kt-content.component.vue'),
  'kt-footer': () => import('./layout/footer/kt-footer.component.vue'),
  'kt-scroll': () => import('./layout/scroll/kt-scroll.component.vue'),

  'kt-slides': () => import('./slides/slides/kt-slides.component.vue'),
  'kt-slide': () => import('./slides/slide/kt-slide.component.vue'),

  'kt-toolbar': () => import('./toolbar/kt-toolbar.component.vue'),
  'kt-back': () => import('./toolbar/back/kt-back.component.vue'),
  'kt-img': () => import('./unit/img/kt-img.component.vue'),
  'kt-icon': () => import('./unit/icon/kt-icon.component.vue'),

  'kt-slide-anim': () => import('./animation/slide/kt-slide-anim.component.vue'),
  'kt-popup-anim': () => import('./animation/popup/kt-popup-anim.component.vue'),

  'kt-tabs': () => import('./tabs/tabs/kt-tabs.component.vue'),
  'kt-tab': () => import('./tabs/tab/kt-tab.component.vue'),

  'kt-card': () => import('./card/kt-card.component.vue')
}
