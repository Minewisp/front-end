import { Box, Code, IconButton, Tooltip, useClipboard } from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';

const CopyableCode = ({ code }) => {
  const { hasCopied, onCopy } = useClipboard(code);

  const handleCopy = () => {
    onCopy();
  };

  return (
    <Code
      as="span"
      display="inline-flex" // don't remove (used this to keep text in one line)
      alignItems="center"
      fontSize="sm"
      p={1}
      h={6}
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      maxWidth="80ch"
      whiteSpace="nowrap"
    >
      {code}
      <Tooltip
        label={hasCopied ? 'Copied to clipboard' : 'Click to copy'}
        placement="top"
      >
        <IconButton
          icon={<CopyIcon />}
          size="xs"
          aria-label="Copy to clipboard"
          ml={2}
          h={5}
          onClick={handleCopy}
        />
      </Tooltip>
    </Code>
  );

  //   const { hasCopied, onCopy } = useClipboard(code);

  //   return (
  //     <Code display="inline-flex" alignItems="center" p={1} borderRadius="md">
  //       {code}
  //       <IconButton
  //         ml={1}
  //         variant="ghost"
  //         icon={<CopyIcon />}
  //         aria-label="Copy to clipboard"
  //         onClick={onCopy}
  //       />
  //     </Code>
  //   );
};

export default CopyableCode;
