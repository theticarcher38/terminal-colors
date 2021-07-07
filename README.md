# terminal-colors

A npm package to add some styling to terminal output

## Installation

```sh
npm install terminal-styling
```

## Usage

```typescript

import { console } from 'terminal-styling'

// Changes terminal output to red
console.err("This is my error message");

// Changes terminal output to yellow
console.warn("This is my warning message");

// Changes terminal output to green
console.info("This is my info message");

```