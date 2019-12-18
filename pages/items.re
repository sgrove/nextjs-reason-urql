module GetCases = [%graphql
  {|
{
  npm {
    downloads {
      lastMonth {
        count
      }
    }
  }
}
|}
];

let request = GetCases.make();

[@react.component]
let make = () => {
  open ReasonReact;
  open ReasonUrql;
  open Hooks;
  let ({response}, _) = useQuery(~request, ());
  switch (response) {
  | Data(data) =>
    <pre>
      {Js.Json.stringifyAny(data)
       ->Belt.Option.getWithDefault("Whoops")
       ->string}
    </pre>
  | Fetching => <div> "Loading"->React.string </div>
  | Error(e) => <div> e.message->React.string </div>
  | NotFound => <div> "Not Found"->React.string </div>
  };
};

/* [@react.component] */
/* let make = () => <div> "WTF"->React.string </div>; */
