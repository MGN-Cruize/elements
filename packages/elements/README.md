# ApiStorm

## 🚀 Быстрый старт для разработки

1. Запуск в режиме разработки:
```bash
cd elements/demo
yarn install
yarn start
```

2. Разработка:
- Основные компоненты находятся в `packages/elements-core/src`
- После изменений в core нужно пересобрать:
```bash
yarn workspace @stoplight/elements-core build
yarn workspace apistorm build
```

3. Публикация новой версии:
```bash
# В директории packages/elements
cd packages/elements
yarn build              # собираем все компоненты
npm version patch       # увеличиваем версию
npm publish            # публикуем в npm
```

4. Использование в проекте:
```html
<script src="https://unpkg.com/apistorm@latest/web-components.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/apistorm@latest/styles.min.css">
```

[![docs](https://img.shields.io/badge/API%20Docs-site-green.svg?style=flat-square)](https://meta.stoplight.io/docs/elements)
[![license](https://img.shields.io/npm/l/@stoplight/elements?style=flat-square)](./LICENSE)

# @stoplight/elements

Elements is a collection of UI components for displaying beautiful developer documentation from any OpenAPI document.
## Documentation

Visit our **[Documentation](https://meta.stoplight.io/docs/elements)** for getting starting, guides and demos.

## About

Elements is developed and maintained by [Stoplight](https://stoplight.io).

## License

Licensed under the Apache 2.0 License, Copyright © 2020-present Stoplight.

See [LICENSE](LICENSE) for more information.
