const solution = (str) => {
  const stack = [];

  while (str.length) {
    const tag = str.match(/<[^>]+>/)?.[0];

    if (!tag) {
      break;
    }

    const tagIndex = str.indexOf(tag);

    if (tagIndex === 0) {
      const tagType = tag.match(/<\//) ? "close" : "open";
      const reg = /[<>/]/g;

      stack.push({ type: tagType, content: tag.replace(reg, "") });
      str = str.replace(tag, "");
    } else {
      str = str.slice(tagIndex);
    }
  }

  for (let i = 0; i < stack.length; i++) {
    const left = stack[i];
    const right = stack.pop();

    if (
      left.type !== "open" ||
      right.type !== "close" ||
      left.content !== right.content
    ) {
      return false;
    }
  }

  return true;
};
