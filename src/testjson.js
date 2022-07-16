const services = require("./data/services.json");
for (const cat in services.services) {
  console.log(services.services[cat]);
}
// console.log(services.services);
