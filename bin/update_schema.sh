QUERY="query IntrospectionQuery { __schema { queryType { name } mutationType
{ name } subscriptionType { name } types { ...FullType } directives { name
  description locations args { ...InputValue } } } } fragment FullType on
  __Type { kind name description fields(includeDeprecated: true) { name
  description args { ...InputValue } type { ...TypeRef } isDeprecated
  deprecationReason } inputFields { ...InputValue } interfaces { ...TypeRef }
  enumValues(includeDeprecated: true) { name description isDeprecated
  deprecationReason } possibleTypes { ...TypeRef } } fragment InputValue on
  __InputValue { name description type { ...TypeRef } defaultValue } fragment
  TypeRef on __Type { kind name ofType { kind name ofType { kind name ofType
  { kind name ofType { kind name ofType { kind name ofType { kind name ofType
    { kind name } } } } } } } } "

echo "Downloading..."
curl -X POST "https://serve.onegraph.com/dynamic?app_id=d4b3c1de-6186-474e-bf27-0b97070217a5" -d "{\"query\":\"$QUERY\"}" -o graphql_schema.json
