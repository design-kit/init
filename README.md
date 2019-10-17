# @design-kit/init

Set up an accessibility first design system environment by **running only one command**.

---

⚠️ This project is in **WORK-IN-PROGRESS**. 

🤙 Hit me up on [Twitter](https://twitter.com/Kristof0425) if you're interested in this project or would like to contribute.

---

## 🛫 Getting started

Have you used `create-react-app` or Vue CLI? The experience will be the same with `@design-kit`! 😎

```bash
npx @design-kit/init my-component-library
cd my-component-library
npm run dev
```

At `localhost:5000` there'll be a [Storybook](https://storybook.js.org/) running with a predefined list of components to get you started.

[More about the usage below](#-usage) ⬇️

## 🍭 Features

- 😎 Framework agnostic
- 👌 Zero-config setup
- 📚 Storybook out of the box
- 💋 Prettier out of the box
- 🏷 Typescript out of the box
- 🧪 Jest snapshot tests
- 💄 CSS-in-JS
- ♿️ Accessibility first designed components
- 📦 Monorepo support with Lerna

## 🏗 Component list

As mentioned, `@design-kit` provides you with a basic list of accessible components:

* Button
* Input
* Textarea
* Checkbox
* Tooltip
* Popover
* Modal

## 🎗 Supported frameworks
- React
- Vue *(coming soon)*
- Svelte *(coming soon)*

If you can't see your preferred framework, please consider contributing to us! 😉

## 💻 Usage

```bash
Usage: npx @design-kit/init --framework [framework] <design-system-name>

Options:
  -V, --version                    output the version number
  -f, --framework [framework]      framework choice (optional)
  -h, --help                       output usage information

Examples:
$ npx @design-kit/init my-component-library
$ npx @design-kit/init -f react my-react-component-library
$ npx @design-kit/init --framework vue my-vue-component-library
```

## 🚧 Contributing

In general, please open an issue to create a discussion about your problem or feature request.

1) `git clone https://github.com/design-kit/init design-kit-init`

2) `cd design-kit-init && npm i`

---

[MIT](https://opensource.org/licenses/MIT) © Licence
