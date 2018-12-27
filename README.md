# aurelia-typescript-plugin
An Office UI Aurelia that wraps React components from Office UI Fabric.

## How to use
Install with
`au install @dunite/au-office-ui`

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

## Demo site
[Demo site for most components](https://au-office-ui.azurewebsites.net)

## Module support
This plugin exports AMD, CommonJS, ES2015, native and System modules.


