import React from 'react'
import { Button } from 'antd'
import { Header } from '../../components/Header'

import './index.css'
export default function DashboardPage() {
  return (
    <div className="Dashboard">
      <Header />
      <div className="Dashboard__content">
        <p>If you arrived here, it means you completed your registration / login successfully. Time to add some data!</p>

        <Button href="https://docs.icure.com/ehr-lite-sdk/intro" type="primary">
          iCure Documentation: EHR Lite SDK{' '}
        </Button>
      </div>
    </div>
  )
}