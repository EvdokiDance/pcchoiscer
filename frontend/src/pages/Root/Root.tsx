
import { memo } from 'react';
import './Root.css'
import { Outlet, useLocation } from 'react-router-dom';
import Layout from '../../layout/Layout';

import cn from 'classnames';



 const Root = () => {

  const { pathname } = useLocation();

  return (
    <Layout className={cn({
      'nav': true
    })}>
      <Outlet/>
    </Layout>
    
  )
      }

export default memo(Root);

