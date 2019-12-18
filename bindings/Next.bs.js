

import * as Curry from "bs-platform/lib/es6/curry.js";

var Link = { };

var Router = { };

var Head = { };

var $$Error = { };

function Make(Page) {
  var inject = ( (cls, fn) => cls.getInitialProps = fn );
  Curry._2(inject, Page.make, Page.getInitialProps);
  return {
          inject: inject,
          $$default: Page.make
        };
}

var InitialPropsPage = {
  Make: Make
};

export {
  Link ,
  Router ,
  Head ,
  $$Error ,
  InitialPropsPage ,
  
}
/* No side effect */
