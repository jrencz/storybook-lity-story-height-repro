# storybookjs/storybook#21174 repro

This repository reproduces problem which 
[storybookjs/storybook#21174](https://github.com/storybookjs/storybook/pull/21174)
attempts to fix.

## How to test

1.  Prove it's now broken
    Run as-is (with `7.0.0-beta.53`) in Safari
    ```bash
    npm ci && npm start
    ```

    1. Observe that only first line of the story is visible
    2. Click `+`/`-`. Observe that height of story is adjusted

2.  Reverse `storybook` and all `@storybook/*` to `7.0.0-beta.49` (last before
    [storybookjs/storybook#21138](https://github.com/storybookjs/storybook/pull/21138))
    ```bash
    npm i --no-save storybook@7.0.0-beta.49 \
     @storybook/web-components-vite@7.0.0-beta.49 \
     @storybook/web-components@7.0.0-beta.49 \
     @storybook/addon-links@7.0.0-beta.49 \
     @storybook/addon-essentials@7.0.0-beta.49
    ```
    ```bash
    npm start
    ```
    
    1. Observe that the effect seen before is not present - all lines are shown

3.  Test [storybookjs/storybook#21174](https://github.com/storybookjs/storybook/pull/21174)

    1.  Prepare working copy of storybook with fix
        - check out https://github.com/jrencz/storybook/tree/story-resize-safari
        - select branch `story-resize-safari`
        - build package `@storybook/components`
        ```bash
        cd code && yarn build components
        ```
    2.  Copy content of `code/ui/components/dist`
    
    3. In this repo: reinstall `7.0.0-beta.53`
        ```bash
        npm ci
        ```
    4. Replace `./node_modules/@storybook/components/dist` with the copied one
       (`index.js`, `index.mjs` and ìndex.d.ts` will be replaced)

    4. run again
       ```bash
       npm start
       ```
       
       - Observe problem is gone: all lines are shown
