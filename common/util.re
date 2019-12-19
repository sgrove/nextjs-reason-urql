module ReactStuff = {
  let s = ReasonReact.string;
  let ate = ReasonReact.array;
  [@bs.val] external _pretty: ('a, 'b, int) => string = "JSON.stringify";

  let pretty = (item, indent) => _pretty(item, Js.Nullable.null, indent);
};
