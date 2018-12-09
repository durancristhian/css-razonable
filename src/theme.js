import bash from 'react-syntax-highlighter/languages/prism/bash';
import cb from 'react-syntax-highlighter/styles/prism/cb';
import theme from 'mdx-deck/themes';
import vsDarkPlus from 'prism-react-renderer/themes/vsDarkPlus';

export default {
  ...theme,
  codeSurfer: {
    ...vsDarkPlus
  },
  colors: {
    ...theme.colors,
    pre: 'white'
  },
  prism: {
    style: cb,
    languages: {
      bash
    }
  }
};
