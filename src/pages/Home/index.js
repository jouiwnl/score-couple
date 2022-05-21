import { CircularProgress } from '@mui/material';
import React from 'react';
import AddColumnButton from '../../components/AddColumnButton';
import Column from '../../components/Column';
import ColumnDialog from '../../components/ColumnDialog'
import { httpApi } from '../../config'

import { WorkSpaceWrapper, WorkSpaceColumns, LoadingWrapper } from './styles'

export default function() {

  const [columns, setColumns] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [openDialog, setOpenDialog] = React.useState(false)

  const getAllColumns = () => {
    setColumns([])
    setIsLoading(true)
    httpApi.get('/columns').then(response => {
      setColumns(response.data)
    }).then(() => {
      setIsLoading(false)
    })
  }

  React.useEffect(() => {
    getAllColumns();
  }, [])  

  const handleOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = (column) => {
    if (column) {
      getAllColumns()
    }
    setOpenDialog(false)
  }

  return (
    <>
      <WorkSpaceWrapper>
        {!columns.length && isLoading ? (
          <LoadingWrapper>
            <CircularProgress sx={{ color: '#fff' }} size={60} disableShrink />
          </LoadingWrapper>
        ) : ''}

        {!isLoading ? (
          <WorkSpaceColumns>
            {columns.map(column => (
              <Column column={column} reload={getAllColumns}/>
            ))}
            
            <div style={{ height: '40px'}} onClick={handleOpenDialog}>
              <AddColumnButton />
            </div>
          </WorkSpaceColumns>
        ) : ''}

      </WorkSpaceWrapper>
      <ColumnDialog open={openDialog} onClose={handleCloseDialog}/>
    </>
  )
}