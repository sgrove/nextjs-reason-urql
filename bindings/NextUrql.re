type urqlClient('a) = (. 'a) => React.element;

type clientOptions = {url: string};

[@bs.module "next-urql"]
external withUrqlClient: (. clientOptions) => urqlClient('a) =
  "withUrqlClient";
