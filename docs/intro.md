---
sidebar_position: 1
---

# Antd Components Intro

Let's discover **Antd Components in less than 5 minutes**.

Antd Components is a UI library based on [Ant Design](https://ant.design/).

## Getting Started

Get started by installing it via npm:

```shell
npm install @rainyjune/antd-components
```

## Import it in your app

```typescript
import { PicturesWall } from '@rainyjune/antd-components';

function App(props: any) {
  return (
    <PicturesWall
      upload={{
        action: "https://api.cloudinary.com/v1_1/demo/upload",
        data: {
          upload_preset: "doc_codepen_example",
          tags: "browser_upload",
        },
      }}
    />
  );
}
```
