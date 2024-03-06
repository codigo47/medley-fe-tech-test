## Getting Started

First, run the development server:

```bash
$ yarn
$ yarn dev

# or
$ npm i
$ npm run dev
```

## Approach

* Create a Generic Table to be reused on any page other than Payouts (which is very common in large and serious projects)
* Keep files as small as possible in terms of lines of code to facilitate discoverability and maintenance
* Try to ensure that each module does one thing and only one thing (single responsibility)
* Attempt to extract components that I think can be reusable (Chip, Table, Main, PageTitle, InputSearch)
* Use types for interactions with third-party APIs (IPayout)
* Use generics when convenient to facilitate reuse
* Use modern libraries like SWR and date-fns
* Strive to maintain a good developer experience to improve productivity (module aliases, Next.js, Chat GPT)