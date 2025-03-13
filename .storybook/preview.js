/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: (a, b) =>
        a.id === b.id
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
  },

  // decorators: [
  //   (Story) => (
  //     <ChakraProvider value={defaultSystem}>
  //       <div className="p-4 bg-gray-100">{Story()}</div>
  //     </ChakraProvider>
  //   ),
  // ],
};

export default preview;
