interface CreateKeyCommand {
  key: string;
  shift?: boolean;
  alt?: boolean;
  command?: boolean;
}

export function createKeyCommand(keyObject: CreateKeyCommand) {
  const modifierKeys = ["alt", "command", "shift"];

  const key = modifierKeys
    .filter(modifierKey => keyObject[modifierKey as keyof CreateKeyCommand] === true)
    .concat(keyObject.key)
    .join(" ");

  return key;
}