# Expo Starter

## Development

### Prerequisites

- Node 16.x
- Yarn 1.x
- Expo CLI

### Initialize Husky

```sh
yarn husky install
```

### Start the app in dev mode

```sh
yarn start
```

### Storybook (on-device)

```sh
yarn sb
```

### Storybook (web)

```sh
yarn sb:web
```

### Tests

```sh
yarn test
```

### Build

```sh
yarn build:ios
```

or

```sh
yarn build:android
```

## Expo Secrets

```sh
yarn eas secret:create --scope project --name SUPER_SECRET --value xxxx
```
