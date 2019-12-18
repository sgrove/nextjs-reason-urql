

import * as $$Array from "bs-platform/lib/es6/array.js";
import * as Items from "./items.bs.js";
import * as React from "react";
import * as NextUrql from "next-urql";
import * as MainLayout from "../layouts/MainLayout.bs.js";
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
  return React.createElement(MainLayout.make, {
              children: null
            }, "Some GraphQL", React.createElement(Items.make, { }), React.createElement("div", undefined, React.createElement("h1", undefined, "Syntax errors"), items(100), React.createElement("br", undefined)), React.createElement("div", undefined, React.createElement("h1", undefined, "SQL libraries"), React.createElement("h2", undefined, "Native"), items(100), React.createElement("br", undefined), React.createElement("h2", undefined, "Node.js"), items(10), React.createElement("br", undefined), React.createElement("h2", undefined, "iOS"), items(20), React.createElement("br", undefined), React.createElement("h2", undefined, "Android"), items(200), React.createElement("br", undefined)), React.createElement("br", undefined), React.createElement("hr", undefined), React.createElement("br", undefined), React.createElement("div", undefined, React.createElement("hr", undefined), React.createElement("hr", undefined), React.createElement("h1", undefined, "Editor Integrations"), React.createElement("h2", undefined, "Emacs"), items(100), React.createElement("br", undefined), React.createElement("h2", undefined, "VS Code"), items(10), React.createElement("br", undefined), React.createElement("h2", undefined, "vim"), items(20), React.createElement("br", undefined), React.createElement("h2", undefined, "sublime"), items(200), React.createElement("br", undefined), React.createElement("br", undefined), React.createElement("h2", undefined, "Atom"), items(1)));
}

var withClient = NextUrql.withUrqlClient({
      url: "http://localhost:8080/v1/graphql"
    });

var $$default = withClient(Index);

var make = Index;

export {
  P ,
  itemStyle ,
  passing ,
  passingStyle ,
  items ,
  make ,
  withClient ,
  $$default ,
  $$default as default,
  
}
/*  Not a pure module */
