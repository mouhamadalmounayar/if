export const STRINGS = {
  FILE_IS_NOT_YAML: 'Provided impl file is not in yaml format.',
  IMPL_IS_MISSING: 'Impl file is missing.',
  MISSING_CLASSNAME: 'Initalization param `model` is missing.',
  MISSING_PATH: 'Initalization param `path` is missing.',
  MODEL_DOESNT_EXIST: 'Provided model class does not belong to any model.',
  NOT_OUTPUT_MODEL_EXTENSION: 'Provided model does not extend ModelInterface.',
  STRUCTURE_MALFORMED: (childName: string) =>
    `Graph is malformed: graph.children.${childName} is not valid.`,
  NOT_INITIALIZED_MODEL: (modelName: string) =>
    `Model ${modelName} is not initalized yet.`,
  DISCLAIMER_MESSAGE: `
[!important] Incubation Project

This project is an incubation project being run inside the Green Software Foundation; as such, we *DON’T recommend using it in any critical use case. 
Incubation projects are experimental, offer no support guarantee, have minimal governance and process, and may be retired at any moment. This project may one day graduate, in which case this disclaimer will be removed.
`,
};
