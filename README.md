# aurelia-typescript-plugin
An Office UI Aurelia plugin written using TypeScript. Supports testing, different formats and more.

## How to use
Install with
`au install @dunite/au-office-ui`

It will put below into your aurelia.json
```
"dependencies": [
  {
    "name": "@dunite/au-office-ui",
    "path": "../node_modules/@dunite/au-office-ui/dist/amd",
    "main":"index",
    "resources": [
      "resources/elements/OfficeButton/office-button.html",
      "resources/elements/OfficeButton/office-button.js"
    ]
  }
]
```

Add the .plugin method call to your configure method

```
export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName('@dunite/au-office-ui')) //Add this line
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
```

Then just use it as below
```
<du-default-button checked="true" text.bind="mytextbutton"  primary class-name="lisa"  on-click.bind="buttonclick"  ></du-default-button>
```

## Scripts
Run the following Node scripts defined in the `package.json` file to perform linting, testing, building and more.

**Lint:** `npm run-script lint`
**Test:** `npm run-script test`
**Build**: `npm run-script build`

There are more scripts defined in the `package.json` file if you want greater control over the build process and other aspects of this plugin.

## Aurelia CLI Support
This plugin skeleton exports an AMD module format which the Aurelia CLI currently consumes.


