import { createApp } from "vue";
import App from "./App.vue";
import { SetupCalendar, Calendar, DatePicker } from "v-calendar";
// import axios from "axios";
// import VueAxios from "vue-axios";

createApp(App)
  .use(SetupCalendar, {})
  // .use(VueAxios, axios)
  .component("Calendar", Calendar)
  .component("DatePicker", DatePicker)
  .mount("#app");
