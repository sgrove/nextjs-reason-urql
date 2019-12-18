type urqlClient('a) = 'a => React.element;

type withUrqlClient = {url: string};

[@bs.module "next-urql"]
external withUrqlClient: withUrqlClient => urqlClient('a) = "withUrqlClient";
