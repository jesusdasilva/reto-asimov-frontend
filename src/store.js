import { reactive } from "vue"

export const toolbarStore = reactive({
  backButton: {
    label: "Regresar",
    show: false,
    setLabel(value) {
      toolbarStore.backButton.label = value;
    },
    setShow(value) {
      toolbarStore.backButton.show = value;
    },
  },
  cancelButton: {
    label: "Salir",
    show: false,
    setLabel(value) {
      toolbarStore.cancelButton.label = value;
    },
    setShow(value) {
      toolbarStore.cancelButton.show = value;
    }
  },
  nextButton: {
    label: "Registro",
    show: true,
    setLabel(value) {
      toolbarStore.nextButton.label = value;
    },
    setShow(value) {
      toolbarStore.nextButton.show = value;
    }
  },
  step: {
    current: 0,
    setCurrent(value) {
      toolbarStore.step.current = value;
    },
    next() {
      toolbarStore.step.current = (toolbarStore.step.current === 3) ? 0 : toolbarStore.step.current+1;
    },
    cancel() {
      toolbarStore.step.current = 0;
    },
    previous() {  
      toolbarStore.step.current--;
    }
  }
})

export const calendarStore = reactive({
  start: null,
  disabledDates: [],
  setStart(value) {
    calendarStore.start = value;
  },
  setDisabledDates(value) {
    calendarStore.disabledDates = value;
  },
})

export const userStore = reactive({
  firstName: "",
  lastName: "",
  email: "",
  telephone: "",
  date: "",
  time: "",
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
  setTime(value) {
    userStore.time = value;
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
    userStore.time = "";
  },
})
