import React from 'react'
import { Box, Button, Grid, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import { useAuth } from 'hooks/useAuth'

const Admin = () => {
  const { isAuth, email } = useAuth()
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: null,
    email: email,
  })

  const handleInp = (e) => {
    if (e.target.name === 'price') {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      }

      setProduct(obj)
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      }

      setProduct(obj)
    }
  }

  console.log(product)
  return (
    <div>
      <Box sx={{ bgcolor: '#fff', height: '50vh', padding: '20vh' }}>
        <center variant="h6" gutterBottom>
          ДАБАВИТЬ ПРОЕКТ
        </center>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            margin: '10vh auto',
            boxShadow: 3,
            borderRadius: 3,
            bgcolor: '#D0F4DE',
          }}
        >
          <form>
            <TextField
              value={product.title}
              fullWidth
              id="outlined-basic"
              label="названиe"
              variant="outlined"
              name="title"
              onChange={(e) => handleInp(e, product, setProduct)}
            />
            <TextField
              value={product.description}
              fullWidth
              id="outlined-basic"
              label="описания "
              variant="outlined"
              name="description"
              onChange={(e) => handleInp(e, product, setProduct)}
            />
            <TextField
              value={product.price}
              fullWidth
              id="outlined-basic"
              label="Цена"
              variant="outlined"
              name="price"
              onChange={(e) => handleInp(e, product, setProduct)}
            />

            <Stack
              direction="row"
              spacing={2}
              sx={{ borderRadius: '10px', bgcolor: '#DB66E4' }}
            >
              <Button
                id="button"
                sx={{
                  borderRadius: '10px',
                  bgcolor: '#DB66E4',
                  borderColor: 'error.main',
                  fontFamily: 'Poppins',
                  color: '#000',
                  border: 'none',
                }}
                variant="outlined"
                size="large"
                fullWidth
                // onClick={addProduct}
              >
                ДАБАВИТЬ ПРОЕКТ
              </Button>
            </Stack>
          </form>
        </Grid>
      </Box>
    </div>
  )
}

export default Admin
