[@bs.module "next-urql"]
external withUrqlClient:
  (. ReasonUrql.Client.clientOptions('a)) =>
  (. React.component('props)) => React.component('props) =
  "withUrqlClient";

[@bs.module "next-urql"]
external withUrqlClientMergeExchanges:
  (
    . ReasonUrql.Client.clientOptions('a),
    ReasonUrql.Exchanges.exchange => array(ReasonUrql.Exchanges.exchange)
  ) =>
  (. React.component('props)) => React.component('props) =
  "withUrqlClient";
