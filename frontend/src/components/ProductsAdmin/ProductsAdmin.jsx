import { useState, useEffect } from 'react'
import { useProducts } from '../../hooks/useProducts'
import { useUser } from '../../hooks/useUser'
import { useNavigate } from 'react-router'
import { DataGrid } from '@mui/x-data-grid'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { deleteProduct } from '../../services/productsService'

import './ProductsAdmin.css'

function ProductsAdmin () {
  const navigate = useNavigate()
  const { productsList } = useProducts()
  const { user } = useUser()
  const [rows, setRows] = useState([
    {
      id: 1,
      name: '',
      price: '',
      brand: '',
      category: ''
    }
  ])

  useEffect(() => {
    if (productsList) {
      const rowsData = productsList.map((product) => {
        return {
          id: product.id,
          name: product.name,
          price: product.price,
          brand: product.brand,
          category: product.category
        }
      })

      setRows(rowsData)
    }
  }, [productsList])

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70,
      headerAlign: 'center',
      align: 'center'
    },
    { field: 'name', headerName: 'Nombre del producto', Width: 400, flex: 0.5 },
    {
      field: 'price',
      headerName: 'Precio($)',
      width: 120,
      type: 'number',
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'brand',
      headerName: 'Marca',
      width: 90,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'category',
      headerName: 'Categoria',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      align: 'center',
      headerAlign: 'center',
      width: 110
    },
    {
      headerName: 'Editar',
      field: 'Editar',
      headerAlign: 'center',
      align: 'center',
      sortable: 'false',
      width: 110,

      renderCell: (value) => (
        <button
          className='buttonTable'
          onClick={() => {
            navigate(`/dashboard/editproduct/${value.id}`)
          }}
        >
          <EditIcon />
        </button>
      )
    },
    {
      headerName: 'Eliminar',
      field: 'Eliminar',
      headerAlign: 'center',
      align: 'center',
      sortable: 'false',
      width: 110,

      renderCell: (value) => (
        <button
          className='buttonTable'
          onClick={() => {
            handleDeleteProduct(value.id, user)
          }}
        >
          <DeleteForeverIcon />
        </button>
      )
    }
  ]

  const handleDeleteProduct = async (idProduct, user) => {
    await deleteProduct(idProduct, user)
    setRows(rows.filter((row) => row.id !== idProduct))
  }

  return (
    <div className='container'>
      <div className='listProductsContainer'>
        <div style={{ height: 550, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableColumnMenu
          />
        </div>
      </div>
    </div>
  )
}

export default ProductsAdmin
