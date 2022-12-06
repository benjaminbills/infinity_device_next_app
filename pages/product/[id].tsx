import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SingleProduct from '../../component/SingleProduct';
const SingleProductPage = () => {
  const router = useRouter();
  const { query } = router;
  return <SingleProduct id={query.id} />;
};

export default SingleProductPage;
