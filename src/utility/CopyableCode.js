import { Code, IconButton, Tooltip, useClipboard } from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const CopyableCode = ({ code }) => {
  const { hasCopied, onCopy } = useClipboard(code);
  const [tooltipActive, setTooltipActive] = useState(false);

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
        isOpen={tooltipActive}
        placement="top"
      >
        <IconButton
          icon={<CopyIcon />}
          size="xs"
          aria-label="Copy to clipboard"
          ml={2}
          h={5}
          onClick={handleCopy}
          onMouseEnter={() => setTooltipActive(true)}
          onMouseLeave={() => setTooltipActive(false)}
        />
      </Tooltip>
    </Code>
  );
};

export default CopyableCode;
