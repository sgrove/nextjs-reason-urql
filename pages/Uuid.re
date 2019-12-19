type t = string;

let of_string_exn = (json: Js.Json.t): t =>
  json->Js.Json.decodeString->Belt.Option.getExn;

let to_string = (t: t): string => t;
