

import * as $$Array from "bs-platform/lib/es6/array.js";
import * as Items from "./items.bs.js";
import * as React from "react";
import * as NextUrql from "next-urql";
import * as ReactDOMRe from "reason-react/src/ReactDOMRe.js";

require('../styles/main.css')
;

function Index$P(Props) {
  var children = Props.children;
  return React.createElement("p", {
              className: "mb-2"
            }, children);
}

var P = {
  make: Index$P
};

var itemStyle = {
  background: "#eee",
  border: "1px solid #fff",
  color: "transparent",
  cursor: "default",
  display: "block",
  float: "left",
  fontSize: "0",
  height: "10px",
  overflow: "hidden",
  position: "relative",
  textAlign: "center",
  width: "10px"
};

var passing = {
  background: "#8ec56a"
};

var passingStyle = ReactDOMRe.Style.combine(itemStyle, passing);

function items(count) {
  return $$Array.init(count, (function (idx) {
                var match = (count - 20 | 0) < idx;
                return React.createElement("div", {
                            style: match ? itemStyle : passingStyle
                          }, "OK?");
              }));
}

function Index(Props) {
  return React.createElement("div", undefined, "Some GraphQL", React.createElement(Items.make, { }));
}

var options = {
  url: "http://localhost:8080/v1/graphql"
};

var withClient = NextUrql.withUrqlClient(options);

var $$default = withClient(Index);

var make = Index;

export {
  P ,
  itemStyle ,
  passing ,
  passingStyle ,
  items ,
  make ,
  options ,
  withClient ,
  $$default ,
  $$default as default,
  
}
/*  Not a pure module */
