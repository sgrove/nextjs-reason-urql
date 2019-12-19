

import * as Js_json from "bs-platform/lib/es6/js_json.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";

function of_string_exn(json) {
  return Belt_Option.getExn(Js_json.decodeString(json));
}

function to_string(t) {
  return t;
}

export {
  of_string_exn ,
  to_string ,
  
}
/* No side effect */
