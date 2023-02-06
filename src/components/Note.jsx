import React from 'react';
import { MdDelete } from 'react-icons/md';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { useContext } from 'react';
import { DataContext } from '../';

function Note({ title, content, onDelete, id, arch }) {
  const onArchive = () => {};
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>
        <MdDelete size={25} />
      </button>
      <button onClick={() => onArchive(arch)}>
        <ArchiveOutlinedIcon size={25} />
      </button>
    </div>
  );
}

export default Note;
