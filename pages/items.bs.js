

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Js_exn from "bs-platform/lib/es6/js_exn.js";
import * as Js_dict from "bs-platform/lib/es6/js_dict.js";
import * as Js_json from "bs-platform/lib/es6/js_json.js";
import * as Js_option from "bs-platform/lib/es6/js_option.js";
import * as ReasonUrql from "reason-urql/src/ReasonUrql.bs.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

var ppx_printed_query = "query   {\nnpm  {\ndownloads  {\nlastMonth  {\ncount  \n}\n\n}\n\n}\n\n}\n";

function parse(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var match = Js_dict.get(value$1, "npm");
  var tmp;
  if (match !== undefined) {
    var value$2 = Js_option.getExn(Js_json.decodeObject(Caml_option.valFromOption(match)));
    var match$1 = Js_dict.get(value$2, "downloads");
    var tmp$1;
    if (match$1 !== undefined) {
      var value$3 = Caml_option.valFromOption(match$1);
      var match$2 = Js_json.decodeNull(value$3);
      if (match$2 !== undefined) {
        tmp$1 = undefined;
      } else {
        var value$4 = Js_option.getExn(Js_json.decodeObject(value$3));
        var match$3 = Js_dict.get(value$4, "lastMonth");
        var tmp$2;
        if (match$3 !== undefined) {
          var value$5 = Caml_option.valFromOption(match$3);
          var match$4 = Js_json.decodeNull(value$5);
          if (match$4 !== undefined) {
            tmp$2 = undefined;
          } else {
            var value$6 = Js_option.getExn(Js_json.decodeObject(value$5));
            var match$5 = Js_dict.get(value$6, "count");
            var tmp$3;
            if (match$5 !== undefined) {
              var value$7 = Caml_option.valFromOption(match$5);
              var match$6 = Js_json.decodeNumber(value$7);
              tmp$3 = match$6 !== undefined ? match$6 | 0 : Js_exn.raiseError("graphql_ppx: Expected int, got " + JSON.stringify(value$7));
            } else {
              tmp$3 = Js_exn.raiseError("graphql_ppx: Field count on type NpmOverallDownloadPeriodData is missing");
            }
            tmp$2 = {
              count: tmp$3
            };
          }
        } else {
          tmp$2 = undefined;
        }
        tmp$1 = {
          lastMonth: tmp$2
        };
      }
    } else {
      tmp$1 = undefined;
    }
    tmp = {
      downloads: tmp$1
    };
  } else {
    tmp = Js_exn.raiseError("graphql_ppx: Field npm on type Query is missing");
  }
  return {
          npm: tmp
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
