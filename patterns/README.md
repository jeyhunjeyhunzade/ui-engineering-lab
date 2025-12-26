# Patterns

This directory contains technology-specific implementation patterns for common UI problems. Each subdirectory focuses on a particular framework, library, or approach, documenting idiomatic solutions and best practices.

---

## Purpose

The `patterns/` directory serves as a reference collection for:

- **Framework-specific idioms** – How to solve common problems in React, Vanilla JS, etc.
- **Reusable solutions** – Proven approaches to recurring UI challenges
- **Implementation comparisons** – Side-by-side examples showing different approaches to the same problem
- **Best practices** – Documented conventions and recommended patterns for each technology

This differs from `labs/` in focus: while labs explore concepts and problems broadly, patterns provide concrete, reusable implementations tied to specific technologies.

---

## Structure

Each technology directory contains patterns organized by concern or problem domain:

```
patterns/
  vanilla/
    (patterns using vanilla JavaScript)
  react/
    (patterns using React)
  [other frameworks/libraries as added]
```

Patterns may address:

- Component composition and structure
- State management approaches
- Data fetching and caching strategies
- Event handling conventions
- Performance optimization techniques
- Accessibility implementations
- Common UI component implementations

---

## Pattern Organization

Each pattern should include:

1. **Problem Statement** – What UI challenge does this pattern solve?
2. **Implementation** – Working code demonstrating the pattern
3. **Trade-offs** – When to use this pattern and when to avoid it
4. **Variations** – Alternative approaches or configurations
5. **Related Patterns** – Cross-references to similar solutions

Patterns should be focused, self-contained, and production-ready where applicable.

---

## Technology Coverage

### `vanilla/`

Pure JavaScript patterns without frameworks. Focus on:

- DOM manipulation strategies
- Event delegation patterns
- State management without libraries
- Web Components and Custom Elements
- Performance-optimized approaches

### `react/`

React-specific patterns and best practices. Focus on:

- Hook patterns and custom hooks
- Component composition strategies
- State management approaches
- Performance optimization patterns
- Server-side rendering considerations

### Future Additions

Additional directories may be added for:

- Svelte patterns
- Vue patterns
- HTMX patterns
- Web Components
- Other frameworks and libraries

---

## Relationship to Labs

**Labs** explore UI engineering concepts and problems in a technology-agnostic manner, often with multiple implementations.

**Patterns** provide refined, technology-specific solutions that can be referenced and reused directly.

Patterns may graduate from lab experiments or be developed independently based on common needs.

---

## Usage

Browse by technology to find framework-specific solutions, or compare implementations across technologies to understand different approaches to the same problem.

Patterns are designed to be:

- **Copy-paste friendly** for quick prototyping
- **Well-documented** for understanding and modification
- **Production-ready** where appropriate
- **Isolated** and easy to integrate

---

## Contributing Patterns

When adding new patterns:

1. Choose the appropriate technology directory
2. Create a focused, well-documented example
3. Include problem context and trade-offs
4. Provide working code with clear comments
5. Reference related patterns or labs where applicable

Patterns should be practical and demonstrate real-world applicability.
