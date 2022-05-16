import { reactive } from "vue"

export const toolbarStore = reactive({
  cancelButton: {
    label: "Salir",
    show: false,
    setLabel(value) {
      toolbarStore.cancelButton.label = value;
    },
    setShow(value) {
      toolbarStore.cancelButton.show = value;
    },
  },
  nextButton: {
    label: "Agendar",
    show: true,
    disable: false,
    setLabel(value) {
      toolbarStore.nextButton.label = value;
    },
    setShow(value) {
      toolbarStore.nextButton.show = value;
    },
    setDisable(value) {
      toolbarStore.nextButton.disable = value;
    },
  },
  step: {
    current: 0,
    setCurrent(value) {
      toolbarStore.step.current = value;
    },
    next() {
      toolbarStore.step.current = (toolbarStore.step.current === 4) ? 0 : toolbarStore.step.current+1;
    },
    cancel() {
      toolbarStore.step.current = 0;
    },
  }
})

export const calendarStore = reactive({
  start: null,
  disabledDays: [],
  setStart(value) {
    calendarStore.start = value;
  },
  setDisabledDays(value) {
    calendarStore.disabledDays = value;
  },
  getDisabledDays() {
    return calendarStore.disabledDays;
  },
  reset() {
    calendarStore.start = null;
    calendarStore.disabledDays = [];
    hourStore.reset();
  }
})

export const hourStore = reactive({
  disabledHours:[],
  setDisabledHours(value) {
    hourStore.disabledHours.push({rHour:value});
  },
  getDisabledHours() {
    return hourStore.disabledHours;
  },
  reset() {
    hourStore.disabledHours = [];
  }
})

export const userStore = reactive({
  firstName: "",
  lastName: "",
  email: "",
  telephone: "",
  date: "",
  hour: "",
  setFirstName(value) {
    userStore.firstName = value;
  },
  setLastName(value) {
    userStore.lastName = value;
  },
  setEmail(value) {
    userStore.email = value;
  },
  setTelephone(value) {
    userStore.telephone = value;
  },
  setDate(value) {
    userStore.date = value;
  },
  setHour(value) {
    userStore.hour = value;
  },
   getDate(){
    return userStore.date;
  },
  getData() {
    return userStore;
  },
  reset() {
    userStore.firstName = "";
    userStore.lastName = "";
    userStore.email = "";
    userStore.telephone = "";
    userStore.date = "";
    userStore.hour = "";
  },
})