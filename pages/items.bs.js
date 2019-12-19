

import * as Util from "../common/util.bs.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Js_exn from "bs-platform/lib/es6/js_exn.js";
import * as Js_dict from "bs-platform/lib/es6/js_dict.js";
import * as Js_json from "bs-platform/lib/es6/js_json.js";
import * as Js_option from "bs-platform/lib/es6/js_option.js";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as ReasonUrql from "reason-urql/src/ReasonUrql.bs.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

var ppx_printed_query = "query   {\ncase  {\nname  \nid  \nclient_id  \nkind  \n}\n\n}\n";

function parse(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var match = Js_dict.get(value$1, "case");
  return {
          case: match !== undefined ? Js_option.getExn(Js_json.decodeArray(Caml_option.valFromOption(match))).map((function (value) {
                    var match = Js_json.decodeObject(value);
                    if (match !== undefined) {
                      var value$1 = Caml_option.valFromOption(match);
                      var match$1 = Js_dict.get(value$1, "name");
                      var field_name;
                      if (match$1 !== undefined) {
                        var value$2 = Caml_option.valFromOption(match$1);
                        var match$2 = Js_json.decodeString(value$2);
                        field_name = match$2 !== undefined ? match$2 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$2));
                      } else {
                        field_name = Js_exn.raiseError("graphql_ppx: Field name on type case is missing");
                      }
                      var match$3 = Js_dict.get(value$1, "id");
                      var field_id = match$3 !== undefined ? Caml_option.valFromOption(match$3) : Js_exn.raiseError("graphql_ppx: Field id on type case is missing");
                      var match$4 = Js_dict.get(value$1, "client_id");
                      var field_client_id = match$4 !== undefined ? Caml_option.valFromOption(match$4) : Js_exn.raiseError("graphql_ppx: Field client_id on type case is missing");
                      var match$5 = Js_dict.get(value$1, "kind");
                      var field_kind;
                      if (match$5 !== undefined) {
                        var value$3 = Caml_option.valFromOption(match$5);
                        var match$6 = Js_json.decodeString(value$3);
                        field_kind = match$6 !== undefined ? match$6 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$3));
                      } else {
                        field_kind = Js_exn.raiseError("graphql_ppx: Field kind on type case is missing");
                      }
                      return {
                              id: field_id,
                              client_id: field_client_id,
                              name: field_name,
                              kind: field_kind
                            };
                    } else {
                      return Js_exn.raiseError("graphql_ppx: Expected object of type case, got " + JSON.stringify(value));
                    }
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
    return React.createElement("pre", undefined, Util.ReactStuff.pretty(Belt_Array.map(response[0].case, (function ($$case) {
                          return $$case.client_id;
                        })), 2));
  }
}

var make$1 = Items;

export {
  GetCases ,
  request ,
  make$1 as make,
  
}
/* request Not a pure module */
