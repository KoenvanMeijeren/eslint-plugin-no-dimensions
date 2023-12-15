# eslint-plugin-no-dimensions

ESLint plugin to disallow the use of Dimensions.get('window') in react-native.

## Installation

Install the plugin with npm:

```bash
npm install eslint-plugin-no-dimensions
```

## Usage
In your .eslintrc file, add no-dimensions to your plugins and rules:

```json
{
  "plugins": [
    "no-dimensions"
  ],
  "rules": {
    "no-dimensions/no-dimensions": "error"
  }
}
```

## Release new version

To release a new version, run the following commands:

```bash
npm login
npm run release
```

## Rules

### no-dimensions

This rule checks for usage of Dimensions.get('window') and suggests using useWindowDimensions() instead.

## License

This project is licensed under the MIT License.
