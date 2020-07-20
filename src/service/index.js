import Vue from 'vue'

import { EventBusType, EventBus, Dispatcer } from './EventBus.service'

Vue.prototype.$EventBusType = EventBusType
Vue.prototype.$EventBus = EventBus
Vue.prototype.$EventBusDispatcer = Dispatcer
