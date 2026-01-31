[Skip to contents](https://base-ui.com/react/components/toast#main-content)

`Ctrl` + `K`
[1.1.0](https://www.npmjs.com/package/@base-ui/react) [GitHub](https://github.com/mui/base-ui)

`Ctrl` + `K`

Navigation

Overview

- [Quick start](https://base-ui.com/react/overview/quick-start)
- [Accessibility](https://base-ui.com/react/overview/accessibility)
- [Releases](https://base-ui.com/react/overview/releases)
- [About](https://base-ui.com/react/overview/about)

Handbook

- [Styling](https://base-ui.com/react/handbook/styling)
- [Animation](https://base-ui.com/react/handbook/animation)
- [Composition](https://base-ui.com/react/handbook/composition)
- [Customization](https://base-ui.com/react/handbook/customization)
- [Forms](https://base-ui.com/react/handbook/forms)
- [TypeScript](https://base-ui.com/react/handbook/typescript)
- [llms.txt](https://base-ui.com/llms.txt)

Components

- [Accordion](https://base-ui.com/react/components/accordion)
- [Alert Dialog](https://base-ui.com/react/components/alert-dialog)
- [Autocomplete](https://base-ui.com/react/components/autocomplete)
- [Avatar](https://base-ui.com/react/components/avatar)
- [Button](https://base-ui.com/react/components/button)
- [Checkbox](https://base-ui.com/react/components/checkbox)
- [Checkbox Group](https://base-ui.com/react/components/checkbox-group)
- [Collapsible](https://base-ui.com/react/components/collapsible)
- [Combobox](https://base-ui.com/react/components/combobox)
- [Context Menu](https://base-ui.com/react/components/context-menu)
- [Dialog](https://base-ui.com/react/components/dialog)
- [Field](https://base-ui.com/react/components/field)
- [Fieldset](https://base-ui.com/react/components/fieldset)
- [Form](https://base-ui.com/react/components/form)
- [Input](https://base-ui.com/react/components/input)
- [Menu](https://base-ui.com/react/components/menu)
- [Menubar](https://base-ui.com/react/components/menubar)
- [Meter](https://base-ui.com/react/components/meter)
- [Navigation Menu](https://base-ui.com/react/components/navigation-menu)
- [Number Field](https://base-ui.com/react/components/number-field)
- [Popover](https://base-ui.com/react/components/popover)
- [Preview Card](https://base-ui.com/react/components/preview-card)
- [Progress](https://base-ui.com/react/components/progress)
- [Radio](https://base-ui.com/react/components/radio)
- [Scroll Area](https://base-ui.com/react/components/scroll-area)
- [Select](https://base-ui.com/react/components/select)
- [Separator](https://base-ui.com/react/components/separator)
- [Slider](https://base-ui.com/react/components/slider)
- [Switch](https://base-ui.com/react/components/switch)
- [Tabs](https://base-ui.com/react/components/tabs)
- [Toast](https://base-ui.com/react/components/toast)
- [Toggle](https://base-ui.com/react/components/toggle)
- [Toggle Group](https://base-ui.com/react/components/toggle-group)
- [Toolbar](https://base-ui.com/react/components/toolbar)
- [Tooltip](https://base-ui.com/react/components/tooltip)

Utils

- [CSP ProviderNew](https://base-ui.com/react/utils/csp-provider)
- [Direction Provider](https://base-ui.com/react/utils/direction-provider)
- [mergePropsNew](https://base-ui.com/react/utils/merge-props)
- [useRender](https://base-ui.com/react/utils/use-render)

Toast

- [(Top)](https://base-ui.com/react/components/toast#)
- [Anatomy](https://base-ui.com/react/components/toast#anatomy)
- [General usage](https://base-ui.com/react/components/toast#general-usage)
- [Global manager](https://base-ui.com/react/components/toast#global-manager)
- [Stacking and animations](https://base-ui.com/react/components/toast#stacking-and-animations)
- [Examples](https://base-ui.com/react/components/toast#examples)
  - [Anchored toasts](https://base-ui.com/react/components/toast#anchored-toasts)
  - [Custom position](https://base-ui.com/react/components/toast#custom-position)
  - [Undo action](https://base-ui.com/react/components/toast#undo-action)
  - [Promise](https://base-ui.com/react/components/toast#promise)
  - [Custom](https://base-ui.com/react/components/toast#custom)
  - [Varying heights](https://base-ui.com/react/components/toast#varying-heights)
- [API reference](https://base-ui.com/react/components/toast#api-reference)
  - [Provider](https://base-ui.com/react/components/toast#provider)
  - [Viewport](https://base-ui.com/react/components/toast#viewport)
  - [Portal](https://base-ui.com/react/components/toast#portal)
  - [Root](https://base-ui.com/react/components/toast#root)
  - [Content](https://base-ui.com/react/components/toast#content)
  - [Title](https://base-ui.com/react/components/toast#title)
  - [Description](https://base-ui.com/react/components/toast#description)
  - [Action](https://base-ui.com/react/components/toast#action)
  - [Close](https://base-ui.com/react/components/toast#close)
  - [Positioner](https://base-ui.com/react/components/toast#positioner)
  - [Arrow](https://base-ui.com/react/components/toast#arrow)
- [useToastManager](https://base-ui.com/react/components/toast#usetoastmanager)
  - [Return value](https://base-ui.com/react/components/toast#return-value)
  - [Method options](https://base-ui.com/react/components/toast#method-options)
  - [add method](https://base-ui.com/react/components/toast#add-method)
  - [update method](https://base-ui.com/react/components/toast#update-method)
  - [close method](https://base-ui.com/react/components/toast#close-method)
  - [promise method](https://base-ui.com/react/components/toast#promise-method)

# Toast

Generates toast notifications.

[MarkdownView as Markdown](https://base-ui.com/react/components/toast.md)

Create toast

[index.tsx](https://base-ui.com/react/components/toast#hero:css-modules:index.tsx) [index.module.css](https://base-ui.com/react/components/toast#hero:css-modules:index.module.css) [theme.css](https://base-ui.com/react/components/toast#hero:css-modules:theme.css)

CSS Modules

StackBlitzCopy

```tsx
'use client';
import * as React from 'react';
import { Toast } from '@base-ui/react/toast';
import styles from './index.module.css';

export default function ExampleToast() {
  return (
    <Toast.Provider>
      <ToastButton />
      <Toast.Portal>
        <Toast.Viewport className={styles.Viewport}>
          <ToastList />
        </Toast.Viewport>
      </Toast.Portal>
    </Toast.Provider>
  );
}

function ToastButton() {
  const toastManager = Toast.useToastManager();
  const [count, setCount] = React.useState(0);

  function createToast() {
    setCount((prev) => prev + 1);
    toastManager.add({
      title: `Toast ${count + 1} created`,
      description: 'This is a toast notification.',
    });
  }

  return (
    <button type="button" className={styles.Button} onClick={createToast}>
      Create toast
    </button>
  );
}

function ToastList() {
  const { toasts } = Toast.useToastManager();
  return toasts.map((toast) => (
    <Toast.Root key={toast.id} toast={toast} className={styles.Toast}>
      <Toast.Content className={styles.Content}>
        <Toast.Title className={styles.Title} />
        <Toast.Description className={styles.Description} />
        <Toast.Close className={styles.Close} aria-label="Close">
          <XIcon className={styles.Icon} />
        </Toast.Close>
      </Toast.Content>
    </Toast.Root>
  ));
}

function XIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
```

Show code

## [Anatomy](https://base-ui.com/react/components/toast\#anatomy)

Import the component and assemble its parts:

Anatomy

Copy

```
import { Toast } from '@base-ui/react/toast';

<Toast.Provider>
  <Toast.Portal>
    <Toast.Viewport>
      {/* Stacked toasts */}
      <Toast.Root>
        <Toast.Content>
          <Toast.Title />
          <Toast.Description />
          <Toast.Action />
          <Toast.Close />
        </Toast.Content>
      </Toast.Root>

      {/* Anchored toasts */}
      <Toast.Positioner>
        <Toast.Root>
          <Toast.Arrow />
          <Toast.Content>
            <Toast.Title />
            <Toast.Description />
            <Toast.Action />
            <Toast.Close />
          </Toast.Content>
        </Toast.Root>
      </Toast.Positioner>
    </Toast.Viewport>
  </Toast.Portal>
</Toast.Provider>
```

## [General usage](https://base-ui.com/react/components/toast\#general-usage)

- `<Toast.Provider>` can be wrapped around your entire app, ensuring all toasts are rendered in the same viewport.
- `F6` lets users jump into the toast viewport landmark region to navigate toasts with
keyboard focus.
- The `data-swipe-ignore` attribute can be manually added to elements inside of a toast to prevent swipe-to-dismiss gestures on them. Interactive elements are automatically prevented.

## [Global manager](https://base-ui.com/react/components/toast\#global-manager)

A global toast manager can be created by passing the `toastManager` prop to the `<Toast.Provider>`.
This enables you to queue a toast from anywhere in the app (such as in functions outside the React tree) while still using the same toast renderer.

The created `toastManager` object has the same properties and methods as the `Toast.useToastManager()` hook.

Creating a manager instance

Copy

```
const toastManager = Toast.createToastManager();
```

Using the instance

Copy

```
<Toast.Provider toastManager={toastManager}>
```

## [Stacking and animations](https://base-ui.com/react/components/toast\#stacking-and-animations)

The `--toast-index` CSS variable can be used to determine the stacking order of the toasts.
The 0th index toast appears at the front.

z-index stacking

Copy

```
.Toast {
  z-index: calc(1000 - var(--toast-index));
  transform: scale(1 - calc(0.1 * var(--toast-index)));
}
```

The `--toast-offset-y` CSS variable can be used to determine the vertical offset of the toasts when positioned absolutely with a translation offset — this is usually used with the `data-expanded` attribute, present when the toast viewport is being hovered or has focus.

Expanded offset

Copy

```
.Toast[data-expanded] {
  transform: translateY(var(--toast-offset-y));
}
```

`<Toast.Content>` is used to hide overflow from taller toasts while the stack is collapsed.
The `data-behind` attribute marks content that sits behind the frontmost toast and pairs with the `data-expanded` attribute so the content fades back in when the viewport expands:

Collapsed content

Copy

```
.ToastContent {
  overflow: hidden;
  transition: opacity 0.25s;
}

.ToastContent[data-behind] {
  opacity: 0;
}

.ToastContent[data-expanded] {
  opacity: 1;
}
```

The `--toast-swipe-movement-x` and `--toast-swipe-movement-y` CSS variables are used to determine the swipe movement of the toasts in order to add a translation offset.

Swipe offset

Copy

```
.Toast {
  transform: scale(1 - calc(0.1 * var(--toast-index))) translateX(var(--toast-swipe-movement-x))
    translateY(calc(var(--toast-swipe-movement-y) + (var(--toast-index) * -20%)));
}
```

The `data-swipe-direction` attribute can be used to determine the swipe direction of the toasts to add a translation offset upon dismissal.

Swipe direction

Copy

```
&[data-ending-style] {
  opacity: 0;

  &[data-swipe-direction='up'] {
    transform: translateY(calc(var(--toast-swipe-movement-y) - 150%));
  }
  &[data-swipe-direction='down'] {
    transform: translateY(calc(var(--toast-swipe-movement-y) + 150%));
  }
  /* Note: --offset-y is defined locally in these examples and derives from
   --toast-offset-y, --toast-index, and swipe movement values */
  &[data-swipe-direction='left'] {
    transform: translateX(calc(var(--toast-swipe-movement-x) - 150%)) translateY(var(--offset-y));
  }
  &[data-swipe-direction='right'] {
    transform: translateX(calc(var(--toast-swipe-movement-x) + 150%)) translateY(var(--offset-y));
  }
}
```

The `data-limited` attribute indicates that the toast was removed from the list due to exceeding the `limit` option.
This is useful for animating the toast differently when it is removed from the list.

## [Examples](https://base-ui.com/react/components/toast\#examples)

### [Anchored toasts](https://base-ui.com/react/components/toast\#anchored-toasts)

Toasts can be anchored to a specific element using `<Toast.Positioner>` and the `positionerProps` option when adding a toast. This is useful for showing contextual feedback like transient “Copied” toasts that appear near the button that triggered the action.

Anchored toasts should be rendered in a separate `<Toast.Provider>` from stacked toasts. A global toast manager can be created for each to manage them separately throughout your app:

Mixing stacked and anchored toasts

Copy

```
const anchoredToastManager = Toast.createToastManager();
const stackedToastManager = Toast.createToastManager();

function App() {
  return (
    <React.Fragment>
      <Toast.Provider toastManager={anchoredToastManager}>
        <AnchoredToasts />
      </Toast.Provider>
      <Toast.Provider toastManager={stackedToastManager}>
        <StackedToasts />
      </Toast.Provider>

      {/* App content */}
    </React.Fragment>
  );
}

function AnchoredToasts() {
  const { toasts } = Toast.useToastManager();
  return (
    <Toast.Portal>
      <Toast.Viewport>
        {toasts.map((toast) => (
          <Toast.Positioner key={toast.id} toast={toast}>
            <Toast.Root toast={toast}>{/* ... */}</Toast.Root>
          </Toast.Positioner>
        ))}
      </Toast.Viewport>
    </Toast.Portal>
  );
}

function StackedToasts() {
  const { toasts } = Toast.useToastManager();
  return (
    <Toast.Portal>
      <Toast.Viewport>
        {toasts.map((toast) => (
          <Toast.Root key={toast.id} toast={toast}>
            {/* ... */}
          </Toast.Root>
        ))}
      </Toast.Viewport>
    </Toast.Portal>
  );
}
```

Stacked toast

Show code

### [Custom position](https://base-ui.com/react/components/toast\#custom-position)

The position of the toasts is controlled by your own CSS.
To change the toasts’ position, you can modify the `.Viewport` and `.Root` styles.
A more general component could accept a `data-position` attribute, which the CSS handles for each variation.
The following shows a top-center position:

Create toast

Show code

### [Undo action](https://base-ui.com/react/components/toast\#undo-action)

When adding a toast, the `actionProps` option can be used to define props for an action button inside of it—this enables the ability to undo an action associated with the toast.

Perform action

Show code

### [Promise](https://base-ui.com/react/components/toast\#promise)

An asynchronous toast can be created with three possible states: `loading`, `success`, and `error`.
The `type` string matches these states to change the styling.
Each of the states also accepts the [method options](https://base-ui.com/react/components/toast#method-options) object for more granular control.

Run promise

Show code

### [Custom](https://base-ui.com/react/components/toast\#custom)

A toast with custom data can be created by passing any typed object interface to the `data` option.
This enables you to pass any data (including functions) you need to the toast and access it in the toast’s rendering logic.

Create custom toast

Show code

### [Varying heights](https://base-ui.com/react/components/toast\#varying-heights)

Toasts with varying heights are stacked by ensuring that the `<Toast.Content>` element has `overflow: hidden` set, along with all toasts’ heights matching the frontmost toast at index 0.
This prevents taller toasts from overflowing the stack when collapsed.

Create varying height toast

Show code

## [API reference](https://base-ui.com/react/components/toast\#api-reference)

### [Provider](https://base-ui.com/react/components/toast\#provider)

Provides a context for creating and managing toasts.

Component props table

Prop

Type

Default

`limit``number``3`

Name

[`limit`](https://base-ui.com/react/components/toast#ToastProvider-limit)

Description

The maximum number of toasts that can be displayed at once.
When the limit is reached, the oldest toast will be removed to make room for the new one.

Type

```
number | undefined
```

Default

`3`

`toastManager``ToastManager``—`

Name

[`toastManager`](https://base-ui.com/react/components/toast#ToastProvider-toastManager)

Description

A global manager for toasts to use outside of a React component.

Type

```
| {
    subscribe: (
      listener: (data: ToastManagerEvent) => void,
    ) => () => void
    add: (options: ToastManagerAddOptions<{}>) => string
    close: (id: string) => void
    update: (
      id: string,
      updates: ToastManagerUpdateOptions<{}>,
    ) => void
    promise: (
      promiseValue: Promise<Value>,
      options: ToastManagerPromiseOptions<Value, {}>,
    ) => Promise<Value>
  }
| undefined
```

`timeout``number``5000`

Name

[`timeout`](https://base-ui.com/react/components/toast#ToastProvider-timeout)

Description

The default amount of time (in ms) before a toast is auto dismissed.
A value of `0` will prevent the toast from being dismissed automatically.

Type

```
number | undefined
```

Default

`5000`

`children``ReactNode``—`

Name

[`children`](https://base-ui.com/react/components/toast#ToastProvider-children)

Type

```
React.ReactNode
```

### [Viewport](https://base-ui.com/react/components/toast\#viewport)

A container viewport for toasts.
Renders a `<div>` element.

Component props table

Prop

Type

Default

`className``string | function``—`

Name

[`className`](https://base-ui.com/react/components/toast#ToastViewport-className)

Description

CSS class applied to the element, or a function that
returns a class based on the component’s state.

Type

```
| string
| ((state: Toast.Viewport.State) => string | undefined)
```

`style``React.CSSProperties | function``—`

Name

[`style`](https://base-ui.com/react/components/toast#ToastViewport-style)

Type

```
| React.CSSProperties
| ((
    state: Toast.Viewport.State,
  ) => CSSProperties | undefined)
| undefined
```

`render``ReactElement | function``—`

Name

[`render`](https://base-ui.com/react/components/toast#ToastViewport-render)

Description

Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a `ReactElement` or a function that returns the element to render.

Type

```
| ReactElement
| ((
    props: HTMLProps,
    state: Toast.Viewport.State,
  ) => ReactElement)
```

Attribute

`data-expanded`

Indicates toasts are expanded in the viewport.

| Attribute | Description | - |
| --- | --- | --- |
| `data-expanded` | Indicates toasts are expanded in the viewport. |

CSS Variable

`--toast-frontmost-height`

Indicates the height of the frontmost toast.

| CSS Variable | Description | - |
| --- | --- | --- |
| `--toast-frontmost-height` | Indicates the height of the frontmost toast. |

### [Portal](https://base-ui.com/react/components/toast\#portal)

A portal element that moves the viewport to a different part of the DOM.
By default, the portal element is appended to `<body>`.
Renders a `<div>` element.

Component props table

Prop

Type

Default

`container``Union``—`

Name

[`container`](https://base-ui.com/react/components/toast#ToastPortal-container)

Description

A parent element to render the portal element into.

Type

```
| HTMLElement
| ShadowRoot
| React.RefObject<HTMLElement | ShadowRoot | null>
| null
| undefined
```

`className``string | function``—`

Name

[`className`](https://base-ui.com/react/components/toast#ToastPortal-className)

Description

CSS class applied to the element, or a function that
returns a class based on the component’s state.

Type

```
string | ((state: any) => string | undefined)
```

`style``React.CSSProperties | function``—`

Name

[`style`](https://base-ui.com/react/components/toast#ToastPortal-style)

Type

```
| React.CSSProperties
| ((state: any) => CSSProperties | undefined)
| undefined
```

`render``ReactElement | function``—`

Name

[`render`](https://base-ui.com/react/components/toast#ToastPortal-render)

Description

Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a `ReactElement` or a function that returns the element to render.

Type

```
| ReactElement
| ((props: HTMLProps, state: any) => ReactElement)
```

### [Root](https://base-ui.com/react/components/toast\#root)

Groups all parts of an individual toast.
Renders a `<div>` element.

Component props table

Prop

Type

Default

`swipeDirection``Union``['down', 'right']`

Name

[`swipeDirection`](https://base-ui.com/react/components/toast#ToastRoot-swipeDirection)

Description

Direction(s) in which the toast can be swiped to dismiss.

Type

```
| 'left'
| 'right'
| 'up'
| 'down'
| ('left' | 'right' | 'up' | 'down')[]
| undefined
```

Default

`['down', 'right']`

`toast*``Toast.Root.ToastObject<any>``—`

Name

[`toast`](https://base-ui.com/react/components/toast#ToastRoot-toast)

Description

The toast to render.

Type

```
id: string
  ref?: RefObject<HTMLElement | null>
  title?: ReactNode
  type?: string
  description?: ReactNode
  timeout?: number
  priority?: 'high' | 'low'
  transitionStatus?: 'starting' | 'ending'
  limited?: boolean
  height?: number
  onClose?: () => void
  onRemove?: () => void
  actionProps?: Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'ref'
  >
  positionerProps?: ToastManagerPositionerProps
  data?: any
}
```

`className``string | function``—`

Name

[`className`](https://base-ui.com/react/components/toast#ToastRoot-className)

Description

CSS class applied to the element, or a function that
returns a class based on the component’s state.

Type

```
| string
| ((state: Toast.Root.State) => string | undefined)
```

`style``React.CSSProperties | function``—`

Name

[`style`](https://base-ui.com/react/components/toast#ToastRoot-style)

Type

```
| React.CSSProperties
| ((state: Toast.Root.State) => CSSProperties | undefined)
| undefined
```

`render``ReactElement | function``—`

Name

[`render`](https://base-ui.com/react/components/toast#ToastRoot-render)

Description

Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a `ReactElement` or a function that returns the element to render.

Type

```
| ReactElement
| ((
    props: HTMLProps,
    state: Toast.Root.State,
  ) => ReactElement)
```

Attribute

`data-expanded`

Present when the toast is expanded in the viewport.

`data-limited`

Present when the toast was removed due to exceeding the limit.

`data-swipe-direction`

The direction the toast was swiped.

`data-swiping`

Present when the toast is being swiped.

`data-type`

The type of the toast.

`data-starting-style`

Present when the toast is animating in.

`data-ending-style`

Present when the toast is animating out.

| Attribute | Description | - |
| --- | --- | --- |
| `data-expanded` | Present when the toast is expanded in the viewport. |
| `data-limited` | Present when the toast was removed due to exceeding the limit. |
| `data-swipe-direction` | The direction the toast was swiped. |
| `data-swiping` | Present when the toast is being swiped. |
| `data-type` | The type of the toast. |
| `data-starting-style` | Present when the toast is animating in. |
| `data-ending-style` | Present when the toast is animating out. |

CSS Variable

`--toast-height`

Indicates the measured natural height of the toast in pixels.

`--toast-index`

Indicates the index of the toast in the list.

`--toast-offset-y`

Indicates the vertical pixels offset of the toast in the list when expanded.

`--toast-swipe-movement-x`

Indicates the horizontal swipe movement of the toast.

`--toast-swipe-movement-y`

Indicates the vertical swipe movement of the toast.

| CSS Variable | Description | - |
| --- | --- | --- |
| `--toast-height` | Indicates the measured natural height of the toast in pixels. |
| `--toast-index` | Indicates the index of the toast in the list. |
| `--toast-offset-y` | Indicates the vertical pixels offset of the toast in the list when expanded. |
| `--toast-swipe-movement-x` | Indicates the horizontal swipe movement of the toast. |
| `--toast-swipe-movement-y` | Indicates the vertical swipe movement of the toast. |

### [Content](https://base-ui.com/react/components/toast\#content)

A container for the contents of a toast.
Renders a `<div>` element.

Component props table

Prop

Type

Default

`className``string | function``—`

Name

[`className`](https://base-ui.com/react/components/toast#ToastContent-className)

Description

CSS class applied to the element, or a function that
returns a class based on the component’s state.

Type

```
| string
| ((state: Toast.Content.State) => string | undefined)
```

`style``React.CSSProperties | function``—`

Name

[`style`](https://base-ui.com/react/components/toast#ToastContent-style)

Type

```
| React.CSSProperties
| ((
    state: Toast.Content.State,
  ) => CSSProperties | undefined)
| undefined
```

`render``ReactElement | function``—`

Name

[`render`](https://base-ui.com/react/components/toast#ToastContent-render)

Description

Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a `ReactElement` or a function that returns the element to render.

Type

```
| ReactElement
| ((
    props: HTMLProps,
    state: Toast.Content.State,
  ) => ReactElement)
```

Attribute

`data-behind`

Present when the toast is behind the frontmost toast in the stack.

`data-expanded`

Present when the toast viewport is expanded.

| Attribute | Description | - |
| --- | --- | --- |
| `data-behind` | Present when the toast is behind the frontmost toast in the stack. |
| `data-expanded` | Present when the toast viewport is expanded. |

### [Title](https://base-ui.com/react/components/toast\#title)

A title that labels the toast.
Renders an `<h2>` element.

Component props table

Prop

Type

Default

`className``string | function``—`

Name

[`className`](https://base-ui.com/react/components/toast#ToastTitle-className)

Description

CSS class applied to the element, or a function that
returns a class based on the component’s state.

Type

```
| string
| ((state: Toast.Title.State) => string | undefined)
```

`style``React.CSSProperties | function``—`

Name

[`style`](https://base-ui.com/react/components/toast#ToastTitle-style)

Type

```
| React.CSSProperties
| ((state: Toast.Title.State) => CSSProperties | undefined)
| undefined
```

`render``ReactElement | function``—`

Name

[`render`](https://base-ui.com/react/components/toast#ToastTitle-render)

Description

Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a `ReactElement` or a function that returns the element to render.

Type

```
| ReactElement
| ((
    props: HTMLProps,
    state: Toast.Title.State,
  ) => ReactElement)
```

Attribute

`data-type`

The type of the toast.

| Attribute | Description | - |
| --- | --- | --- |
| `data-type` | The type of the toast. |

### [Description](https://base-ui.com/react/components/toast\#description)

A description that describes the toast.
Can be used as the default message for the toast when no title is provided.
Renders a `<p>` element.

Component props table

Prop

Type

Default

`className``string | function``—`

Name

[`className`](https://base-ui.com/react/components/toast#ToastDescription-className)

Description

CSS class applied to the element, or a function that
returns a class based on the component’s state.

Type

```
| string
| ((state: Toast.Description.State) => string | undefined)
```

`style``React.CSSProperties | function``—`

Name

[`style`](https://base-ui.com/react/components/toast#ToastDescription-style)

Type

```
| React.CSSProperties
| ((
    state: Toast.Description.State,
  ) => CSSProperties | undefined)
| undefined
```

`render``ReactElement | function``—`

Name

[`render`](https://base-ui.com/react/components/toast#ToastDescription-render)

Description

Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a `ReactElement` or a function that returns the element to render.

Type

```
| ReactElement
| ((
    props: HTMLProps,
    state: Toast.Description.State,
  ) => ReactElement)
```

Attribute

`data-type`

The type of the toast.

| Attribute | Description | - |
| --- | --- | --- |
| `data-type` | The type of the toast. |

### [Action](https://base-ui.com/react/components/toast\#action)

Performs an action when clicked.
Renders a `<button>` element.

Component props table

Prop

Type

Default

`nativeButton``boolean``true`

Name

[`nativeButton`](https://base-ui.com/react/components/toast#ToastAction-nativeButton)

Description

Whether the component renders a native `<button>` element when replacing it
via the `render` prop.
Set to `false` if the rendered element is not a button (e.g. `<div>`).

Type

```
boolean | undefined
```

Default

`true`

`className``string | function``—`

Name

[`className`](https://base-ui.com/react/components/toast#ToastAction-className)

Description

CSS class applied to the element, or a function that
returns a class based on the component’s state.

Type

```
| string
| ((state: Toast.Action.State) => string | undefined)
```

`style``React.CSSProperties | function``—`

Name

[`style`](https://base-ui.com/react/components/toast#ToastAction-style)

Type

```
| React.CSSProperties
| ((state: Toast.Action.State) => CSSProperties | undefined)
| undefined
```

`render``ReactElement | function``—`

Name

[`render`](https://base-ui.com/react/components/toast#ToastAction-render)

Description

Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a `ReactElement` or a function that returns the element to render.

Type

```
| ReactElement
| ((
    props: HTMLProps,
    state: Toast.Action.State,
  ) => ReactElement)
```

Attribute

`data-type`

The type of the toast.

| Attribute | Description | - |
| --- | --- | --- |
| `data-type` | The type of the toast. |

### [Close](https://base-ui.com/react/components/toast\#close)

Closes the toast when clicked.
Renders a `<button>` element.

Component props table

Prop

Type

Default

`nativeButton``boolean``true`

Name

[`nativeButton`](https://base-ui.com/react/components/toast#ToastClose-nativeButton)

Description

Whether the component renders a native `<button>` element when replacing it
via the `render` prop.
Set to `false` if the rendered element is not a button (e.g. `<div>`).

Type

```
boolean | undefined
```

Default

`true`

`className``string | function``—`

Name

[`className`](https://base-ui.com/react/components/toast#ToastClose-className)

Description

CSS class applied to the element, or a function that
returns a class based on the component’s state.

Type

```
| string
| ((state: Toast.Close.State) => string | undefined)
```

`style``React.CSSProperties | function``—`

Name

[`style`](https://base-ui.com/react/components/toast#ToastClose-style)

Type

```
| React.CSSProperties
| ((state: Toast.Close.State) => CSSProperties | undefined)
| undefined
```

`render``ReactElement | function``—`

Name

[`render`](https://base-ui.com/react/components/toast#ToastClose-render)

Description

Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a `ReactElement` or a function that returns the element to render.

Type

```
| ReactElement
| ((
    props: HTMLProps,
    state: Toast.Close.State,
  ) => ReactElement)
```

Attribute

`data-type`

The type of the toast.

| Attribute | Description | - |
| --- | --- | --- |
| `data-type` | The type of the toast. |

### [Positioner](https://base-ui.com/react/components/toast\#positioner)

Positions the toast against the anchor.
Renders a `<div>` element.

Component props table

Prop

Type

Default

`disableAnchorTracking``boolean``false`

Name

[`disableAnchorTracking`](https://base-ui.com/react/components/toast#ToastPositioner-disableAnchorTracking)

Description

Whether to disable the popup from tracking any layout shift of its positioning anchor.

Type

```
boolean | undefined
```

Default

`false`

`toast*``ToastObject<any>``—`

Name

[`toast`](https://base-ui.com/react/components/toast#ToastPositioner-toast)

Description

The toast object associated with the positioner.

Type

```
id: string
  ref?: RefObject<HTMLElement | null>
  title?: ReactNode
  type?: string
  description?: ReactNode
  timeout?: number
  priority?: 'high' | 'low'
  transitionStatus?: 'starting' | 'ending'
  limited?: boolean
  height?: number
  onClose?: () => void
  onRemove?: () => void
  actionProps?: Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'ref'
  >
  positionerProps?: ToastManagerPositionerProps
  data?: any
}
```

`align``Align``'center'`

Name

[`align`](https://base-ui.com/react/components/toast#ToastPositioner-align)

Description

How to align the popup relative to the specified side.

Type

```
'center' | 'end' | 'start' | undefined
```

Default

`'center'`

`alignOffset``number | OffsetFunction``0`

Name

[`alignOffset`](https://base-ui.com/react/components/toast#ToastPositioner-alignOffset)

Description

Additional offset along the alignment axis in pixels.
Also accepts a function that returns the offset to read the dimensions of the anchor
and positioner elements, along with its side and alignment.

The function takes a `data` object parameter with the following properties:

- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.
- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.
- `data.side`: which side of the anchor element the positioner is aligned against.
- `data.align`: how the positioner is aligned relative to the specified side.

Type

```
| number
| ((data: {
    side: Side
    align: Align
    anchor: { width: number; height: number }
    positioner: { width: number; height: number }
  }) => number)
| undefined
```

Default

`0`

Example

```
<Positioner
  alignOffset={({ side, align, anchor, positioner }) => {
    return side === 'top' || side === 'bottom'
      ? anchor.width
      : anchor.height;
  }}
/>
```

`side``Side``'top'`

Name

[`side`](https://base-ui.com/react/components/toast#ToastPositioner-side)

Description

Which side of the anchor element to align the toast against.
May automatically change to avoid collisions.

Type

```
| 'left'
| 'right'
| 'bottom'
| 'top'
| 'inline-end'
| 'inline-start'
| undefined
```

Default

`'top'`

`sideOffset``number | OffsetFunction``0`

Name

[`sideOffset`](https://base-ui.com/react/components/toast#ToastPositioner-sideOffset)

Description

Distance between the anchor and the popup in pixels.
Also accepts a function that returns the distance to read the dimensions of the anchor
and positioner elements, along with its side and alignment.

The function takes a `data` object parameter with the following properties:

- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.
- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.
- `data.side`: which side of the anchor element the positioner is aligned against.
- `data.align`: how the positioner is aligned relative to the specified side.

Type

```
| number
| ((data: {
    side: Side
    align: Align
    anchor: { width: number; height: number }
    positioner: { width: number; height: number }
  }) => number)
| undefined
```

Default

`0`

Example

```
<Positioner
  sideOffset={({ side, align, anchor, positioner }) => {
    return side === 'top' || side === 'bottom'
      ? anchor.height
      : anchor.width;
  }}
/>
```

`arrowPadding``number``5`

Name

[`arrowPadding`](https://base-ui.com/react/components/toast#ToastPositioner-arrowPadding)

Description

Minimum distance to maintain between the arrow and the edges of the popup.

Use it to prevent the arrow element from hanging out of the rounded corners of a popup.

Type

```
number | undefined
```

Default

`5`

`anchor``Element | null``—`

Name

[`anchor`](https://base-ui.com/react/components/toast#ToastPositioner-anchor)

Description

An element to position the toast against.

Type

```
Element | null | undefined
```

`collisionAvoidance``CollisionAvoidance``—`

Name

[`collisionAvoidance`](https://base-ui.com/react/components/toast#ToastPositioner-collisionAvoidance)

Description

Determines how to handle collisions when positioning the popup.

Type

```
| {
    side?: 'none' | 'flip'
    align?: 'none' | 'flip' | 'shift'
    fallbackAxisSide?: 'none' | 'end' | 'start'
  }
| {
    side?: 'none' | 'shift'
    align?: 'none' | 'shift'
    fallbackAxisSide?: 'none' | 'end' | 'start'
  }
| undefined
```

Example

```
<Positioner
  collisionAvoidance={{
    side: 'shift',
    align: 'shift',
    fallbackAxisSide: 'none',
  }}
/>
```

`collisionBoundary``Boundary``'clipping-ancestors'`

Name

[`collisionBoundary`](https://base-ui.com/react/components/toast#ToastPositioner-collisionBoundary)

Description

An element or a rectangle that delimits the area that the popup is confined to.

Type

```
| Element
| 'clipping-ancestors'
| Element[]
| Rect
| undefined
```

Default

`'clipping-ancestors'`

`collisionPadding``Padding``5`

Name

[`collisionPadding`](https://base-ui.com/react/components/toast#ToastPositioner-collisionPadding)

Description

Additional space to maintain from the edge of the collision boundary.

Type

```
| {
    top?: number
    right?: number
    bottom?: number
    left?: number
  }
| number
| undefined
```

Default

`5`

`sticky``boolean``false`

Name

[`sticky`](https://base-ui.com/react/components/toast#ToastPositioner-sticky)

Description

Whether to maintain the popup in the viewport after
the anchor element was scrolled out of view.

Type

```
boolean | undefined
```

Default

`false`

`positionMethod``'fixed' | 'absolute'``'absolute'`

Name

[`positionMethod`](https://base-ui.com/react/components/toast#ToastPositioner-positionMethod)

Description

Determines which CSS `position` property to use.

Type

```
'fixed' | 'absolute' | undefined
```

Default

`'absolute'`

`className``string | function``—`

Name

[`className`](https://base-ui.com/react/components/toast#ToastPositioner-className)

Description

CSS class applied to the element, or a function that
returns a class based on the component’s state.

Type

```
| string
| ((state: Toast.Positioner.State) => string | undefined)
```

`style``React.CSSProperties | function``—`

Name

[`style`](https://base-ui.com/react/components/toast#ToastPositioner-style)

Type

```
| React.CSSProperties
| ((
    state: Toast.Positioner.State,
  ) => CSSProperties | undefined)
| undefined
```

`render``ReactElement | function``—`

Name

[`render`](https://base-ui.com/react/components/toast#ToastPositioner-render)

Description

Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a `ReactElement` or a function that returns the element to render.

Type

```
| ReactElement
| ((
    props: HTMLProps,
    state: Toast.Positioner.State,
  ) => ReactElement)
```

Attribute

`data-anchor-hidden`

Present when the anchor is hidden.

`data-align`

Indicates how the toast is aligned relative to specified side.

`data-side`

Indicates which side the toast is positioned relative to the trigger.

| Attribute | Description | - |
| --- | --- | --- |
| `data-anchor-hidden` | Present when the anchor is hidden. |
| `data-align` | Indicates how the toast is aligned relative to specified side. |
| `data-side` | Indicates which side the toast is positioned relative to the trigger. |

CSS Variable

`--anchor-height`

The anchor's height.

`--anchor-width`

The anchor's width.

`--available-height`

The available height between the anchor and the edge of the viewport.

`--available-width`

The available width between the anchor and the edge of the viewport.

`--transform-origin`

The coordinates that this element is anchored to. Used for animations and transitions.

| CSS Variable | Description | - |
| --- | --- | --- |
| `--anchor-height` | The anchor's height. |
| `--anchor-width` | The anchor's width. |
| `--available-height` | The available height between the anchor and the edge of the viewport. |
| `--available-width` | The available width between the anchor and the edge of the viewport. |
| `--transform-origin` | The coordinates that this element is anchored to. Used for animations and transitions. |

### [Arrow](https://base-ui.com/react/components/toast\#arrow)

Displays an element positioned against the toast anchor.
Renders a `<div>` element.

Component props table

Prop

Type

Default

`className``string | function``—`

Name

[`className`](https://base-ui.com/react/components/toast#ToastArrow-className)

Description

CSS class applied to the element, or a function that
returns a class based on the component’s state.

Type

```
| string
| ((state: Toast.Arrow.State) => string | undefined)
```

`style``React.CSSProperties | function``—`

Name

[`style`](https://base-ui.com/react/components/toast#ToastArrow-style)

Type

```
| React.CSSProperties
| ((state: Toast.Arrow.State) => CSSProperties | undefined)
| undefined
```

`render``ReactElement | function``—`

Name

[`render`](https://base-ui.com/react/components/toast#ToastArrow-render)

Description

Allows you to replace the component’s HTML element
with a different tag, or compose it with another component.

Accepts a `ReactElement` or a function that returns the element to render.

Type

```
| ReactElement
| ((
    props: HTMLProps,
    state: Toast.Arrow.State,
  ) => ReactElement)
```

Attribute

`data-uncentered`

Present when the toast arrow is uncentered.

`data-align`

Indicates how the toast is aligned relative to specified side.

`data-side`

Indicates which side the toast is positioned relative to the anchor.

| Attribute | Description | - |
| --- | --- | --- |
| `data-uncentered` | Present when the toast arrow is uncentered. |
| `data-align` | Indicates how the toast is aligned relative to specified side. |
| `data-side` | Indicates which side the toast is positioned relative to the anchor. |

## [useToastManager](https://base-ui.com/react/components/toast\#usetoastmanager)

Manages toasts, called inside of a `<Toast.Provider>`.

Usage

Copy

```
const toastManager = Toast.useToastManager();
```

### [Return value](https://base-ui.com/react/components/toast\#return-value)

Component props table

Prop

Type

Default

`toasts``Toast.Root.ToastObject[]``—`

Name

[`toasts`](https://base-ui.com/react/components/toast#undefined-toasts)

Description

The array of toast objects.

Type

```
Toast.Root.ToastObject[]
```

`add``(options: ToastManagerAddOptions) => string``—`

Name

[`add`](https://base-ui.com/react/components/toast#undefined-add)

Description

Add a toast to the toast list.

Type

```
(options: ToastManagerAddOptions) => string
```

`close``(toastId: string) => void``—`

Name

[`close`](https://base-ui.com/react/components/toast#undefined-close)

Description

Closes and removes a toast from the toast list.

Type

```
(toastId: string) => void
```

`update``(toastId: string, options: ToastManagerUpdateOptions) => void``—`

Name

[`update`](https://base-ui.com/react/components/toast#undefined-update)

Description

Update a toast in the toast list.

Type

```
(toastId: string, options: ToastManagerUpdateOptions) => void
```

`promise``<Value>(promise: Promise<Value>, options: ToastManagerPromiseOptions) => Promise<Value>``—`

Name

[`promise`](https://base-ui.com/react/components/toast#undefined-promise)

Description

Create a toast that resolves with a value, with three possible states for the toast: `loading`, `success`, and `error`.

Type

```
<Value>(promise: Promise<Value>, options: ToastManagerPromiseOptions) => Promise<Value>
```

### [Method options](https://base-ui.com/react/components/toast\#method-options)

Component props table

Prop

Type

Default

`title``React.ReactNode``—`

Name

[`title`](https://base-ui.com/react/components/toast#undefined-title)

Description

The title of the toast.

Type

```
React.ReactNode
```

`description``React.ReactNode``—`

Name

[`description`](https://base-ui.com/react/components/toast#undefined-description)

Description

The description of the toast.

Type

```
React.ReactNode
```

`type``string``—`

Name

[`type`](https://base-ui.com/react/components/toast#undefined-type)

Description

The type of the toast. Used to conditionally style the toast or render different elements.

Type

```
string
```

`timeout``number``—`

Name

[`timeout`](https://base-ui.com/react/components/toast#undefined-timeout)

Description

The amount of time (in ms) before the toast is auto dismissed.

Type

```
number
```

`priority``'low' | 'high'``'low'`

Name

[`priority`](https://base-ui.com/react/components/toast#undefined-priority)

Description

The priority of the toast.

- `low` \- The toast will be announced politely.
- `high` \- The toast will be announced urgently.

Type

```
'low' | 'high'
```

Default

`'low'`

`onClose``function``—`

Name

[`onClose`](https://base-ui.com/react/components/toast#undefined-onClose)

Description

A callback invoked when the toast is closed.

Type

```
() => void
```

`onRemove``function``—`

Name

[`onRemove`](https://base-ui.com/react/components/toast#undefined-onRemove)

Description

A callback invoked when the toast is removed from the list after animations complete when closed.

Type

```
() => void
```

`actionProps``React.ComponentPropsWithRef<'button'>``—`

Name

[`actionProps`](https://base-ui.com/react/components/toast#undefined-actionProps)

Description

The props of the action button.

Type

```
React.ComponentPropsWithRef<'button'>
```

`data``Record<string, unknown>``—`

Name

[`data`](https://base-ui.com/react/components/toast#undefined-data)

Description

The data of the toast.

Type

```
Record<string, unknown>
```

### [`add` method](https://base-ui.com/react/components/toast\#add-method)

Creates a toast by adding it to the toast list.

Returns a `toastId` that can be used to update or close the toast later.

Usage

Copy

```
const toastId = toastManager.add({
  description: 'Hello, world!',
});
```

Example

Copy

```
function App() {
  const toastManager = Toast.useToastManager();
  return (
    <button
      type="button"
      onClick={() => {
        toastManager.add({
          description: 'Hello, world!',
        });
      }}
    >
      Add toast
    </button>
  );
}
```

For high priority toasts, the `title` and `description` strings are what are used to announce the toast to screen readers.
Screen readers do not announce any extra content rendered inside `<Toast.Root>`, including the `<Toast.Title>` or `<Toast.Description>` components, unless they intentionally navigate to the toast viewport.

### [`update` method](https://base-ui.com/react/components/toast\#update-method)

Updates the toast with new options.

Usage

Copy

```
toastManager.update(toastId, {
  description: 'New description',
});
```

### [`close` method](https://base-ui.com/react/components/toast\#close-method)

Closes the toast, removing it from the toast list after any animations complete.

Usage

Copy

```
toastManager.close(toastId);
```

### [`promise` method](https://base-ui.com/react/components/toast\#promise-method)

Creates an asynchronous toast with three possible states: `loading`, `success`, and `error`.

Description configuration

Copy

```
const promise = toastManager.promise(
  new Promise((resolve) => {
    setTimeout(() => resolve('world!'), 1000);
  }),
  {
    // Each are a shortcut for the `description` option
    loading: 'Loading…',
    success: (data) => `Hello ${data}`,
    error: (err) => `Error: ${err}`,
  },
);
```

Each state also accepts the [method options](https://base-ui.com/react/components/toast#method-options) object to granularly control the toast for each state:

Method options configuration

Copy

```
const promise = toastManager.promise(
  new Promise((resolve) => {
    setTimeout(() => resolve('world!'), 1000);
  }),
  {
    loading: {
      title: 'Loading…',
      description: 'The promise is loading.',
    },
    success: {
      title: 'Success',
      description: 'The promise resolved successfully.',
    },
    error: {
      title: 'Error',
      description: 'The promise rejected.',
      actionProps: {
        children: 'Contact support',
        onClick() {
          // Redirect to support page
        },
      },
    },
  },
);
```