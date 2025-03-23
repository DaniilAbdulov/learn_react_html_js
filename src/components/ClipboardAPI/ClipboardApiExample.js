import React, { useEffect, useState } from 'react';
import { IconButton, TextField } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';

export const ClipboardExample = () => {
  const [textToCopy, setTextToCopy] = useState('');
  const [textToPaste, setTextToPaste] = useState('');
  const [helperText, setHelperText] = useState({ copy: '', paste: '' });

  const showHelperText = (type, message) => {
    setHelperText((prev) => ({ ...prev, [type]: message }));
    setTimeout(() => {
      setHelperText((prev) => ({ ...prev, [type]: '' }));
    }, 1000);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      showHelperText('copy', 'Текст скопирован');
      console.log(`copyToClipboard text: ${textToCopy}`);
    } catch (err) {
      console.log(`copyToClipboard err: ${err}`);
    }
  };

  const readFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setTextToPaste(text.toUpperCase());
      showHelperText('paste', 'Текст вставлен');
    } catch (err) {
      console.log(`readFromClipboard text err: ${err}`);
    }
  };

  useEffect(() => {
    const preventDefaultActions = (e) => {
      console.log(e);
      // Запретить копирование, вырезание и вставку
      // e.preventDefault();
    };

    document.addEventListener('copy', preventDefaultActions);
    document.addEventListener('cut', preventDefaultActions);
    document.addEventListener('paste', preventDefaultActions);

    return () => {
      document.removeEventListener('copy', preventDefaultActions);
      document.removeEventListener('cut', preventDefaultActions);
      document.removeEventListener('paste', preventDefaultActions);
    };
  }, []);

  return (
    <div style={{ marginTop: '30px' }}>
      <TextField
        type="text"
        value={textToCopy}
        onChange={(e) => setTextToCopy(e.target.value)}
        placeholder={'Text'}
        helperText={helperText.copy}
      />
      <IconButton onClick={copyToClipboard}>
        <ContentCopyIcon />
      </IconButton>

      <TextField
        type="text"
        value={textToPaste}
        onChange={(e) => setTextToPaste(e.target.value)}
        placeholder={'Text'}
        helperText={helperText.paste}
      />
      <IconButton onClick={readFromClipboard}>
        <ContentPasteGoIcon />
      </IconButton>
    </div>
  );
};
