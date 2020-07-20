
export const EventBusType = {
  SCROLL_HIDE: 'SCROLL_HIDE' // slider change事件
}

export function EventBus (eventBusType, dispatchData) {
  this.type = eventBusType
  this.data = dispatchData
}

function EventBusDispatcer () {
  this.eventMap = {}

  this.register = function (eventType, cbFn) {
    this.eventMap[eventType] = cbFn
  }

  this.unRegister = function (eventType) {
    if (this.eventMap[eventType]) delete this.eventMap[eventType]
  }

  this.dispatch = function (event) {
    if (event) {
      this.eventMap[event.type] && this.eventMap[event.type](event.data)
    }
  }
}

const eventBusDispatcer = new EventBusDispatcer()

const dispatchs = {
  scrollHide: data => {
    eventBusDispatcer.dispatch(new EventBus(EventBusType.SCROLL_HIDE, data))
  }
}

export const Dispatcer = {
  dispatch: event => {
    eventBusDispatcer.dispatch(event)
  },
  register: (eventType, cbFn) => {
    eventBusDispatcer.register(eventType, cbFn)
  },
  unRegister: eventType => {
    eventBusDispatcer.unRegister(eventType)
  },
  dispatchs: dispatchs
}
