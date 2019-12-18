%raw
"require('../styles/main.css')";

module P = {
  [@react.component]
  let make = (~children) => <p className="mb-2"> children </p>;
};

let itemStyle =
  ReactDOMRe.Style.make(
    ~background="#eee",
    ~border="1px solid #fff",
    ~color="transparent",
    ~cursor="default",
    ~display="block",
    ~float="left",
    ~fontSize="0",
    ~height="10px",
    ~overflow="hidden",
    ~position="relative",
    ~textAlign="center",
    ~width="10px",
    (),
  );

let passing = ReactDOMRe.Style.make(~background="#8ec56a", ());

let passingStyle = ReactDOMRe.Style.combine(itemStyle, passing);

let items = count =>
  Array.init(count, idx =>
    <div style={count - 20 < idx ? itemStyle : passingStyle}>
      "OK?"->React.string
    </div>
  );

[@react.component]
let make = () => {
  ReasonReact.(<div> "Some GraphQL"->string <Items /> </div>);
};

let options:
  ReasonUrql.Client.clientOptions(
    option(ReasonUrql.Client.fetchOptions(Fetch.requestInit)),
  ) =
  ReasonUrql.Client.clientOptions(~url="http://localhost:8080/graphql", ());

let withClient = NextUrql.withUrqlClient(. options);

let default = withClient(. make);
/* Uncomment this to make it work: */
/* let default = make; */
