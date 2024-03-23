---
title: 'Markdown Style Guide'
description: 'Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.'
date: 'Jul 01 2022'
heroImage: '/img/img-1.jpeg'
category: "tech"
alternativeSlug: "markdown-style-guide"
---

# Heading 1 - H1
## Heading 2 - H2
### Heading 3 - H3
#### Heading 4 - H4
##### Heading 5 - H5
###### Heading 6 - H6

<div className="px-4 py-10 bg-slate-800 rounded-lg my-14">
  <Markdown>

  ```javascript
    const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
          <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
          />
        )
      }
    )
  ```
  </Markdown>
</div>