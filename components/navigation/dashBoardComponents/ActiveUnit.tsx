import React from 'react'
import { useAppSelector } from '../../../redux/hooks'
import { Skeleton } from 'react-loading-skeleton';
import { Unit } from '../../../redux/data/dataTypes';

type Props = {}

function ActiveUnit({}: Props) {
    const activeUnit:Unit=useAppSelector(state=>state.search.selectedUnit)
  return (
    activeUnit?<div>
<div>
    <h1>{activeUnit.name}</h1>
    <p>{activeUnit.code}</p>
</div>

    </div>:<Skeleton count={6}/>
  )
}

export default ActiveUnit