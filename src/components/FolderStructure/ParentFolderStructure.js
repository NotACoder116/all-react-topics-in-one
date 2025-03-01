import React, { useState } from 'react'
import { data } from './DataFolder';
import FolderStructure from './FolderStructure';

const ParentFolderStructure = () => {
    const [explorer, setExplorer] = useState(data);
  return (
    <div>
        <FolderStructure explorer={explorer} />
    </div>
  )
}

export default ParentFolderStructure