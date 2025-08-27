import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Box,
  Tabs,
  Tab,
  Paper,
  Rating,
  Divider,
  Snackbar,
  Alert,
} from '@mui/material';
import { categories } from '../data/pizzas';
import { Pizza } from '../types';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import { useCart } from '../context/CartContext';
import { usePizza } from '../context/PizzaContext';

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [addedPizzaName, setAddedPizzaName] = useState('');
  const { addItem } = useCart();
  const { pizzas } = usePizza();

  const filteredPizzas = selectedCategory === 'all' 
    ? pizzas 
    : pizzas.filter(pizza => pizza.category === selectedCategory);

  const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue);
  };

  const handleAddToCart = (pizza: Pizza) => {
    addItem(pizza);
    setAddedPizzaName(pizza.name);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" sx={{ mb: 2, color: 'primary.main' }}>
          Το Μενού μας
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Χειροποίητες πίτσες με τα καλύτερα υλικά
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          <Chip 
            icon={<LocalPizzaIcon />} 
            label="Φρέσκα Υλικά" 
            color="primary" 
            variant="outlined" 
          />
          <Chip 
            icon={<LocalPizzaIcon />} 
            label="Ξυλόφουρνος" 
            color="primary" 
            variant="outlined" 
          />
          <Chip 
            icon={<LocalPizzaIcon />} 
            label="Κατά Παραγγελία" 
            color="primary" 
            variant="outlined" 
          />
        </Box>
      </Box>

      {/* Category Tabs */}
      <Paper sx={{ mb: 4, borderRadius: 2 }}>
        <Tabs
          value={selectedCategory}
          onChange={handleCategoryChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': {
              minWidth: 120,
              fontWeight: 600,
            },
          }}
        >
          <Tab label="All Pizzas" value="all" />
          {categories.map((category) => (
            <Tab key={category.id} label={category.name} value={category.name} />
          ))}
        </Tabs>
      </Paper>

      {/* Pizza Grid */}
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 4,
        justifyContent: { xs: 'center', sm: 'flex-start' },
      }}>
        {filteredPizzas.map((pizza: Pizza) => (
          <Box
            key={pizza.id}
            sx={{
              flex: { xs: '1 1 100%', sm: '1 1 350px' },
              minWidth: { xs: '90vw', sm: 0 },
              maxWidth: { xs: '100vw', sm: '350px' },
              mb: { xs: 2, sm: 0 },
            }}
          >
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={pizza.image}
                alt={pizza.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 600, flex: 1, color: (theme) => theme.palette.mode === 'dark' ? '#fff' : undefined }}>
                    {pizza.name}
                  </Typography>
                  <Chip 
                    label={pizza.category} 
                    size="small" 
                    color="primary" 
                    variant="outlined"
                    sx={{ ml: 1 }}
                  />
                </Box>

                <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.5, color: (theme) => theme.palette.mode === 'dark' ? '#fff' : theme.palette.text.secondary }}>
                  {pizza.description}
                </Typography>

                <Box sx={{ mb: 2, minHeight: 72, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                  <Typography variant="body2" sx={{ mb: 1, color: (theme) => theme.palette.mode === 'dark' ? '#fff' : theme.palette.text.secondary }}>
                    Υλικά:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {pizza.ingredients.slice(0, 3).map((ingredient, index) => (
                      <Chip
                        key={index}
                        label={ingredient}
                        size="small"
                        variant="outlined"
                        sx={{ fontSize: '0.7rem', color: (theme) => theme.palette.mode === 'dark' ? '#fff' : undefined, borderColor: (theme) => theme.palette.mode === 'dark' ? '#fff' : undefined }}
                      />
                    ))}
                    {pizza.ingredients.length > 3 && (
                      <Chip
                        label={`+${pizza.ingredients.length - 3} περισσότερα`}
                        size="small"
                        variant="outlined"
                        sx={{ fontSize: '0.7rem', color: (theme) => theme.palette.mode === 'dark' ? '#fff' : undefined, borderColor: (theme) => theme.palette.mode === 'dark' ? '#fff' : undefined }}
                      />
                    )}
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 2 }}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 1.5,
                  }}>
                    <Box sx={{
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'primary.main' : 'primary.light',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      minWidth: 70,
                      textAlign: 'center',
                    }}>
                      {pizza.price.toLocaleString('el-GR', { style: 'currency', currency: 'EUR' })}
                    </Box>
                    <Rating value={4.5} precision={0.5} size="small" readOnly />
                  </Box>
                </Box>
              </CardContent>
              
              <CardActions sx={{ p: 3, pt: 0 }}>
                <Button 
                  variant="contained" 
                  fullWidth 
                  size="large"
                  disabled={!pizza.available}
                  onClick={() => handleAddToCart(pizza)}
                  sx={{ 
                    borderRadius: 2,
                    py: 1.5,
                  }}
                >
                  {pizza.available ? 'Προσθήκη στο καλάθι' : 'Μη διαθέσιμη'}
                </Button>
                             </CardActions>
             </Card>
           </Box>
         ))}
       </Box>

      {/* Call to Action */}
      <Box sx={{ textAlign: 'center', mt: 8, p: 4, backgroundColor: 'background.paper', borderRadius: 3 }}>
        <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
          Ready to Order?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Choose your favorite pizzas and we'll have them ready for pickup or delivery
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button variant="contained" size="large" sx={{ px: 4 }}>
            Order for Pickup
          </Button>
          <Button variant="outlined" size="large" sx={{ px: 4 }}>
            Order for Delivery
          </Button>
                 </Box>
       </Box>

       {/* Success Snackbar */}
       <Snackbar
         open={snackbarOpen}
         autoHideDuration={3000}
         onClose={handleCloseSnackbar}
         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
       >
         <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
           {addedPizzaName} added to cart!
         </Alert>
       </Snackbar>
     </Container>
   );
 };

export default Menu;
