# OpenFeature Docusaurus Plugin

A plugin that easily integrates OpenFeature with Docusaurus.

## Usage

```bash
yarn add @openfeature/docusaurus-openfeature-provider
```

## Components:

These components can be used in both markdown and JSX.

- JsonFlag

  - used for evaluating and displaying a JSON flag value

- NumberFlag

  - used for evaluating and displaying a number flag value

- StringFlag

  - used for evaluating and displaying a string flag value

- Toggle

  - used for evaluating and toggling a section of the UI using a boolean flag

## jsx usage

```tsx
    import { JsonFlag, NumberFlag, StringFlag, Toggle } from "@openfeature/docusaurus-openfeature-provider";

    <JsonFlag flagKey="my-json-flag" defaultValue={} />
    <NumberFlag variableKey="team-number" defaultValue="0" />
    <StringFlag variableKey="site-heading" defaultValue="" />
    <Toggle variableKey="show-welcome-banner" defaultValue={false} comparison={true}>
        <div className="banner">
        <h2>Welcome to the site</h2>
        <p>This is a welcome banner</p>
        </div>
    </Toggle>

```

## markdown usage

```md
<JsonFlag flagKey="my-json-flag" defaultValue={} />
<NumberFlag variableKey="team-number" defaultValue="0" />
<StringFlag variableKey="site-heading" defaultValue="" />
<Toggle variableKey="show-welcome-banner" defaultValue={false} comparison={true}>
  <div className="banner">
    <h2>Welcome to the site</h2>
    <p>This is a welcome banner</p>
  </div>
</Toggle>
```
