import React from 'react'
import Skeleton from '../atoms/Skeleton'

type Props = {}

const ProductItemSkeleton = (props: Props) => {
  return (
    <Skeleton width="100%" height={60} />
  )
}

export default ProductItemSkeleton