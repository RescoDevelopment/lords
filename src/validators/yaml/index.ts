import * as yaml from "js-yaml";

export type ValidationFunction = (value: any) => unknown;

const yamlValidator = () => {
  return {
    validate: (
      yamlData: string,
      requirements: Record<string, ValidationFunction[]>,
    ): boolean => {
      const data = yaml.load(yamlData) as Record<string, any>;

      if (!data || typeof data !== "object") {
        throw new Error("Invalid YAML data");
      }

      for (const key in requirements) {
        if (Object.prototype.hasOwnProperty.call(requirements, key)) {
          const handlers = requirements[key];
          const inputValue = data[key];

          if (inputValue === undefined) {
            throw new Error(`Key '${key}' not found in YAML data`);
          }

          for (const validator of handlers) {
            const isValid = validator(inputValue);
            if (!isValid) {
              throw new Error(`Validation failed for ${key}: ${inputValue}`);
            }
          }
        }
      }
      return true;
    },
  };
};

export default yamlValidator;
