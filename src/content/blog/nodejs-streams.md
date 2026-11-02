# Understanding Node.js Streams

**Published:** November 2026

## Introduction

Streams are an important abstraction in Node.js.

They allow applications to process data incrementally
rather than loading everything into memory.

## Types of Streams

There are four fundamental types:

1. Readable
2. Writable
3. Duplex
4. Transform

## Example

```javascript
const fs = require('fs');

const stream = fs.createReadStream('file.txt');

stream.on('data', (chunk) => {
    console.log(chunk);
});
```