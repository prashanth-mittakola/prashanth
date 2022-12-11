import React, { useState } from 'react'
import { fileExplorerData } from '../../../db/fileExplorerData'
import useTraverseTree from '../../../hooks/useTraverseTree'
import Folder from '../../../components/projects/file-explorer/Folder'
import { Box, Container, Heading } from '@chakra-ui/react'
import Layout from '../../../components/layouts/article'

const FileExplorer = () => {
  const [explorerData, setExplorerData] = useState(fileExplorerData)
  const { insertNode, deleteNode, renameNode } = useTraverseTree()

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder)
    setExplorerData(finalTree)
  }
  const handleDeleteNode = itemId => {
    const finalTree = deleteNode(explorerData, itemId)
    setExplorerData(finalTree)
  }
  const handleRenameNode = (itemId, newName) => {
    const finalTree = renameNode(explorerData, itemId, newName)
    setExplorerData(finalTree)
  }

  return (
    <Layout>
      <Container maxW="container.xl" className="file-explorer">
        <Box display={{ md: 'flex' }} my={12}>
          <Heading size={'lg'} as="h3" variant="page-title">
            File Explorer
          </Heading>
        </Box>
        <Folder
          explorerData={explorerData}
          handleInsertNode={handleInsertNode}
          handleDeleteNode={handleDeleteNode}
          handleRenameNode={handleRenameNode}
        />
      </Container>
    </Layout>
  )
}

export default FileExplorer
