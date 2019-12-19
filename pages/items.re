module GetCases = [%graphql
  {|query {
  case {
    name
    id
    client_id
    kind
  }
}|}
];

let request = GetCases.make();

[@react.component]
let make = () => {
  open ReasonReact;
  open ReasonUrql;
  open Hooks;
  open Util.ReactStuff;
  let ({response}, _) = useQuery(~request, ());
  switch (response) {
  | Data(data) =>
    <pre>
      {data##case->Belt.Array.map(case => case##name)->pretty(2)->string}
    </pre>
  | Fetching => <div> "Loading"->React.string </div>
  | Error(e) => <div> e.message->React.string </div>
  | NotFound => <div> "Not Found"->React.string </div>
  };
};
