# Simple yaml validator.

```ts
import { yamlValidator, string, number } from "@resco/lords";
const yamlValidator = yamlValidator();

const yamlData = `
value1: "cs"
value2: 123
`; // u can also pass like readed data from ".yaml" files, fs.readFile() :)

yamlValidator.validate(yamlData, {
    value1: [string, minLength(2)],
    value2: [number, minValue(444)],
});
```