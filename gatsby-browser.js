import React from 'react'
import { MDXProvider } from "@mdx-js/react";
import { ThemeContext } from './src/contexts/ThemeContext'
import { Heading } from "./src/components/Heading";
import { Text } from "./src/components/Text";

const Heading2 = props => <Heading as="h2" {...props} />;
const Heading3 = props => <Heading as="h3" {...props} />;
const Heading4 = props => <Heading as="h4" {...props} />;
const Heading5 = props => <Heading as="h5" {...props} />;
const ListItem = props => <Text as="li" {...props} />
const components = {
  h1: Heading,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  p: Text,
  li: ListItem
};

export const wrapRootElement = ({ element }, {theme}) => (
  <ThemeContext.Provider value={theme}>
    <MDXProvider components={components}>
      {element}
    </MDXProvider>
  </ThemeContext.Provider>
);
