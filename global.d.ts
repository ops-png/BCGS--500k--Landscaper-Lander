
import * as React from 'react';

// Use module augmentation to extend React's IntrinsicElements without shadowing standard tags
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'media-id'?: string;
          'seo'?: string;
          'aspect'?: string;
        },
        HTMLElement
      >;
    }
  }
}
