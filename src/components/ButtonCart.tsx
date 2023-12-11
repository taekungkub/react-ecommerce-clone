import { ActionIcon, Indicator } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { cartSelector, getCartTotal } from "../store/slices/cartSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/store";
import { useEffect } from "react";
import CartDrawer from "./CartDrawer";
import { useDisclosure } from "@mantine/hooks";

function ButtonCart() {
  const navigate = useNavigate();
  const cart = useSelector(cartSelector);
  const dispatch = useAppDispatch();
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart.carts]);

  return (
    <>
      <Indicator inline label={cart.itemsCount} size={16} color="red">
        <ActionIcon variant="default" color="blue" onClick={open}>
          <IconShoppingCart size="1.125rem" />
        </ActionIcon>
      </Indicator>

      <CartDrawer opened={opened} close={close} />
    </>
  );
}

export default ButtonCart;
