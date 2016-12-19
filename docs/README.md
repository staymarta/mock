# StayMarta API Style Guide

This style guide follows the MSTP style guide in all cases except where otherwise
noted, so please use that for any gaps provided here and assume defaults.

## Format

All docs must be written in [Markdown](<link>), you can see the structure below:

```md
# ENDPOINT

DESCRIPTION OF ENDPOINT

[AUTHENTICATION REQUIRED BADGE?]
```

## Testing

All markdown files must pass the [write-good]() linter. There are
available plugins for the editor [Atom](https://atom.io), such as,
[atom-write-good-linter](<linter-plugin-here).

Otherwise run, in a command line:

```bash

gulp docs-style
```

# Badges

Badges help us convoy information visually and textually, we use them to make our
documentation more visual and less boring to read through.


## Implementation

![required:true](https://img.shields.io/badge/required-true-green.svg?style=flat-square)

This badge details if a component is implemented.

### Not Implemented

![status:not-implemented](https://img.shields.io/badge/status-not--implemented-red.svg?style=flat-square)

**Markdown**

```md

![status:not-implemented](https://img.shields.io/badge/status-not--implemented-red.svg?style=flat-square)
```

**Link**

https://img.shields.io/badge/status-not--implemented-red.svg?style=flat-square

---

### Implemented

![status:implemented](https://img.shields.io/badge/status-implemented-green.svg?style=flat-square)

**Markdown**

```md

![status:implemented](https://img.shields.io/badge/status-implemented-green.svg?style=flat-square)
```

**Link**

https://img.shields.io/badge/status-implemented-green.svg?style=flat-square
