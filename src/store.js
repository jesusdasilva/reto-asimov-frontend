import { reactive } from "vue"

export const toolbarStore = reactive({
  backButton: {
    label: "Regresar",
    show: false,
    changeLabel(value) {
      this.backButton.label = value;
    },
    changeShow(value) {
      this.backButton.show = value;
    }
  },
  cancelButton: {
    label: "Salir",
    show: false,
    changeLabel(value) {
      this.label = value;
    },
    changeShow(value) {
      this.show = value;
    }
  },
  nextButton: {
    label: "Siguiente",
    show: true,
    changeLabel(value) {
      this.nextButton.label = value;
    },
    changeShow(value) {
      this.nextButton.show = value;
    }
  },
  step: {
    current: 0,
    changeCurrent(value) {
      this.step.current = value;
    }
  }
})
