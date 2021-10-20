import * as React from 'react'
//import theme from './theme.js'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container' 
import { grid } from '@mui/system'
import { styled } from '@mui/material/styles'
import { DataGrid } from '@mui/x-data-grid'
import Rating from '@mui/material/Rating'



function renderRating(params) {
    return <Rating readOnly value={params.value} precision={0.5} readOnly/>
}

const columns = [
    {
      field: 'bookName',
      headerName: 'Book Name',
      width: 210,
      editable: false,
    },
    {
      field: 'authorName',
      headerName: 'Author',
      width: 200,
      editable: false,
    },
    {
      field: 'pLanguage',
      headerName: 'Languages used',
      width: 150,
      editable: false,
    },
    {
      field: 'availability',
      headerName: 'Availability',
      description: 'Tells if books are available',
      editable: false,
      width: 100,
    },
    {
        field: 'rating',
        headerName: 'Rating',
        renderCell: renderRating,
        editable: false,
        width: 150,
        type: 'number',
    }
  ]

const rows = [
    { id: 1, bookName: 'Snow', authorName: 'Jon', pLanguage: 'java', availability: true, rating: 5 },
    { id: 2, bookName: 'Lannister', authorName: 'Cersei', pLanguage: 'java', availability: true, rating: 2 },
    { id: 3, bookName: 'Lannister', authorName: 'Jaime', pLanguage: 'java', availability: true, rating: 5 },
    { id: 4, bookName: 'Stark', authorName: 'Arya', pLanguage: 'java', availability: true, rating: 1.5 },
    { id: 5, bookName: 'Targaryen', authorName: 'Daenerys', pLanguage: 'java', availability: false, rating: null },
    { id: 6, bookName: 'Melisandre', authorName: null, pLanguage: 'java', availability: true, rating: 1 },
    { id: 7, bookName: 'Clifford', authorName: 'Ferrara', pLanguage: 'java', availability: true, rating: 4 },
    { id: 8, bookName: 'Frances', authorName: 'Rossini', pLanguage: 'java', availability: false, rating: 3 },
    { id: 9, bookName: 'Roxie', authorName: 'Harvey', pLanguage: 'java', availability: true, rating: 5 },
]


const MainPage = (props) => {

    return (
        <Container maxWidth="lg">
        <Box
          sx={{
            width: '100%',
            height: '140px',
            color: '#fff',
            '& > .MuiBox-root > .MuiBox-root': {
              p: 1,
              borderRadius: 1,
            },
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 1,
              gridTemplateRows: 'auto',
              gridTemplateAreas: `"header header header header"
            "main main main sidebar"
            "footer footer footer footer"`,
            }}
          >
            <Box sx={{ gridArea: 'header', bgcolor: 'primary.main' }}>Header</Box>
            <Box sx={{ gridArea: 'main', bgcolor: 'secondary.main' }}>Book List
                <DataGrid
                    autoHeight
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </Box>
            <Box sx={{ gridArea: 'sidebar', bgcolor: 'info.main' }}>Recommendations</Box>
            <Box sx={{ gridArea: 'footer', bgcolor: 'warning.main' }}>Footer</Box>
          </Box>
        </Box>
        </Container>
      )

    
}

export default MainPage