

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Js_exn from "bs-platform/lib/es6/js_exn.js";
import * as Js_dict from "bs-platform/lib/es6/js_dict.js";
import * as Js_json from "bs-platform/lib/es6/js_json.js";
import * as Js_option from "bs-platform/lib/es6/js_option.js";
import * as ReasonUrql from "reason-urql/src/ReasonUrql.bs.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

var ppx_printed_query = "query   {\ncase  {\nname  \nid  \nclient_id  \nkind  \n}\n\n}\n";

function parse(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var match = Js_dict.get(value$1, "case");
  return {
          case: match !== undefined ? Js_option.getExn(Js_json.decodeArray(Caml_option.valFromOption(match))).map((function (value) {
                    var value$1 = Js_option.getExn(Js_json.decodeObject(value));
                    var match = Js_dict.get(value$1, "name");
                    var tmp;
                    if (match !== undefined) {
                      var value$2 = Caml_option.valFromOption(match);
                      var match$1 = Js_json.decodeString(value$2);
                      tmp = match$1 !== undefined ? match$1 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$2));
                    } else {
                      tmp = Js_exn.raiseError("graphql_ppx: Field name on type case is missing");
                    }
                    var match$2 = Js_dict.get(value$1, "id");
                    var match$3 = Js_dict.get(value$1, "client_id");
                    var match$4 = Js_dict.get(value$1, "kind");
                    var tmp$1;
                    if (match$4 !== undefined) {
                      var value$3 = Caml_option.valFromOption(match$4);
                      var match$5 = Js_json.decodeString(value$3);
                      tmp$1 = match$5 !== undefined ? match$5 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$3));
                    } else {
                      tmp$1 = Js_exn.raiseError("graphql_ppx: Field kind on type case is missing");
                    }
                    return {
                            name: tmp,
                            id: match$2 !== undefined ? Caml_option.valFromOption(match$2) : Js_exn.raiseError("graphql_ppx: Field id on type case is missing"),
                            client_id: match$3 !== undefined ? Caml_option.valFromOption(match$3) : Js_exn.raiseError("graphql_ppx: Field client_id on type case is missing"),
                            kind: tmp$1
                          };
                  })) : Js_exn.raiseError("graphql_ppx: Field case on type query_root is missing")
        };
}

function make(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function makeWithVariables(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function makeVariables(param) {
  return null;
}

function definition_002(graphql_ppx_use_json_variables_fn) {
  return 0;
}

var definition = /* tuple */[
  parse,
  ppx_printed_query,
  definition_002
];

function ret_type(f) {
  return { };
}

var MT_Ret = { };

var GetCases = {
  ppx_printed_query: ppx_printed_query,
  query: ppx_printed_query,
  parse: parse,
  make: make,
  makeWithVariables: makeWithVariables,
  makeVariables: makeVariables,
  definition: definition,
  ret_type: ret_type,
  MT_Ret: MT_Ret
};

var request = make(/* () */0);

function Items(Props) {
  var match = Curry._4(ReasonUrql.Hooks.useQuery, request, undefined, undefined, /* () */0);
  var response = match[0].response;
  if (typeof response === "number") {
    if (response === /* Fetching */0) {
      return React.createElement("div", undefined, "Loading");
    } else {
      return React.createElement("div", undefined, "Not Found");
    }
  } else if (response.tag) {
    return React.createElement("div", undefined, response[0].message);
  } else {
    return React.createElement("pre", undefined, Belt_Option.getWithDefault(JSON.stringify(response[0]), "Whoops"));
  }
}

var make$1 = Items;

export {
  GetCases ,
  request ,
  make$1 as make,
  
}
/* request Not a pure module */
