import { createApp } from "vue";
import App from "./App.vue";
import { SetupCalendar, Calendar, DatePicker } from "v-calendar";

createApp(App)
  .use(SetupCalendar, {})
  .component("Calendar", Calendar)
  .component("DatePicker", DatePicker)
  .mount("#app");
