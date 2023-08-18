# Minimal Repro: ProseCode slot doesn't apply shiki 

## normal

mdc source:
```
\```
echo $HELLO
\```
```

displayed result:
```bash
echo $HELLO
```

## in a components/content
source of `components/content/specialCodeBlock.vue`:
```vue
<script lang="ts" setup></script>

<template>
  <ProseCode language="bash">echo $HELLO</ProseCode>
</template>

<style scoped></style>
```

mdc source:
```
:specialCodeBlock
```

displayed result:
:specialCodeBlock
