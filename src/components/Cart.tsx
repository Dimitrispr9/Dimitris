import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Divider,
  Chip,
  Badge,
  Fab,
  Paper,
} from '@mui/material';
import {
  ShoppingCart as CartIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
  Delete as DeleteIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { state, toggleCart, closeCart, removeItem, updateQuantity, getTotalItems, getTotalPrice } = useCart();

  const handleQuantityChange = (pizzaId: string, currentQuantity: number, change: number) => {
    const newQuantity = currentQuantity + change;
    updateQuantity(pizzaId, newQuantity);
  };

  return (
    <>
      {/* Cart FAB */}
      <Fab
        color="primary"
        aria-label="cart"
        onClick={toggleCart}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000,
        }}
      >
        <Badge badgeContent={getTotalItems()} color="error">
          <CartIcon />
        </Badge>
      </Fab>

      {/* Cart Drawer */}
      <Drawer
        anchor="right"
        open={state.isOpen}
        onClose={closeCart}
        PaperProps={{
          sx: {
            width: { xs: '100%', sm: 400 },
            backgroundColor: 'background.paper',
          },
        }}
      >
        <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" component="h2" sx={{ color: 'primary.main', fontWeight: 600 }}>
              Το καλάθι σας
            </Typography>
            <IconButton onClick={closeCart} size="small">
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Cart Items */}
          {state.items.length === 0 ? (
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <CartIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
              <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
                Το καλάθι σας είναι άδειο
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Προσθέστε νόστιμες πίτσες για να ξεκινήσετε!
              </Typography>
            </Box>
          ) : (
            <>
              <List sx={{ flex: 1, overflow: 'auto' }}>
                {state.items.map((item) => (
                  <Paper key={item.pizzaId} sx={{ mb: 2, p: 2 }}>
                    <ListItem sx={{ px: 0, py: 1 }}>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            {item.pizzaName}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="body2" color="text.secondary">
                            {item.price.toLocaleString('el-GR', { style: 'currency', currency: 'EUR' })} το τεμάχιο
                          </Typography>
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => removeItem(item.pizzaId)}
                          size="small"
                          color="error"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconButton
                          size="small"
                          onClick={() => handleQuantityChange(item.pizzaId, item.quantity, -1)}
                          disabled={item.quantity <= 1}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Chip label={item.quantity} color="primary" variant="outlined" />
                        <IconButton
                          size="small"
                          onClick={() => handleQuantityChange(item.pizzaId, item.quantity, 1)}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                      <Typography variant="h6" color="primary.main" sx={{ fontWeight: 700 }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
              </List>

              {/* Cart Summary */}
              <Paper sx={{ p: 3, mt: 2 }}>
                <Divider sx={{ mb: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6">Total Items:</Typography>
                  <Typography variant="h6" color="primary.main">
                    {getTotalItems()}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Total:
                  </Typography>
                  <Typography variant="h5" color="primary.main" sx={{ fontWeight: 700 }}>
                    ${getTotalPrice().toFixed(2)}
                  </Typography>
                </Box>
                
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{ py: 1.5, fontWeight: 600 }}
                >
                  Proceed to Checkout
                </Button>
              </Paper>
            </>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default Cart;


