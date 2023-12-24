export const categories = [
    {
      name: 'Birds',
      description: 'Avian Friends Club',
      imageUrl:
        'https://images.unsplash.com/photo-1613544177363-eb77bb535e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NjM4NzU5NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080&auto=format&fit=crop&w=1500&q=80',
      url: '#',
      alt:'Birds on a telephone wire with a clear cloudy background.'
    },
    {
      name: 'Colorful Clouds',
      description: 'Collection of fluffy clouds in different color combinations.',
      imageUrl:
        'https://images.unsplash.com/photo-1542272201-b1ca555f8505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMxOTIyOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080&auto=format&fit=crop&w=1500&q=80',
      url: '#',
      alt:'Pink clouds in a green sky with the moon in the far distance.'
    },
    {
      name: 'Landscape Photographs',
      description: 'Seasonal collection of different landscapes globally',
      imageUrl:
        'https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NTUwNTc1OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080&auto=format&fit=crop&w=1500&q=80        ',
      url: '#',
      alt: 'Black and White photograph of a tree in a snowy field.'
    },
  ]
  
  export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
    infer ElementType
  >
    ? ElementType
    : never
  
  export type Category = ElementType<typeof categories>