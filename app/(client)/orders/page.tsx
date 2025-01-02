import { requiredUser } from '@/hooks/requiredUser';
import React from 'react'

const OrdersPage = async () => {
    await requiredUser();
  return (
    <div>
      Orderspage
    </div>
  )
}

export default OrdersPage