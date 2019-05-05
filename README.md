# aurelia-typescript-plugin
An Office UI Aurelia that wraps React components from Office UI Fabric.

## How to use
Install with
`au install @dunite/au-office-ui`

It is not necessery/no point in calling the .plugin method. All components must be manually loaded with a call to .globalResources() or by adding a `<require from="@dunite/au-office-ui/resources/elements/Surfaces/DuPanel"></require>` tag to your html view.

```
export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName('@dunite/au-office-ui')) //Add this line
    .feature('resources')
    .globalResources(
      [ // Registrer all components here
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/BasicInputs/DuActionButton'),
        PLATFORM.moduleName('@dunite/au-office-ui/resources/elements/BasicInputs/DuCheckbox')
      ]);
    

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
[Demo site for most components](https://au-office-ui.azurewebsites.net) with complete instructions and guides.

## Source code for demo site
[Source code for all examples](https://github.com/magnusdanielson/demo-office-ui)

## Module support
This plugin exports AMD, CommonJS, ES2015, native and System modules.


