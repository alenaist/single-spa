import { registerApplication, start } from "single-spa";


registerApplication({
  name: "@my-app/microf-header",
  app: () => System.import("@my-app/microf-header"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
