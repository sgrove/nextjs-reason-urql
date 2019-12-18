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
  ReasonReact.(
    <MainLayout>
      "Some GraphQL"->string
      <Items />
      <div>
        <h1> "Syntax errors"->string </h1>
        {items(100)->array}
        <br />
      </div>
      <div>
        <h1> "SQL libraries"->string </h1>
        <h2> "Native"->string </h2>
        {items(100)->array}
        <br />
        <h2> "Node.js"->string </h2>
        {items(10)->array}
        <br />
        <h2> "iOS"->string </h2>
        {items(20)->array}
        <br />
        <h2> "Android"->string </h2>
        {items(200)->array}
        <br />
      </div>
      <br />
      <hr />
      <br />
      <div>
        <hr />
        <hr />
        <h1> "Editor Integrations"->string </h1>
        <h2> "Emacs"->string </h2>
        {items(100)->array}
        <br />
        <h2> "VS Code"->string </h2>
        {items(10)->array}
        <br />
        <h2> "vim"->string </h2>
        {items(20)->array}
        <br />
        <h2> "sublime"->string </h2>
        {items(200)->array}
        <br />
        <br />
        <h2> "Atom"->string </h2>
        {items(1)->array}
      </div>
    </MainLayout>
  );
};

let withClient =
  NextUrql.withUrqlClient(. {
    url: "https://serve.onegraph.com/graphql?app_id=d4b3c1de-6186-474e-bf27-0b97070217a5",
  });

let default = withClient(. make);
/* Uncomment this to make it work: */
/* let default = make; */
