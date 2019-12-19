


function s(prim) {
  return prim;
}

function ate(prim) {
  return prim;
}

function pretty(item, indent) {
  return JSON.stringify(item, null, indent);
}

var ReactStuff = {
  s: s,
  ate: ate,
  pretty: pretty
};

export {
  ReactStuff ,
  
}
/* No side effect */
