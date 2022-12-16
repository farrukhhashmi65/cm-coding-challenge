import React from 'react'
import Pagination from '@mui/material/Pagination'
import Box from '@mui/material/Box'

const Paginate: React.FC<any> = ({ listDataPerPage, totalRecord, paginate }: any) => {
  const totalCount = Math.ceil(totalRecord / listDataPerPage)

  return (
     <Box sx={{ justifyContent: 'center', display: 'flex' }}>
        <Pagination data-testid="pagination" count={totalCount} color="primary" onChange={paginate} />
     </Box>
  )
}

export default Paginate
