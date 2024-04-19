# Simple yaml validator.

```ts
import { yamlValidator } from "@resco/lords";
import { string, number, minLength, minValue } from "@the-minimal/validator" // u need to install this dependency to use this, or u can just use ur own function that return true or false :)
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