import { useState } from "react";
import { cartContextType, useCart } from "src/context/CartContext";
import { CourseType } from "../../../types/course.types";
import { Button } from "./Button";

export const AddToCartButton = ({ courseData }: { courseData: CourseType }) => {
  const [isAdded, setIsAdded] = useState(false);
  // console.log(isAdded);

  const { addCartItem, deleteCartItem, cartItems } =
    useCart() as cartContextType;
  const handleAdd = () => {
    if (isInCart(courseData.id)) {
      deleteCartItem(courseData.id);
      setIsAdded(false);
    } else {
      addCartItem(courseData);
      setIsAdded(true);
    }
  };

  const isInCart = (id: number): boolean => {
    if (cartItems.find((c) => c.id == id)) return true;
    return false;
  };

  const checkUrl = "ui_assets/Button/check.svg";
  const cartUrl = "ui_assets/Button/add_shopping_card.svg";
  return (
    <Button intent="primary" size="small" onClick={handleAdd}>
      <img
        src={isAdded ? checkUrl : cartUrl}
        alt="Añadir al carrito"
        className="h-6"
      />
    </Button>
  );
};
